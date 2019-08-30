import * as constants from '../constants/home'
import {
  API_HOME
} from '../constants/api'
import { createAction } from '../utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */
export const dispatchHome = payload => createAction({
  url: API_HOME,
  type: constants.HOME_INFO,
  payload
})