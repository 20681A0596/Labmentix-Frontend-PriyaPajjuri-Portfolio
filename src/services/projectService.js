import api from "./api";

export const getProjects = async () => {
    const res = await api.get("/projects");
    return res.data;
};/*
import api from "./api";  // axios instance configured in api.js

// Get all projects
export const getProjects = async () => {
    const res = await api.get("/projects");
    return res.data;
};

// Create a new project
export const createProject = async (project) => {
    const res = await api.post("/projects", project);
    return res.data;
};

// Update an existing project
export const updateProject = async (id, project) => {
    const res = await api.put(`/projects/${id}`, project);
    return res.data;
};

// Delete a project
export const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
};
*/