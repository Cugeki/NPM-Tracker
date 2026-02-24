import { NpmPackage, FavoritePackage } from "../types";

const PHP_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const apiService = {
  // Pobieranie z NPM
  searchPackages: async (text: string): Promise<any[]> => {
    const res = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${text}&size=5`,
    );
    const data = await res.json();

    return data.objects.map((item: any) => item.package);
  },

  // Pobieranie ulubionych z PHP
  async getFavorites(): Promise<FavoritePackage[]> {
    const res = await fetch(`${PHP_BASE_URL}/getFavourite.php`);
    return res.json();
  },

  // Zapisywanie do PHP
  async saveFavorite(name: string): Promise<{ message: string }> {
    const res = await fetch(`${PHP_BASE_URL}/saveFavourite.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    return res.json();
  },

  // Usuwanie z PHP
  async deleteFavorite(id: number): Promise<{ message: string }> {
    const res = await fetch(`${PHP_BASE_URL}/deleteFavourite.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    return res.json();
  },
};
