import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})

export const usersApi = {
   getUsers(currentPage = 1,pageSize = 4){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(res=> res.data)
   }
}

