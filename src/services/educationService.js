import api from "./api";

export const getEducation = async () => {
    const res = await api.get("/education");
    return res.data;
};