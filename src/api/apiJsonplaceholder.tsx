import axios from "axios";
import config from "../config";

const urlBase = config.urlBase;

export const getUsersData = async () => {
  const response = await axios.get(`${urlBase}`);
  return response;
};
