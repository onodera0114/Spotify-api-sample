/**
 * トラックのオーディオ特徴を表す型
 * @property {number} danceability - ダンスしやすさ。0.0から1.0の範囲で、1.0が最もダンスしやすい。
 * @property {number} energy - エネルギー。0.0から1.0の範囲で、1.0が最もエネルギッシュ。
 * @property {number} key - トラックのキー。標準的なピッチクラス表記を使用。
 * @property {number} loudness - トラックの全体的なラウドネス（デシベル）。
 * @property {number} mode - トラックのモード。メジャーは1、マイナーは0。
 * @property {number} speechiness - トラックにおける話し言葉の存在を検出。値が1.0に近いほど話し言葉が多い。
 * @property {number} acousticness - トラックがアコースティックである信頼度。0.0から1.0の範囲で、1.0が最もアコースティック。
 * @property {number} instrumentalness - トラックにボーカルが含まれない可能性。0.0から1.0の範囲で、1.0が最もインストゥルメンタル。
 * @property {number} liveness - ライブ録音の可能性。0.0から1.0の範囲で、0.8以上はライブの可能性が高い。
 * @property {number} valence - トラックのポジティブな感情の度合い。0.0から1.0の範囲で、1.0が最もポジティブ。
 * @property {number} tempo - トラックのテンポ（BPM）。
 * @property {string} type - オブジェクトのタイプ。常に "audio_features"。
 * @property {string} id - トラックのSpotify ID。
 * @property {string} uri - トラックのSpotify URI。
 * @property {string} track_href - トラックの詳細情報を提供するWeb APIエンドポイントへのリンク。
 * @property {string} analysis_url - トラックの完全なオーディオ分析にアクセスするためのURL。
 * @property {number} duration_ms - トラックの長さ（ミリ秒）。
 * @property {number} time_signature - トラックの拍子記号。
 */
export type TrackAudioFeatures = {
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  type: string;
  id: string;
  uri: string;
  track_href: string;
  analysis_url: string;
  duration_ms: number;
  time_signature: number;
};
