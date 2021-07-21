import axios from 'axios';

const USERS_REST_API_URL = 'https://back-proyecto.herokuapp.com/galaxy/usuarios';
const USERS_REST_API_URL_LOCAL = 'http://localhost:8080/galaxy/usuarios';



class UserService{

    getUsers(){
        return axios.get(USERS_REST_API_URL);

    }

    addUser(user){
        return axios.post(USERS_REST_API_URL,user);

    }
}

export default new UserService();