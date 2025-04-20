import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { WaterMarkTextComponent } from '../../../../components/water-mark-text/water-mark-text.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../components/loader/loader.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosError } from 'axios';
import { AuthService } from '../../../../services/auth/auth.service';
import { OtpFlowService } from '../../../../services/otp/otp-flow-service.service';
import { OtpTimerComponent } from "../../verification/components/otp-timer.component/otp-timer.component";

@Component({
  selector: 'app-verification',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent, CommonModule, LoaderComponent, ReactiveFormsModule, OtpTimerComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})

export class ResetPassword {
    loading = false;
    errorMessage = "";
    constructor(private router: Router) {}
    currentViewIndex = 1;
    otpFlowService = inject(OtpFlowService);
    otpForm = new FormGroup({
        code: new FormControl(''),
    });
    emailForm = new FormGroup({
      email: new FormControl(''),
    })
    passwordForm = new FormGroup({

    })
    authService = inject(AuthService);
    otpFlow = inject(OtpFlowService);
    showNextView(){
      this.currentViewIndex++;
    }
    async resetPassword(){
      
    }
    async requestPasswordReset(){
      const email = this.emailForm.value.email as string;
      try{
        this.loading = true
        const response = await this.authService.requestPasswordReset(email);
        if(response.status === 200){
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
    async verifyResetOtp(){

    }
    async resendOtp(){
      const code = this.otpForm.value.code as string;
      const email = this.emailForm.value.email as string;
      try{
          const response = await this.authService.resendOtp({email,code});
      }catch(error){
          console.log(error);
      }
    }
}
