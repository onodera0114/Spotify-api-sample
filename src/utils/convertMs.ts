/**
 * ミリ秒を分と秒に変換する関数
 * @param ms - ミリ秒
 * @returns 分と秒のオブジェクト
 */
export const convertMs = (ms: number): { minutes: number; seconds: number } => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return { minutes, seconds };
};
