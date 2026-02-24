import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { FavoritesList } from "./components/FavoritesList";
import { PackageDetails } from "./components/PackageDetails";
import { apiService } from "./services/api";
import { NpmPackage, FavoritePackage } from "./types";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<FavoritePackage[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      const results = await apiService.searchPackages(query);
      setSearchResults(results);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleAddFavorite = async (pkg: NpmPackage) => {
    try {
      const result = await apiService.saveFavorite(pkg.name);
      toast.success(result.message);
      loadFavorites();
    } catch (error) {
      toast.error(
        `Błąd podczas dodawania: ${error instanceof Error ? error.message : "Nieznany błąd"}`,
      );
    }
  };

  const loadFavorites = async () => {
    const data = await apiService.getFavorites();
    setFavorites(data);
  };

  const onDelete = async (id: number) => {
    const result = await apiService.deleteFavorite(id);
    toast.success(result.message);
    loadFavorites();
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="title">
        <span className="title-icon">📦</span> NPM Tracker
      </h1>
      <SearchBar query={query} setQuery={setQuery} />
      {searchResults.length === 0 && query.length < 2 && (
        <div className="hero-section">
          <div className="hero-icon">🚀</div>
          <h1>Manage your NPM packages</h1>
          <p>
            Search, analyze, and save your favorite libraries in one place.
            Start typing above to explore millions of packages.
          </p>
          <div className="hero-stats">
            <span>🔥 Trending: axios, lodash, react, tailwind</span>
          </div>
        </div>
      )}
      <div className="search-results-container">
        {searchResults.map((pkg) => {
          const isAlreadyFavorite = favorites.some(
            (fav) => fav.package_name === pkg.name,
          );

          return (
            <PackageDetails
              key={pkg.name}
              data={pkg}
              isFavorite={isAlreadyFavorite}
              onAdd={() => handleAddFavorite(pkg)}
            />
          );
        })}
      </div>
      <hr className="divider" />
      {favorites.length > 0 && (
        <FavoritesList favorites={favorites} onDelete={onDelete} />
      )}
    </div>
  );
}

export default App;
