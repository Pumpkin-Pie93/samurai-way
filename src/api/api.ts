import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})

export const usersApi = {
     getProfile(userId: number){
        return  instance.get(`profile/${userId}`)
    },
   getUsers(currentPage = 1,pageSize = 4){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(res=> res.data)
   },
    follow(userId:number){
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`)
    }
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}