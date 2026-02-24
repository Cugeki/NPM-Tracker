import React from "react";
import type { FavoritePackage, NpmPackage } from "../types";

interface Props {
  favorites: FavoritePackage[];

  onDelete: (id: number) => void;
}

export const FavoritesList: React.FC<Props> = ({
  favorites,

  onDelete,
}) => {
  return (
    <div className="favorites-list">
      <h3>⭐ Your favorite packages</h3>
      {favorites.map((fav) => (
        <div key={fav.id} className="fav-card">
          <span className="fav-name">{fav.package_name}</span>
          <button className="btn-delete" onClick={() => onDelete(fav.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
