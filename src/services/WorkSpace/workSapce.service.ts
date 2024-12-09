import { apiServer } from "../../constant/api";


export const createWorkSpacedAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/workspace/create`, data);
    return res?.data;
};


export const getWorkSpacedByIdAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.get(`/api/workspace/getbyid/`+id);
    return res?.data;
};
