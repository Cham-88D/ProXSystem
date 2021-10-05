import axios from 'axios'

const url ="http://localhost:8090/system/user"
export const getRole = async (id) => {
    let data = {
        uid:id
    };

    return axios.post(url+`/${id}`,data);
};



