import axios from "axios";

export const api = axios.create({
    baseURL: `https://pre-onboarding-selection-task.shop`,
});


api.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.authorization = "Bearer " + accessToken;
      }
      return config;
});

export const userApi = {
    signIn(email, password) {
        const data= {email, password}
        return api.post('/auth/signin',data)
    },
    signUp(email, password){
        const data= {email, password}
        return api.post('/auth/signup', data)
    },
}

export const todoApi = {
    getTodos(){
        return api.get('/todos')
    },
    createTodo(todo){
        return api.post('/todos', {todo})
    },
    updateTodo(id, todo, isCompleted){
        return api.put(`/todos/${id}`,{todo,isCompleted})
    },
    deleteTodo(id){
        return api.delete(`/todos/${id}`)
    }
}
