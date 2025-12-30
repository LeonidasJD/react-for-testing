import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonLoadingProps {
  count?: number;
  width?: string;
  height?: string;
}

const SkeletonLoading = ({
  count = 1,
  width = "100%",
  height = "10px",
}: SkeletonLoadingProps) => {
  return (
    <SkeletonTheme
      baseColor="#e1e1e1"
      highlightColor="#f5f5f5"
      borderRadius="10px"
      width="100%"
    >
      <Skeleton count={count} width={width} height={height} />
    </SkeletonTheme>
  );
};

export default SkeletonLoading;
