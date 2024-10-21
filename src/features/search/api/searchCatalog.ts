import {
  infiniteQueryOptions,
  QueryKey,
  InfiniteData,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/reactQuery";
import { SearchResponse } from "@/types/search";
import { AxiosRequestConfig } from "axios";

export const searchCatalog = async ({
  query,
  type,
  limit,
  page,
  offset = 0,
}: {
  query: string;
  type: "track" | "album" | "artist" | "playlist";
  limit: number;
  page: number;
  offset?: number;
}): Promise<SearchResponse> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const queryParams: string[] = [];
  if (query) {
    queryParams.push(`q=${query}`);
  }
  if (type) {
    queryParams.push(`type=${type}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit * page}`);
  }
  if (offset) {
    queryParams.push(`offset=${offset}`);
  }
  queryParams.push("market=JP");

  const { data } = await api.get<SearchResponse>(`/v1/search?${queryParams.join("&")}`, config);

  return data;
};

export const searchCatalogQueryOptions = (
  query: string,
  type: "track" | "album" | "artist" | "playlist",
  limit: number = 10,
  offset: number = 0,
  max: number = 50
): UseInfiniteQueryOptions<SearchResponse, Error, InfiniteData<SearchResponse, unknown>, SearchResponse, QueryKey, number> => {
  return infiniteQueryOptions({
    queryKey: ["search", query, type] as QueryKey,
    queryFn: ({ pageParam = 1 }) => {
      return searchCatalog({ query, type, limit, page: pageParam as number, offset });
    },
    getNextPageParam: (lastPage) => {
      switch (type) {
      case "album":
        if (lastPage.albums?.items && lastPage.albums?.items.length < max && lastPage.albums.next) {
          return lastPage.albums?.items.length / limit + 1;
        }
        break;
      case "artist":
        if (lastPage.artists?.items && lastPage.artists?.items.length < max && lastPage.artists.next) {
          return lastPage.artists?.items.length / limit + 1;
        }
        break;
      case "track":
        if (lastPage.tracks?.items && lastPage.tracks?.items.length < max && lastPage.tracks.next) {
          return lastPage.tracks?.items.length / limit + 1;
        }
        break;
      case "playlist":
        if (lastPage.playlists?.items && lastPage.playlists?.items.length < max && lastPage.playlists.next) {
          return lastPage.playlists?.items.length / limit + 1;
        }
        break;
      }
      return undefined;
    },
    initialPageParam: 1,
    enabled: !!query,
  });
};

type UseSearchCatalogOptions = {
  query: string;
  type: "track" | "album" | "artist" | "playlist";
  limit?: number;
  offset?: number;
  max?: number;
  queryConfig?: QueryConfig<typeof searchCatalogQueryOptions>;
};

export const useSearchCatalog = ({
  query,
  type,
  limit,
  offset,
}: UseSearchCatalogOptions): UseInfiniteQueryResult<InfiniteData<SearchResponse, unknown>, Error> => {
  return useInfiniteQuery({
    ...searchCatalogQueryOptions(query, type, limit, offset),
  });
};
