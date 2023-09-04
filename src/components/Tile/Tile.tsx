import React from "react";
import { TileProps } from "../../types/types";

const Tile = ({
  title,
  leftComponent,
  rightComponent,
  children,
}: TileProps) => {
  return (
    <div className="tile">
      <div className="tile__header">
        <div className="tile__header__left">
          <h1 className="tile_title">{title}</h1>
          {leftComponent && leftComponent}
        </div>
        <div className="tile__right">{rightComponent && rightComponent}</div>
      </div>

      <div className="tile_inner">{children}</div>
    </div>
  );
};

export default Tile;
