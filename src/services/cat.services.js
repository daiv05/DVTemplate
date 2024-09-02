import axiosCommon from '../utils/http/axios-common.js'

const getCatAllData = async () => await axiosCommon('get', 'https://cat-fact.herokuapp.com/facts')
const getAnimals = async (params) =>
  await axiosCommon('get', 'https://cat-fact.herokuapp.com/facts/random', params)

export default {
  getCatAllData,
  getAnimals
}
