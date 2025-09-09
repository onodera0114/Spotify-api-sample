import { ExternalId, ExternalUrl, Image, SimplifiedArtist, TrackResponse } from "@/types/track";

/**
 * Album
 * @property {"album"|"single"|"compilation"} album_type - アルバムの種類。
 * @property {number} total_tracks - アルバムのトラック数。
 * @property {string[]} available_markets - アルバムが利用可能な市場。
 * @property {ExternalUrl} external_urls - このアルバムの既知の外部URL。
 * @property {string} href - アルバムの詳細を提供するWeb APIエンドポイントへのリンク。
 * @property {string} id - アルバムのSpotify ID。
 * @property {Image[]} images - さまざまなサイズのアルバムのカバーアート。
 * @property {string} name - アルバムの名前。
 * @property {string} release_date - アルバムが最初にリリースされた日付。
 * @property {"year"|"month"|"day"} release_date_precision - release_dateの精度。
 * @property {Object} [restrictions] - コンテンツ制限が適用される場合に含まれる。
 * @property {string} restrictions.reason - 制限の理由。
 * @property {"album"} type - オブジェクトの種類: "album"。
 * @property {string} uri - アルバムのSpotify URI。
 * @property {SimplifiedArtist[]} artists - アルバムを演奏したアーティスト。
 */
export type AlbumResponse = {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: {
    reason: "market" | "product" | "explicit";
  };
  type: "album";
  uri: string;
  artists: SimplifiedArtist[];
  tracks: AlbumTracks;
  copyrights: Copyright[];
  external_ids: ExternalId;
  genresd: string[];
  label: string;
  popularity: number;
};

export type AlbumTracks = {
  items: TrackResponse[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Copyright = {
  text: string;
  type: string;
};
