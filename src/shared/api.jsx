import axios from "axios";

export const api = axios.create({
    baseURL: `https://pre-onboarding-selection-task.shop/`,
    headers: {
        'content-type': 'application/json',
      }
});

api.interceptors.request.use(function(config){
    const accessToken = localStorage.getItem('accessToken');
    return config;
})

export const userApi = {
    signIn(email, password) {
        const data= {email, password}
        console.log(data, "데이터확인")
        return api.post('auth/signin',data)
    },
    signup(email, password){
        const data= {email, password}
        console.log(data, "데이터확인")
        return api.post('auth/signup', data)
    },
}

export const todoApi = {

}