import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { AxiosError } from 'axios';
import { LoaderComponent } from "../../../components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { OtpFlowService } from '../../../services/otp/otp-flow-service.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink,CommonModule, FooterComponent, HeaderComponent, ReactiveFormsModule, LoaderComponent],
  templateUrl: './register.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) {}
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  authService = inject(AuthService);
  otpFlowService = inject(OtpFlowService);
  errorMessage = "";
  showPassword = false;
  loading = false;
  ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef;
  ​ngAfterViewInit(): void {
    ​const media = this.videoRef.nativeElement
    ​media.muted = true 
    ​media.play() 
  ​ } 
  get formControls() {
    return this.registerForm.controls;
  }
  async register(){
    if (this.registerForm.valid) {
      const { email,fullName,password} = this.registerForm.value;
      try {
          this.loading = true;
          const response = await this.authService.register({ email: email??'', password:password??'',fullName:fullName??'' });
          if (response.status === 201) {
              this.otpFlowService.setIdentifier(email as string);
              this.router.navigate(['/verify'],{state:{email}})
          }
      } catch (error) {
          if(error instanceof AxiosError){
              if(error.status === 401) {
                  this.errorMessage = error.response?.data.message;
              }else {
                console.log(error.response?.data.message)
                  this.errorMessage = error.response?.data.message || 'An error occurred during sign-in.';
              }
        }
      }finally{
          this.loading = false;
      }
    }
    else {
        this.registerForm.markAllAsTouched();
    }
  }
}
