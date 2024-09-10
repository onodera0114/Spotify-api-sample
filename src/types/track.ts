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
 * SimplifiedArtist
 * @property {ExternalUrl} external_urls - このアーティストの既知の外部URL。
 * @property {string} href - アーティストの詳細を提供するWeb APIエンドポイントへのリンク。
 * @property {string} id - アーティストのSpotify ID。
 * @property {string} name - アーティストの名前。
 * @property {"artist"} type - オブジェクトの種類: "artist"。
 * @property {string} uri - アーティストのSpotify URI。
 */
export type SimplifiedArtist = {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
};

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
export type Album = {
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
};

/**
 * ExternalId
 * @property {string} [isrc] - 国際標準レコーディングコード。
 * @property {string} [ean] - 国際商品番号。
 * @property {string} [upc] - ユニバーサル商品コード。
 */
export type ExternalId = {
  isrc?: string;
  ean?: string;
  upc?: string;
};

/**
 * TrackResponse
 * @property {Album} album - トラックが収録されているアルバム。
 * @property {SimplifiedArtist[]} artists - トラックを演奏したアーティスト。
 * @property {string[]} available_markets - トラックが利用可能な市場。
 * @property {number} disc_number - ディスク番号（通常は1、アルバムが複数のディスクで構成されている場合を除く）。
 * @property {number} duration_ms - トラックの長さ（ミリ秒）。
 * @property {boolean} explicit - トラックに不適切な歌詞が含まれているかどうか。
 * @property {ExternalId} external_ids - トラックの既知の外部ID。
 * @property {ExternalUrl} external_urls - トラックの既知の外部URL。
 * @property {string} href - トラックの詳細を提供するWeb APIエンドポイントへのリンク。
 * @property {string} id - トラックのSpotify ID。
 * @property {boolean} [is_playable] - トラックの再リンクが適用される場合のレスポンスの一部。
 * @property {Object} [linked_from] - トラックの再リンクが適用される場合のレスポンスの一部。
 * @property {Object} [restrictions] - コンテンツ制限が適用される場合に含まれる。
 * @property {string} restrictions.reason - 制限の理由。
 * @property {string} name - トラックの名前。
 * @property {number} popularity - トラックの人気度。
 * @property {string|null} preview_url - トラックの30秒プレビュー（MP3形式）へのリンク。
 * @property {number} track_number - トラック番号。
 * @property {"track"} type - オブジェクトの種類: "track"。
 * @property {string} uri - トラックのSpotify URI。
 * @property {boolean} is_local - トラックがローカルファイルからのものであるかどうか。
 */
export type TrackResponse = {
  album: Album;
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalId;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: object;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
};
