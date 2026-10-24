/**
 * ==============================================================================
 * useAsync Hook
 * ==============================================================================
 * Encapsulates async execution state (loading, error, data).
 * Ideal for form submissions and backend queries.
 */

import { useState, useCallback } from "react";

export function useAsync(asyncFunction) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFunction(...args);
        setData(result);
        return { success: true, data: result };
      } catch (err) {
        setError(err);
        return { success: false, error: err };
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return { execute, loading, data, error, setError, setData };
}

export default useAsync;
