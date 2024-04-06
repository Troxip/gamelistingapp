import axios from "axios";

const key = "3f865cb965564bc785c4fc421308e593";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGenreList = () => {
  return axiosCreate.get("/genres?key=" + key);
};
export const getAllGames = () => {
  return axiosCreate.get("/games?key=" + key);
};
