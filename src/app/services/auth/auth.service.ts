import { inject, Injectable } from "@angular/core";
import { AxiosService } from "../axios/axios.service";
import { ARCHIFF_AUTH_TOKEN, BASE_URL, routes } from "../../constants/constants";
import { BusinessOnboardingInfo } from "../../pages/business-onboarding/business-onboarding.component";
import { User } from "../../pages/profile/profile.component";

interface Credentials{
    email: string,
    password: string,
    fullName?:string,
}
interface OtpBody{
    email:string,
    code:string,
}
interface ResetPasswordPayload{
    resetToken:string,
    newPassword:string
}
@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private axiosService = inject(AxiosService);
    email = "";
    async signIn({email,password}:Credentials){
        const url = new URL(`${BASE_URL}/api/auth/login`);
        const response = await this.axiosService.post('/api/auth/login',{ email, password },"sign-in");
        return response
    }
    async register({email,password,fullName}:Credentials){
        const url = new URL(`${BASE_URL}/api/auth/signup`);
        const response = await this.axiosService.post('/api/auth/signup',{ email, password,fullName },"sign-up");
        return response;
    }
    async signOut(){
        const response = await this.axiosService.post('/api/auth/logout',"sign-out");
        localStorage.removeItem(ARCHIFF_AUTH_TOKEN);
        return response;
    }
    storeToken(token:string){
        localStorage.setItem(ARCHIFF_AUTH_TOKEN, JSON.stringify(token));
    }
    storeUser<T>(user:T){
        localStorage.setItem("archiff-user",JSON.stringify(user));
    }
    get user(){
        return JSON.parse(localStorage.getItem("archiff-user") as string) as User;
    }
    async requestPasswordReset(email:string){
        const url = new URL(`${BASE_URL}api/auth/request-password-reset`);
        const response = await this.axiosService.post('api/auth/request-password-reset',{identifier:email},"request-password-reset");
        return response;
    }
    async resendOtp({email}:OtpBody){
        const url = new URL(`${BASE_URL}/api/auth/resend-otp`);
        const response = await this.axiosService.post('/api/auth/resend-otp',{email},"request-otp");
        return response;
    }
    async verifyOtp({email,code}:OtpBody){
        const url = new URL(`${BASE_URL}/api/auth/verify-otp`);
        const response = this.axiosService.post('/api/auth/verify-otp',{email,code},"verify-otp");
        return response;
    }
    async verifyResetOtp({email,code}:OtpBody){
        const url = new URL(`${BASE_URL}/api/auth/verify-reset-otp`);
        const response = this.axiosService.post('/api/auth/verify-reset-otp',{email,code},"verify-reset-otp");
        return response;
    }
    async requestResetPassword(email:string){
        const url = new URL(`${BASE_URL}/api/auth/request-password-reset`);
        const response = this.axiosService.post('/api/auth/request-password-reset',{email},"request-password-reset");
        return response;
    }
    async resetPassword({resetToken,newPassword}:ResetPasswordPayload){
        const url = new URL(`${BASE_URL}/api/auth/reset-password`);
        const response = this.axiosService.post('/api/auth/reset-password',{
            resetToken,newPassword},"reset-password");
        return response;
    }
    async onboardIndividual(individualOnboardingInfo:any){
        const response = this.axiosService.post('api/seller/apply',
        individualOnboardingInfo,
        "individual-onboarding");
        return response;
    }
    
    async OnboardBusiness(businessOnboardingInfo:BusinessOnboardingInfo){
        const response = this.axiosService.post('api/seller/apply',
        businessOnboardingInfo,
        "bunsiness-onboarding");
        return response;
    }
    get isAuthenticated(){
        return localStorage.getItem(ARCHIFF_AUTH_TOKEN)
    }
}
