import React from "react";

function Card({ data: userData }) {
  const {
    name,
    profile_image_url,
    screen_name,
    tweets_count,
    followers_count,
    description,
    created_at
  } = userData;

  return (
    <div>
      <img src={profile_image_url} alt="user image" width="120px" />
      <h1
        style={{
          marginBottom: 0
        }}
      >
        {name}
      </h1>
      <span>@{screen_name}</span>
      <p>{description}</p>
      <p>Joined: {created_at}</p>
      <p>
        Followers: {followers_count} | Tweets: {tweets_count}
      </p>
    </div>
  );
}

export default Card;
