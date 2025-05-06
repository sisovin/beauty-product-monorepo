import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logInfo(message: string) {
    console.info('Info:', message);
    // Here you can add the logic to send the info log to your logging provider
  }

  logWarning(message: string) {
    console.warn('Warning:', message);
    // Here you can add the logic to send the warning log to your logging provider
  }

  logError(message: string) {
    console.error('Error:', message);
    // Here you can add the logic to send the error log to your logging provider
  }
}
