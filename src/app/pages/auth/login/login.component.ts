import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { AxiosError } from 'axios';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { PROFILE_ROUTE } from '../../../routes/route';
import { CommonModule } from '@angular/common';
import { statusCodes } from '../../../constants/status-codes';

@Component({
  selector: 'app-login',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    ReactiveFormsModule,
    LoaderComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  authService = inject(AuthService);
  errorMessage = '';
  showPassword = false;
  loading = false;
  ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef

  ​ngAfterViewInit(): void {
    ​const media = this.videoRef.nativeElement
    ​media.muted = true 
    ​media.play() 
  ​ } 
  ngOnInit() {
    if (this.authService.isAuthenticated) {
    }
    // this.router.navigate([DASHBOARD]);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  async signIn() {
    const { email, password } = this.loginForm.value;
    try {
      this.loading = true;
      const response = await this.authService.signIn({
        email: email ?? '',
        password: password ?? '',
      });
      const token = response.data.token;
      const user = response.data.user;
      if (response.status === statusCodes.OK && user && token) {
        this.authService.storeToken(token);
        this.authService.storeUser(user);
        this.router.navigate([PROFILE_ROUTE],{
          state:user
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === statusCodes.UNAUTHORIZED) {
          this.errorMessage = error.response?.data.message;
          console.log(this.errorMessage);
        } else {
          this.errorMessage =
            error.response?.data.error?.message ||
            'An error occurred during sign-in.';
        }
      }
    } finally {
      this.loading = false;
    }
  }
}
