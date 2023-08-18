import axios, { AxiosError, AxiosInstance} from 'axios';
import { StatusCodes } from 'http-status-codes';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const/server';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

type DetailMessageType = {
  type: string;
  message: string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use((response) => response, (error: AxiosError<DetailMessageType>) => {
    if (error.response && StatusCodeMapping[error.response.status]) {
      const detailMessage = (error.response.data);
      toast.warn(detailMessage.message);
    }
    throw error;
  });

  return api;
};
