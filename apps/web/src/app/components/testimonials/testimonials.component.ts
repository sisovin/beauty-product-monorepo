import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      user: 'John Doe',
      review: 'This product is amazing! Highly recommend it.',
      rating: 5
    },
    {
      user: 'Jane Smith',
      review: 'Good quality, but a bit expensive.',
      rating: 4
    },
    {
      user: 'Alice Johnson',
      review: 'Not satisfied with the product. It did not meet my expectations.',
      rating: 2
    }
  ];

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 3000);
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }
}
