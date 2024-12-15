import { apiServer } from "../../constant/api";


export const createCardAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/card/create`, data);
    return res?.data;
};
export const updateUserOutCardAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.post(`/api/card/updateuserout/`+id);
    return res?.data;
};
export const updateUserJoinCardAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.post(`/api/card/updateuserjoin/`+id);
    return res?.data;
};
export const getCardByIddAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.get(`/api/card/getbyid/`+id);
    return res?.data;
};
