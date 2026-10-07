import api from "./api.js";


export const sendMessage = async (data) => {
    const res = await api.post("/messages", data);
    return res.data;
};
/*
import api from "./api";

export const getMessages = async () => {
    const res = await api.get("/messages");
    return res.data;
};

export const deleteMessage = async (id) => {
    await api.delete(`/messages/${id}`);
};
*/

