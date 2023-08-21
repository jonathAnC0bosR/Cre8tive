import { gql } from "@apollo/client";

// -------------- cambiar nombre: 
export const GET_PROFILEIMG = gql`
    query GetProfileImg($getProfileImgId: ID!) {
        getProfileImg(id: $getProfileImgId) {
            username
            profileImage
            aboutMe
            artStation
            github
            location
            occupation
            rating
        }
    }
`;

// ADD EVERYTHING ELSE
export const GET_USER = gql`
    query GetUser($getUserId: ID!) {
  getUser(id: $getUserId) {
    aboutMe
    artStation
    github
    location
    occupation
    rating
  }
}
`;

export const GET_BBPOST_byNEED = gql`
query Query($skillTitle: String!) {
  getBulletinsByServiceNeed(skillTitle: $skillTitle) {
    _id
    bulletPostTitle
    bulletText
    createdAt
    deliveryTime
    imageURL
    isActive
    serviceOffer {
      skillTitle
    }
    userID {
      _id
      username
    }
  }
}
`;
//

export const GET_BBPOST_byOFFER = gql`
query GetBulletinsByServiceOffer($skillTitle: String!) {
  getBulletinsByServiceOffer(skillTitle: $skillTitle) {
    _id
    bulletPostTitle
    bulletText
    createdAt
    deliveryTime
    imageURL
    isActive
    serviceNeed {
      skillTitle
    }
    userID {
      _id
      username
    }
  }
}
`;
//"skillTitle"


