import { useEffect } from "react";
import useTimeout from "./useTimeout";

interface DebounceProps {
  callback(): void;
  delay: number;
  dependencies: Array<any>;
}

const useDebounce = ({
  callback,
  delay,
  dependencies,
}: DebounceProps): void => {
  const { reset, clear } = useTimeout({ callback, delay });
  useEffect(reset, [...dependencies, reset]);

  useEffect(() => {
    clear();
  }, [clear]);
};

export default useDebounce;
