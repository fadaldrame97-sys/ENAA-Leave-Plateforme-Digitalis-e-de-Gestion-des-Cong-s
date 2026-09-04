import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const leaveService = {
  createRequest: function (data) {
    return api.post("/demandes-conge", data);
  },
  getMyRequests: function () {
    return api.get("/demandes-conge/me");
  },
  getPendingManager: function () {
    return api.get("/demandes-conge/pending-manager");
  },
  getPendingHR: function () {
    return api.get("/demandes-conge/pending-hr");
  },
  approve: function (id) {
    return api.post("/demandes-conge/" + id + "/approve");
  },
  reject: function (id) {
    return api.post("/demandes-conge/" + id + "/reject");
  },
};

export default api;