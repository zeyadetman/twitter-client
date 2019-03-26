import gql from "graphql-tag";

export default gql`
  query user($identifier: UserIdentifier!, $identity: UserIdentity!) {
    twitter {
      user(identifier: $identifier, identity: $identity) {
        created_at
        description
        id
        screen_name
        name
        profile_image_url
        url
        tweets_count
        followers_count
      }
    }
  }
`;
