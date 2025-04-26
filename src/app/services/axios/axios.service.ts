import axios, { AxiosRequestConfig } from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AxiosService {
  private axiosInstance = axios.create();
  private abortControllers:Map<string,AbortController> = new Map();
  constructor() {
    this.setupInterceptor();
  }
  private setupInterceptor() {
    this.axiosInstance.interceptors.request.use(

      (config) => {
        const excludedApis = ['/api/auth/login','/api/auth/register', '/api/auth/reset-password'];
        if (!excludedApis.some(api => config.url?.includes(api))) {
            const token = JSON.parse(localStorage.getItem('authToken') as string);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
  abortRequest(requestId:string){
    const controller = this.abortControllers.get(requestId);
    if(controller){
        controller.abort();
        this.abortControllers.delete(requestId);
    }
  }
  public async get(url: string,requestId:string) {
    let abortController:AbortController|null; 
    let config:AxiosRequestConfig|undefined;
    if(requestId){
        abortController = new AbortController;
        this.abortRequest(requestId);
        this.abortControllers.set(requestId, abortController);
        config = {
          signal:abortController.signal
        }
    }
    const response = await this.axiosInstance.get(url,config);
    return response.data;
  }

  public async post(url: string, body: any,requestId?:string) {
    let abortController:AbortController|null; 
    let config:AxiosRequestConfig|undefined;
    if(requestId){
        abortController = new AbortController;
        this.abortRequest(requestId);
        this.abortControllers.set(requestId, abortController);
        config = {
          signal:abortController.signal
        }
    }
    const response = await this.axiosInstance.post(url, body,config);
    return response;
  }
  public async put(url: string, body: any,requestId?:string) {
    let abortController:AbortController|null; 
    let config:AxiosRequestConfig|undefined;
    if(requestId){
        abortController = new AbortController;
        this.abortRequest(requestId);
        this.abortControllers.set(requestId, abortController);
        config = {
          signal:abortController.signal
        }
    }
    const response = await this.axiosInstance.put(url, body,config);
    return response;
  }
}