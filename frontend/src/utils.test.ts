import { FavoritePackage } from "./types";

const isPackageFavorite = (favorites: FavoritePackage[], name: string) => {
  return favorites.some((fav) => fav.package_name === name);
};

test("correctly identifies a favorite package", () => {
  const mockFavorites = [{ id: 1, package_name: "react" }];
  expect(isPackageFavorite(mockFavorites, "react")).toBe(true);
  expect(isPackageFavorite(mockFavorites, "lodash")).toBe(false);
});
