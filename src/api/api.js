import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': ' f8bcabc6-ecc5-4f34-9c6d-608edc00b752 '},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }

}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}