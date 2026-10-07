import api from "./api";

export const getMedia = async () => {
    const res = await api.get("/media");
    return res.data;
};/*
import api from "./api";  // axios instance configured in api.js

// Get all media items
export const getMedia = async () => {
    const res = await api.get("/media");
    return res.data;
};

// Create a new media item
export const createMedia = async (media) => {
    const res = await api.post("/media", media);
    return res.data;
};

// Update an existing media item
export const updateMedia = async (id, media) => {
    const res = await api.put(`/media/${id}`, media);
    return res.data;
};

// Delete a media item
export const deleteMedia = async (id) => {
    await api.delete(`/media/${id}`);
};
*/