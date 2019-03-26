import React from "react";

function List({ tweet }) {
  const {
    text,
    id,
    user: { name, screen_name, profile_image_url }
  } = tweet;

  return (
    <div
      style={{
        width: "80%",
        margin: "25px auto",
        border: "5px solid #afafaf",
        padding: 5
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px"
          }}
        >
          <img src={profile_image_url} />
        </div>
        <div>
          <h1
            style={{
              margin: 0
            }}
          >
            {name}
          </h1>
          <span>@{screen_name}</span>
        </div>
      </div>
      <p>{text}</p>
      <a
        style={{
          color: "#29a8df",
          marginLeft: 15
        }}
        href={`https://twitter.com/${screen_name}/status/${id}`}
      >
        show on twitter
      </a>
    </div>
  );
}

export default List;
