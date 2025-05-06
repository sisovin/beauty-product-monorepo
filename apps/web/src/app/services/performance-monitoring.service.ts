import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerformanceMonitoringService {
  constructor() {}

  startMonitoring() {
    console.log('Performance monitoring started');
    // Here you can add the logic to start performance monitoring
  }

  stopMonitoring() {
    console.log('Performance monitoring stopped');
    // Here you can add the logic to stop performance monitoring
  }

  logPerformanceData(data: any) {
    console.log('Performance data logged:', data);
    // Here you can add the logic to log performance data
  }
}
