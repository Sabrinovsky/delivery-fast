import axios from 'axios'
import cookies from './cookies'
const url = 'http://localhost:3001/'

export default{
  get: function(path){
    return new Promise((resolve,reject)=>{
      axios.get(url+path,{
        headers:{
          Accept: 'application/json',
          Authorization: cookies.get('jwt')
        }
      }).then((response) => {
        resolve(response.data)
      }).catch((error)=>{
        reject(error)
      })

    })
  },
  post: function(path,values){
    return new Promise((resolve,reject)=>{
      axios.post(url+path, values,{
        headers:{
          Accept: 'application/json',
          Authorization: cookies.get('jwt')
        }
      }).then((response) => {
        resolve(response.data)
      }).catch((error)=>{
        reject(error)
      })

    })
  }
}
