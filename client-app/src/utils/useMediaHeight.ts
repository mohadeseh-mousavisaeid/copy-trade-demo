import useMediaQuery from "@mui/material/useMediaQuery";

const useMediaHeight = (minHeight: number): Boolean => {
  const isMediaHeight = useMediaQuery(`(min-height: ${minHeight}px)`);
  return isMediaHeight;
};

export default useMediaHeight;
