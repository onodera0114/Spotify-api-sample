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
import { AxiosRequestConfig } from "axios";
import { AlbumTracks } from "@/types/album";

export const getAlbumTracks = async (albumId = "", limit: number, offset?: number): Promise<AlbumTracks> => {
  const accessToken = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const queryParams: string[] = [];
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }
  if (offset) {
    queryParams.push(`offset=${offset}`);
  }
  queryParams.push("market=JP");

  const { data } = await api.get<AlbumTracks>(`/v1/albums/${albumId}/tracks??${queryParams.join("&")}`, config);

  return data;
};

export const getAlbumTracksQueryOptions = (
  albumId: string,
  limit: number = 10,
  offset: number = 0
): UseInfiniteQueryOptions<AlbumTracks, Error, InfiniteData<AlbumTracks, unknown>, AlbumTracks, QueryKey, number> => {
  return infiniteQueryOptions({
    queryKey: ["albumTracks", albumId] as QueryKey,
    queryFn: ({ pageParam = 1 }) => {
      return getAlbumTracks(albumId, limit, offset + ((pageParam as number) - 1) * limit);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.items && lastPage.next) {
        return (lastPage.offset + lastPage.limit) / lastPage.limit + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};

type UseAlbumTrackOptions = {
  albumId: string;
  limit?: number;
  offset?: number;
  queryConfig?: QueryConfig<typeof getAlbumTracksQueryOptions>;
};

export const useAlbumTracks = ({
  albumId,
  limit,
  offset,
}: UseAlbumTrackOptions): UseInfiniteQueryResult<InfiniteData<AlbumTracks, unknown>, Error> => {
  return useInfiniteQuery({
    ...getAlbumTracksQueryOptions(albumId, limit, offset),
  });
};
