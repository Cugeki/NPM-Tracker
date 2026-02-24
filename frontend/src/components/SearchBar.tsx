import React from "react";

interface Props {
  query: string;
  setQuery: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar--input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Axios, React, Express..."
      />
      <button className="search-bar--button">Search</button>
    </div>
  );
};
