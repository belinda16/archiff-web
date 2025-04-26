import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WaterMarkTextComponent } from "../../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { statusCodes } from '../../../constants/status-codes';
import { AxiosError } from 'axios';
import { LoaderComponent } from "../../../components/loader/loader.component";

@Component({
  selector: 'login-seller-code',
  imports: [WaterMarkTextComponent, HeaderComponent, FormsModule, FooterComponent, CommonModule, LoaderComponent],
  templateUrl: './seller-code.component.html',
  styleUrl: './seller-code.component.css'
})
export class LoginSellerCodeComponent {
  loading = false;
  sellerCode="";
  authService = inject(AuthService);
  errorMessage = "";
  success = false;
  constructor(private router: Router) {}

  async validateSellerCode(){
    try {
      this.loading = true;
      try {
        const response = await this.authService.validateSellerCode(this.sellerCode);
        if (response.status === statusCodes.OK && response.data.success) {
          this.success = response.data.success;
          this.router.navigate(["/seller"],{state:{success:this.success}});
          return;
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const status = error.response?.status;
          if (status === statusCodes.UNAUTHORIZED) {
            this.errorMessage = "Please sign in to access dashboard";
            setTimeout(() => this.router.navigate(['/login']), 2000);
          } else if (status === statusCodes.BAD_REQUEST) {
              this.errorMessage = this.sellerCode ? "Invalid code provided." : "Code is required";
          }
        }
      }
    } finally {
      this.loading = false;
    }
  }
}
