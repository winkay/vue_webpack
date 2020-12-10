import request from '@/utils/request'
import {setRole} from '@/utils/roles'
import {setToken} from '@/utils/token'
const state = {
  role: '',
  name:''
}

const mutations = {
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      request({
        url:`/api/login`,
        data
      }).then((res) => {
        setRole(res.data.role)
        commit('SET_ROLE', res.data.role)
        setToken(res.data.token)
        resolve(res.data)
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
        commit('SET_NAME', res.data.name)
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
