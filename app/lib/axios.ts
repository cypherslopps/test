import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_NEBULA_BACKEND}`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
});

export default axios;