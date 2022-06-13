import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="27" />
    <rect x="138" y="299" rx="0" ry="0" width="10" height="1" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="423" rx="10" ry="10" width="95" height="30" />
    <rect x="123" y="413" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
