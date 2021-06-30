import gql from 'graphql-tag'

export const REGISTER_MEMBER = gql`
  mutation REGISTER_MEMBER(
    $role: String!
    $passwordHash: String
    $email: String!
    $name: String!
  ) {
    insert_member(
      objects: {
        role: $role
        password_hash: $passwordHash
        email: $email
        name: $name
      }
    ) {
      returning {
        id
        email
        username
        name
        role
        refresh_token
        password_hash
      }
    }
  }
`

export const ADD_MEMBER = gql`
  mutation ADD_MEMBER(
    $role: String!
    $password: String
    $passwordHash: String!
    $email: String
    $username: String
    $name: String
  ) {
    insert_member(
      objects: {
        role: $role
        password: $password
        password_hash: $passwordHash
        email: $email
        username: $username
        name: $name
      }
    ) {
      returning {
        id
        email
        username
        name
        role
        password
      }
    }
  }
`

export const UPDATE_MEMBER = gql`
  mutation UPDATE_MEMBER($memberId: String!, $updated: member_set_input) {
    update_member(_set: $updated, where: { id: { _eq: $memberId } }) {
      affected_rows
    }
  }
`

export const UPDATE_LOGIN_AT = gql`
  mutation UPDATE_LOGIN_AT($memberId: String!, $loginAt: timestamptz) {
    update_member(where: { id: { _eq: $memberId } }, _set: { login_at: $loginAt }) {
      affected_rows
    }
  }
`
