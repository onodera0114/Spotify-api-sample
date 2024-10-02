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
 * プレイリストを表すオブジェクトの型定義
 * @property {boolean} collaborative - 他のユーザーがプレイリストを変更できる場合はtrue
 * @property {string} description - プレイリストの説明
 * @property {Object} external_urls - プレイリストの外部URL
 * @property {string} external_urls.spotify - オブジェクトのSpotify URL
 * @property {string} href - プレイリストの詳細情報を提供するWeb APIエンドポイントへのリンク
 * @property {string} id - プレイリストのSpotify ID
 * @property {Image[]} images - プレイリストの画像
 * @property {string} name - プレイリストの名前
 * @property {Object} owner - プレイリストの所有者
 * @property {string} owner.display_name - 所有者の表示名
 * @property {Object} owner.external_urls - このユーザーの公開外部URL
 * @property {string} owner.external_urls.spotify - オブジェクトのSpotify URL
 * @property {string} owner.href - このユーザーのWeb APIエンドポイントへのリンク
 * @property {string} owner.id - このユーザーのSpotifyユーザーID
 * @property {string} owner.type - オブジェクトのタイプ
 * @property {string} owner.uri - オブジェクトのURI
 * @property {boolean} public - プレイリストが公開されている場合はtrue
 * @property {string} snapshot_id - スナップショットID
 * @property {Object} tracks - プレイリストのトラック
 * @property {string} tracks.href - トラックのWeb APIエンドポイントへのリンク
 * @property {number} tracks.total - トラックの総数
 * @property {string} type - タイプ
 * @property {string} uri - URI
 */
export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};
