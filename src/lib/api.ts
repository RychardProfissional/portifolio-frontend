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
  patch(url: string, fild: { name: string; value: string }): Promise<any>;
  delete(url: string): Promise<any>;
}

class RRequest implements IRequest {
  base_url: string;

  constructor(base_url?: string) {
    this.base_url = base_url || "";
  }

  async get(url: string): Promise<any> {
    const response = await instance.get(this.base_url + url);
    return responseBody(response);
  }

  async post(url: string, body: {}): Promise<any> {
    const response = await instance.post(this.base_url + url, body);
    return responseBody(response);
  }

  async put(url: string, body: {}): Promise<any> {
    const response = await instance.put(this.base_url + url, body);
    return responseBody(response);
  }

  async patch(
    url: string,
    fild: { name: string; value: string }
  ): Promise<any> {
    const response = await instance.patch(this.base_url + url, {
      [fild.name]: fild.value,
    });
    return responseBody(response);
  }

  async delete(url: string): Promise<any> {
    const response = await instance.delete(this.base_url + url);
    return responseBody(response);
  }
}

const getRequest = (base_url?: string): IRequest => {
  return new RRequest(base_url);
};

var api = getRequest("http://localhost:9090");

export { api };
