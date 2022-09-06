

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from "axios";

export const usedataStore = defineStore('data', () => {
  


  const api = ref('https://servicios.sirhu.com.co/_api/v1/production/maestros/administracion/dotaciones/')
  const key = ref('267c511484817f7c839f4b035611139f493ab066')

  const dataRandom = ref([])

const getData = async () => {
  try {
    await axios({
      method: 'get',
      url: 'https://servicios.sirhu.com.co/_api/v1/production/maestros/administracion/dotaciones/',
      headers: { Authorization: 'Bearer 267c511484817f7c839f4b035611139f493ab066'}
    })
      .then(function (response) {
        console.log(response)
       // dataRandom.value.push(response.data)
      });
    } catch (error) {
    
  }
}

 getData()


 return {  }
})
