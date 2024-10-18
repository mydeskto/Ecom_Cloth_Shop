import { useEffect, useRef, useCallback } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout
  useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(() => savedCallback.current(), delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export default useTimeout;