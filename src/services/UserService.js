import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/users'
const CREATE_USER_REST_API_URL = 'http://localhost:8080/api/createUser'

class UserService {

    getUsers() {
       return axios.get(USERS_REST_API_URL);
    }

    createUser(){
        return axios.get(CREATE_USER_REST_API_URL);
    }
}

export default new UserService();