
import axios from "axios";

export const getSkills = async () => {
    const response = await axios.get("http://localhost:8080/api/skills");
    return response.data;
};/*
import api from "./api";  // axios instance configured in api.js

// Get all skills
export const getSkills = async () => {
    const res = await api.get("/skills");
    return res.data;
};

// Create a new skill
export const createSkill = async (skill) => {
    const res = await api.post("/skills", skill);
    return res.data;
};

// Update an existing skill
export const updateSkill = async (id, skill) => {
    const res = await api.put(`/skills/${id}`, skill);
    return res.data;
};

// Delete a skill
export const deleteSkill = async (id) => {
    await api.delete(`/skills/${id}`);
};*/
