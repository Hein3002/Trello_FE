import { apiServer } from "../../constant/api";


export const createColumndAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/column/create`, data);
    return res?.data;
};
export const updateColumndAPI = async (data: any, id: any): Promise<any> => {
    const res = await apiServer?.post(`/api/column/update/`+id, data);
    return res?.data;
};
