import request from '@/utils/request'
import {setRole} from '@/utils/roles'
import {setToken} from '@/utils/token'
const state = {
  role: '',
  userName:'',
  account:''
}

const mutations = {
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_USER_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_ACCOUNT: (state, account) => {
    state.account = account
  }
}

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      request({
        method:'post',
        url:`/api/login`,
        data
      }).then((res) => {
        setRole(res.data.role)
        commit('SET_ROLE', res.data.role)
        commit('SET_USER_NAME', res.data.userName)
        commit('SET_ACCOUNT', res.data.account)
        setToken(res.data.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit }, username) {
    return new Promise((resolve, reject) => {
      request({
        url:`/api/userinfo/${username}`
      }).then((res) => {
        setRole(res.data.role)
        commit('SET_ROLE', res.data.role)
        commit('SET_USER_NAME', res.data.userName)
        commit('SET_ACCOUNT', res.data.account)
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
