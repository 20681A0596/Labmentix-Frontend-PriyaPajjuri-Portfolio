import api from "./api";

export const getBlogs = async () => {
    const res = await api.get("/blogs");
    return res.data;
};