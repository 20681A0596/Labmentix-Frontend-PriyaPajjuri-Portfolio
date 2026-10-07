import api from "./api";

export const getExperience = async () => {
    const res = await api.get("/experience");
    return res.data;
};