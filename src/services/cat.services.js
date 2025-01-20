import httpClient from '@/http-clients/index'
import HttpRequestMethods from '@/utils/http/const/HttpRequestMethods'

const getCatAllData = async () =>
  await httpClient(HttpRequestMethods.GET, 'https://cat-fact.herokuapp.com/facts/random')

const getAnimals = async (params) =>
  await httpClient(HttpRequestMethods.GET, 'https://api.thecatapi.com/v1/images/search')

export default {
  getCatAllData,
  getAnimals
}
