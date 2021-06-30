import {
  GET_MEMBER,
  GET_MEMBER_LIST,
} from '../gql/queries'
import * as types from '../types'
import apolloClient from './apollo.client'
import Axios from 'axios'
import * as Sentry from '@sentry/node'

export const getMember = async (memberId: string) => {
  const { data } = await apolloClient.query<types.GET_MEMBER, types.GET_MEMBERVariables>({
    query: GET_MEMBER,
    variables: { memberId },
  })
  const member = data.member_by_pk
  if (!member) {
    throw new Error('找不到使用者')
  }
  return member
}

export const getMemberList = async () => {
  const { data } = await apolloClient.query<types.GET_MEMBER_LIST>({
    query: GET_MEMBER_LIST,
  })
  const members = data.member
  return members
}

export const notifySlack = async (payload: {
  text: string
  username?: string
  iconUrl?: string
  attachments?: {
    title?: string
    text: string
    color: string
  }[]
}) => {
  await Axios({
    method: 'POST',
    url: process.env.SLACK_INCOMING_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: {
      username: payload.username,
      icon_url: payload.iconUrl,
      text: payload.text,
      attachments: payload.attachments,
    },
  })
}

export const sendErrorLogs = async (error: Error, title: string, messages: string[]) => {
  Sentry.captureException(error)
  await notifySlack({
    username: `【${process.env.NODE_ENV}】 BioDB`,
    text: title,
    attachments: messages.map((message) => ({
      title: error.message,
      text: message,
      color: 'danger',
    })),
  })
}

export const notNull = <T>(x: T | null): x is T => x !== null

export const getCustomError = (name: string, message: string) => {
  const error = new Error(message)
  error.name = name
  return error
}