import gql from 'graphql-tag'

export const GET_MEMBER = gql`
  query GET_MEMBER($memberId: String!) {
    member_by_pk(id: $memberId) {
      id
      email
      username
      name
      password_hash
      role
      refresh_token
    }
  }
`

export const GET_MEMBER_LIST = gql`
  query GET_MEMBER_LIST {
    member {
      id
      email
      username
      name
      password_hash
      role
    }
  }
`

export const GET_MEMBER_BY_REFRESH_TOKEN = gql`
  query GET_MEMBER_BY_REFRESH_TOKEN($refreshToken: String!) {
    member(where: { refresh_token: { _eq: $refreshToken } }) {
      id
      name
      email
      username
      role
    }
  }
`

export const GET_POSSIBLE_MEMBERS = gql`
  query GET_POSSIBLE_MEMBERS($email: String, $username: String) {
    member(where: {_or: [{email: {_eq: $email}}, {username: {_eq: $username}}]}) {
      id
      email
      username
      name
      password_hash
      refresh_token
      role
    }
  }
`
