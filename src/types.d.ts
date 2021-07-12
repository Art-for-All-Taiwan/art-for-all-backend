/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REGISTER_MEMBER
// ====================================================

export interface REGISTER_MEMBER_insert_member_returning {
  __typename: "member";
  id: any;
  email: string;
  username: string;
  name: string | null;
  role: string | null;
  avatar_url: string | null;
  refresh_token: string | null;
  password_hash: string | null;
}

export interface REGISTER_MEMBER_insert_member {
  __typename: "member_mutation_response";
  /**
   * data from the rows affected by the mutation
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
  id: any;
  email: string;
  username: string;
  name: string | null;
  role: string | null;
  avatar_url: string | null;
  password: string | null;
}

export interface ADD_MEMBER_insert_member {
  __typename: "member_mutation_response";
  /**
   * data from the rows affected by the mutation
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
   * number of rows affected by the mutation
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
  memberId: any;
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
   * number of rows affected by the mutation
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
  memberId: any;
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
  id: any;
  email: string;
  username: string;
  name: string | null;
  password_hash: string | null;
  role: string | null;
  avatar_url: string | null;
  refresh_token: string | null;
}

export interface GET_MEMBER {
  /**
   * fetch data from the table: "member" using primary key columns
   */
  member_by_pk: GET_MEMBER_member_by_pk | null;
}

export interface GET_MEMBERVariables {
  memberId: any;
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
  id: any;
  email: string;
  username: string;
  name: string | null;
  password_hash: string | null;
  avatar_url: string | null;
  role: string | null;
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
  id: any;
  name: string | null;
  email: string;
  username: string;
  role: string | null;
  avatar_url: string | null;
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
  id: any;
  email: string;
  username: string;
  name: string | null;
  avatar_url: string | null;
  password_hash: string | null;
  refresh_token: string | null;
  role: string | null;
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
  avatar_url?: string | null;
  category?: number | null;
  created_at?: any | null;
  email?: string | null;
  id?: any | null;
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
