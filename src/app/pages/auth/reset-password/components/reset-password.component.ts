import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { WaterMarkTextComponent } from '../../../../components/water-mark-text/water-mark-text.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../components/loader/loader.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosError } from 'axios';
import { AuthService } from '../../../../services/auth/auth.service';
import { OtpFlowService } from '../../../../services/otp/otp-flow-service.service';
import { OtpTimerComponent } from "../../verification/components/otp-timer.component/otp-timer.component";
import { statusCodes } from '../../../../constants/status-codes';

@Component({
  selector: 'app-verification',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent, CommonModule, LoaderComponent, ReactiveFormsModule, OtpTimerComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})

export class ResetPassword {
    loading = false;
    errorMessage = "";
    currentViewIndex = 1;
    otpFlowService = inject(OtpFlowService);
    authService = inject(AuthService);
    otpFlow = inject(OtpFlowService);

    otpForm = new FormGroup({
        code: new FormControl(''),
    });
    emailFormBuilder = new FormBuilder();
    emailForm = this.emailFormBuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
    passwordChangeForm: FormGroup;
    token = '';

    constructor(private fb: FormBuilder,private router: Router) {
      this.passwordChangeForm = this.fb.group({
        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        confirmPassword: ['']
      }, { validators: this.matchPasswords });
    }
    
    matchPasswords(group: AbstractControl): ValidationErrors | null {
      const password = group.get('password')?.value;
      const confirm = group.get('confirmPassword')?.value;
      return password === confirm ? null : { mismatch: true };
    }
    get password(): AbstractControl {
      return this.passwordChangeForm.get('password')!;
    }
    get confirmPassword(): AbstractControl {
      return this.passwordChangeForm.get('confirmPassword')!;
    }
    get email(){
      return this.emailForm.get("email")!;
    }
    showNextView(){
      this.currentViewIndex++;
    }
    async resetPassword(){
      if (this.passwordChangeForm.valid) {
        this.loading = true
        const payload = {
            newPassword:this.password.value as string,
            resetToken:this.token as string,
        }
        try{
          const response = await this.authService.resetPassword(payload);
          if(response.status === statusCodes.OK){
            this.showNextView();
          }
        }catch(error){
          console.log(error);
        }
        finally{
            this.loading = false;
        }
    }
    }
    async requestPasswordReset(){
      this.loading = true
      if(this.emailForm.valid){
        const email = this.emailForm.value.email as string;
        try{
          const response = await this.authService.requestPasswordReset(email);
          if(response.status === statusCodes.OK){
            this.showNextView();
          }
        }catch(error){
          if (error instanceof AxiosError) {
              this.errorMessage = error.response?.data.message;
          }
        }finally{
          this.loading = false;
        }
      }else{
        this.errorMessage = "Email must be a valid e-mail";
      }
    }
    async verifyResetOtp(){
      this.loading = true;
      const code = this.otpForm.value.code as string;
      const email = this.emailForm.value.email as string;
      try{
          const response = await this.authService.verifyResetOtp({email,code});
          if(response.status === statusCodes.OK){
            this.showNextView();
          }
      }catch(error){
        if (error instanceof AxiosError) {
          if(error.status === statusCodes.UNAUTHORIZED){
              this.errorMessage = error.response?.data.message;
              console.log(error.response)
          }else if(error.status === statusCodes.BAD_REQUEST){
            this.errorMessage = error.response?.data.error;
          }
          
        }
      }finally{
        this.loading = false;
      }
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
