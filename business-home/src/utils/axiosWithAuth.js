import axios from 'axios';


//business login token storage
export const axiosWithAuthBusiness = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://bw-replate.herokuapp.com/api/auth/business',
        headers: {
            Authorization: token
        }
    })
}

//nonprofit login storage token
export const axiosWithAuthNonProfit = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://bw-replate.herokuapp.com/api/auth/volunteer',
        headers: {
            Authorization: token
        }
    })
}