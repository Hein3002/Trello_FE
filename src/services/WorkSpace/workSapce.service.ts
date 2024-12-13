import { apiServer } from "../../constant/api";


export const createWorkSpacedAPI = async (data: any): Promise<any> => {
    const res = await apiServer?.post(`/api/workspace/create`, data);
    return res?.data;
};
export const getWorkSpaceMemberByIdUserAPI = async (): Promise<any> => {
    const res = await apiServer?.get(`/api/workspace/getallbyuseridmember/`);
    return res?.data;
};
export const getWorkSpaceGuestByIdUserAPI = async (): Promise<any> => {
    const res = await apiServer?.get(`/api/workspace/getallbyuseridguest/`);
    return res?.data;
};

export const getWorkSpacedByIdAPI = async (id: any): Promise<any> => {
    const res = await apiServer?.get(`/api/workspace/getbyid/`+id);
    return res?.data;
};
