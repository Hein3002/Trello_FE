import { apiServer } from "../../constant/api";


export const createColumndAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/column/create`, data);
    return res?.data;
};
export const updateColumndAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/column/updatewhenmovecard/`, data);
    return res?.data;
};
export const deleteColumndAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/column/updatewhenmovecard/`, data);
    return res?.data;
};
