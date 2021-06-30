/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REGISTER_MEMBER
// ====================================================

export interface REGISTER_MEMBER_insert_member_returning {
  __typename: "member";
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  role: string;
  refresh_token: string;
  password_hash: string;
}

export interface REGISTER_MEMBER_insert_member {
  __typename: "member_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: REGISTER_MEMBER_insert_member_returning[];
}

export interface REGISTER_MEMBER {
  /**
   * insert data into the table: "member"
   */
  insert_member: REGISTER_MEMBER_insert_member | null;
}

export interface REGISTER_MEMBERVariables {
  role: string;
  passwordHash?: string | null;
  email: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_MEMBER
// ====================================================

export interface ADD_MEMBER_insert_member_returning {
  __typename: "member";
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  role: string;
  refresh_token: string;
  password_hash: string;
  password: string | null;
}

export interface ADD_MEMBER_insert_member {
  __typename: "member_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: ADD_MEMBER_insert_member_returning[];
}

export interface ADD_MEMBER {
  /**
   * insert data into the table: "member"
   */
  insert_member: ADD_MEMBER_insert_member | null;
}

export interface ADD_MEMBERVariables {
  role: string;
  password?: string | null;
  passwordHash: string;
  email?: string | null;
  username?: string | null;
  name?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MEMBER
// ====================================================

export interface UPDATE_MEMBER_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_MEMBER_update_member | null;
}

export interface UPDATE_MEMBERVariables {
  memberId: string;
  updated?: member_set_input | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_LOGIN_AT
// ====================================================

export interface UPDATE_LOGIN_AT_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_LOGIN_AT {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_LOGIN_AT_update_member | null;
}

export interface UPDATE_LOGIN_ATVariables {
  memberId: string;
  loginAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER
// ====================================================

export interface GET_MEMBER_member_by_pk {
  __typename: "member";
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  password_hash: string;
  role: string;
  refresh_token: string;
}

export interface GET_MEMBER {
  /**
   * fetch data from the table: "member" using primary key columns
   */
  member_by_pk: GET_MEMBER_member_by_pk | null;
}

export interface GET_MEMBERVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_LIST
// ====================================================

export interface GET_MEMBER_LIST_member {
  __typename: "member";
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  password_hash: string;
  role: string;
}

export interface GET_MEMBER_LIST {
  /**
   * fetch data from the table: "member"
   */
  member: GET_MEMBER_LIST_member[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_BY_REFRESH_TOKEN
// ====================================================

export interface GET_MEMBER_BY_REFRESH_TOKEN_member {
  __typename: "member";
  id: string;
  name: string | null;
  email: string | null;
  username: string | null;
  role: string;
}

export interface GET_MEMBER_BY_REFRESH_TOKEN {
  /**
   * fetch data from the table: "member"
   */
  member: GET_MEMBER_BY_REFRESH_TOKEN_member[];
}

export interface GET_MEMBER_BY_REFRESH_TOKENVariables {
  refreshToken: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_POSSIBLE_MEMBERS
// ====================================================

export interface GET_POSSIBLE_MEMBERS_member {
  __typename: "member";
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  password_hash: string;
  refresh_token: string;
  role: string;
}

export interface GET_POSSIBLE_MEMBERS {
  /**
   * fetch data from the table: "member"
   */
  member: GET_POSSIBLE_MEMBERS_member[];
}

export interface GET_POSSIBLE_MEMBERSVariables {
  email?: string | null;
  username?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * input type for updating data in table "member"
 */
export interface member_set_input {
  created_at?: any | null;
  email?: string | null;
  id?: string | null;
  login_at?: any | null;
  name?: string | null;
  password?: string | null;
  password_hash?: string | null;
  refresh_token?: string | null;
  role?: string | null;
  updated_at?: any | null;
  username?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
