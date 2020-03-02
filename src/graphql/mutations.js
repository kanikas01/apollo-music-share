import { gql } from "apollo-boost";

export const ADD_SONG = gql`
  mutation addSong(
    $title: String!
    $artist: String!
    $duration: Float!
    $url: String!
    $thumbnail: String!
  ) {
    insert_songs(
      objects: {
        title: $title
        artist: $artist
        duration: $duration
        thumbnail: $thumbnail
        url: $url
      }
    ) {
      affected_rows
    }
  }
`;
