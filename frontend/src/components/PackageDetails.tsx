import React from "react";
import { NpmPackage } from "../types";

interface Props {
  data: NpmPackage;
  onAdd: () => void;
  isFavorite: boolean;
}

export const PackageDetails: React.FC<Props> = ({
  data,
  onAdd,
  isFavorite,
}) => {
  const homepageUrl =
    data.links?.homepage ||
    data.links?.npm ||
    `https://www.npmjs.com/package/${data.name}`;

  return (
    <div className="package-card">
      <div className="package-header">
        <h2>{data.name}</h2>
        <span className="version-badge">
          v{data.version || data["dist-tags"]?.latest || "latest"}
        </span>
      </div>
      <p className="package-description">{data.description}</p>
      <div className="package-footer">
        <a href={homepageUrl} target="_blank" rel="noreferrer" className="link">
          Documentation
        </a>

        <button
          onClick={onAdd}
          disabled={isFavorite}
          className={`btn-action ${isFavorite ? "btn-disabled" : "btn-add"}`}
        >
          {isFavorite ? "✓ On list" : "Add"}
        </button>
      </div>
    </div>
  );
};
