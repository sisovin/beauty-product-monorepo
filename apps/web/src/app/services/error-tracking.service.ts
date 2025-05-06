import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorTrackingService {
  constructor() {}

  logError(error: any) {
    console.error('Error logged:', error);
    // Here you can add the logic to send the error data to your error tracking provider
  }

  logWarning(warning: any) {
    console.warn('Warning logged:', warning);
    // Here you can add the logic to send the warning data to your error tracking provider
  }

  logInfo(info: any) {
    console.info('Info logged:', info);
    // Here you can add the logic to send the info data to your error tracking provider
  }
}
