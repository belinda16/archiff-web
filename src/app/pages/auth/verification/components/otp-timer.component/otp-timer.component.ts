import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-otp-timer',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './otp-timer.component.html',
})
export class OtpTimerComponent implements OnInit, OnDestroy {
  @Input() duration = 60;
  @Output() timerFinished = new EventEmitter<void>();
  @Output() resend = new EventEmitter<void>();

  timeLeft = 0;
  private intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    this.timeLeft = this.duration;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.timerFinished.emit();
      }
    }, 1000);
  }

  onResend() {
    this.resend.emit();
    this.startTimer();
  }

  formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
