import axios from 'axios'
import cookies from './cookies'

const url = process.env.NODE_ENV === 'production' ? 'https://note-gas.herokuapp.com/' : 'http://localhost:3001/'

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
  },
  put: function(path,values){
    return new Promise((resolve,reject)=>{
      axios.put(url+path, values,{
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
  delete: function(path){
    return new Promise((resolve,reject)=>{
      axios.delete(url+path,{
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
