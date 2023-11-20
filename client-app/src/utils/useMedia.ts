import useMediaQuery from "@mui/material/useMediaQuery";

const size: { [key: string]: string } = {
  xs: "375px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1024px",
  xxl: "1300px",
  xxxl: "1600px",
};

type Key = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

const useMedia = (minWidth: Key): Boolean => {
  const isMedia = useMediaQuery(
    `(min-width: ${size[minWidth as keyof typeof size]})`
  );
  return isMedia;
};

export default useMedia;
