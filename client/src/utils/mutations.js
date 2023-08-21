import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_PROFILEIMG = gql`
  mutation updateProfileImg($id: ID!, $profileImage: String!) {
    updateProfileImg(id: $id, profileImage: $profileImage) {
      username
      profileImage
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation(
    $id: ID!
    $age: String
    $aboutMe: String
    $location: String
    $occupation: String
    $username: String
  ) {
    updateUser(
      _id: $id
      age: $age
      aboutMe: $aboutMe
      location: $location
      occupation: $occupation
      username: $username
    ) {
      aboutMe
      age
      email
      username
      location
    }
  }
`;

export const ADD_BBPOST = gql`
  mutation Mutation(
    $bulletPostTitle: String!, 
    $bulletText: String!, 
    $userId: ID!, 
    $serviceOffer: [ID], 
    $serviceNeed: [ID], 
    $deliveryTime: String, 
    $imageUrl: String, 
    $createdAt: String
    ) {
    addBBPost(
      bulletPostTitle: $bulletPostTitle, 
      bulletText: $bulletText, 
      userID: $userId, 
      serviceOffer: $serviceOffer, 
      serviceNeed: $serviceNeed, 
      deliveryTime: $deliveryTime, 
      imageURL: $imageUrl, 
      createdAt: $createdAt) 
    {
    _id
    bulletPostTitle
    bulletText
    createdAt
    deliveryTime
    imageURL
    serviceNeed {
      _id
    }
    serviceOffer {
      _id
    }
    userID {
      _id
      username
    }
  }
}
`;

export const DELETE_BBPOST= gql`
  mutation Mutation($bulletinId: ID!) {
  deleteBBPost(bulletinId: $bulletinId) {
    message
    success
  }
}
`

export const ACTIVE_BBPOST = gql`
  mutation Mutation($acceptBulletinId: ID!, $acceptingUser: ID!) {
    acceptBulletin(id: $acceptBulletinId, acceptingUser: $acceptingUser) {
      bulletPostTitle
      isActive
      acceptingUser {
        _id
      }
    }
  }
`