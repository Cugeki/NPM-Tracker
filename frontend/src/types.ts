export interface NpmPackage {
  name: string;
  description: string;
  homepage: string;
  links?: {
    npm?: string;
    homepage?: string;
    repository?: string;
  };
  "dist-tags"?: {
    latest: string;
  };
  version?: string;
}

export interface FavoritePackage {
  id: number;
  package_name: string;
  added_at?: string;
}
