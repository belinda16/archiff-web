import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { WaterMarkTextComponent } from "../../../components/water-mark-text/water-mark-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { LoaderComponent } from "../../../components/loader/loader.component";
import { OtpTimerComponent } from "./components/otp-timer.component/otp-timer.component";
import { AxiosError } from 'axios';
import { CommonModule } from '@angular/common';
import { OtpFlowService } from '../../../services/otp/otp-flow-service.service';
import { VerifiedComponent } from "../verified/verified.component";
@Component({
  selector: 'app-verification',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent, CommonModule, LoaderComponent, OtpTimerComponent, ReactiveFormsModule, VerifiedComponent],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})

export class VerificationComponent {
  email = "";
  loading = false;
  errorMessage = "";
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if(!nav?.extras.state){
      router.navigate(['/login']);
    }
    this.email = nav?.extras.state!["email"];
  }
  currentView = 1;
  otpFlowService = inject(OtpFlowService);
  otpForm = new FormGroup({
      code: new FormControl(''),
  });
  authService = inject(AuthService);
  otpFlow = inject(OtpFlowService);

  ngOnInit(){
    const email = this.otpFlowService.getIdentifier();
    this.email = email as string;
  }
  showNextView(){
    this.currentView++;
  }
  async resendOtp(){
    const code = this.otpForm.value.code as string;
    const email = this.email;
    try{
        const response = await this.authService.resendOtp({email,code});
    }catch(error){
        console.log(error);
    }
  }
  async verifyEmail(){
    this.showNextView();
    const code = this.otpForm.value.code as string;
    const email = this.email;
    try{
      this.loading = true
      const response = await this.authService.verifyOtp({email,code});
      if(response.status === 200){
        // this.router.navigate(['/verified'])
        this.showNextView();
      }
    }catch(error){
      if (error instanceof AxiosError) {
          this.errorMessage = error.response?.data.message;
      }
    }finally{
      this.loading = false;
    }
  }
}
