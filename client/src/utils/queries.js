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

export const GET_BBPOSTS = gql`
query Query {
  bulletinPosts {
    bulletPostTitle
    userID {
      _id
      location
      username
      profileImage
    }
    serviceNeed {
      skillTitle
      _id
    }
    serviceOffer {
      skillTitle
      _id
    }
    imageURL
  }
}
`;

export const GET_ALLUSERS = gql`
query Query {
  getUsers {
    _id
    profileImage
    username
  }
}
`;

// get skills 
export const GET_SKILLS = gql`
query Query {
  skills {
    skillTitle
    _id
  }
}
`;

// get skills by user
export const GET_SKILLS_BY_USER = gql`
query Query($getSkillsByUserId: ID!) {
  getSkillsByUser(id: $getSkillsByUserId) {
    skillTitle
    _id
  }
}
`;