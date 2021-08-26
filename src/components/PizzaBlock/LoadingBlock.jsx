import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="137" cy="122" r="121" />
      <rect x="1" y="260" rx="6" ry="6" width="280" height="26" />
      <rect x="1" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="1" y="420" rx="6" ry="6" width="80" height="27" />
      <rect x="140" y="415" rx="20" ry="25" width="140" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
