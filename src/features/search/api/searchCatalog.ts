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
  offset = 0,
}: {
  query: string;
  type: "track" | "album" | "artist" | "playlist";
  limit: number;
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
    queryParams.push(`limit=${limit}`);
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
      return searchCatalog({ query, type, limit, offset: offset + ((pageParam as number) - 1) * limit });
    },
    getNextPageParam: (lastPage) => {
      switch (type) {
      case "album":
        if (lastPage.albums?.items && lastPage.albums.offset + lastPage.albums.limit < max && lastPage.albums.next) {
          return (lastPage.albums.offset + lastPage.albums.limit) / lastPage.albums.limit + 1;
        }
        break;
      case "artist":
        if (lastPage.artists?.items && lastPage.artists.offset + lastPage.artists.limit < max && lastPage.artists.next) {
          return (lastPage.artists.offset + lastPage.artists.limit) / lastPage.artists.limit + 1;
        }
        break;
      case "track":
        if (lastPage.tracks?.items && lastPage.tracks.offset + lastPage.tracks.limit < max && lastPage.tracks.next) {
          return (lastPage.tracks.offset + lastPage.tracks.limit) / lastPage.tracks.limit + 1;
        }
        break;
      case "playlist":
        if (lastPage.playlists?.items && lastPage.playlists.offset + lastPage.playlists.limit < max && lastPage.playlists.next) {
          return (lastPage.playlists.offset + lastPage.playlists.limit) / lastPage.playlists.limit + 1;
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
