import { useState } from "react";

export const useLoadingMore = () => {
  const [loadingMore, setLoadingMore] = useState(true);
  const makeLoadingMore = () => {
    setLoadingMore(true);
  };
  const makeNoLoadingMore = () => {
    setLoadingMore(false);
  };
  return { loadingMore, makeLoadingMore, makeNoLoadingMore };
};
