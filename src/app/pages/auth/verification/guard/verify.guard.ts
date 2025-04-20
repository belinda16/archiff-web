import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { OtpFlowService } from "../../../../services/otp/otp-flow-service.service";

@Injectable({ providedIn: 'root' })
export class OtpGuard implements CanActivate {
  constructor(private otpFlow: OtpFlowService, private router: Router) {}

  canActivate(): boolean {
    if (this.otpFlow.getIdentifier()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}