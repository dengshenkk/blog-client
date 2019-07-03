import axios from '@nuxtjs/axios'

const $http = {
  article: {
    getArticles({data}) {
      return axios({
        url: '/articles',
        method: 'get',
        data
      })
    }
  }
}
export default $http
