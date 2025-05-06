import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <img [src]="image" alt="{{ title }}" class="card-img">
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <p class="card-price">{{ price | currency }}</p>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .card-img {
      width: 100%;
      height: auto;
    }
    .card-body {
      padding: 16px;
    }
    .card-title {
      font-size: 1.25rem;
      margin-bottom: 8px;
    }
    .card-description {
      font-size: 1rem;
      margin-bottom: 16px;
    }
    .card-price {
      font-size: 1.25rem;
      font-weight: bold;
    }
  `]
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: number;
}
