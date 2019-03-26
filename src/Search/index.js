import React, { useState } from "react";
import { Query } from "react-apollo";
import getSearch from "../GraphQL/getSearch.js";
import List from "./List.js";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tweets, setTweetsNumber] = useState(10);

  return (
    <div>
      <div
        style={{
          marginBottom: 50
        }}
      >
        <label>
          Tweets Number{" "}
          <input
            placeholder="10"
            value={tweets}
            type="number"
            onChange={e => {
              setTweetsNumber(e.target.value);
            }}
          />
        </label>
        <label>
          Enter search{" "}
          <input
            placeholder="ex. ac milan"
            onKeyPress={e => {
              if (e.key === "Enter") setSearchQuery(e.target.value);
            }}
          />
        </label>
      </div>
      <Query
        query={getSearch}
        variables={{
          q: searchQuery,
          count: tweets
        }}
      >
        {({ loading, data, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return null;

          return data.twitter.search.map(tweet => <List tweet={tweet} />);
        }}
      </Query>
    </div>
  );
}

export default Search;
