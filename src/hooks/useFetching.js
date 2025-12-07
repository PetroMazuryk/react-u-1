import {useState, useCallback} from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = useCallback(
    async (...args) => {
      try {
        setError("");
        setIsLoading(true);

        await callback(...args);
      } catch (e) {
        setError(e.message || "Сталася помилка");
      } finally {
        setIsLoading(false);
      }
    },
    [callback],
  );

  return [fetching, isLoading, error];
};
