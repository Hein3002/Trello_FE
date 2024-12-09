import { apiServer } from "../../constant/api";


export const createCardAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/card/create`, data);
    return res?.data;
};
export const getCardByIddAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.get(`/api/card/getbyid/`+id);
    return res?.data;
};
