import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class OtpFlowService {
  private email?: string;

  setIdentifier(value: string) {
    this.email = value;
  }

  getIdentifier(): string | undefined {
    return this.email;
  }

  clear() {
    this.email = undefined;
  }
}