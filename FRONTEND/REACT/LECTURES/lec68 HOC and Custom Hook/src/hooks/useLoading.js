import React, { useState } from "react";

export const useLoading = () => {
  const { loading, setLoading } = useState(true);
  const makeLoading = () => {
    setLoading(true);
  };
  const makeNoLoading = () => {
    setLoading(false);
  };
  return { loading, makeLoading, makeNoLoading };
};
