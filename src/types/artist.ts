import { Album, TrackResponse } from "@/types/track";

/**
 * ExternalUrl
 * @property {string} spotify - オブジェクトのSpotify URL。
 */
export type ExternalUrl = {
  spotify: string;
};

/**
 * Image
 * @property {string} url - 画像のソースURL。
 * @property {number|null} height - 画像の高さ。
 * @property {number|null} width - 画像の幅。
 */
export type Image = {
  url: string;
  height: number | null;
  width: number | null;
};

/**
 * Artist
 * @property {ExternalUrl} external_urls - このアーティストの既知の外部URL。
 * @property {Object} followers - アーティストのフォロワー情報。
 * @property {number} followers.total - フォロワーの総数。
 * @property {string|null} followers.href - フォロワー情報のリンク（現在はnull）。
 * @property {string[]} genres - アーティストに関連付けられたジャンルのリスト。
 * @property {string} href - アーティストの詳細を提供するWeb APIエンドポイントへのリンク。
 * @property {string} id - アーティストのSpotify ID。
 * @property {Image[]} images - アーティストの画像の配列。
 * @property {string} name - アーティストの名前。
 * @property {number} popularity - アーティストの人気度。0から100の範囲。
 * @property {"artist"} type - オブジェクトの種類: "artist"。
 * @property {string} uri - アーティストのSpotify URI。
 */
export type ArtistResponse = {
  external_urls: ExternalUrl;
  followers: {
    total: number;
    href: string | null;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
};

/**
 * ArtistAlbumsItems
 * @property {string} album_group - アーティストとアルバムの関係。
 */
export type ArtistAlbumsItems = Album & {
  album_group: "album" | "single" | "compilation" | "appears_on";
};

/**
 * ArtistAlbumsResponse
 * @property {ArtistAlbumsItems[]} items - アーティストのアルバムの配列。
 * @property {string} href - アルバム情報を取得するためのWeb APIエンドポイントへのリンク。
 * @property {number} total - アーティストのアルバムの総数。
 */
export type ArtistAlbumsResponse = {
  items: ArtistAlbumsItems[];
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

/**
 * ArtistTopTracksResponse
 * @property {TrackResponse[]} tracks - アーティストのトップトラックの配列。
 * @property {string} href - トップトラック情報を取得するためのWeb APIエンドポイントへのリンク。
 */
export type ArtistTopTracksResponse = {
  tracks: TrackResponse[];
};

/**
 * RelatedArtistsResponse
 * @property {SimplifiedArtist[]} artists - 関連アーティストの配列。
 */
export type RelatedArtistsResponse = {
  artists: ArtistResponse[];
};
