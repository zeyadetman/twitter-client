import gql from "graphql-tag";

export default gql`
  query search($q: String!, $count: Int, $result_type: SearchReponse) {
    twitter {
      search(q: $q, count: $count, result_type: $result_type) {
        text
        id
        user {
          name
          screen_name
          profile_image_url
        }
      }
    }
  }
`;
