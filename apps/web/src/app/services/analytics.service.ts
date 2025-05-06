import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor() {}

  trackEvent(eventName: string, eventParams: { [key: string]: any }) {
    console.log(`Event tracked: ${eventName}`, eventParams);
    // Here you can add the logic to send the event data to your analytics provider
  }

  trackPageView(pageUrl: string) {
    console.log(`Page view tracked: ${pageUrl}`);
    // Here you can add the logic to send the page view data to your analytics provider
  }
}
