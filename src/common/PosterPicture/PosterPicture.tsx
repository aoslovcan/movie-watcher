import React from "react";

type PosterPictureProps = {
  width: string;
  imgPath: string;
  altTitle: string;
};

const PosterPicture = ({
  width = "500",
  imgPath,
  altTitle,
}: PosterPictureProps) => {
  const url = `${process.env.REACT_APP_PICTURE_SOURCE}/w${width}${imgPath}`;

  return (
    <picture>
      <img src={url} alt={altTitle} />
    </picture>
  );
};

export default PosterPicture;
