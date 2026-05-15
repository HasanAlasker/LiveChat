import api from "./axios";

const endpoint = "/messages";

export const getMsgs = async (id) => {
  try {
    const res = await api.get(`${endpoint}/${id}`);
    return {
      ok: true,
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data?.message || error.message,
      status: res.status,
    };
  }
};
