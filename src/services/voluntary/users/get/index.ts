import axios, { AxiosRequestConfig } from 'axios';
import { API as URL } from '../api';


type GetResponse = {
    error: boolean;
    data: Array<any>;
};

export async function get(userId?: string): Promise<GetResponse> {
    let params = URL;
    if(userId){
        params += `/${userId}`
    }
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: params,
    };

    try {
        const response = await axios.get(params)
        return { error: false, data: response.data };
    } catch (error) {
    return { error: true, data: [] };
    }
}