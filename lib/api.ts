import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

interface IRequest {
  get(url: string): Promise<any>;
  post(url: string, body: {}): Promise<any>;
  put(url: string, body: {}): Promise<any>;
  patch(url: string, fild: any): Promise<any>;
  delete(url: string): Promise<any>;
}

class RRequest implements IRequest {
  async get(url: string): Promise<any> {
    const response = await instance.get(url);
    return responseBody(response);
  }

  async post(url: string, body: {}): Promise<any> {
    const response = await instance.post(url, body);
    return responseBody(response);
  }

  async put(url: string, body: {}): Promise<any> {
    const response = await instance.put(url, body);
    return responseBody(response);
  }

  async patch(url: string, fild: any): Promise<any> {
    const response = await instance.patch(url, { fild });
    return responseBody(response);
  }

  async delete(url: string): Promise<any> {
    const response = await instance.delete(url);
    return responseBody(response);
  }
}

const getRequest = (): IRequest => {
  return new RRequest();
};

export default getRequest;
