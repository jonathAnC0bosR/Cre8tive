import { gql } from "@apollo/client";

export const GET_PROFILE_IMAGE = gql`
  query GetProfileImage($id: ID!) {
    getProfileImg(id: $id){
        profileImage
    }
  }
`;

export const PLEASE = gql`
    query GetProfileImg($getProfileImgId: ID!) {
        getProfileImg(id: $getProfileImgId) {
            username
            profileImage
        }
    }
`;