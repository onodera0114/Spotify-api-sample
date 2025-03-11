import { ArtistResponse } from "@/types/artist";
import { Playlist } from "@/types/playlist";
import { Album, TrackResponse } from "@/types/track";

/**
 * 検索結果を表すオブジェクト
 * @typedef {Object} SearchResponse
 * @property {Object} albums - アルバムの検索結果
 * @property {Album[]} albums.items - アルバムのリスト
 * @property {number} albums.limit - 取得できるアルバムの最大数
 * @property {string | null} albums.next - 次のページのURL
 * @property {number} albums.offset - 結果のオフセット
 * @property {string | null} albums.previous - 前のページのURL
 * @property {number} albums.total - 総アルバム数
 * @property {Object} artists - アーティストの検索結果
 * @property {SimplifiedArtist[]} artists.items - アーティストのリスト
 * @property {number} artists.limit - 取得できるアーティストの最大数
 * @property {string | null} artists.next - 次のページのURL
 * @property {number} artists.offset - 結果のオフセット
 * @property {string | null} artists.previous - 前のページのURL
 * @property {number} artists.total - 総アーティスト数
 * @property {Object} playlists - プレイリストの検索結果
 * @property {Playlist[]} playlists.items - プレイリストのリスト
 * @property {number} playlists.limit - 取得できるプレイリストの最大数
 * @property {string | null} playlists.next - 次のページのURL
 * @property {number} playlists.offset - 結果のオフセット
 * @property {string | null} playlists.previous - 前のページのURL
 * @property {number} playlists.total - 総プレイリスト数
 * @property {Object} tracks - トラックの検索結果
 * @property {TrackResponse[]} tracks.items - トラックのリスト
 * @property {number} tracks.limit - 取得できるトラックの最大数
 * @property {string | null} tracks.next - 次のページのURL
 * @property {number} tracks.offset - 結果のオフセット
 * @property {string | null} tracks.previous - 前のページのURL
 * @property {number} tracks.total - 総トラック数
 */
export type SearchResponse = {
  albums?: {
    items: Album[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  artists?: {
    items: ArtistResponse[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  playlists?: {
    items: Playlist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  tracks?: {
    items: TrackResponse[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
};
