import { useEffect } from "react";

export const useCursor = (cursorUrl: string, size: number = 24) => {
  useEffect(() => {
    document.documentElement.style.cursor = `url('${cursorUrl}') 0 0, auto`;
    document.documentElement.style.setProperty("--cursor-size", `${size}px`);
  }, [cursorUrl, size]);
};
