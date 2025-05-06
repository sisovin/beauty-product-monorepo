# Beauty Product Monorepo Documentation

## Overview

The Beauty Product Monorepo is a comprehensive project that includes both frontend and backend applications. The frontend is built using Angular 19, while the backend is built using NestJS. The project also includes shared libraries for common interfaces and DTOs, as well as a UI library for reusable components.

## Project Structure

```
.
├── .nx/
├── apps/
│   ├── web/                   # Angular 19 Frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   ├── header/
│   │   │   │   │   │   ├── header.component.ts
│   │   │   │   │   │   ├── header.component.html
│   │   │   │   │   │   ├── header.component.scss
│   │   │   │   │   │   └── header.component.spec.ts
│   └── api/                   # NestJS Backend
│       ├── src/
│       │   ├── auth/
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.service.ts
│       │   │   ├── auth.module.ts
│       │   ├── main.ts
│       │   ├── app.module.ts
│       ├── project.json
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       └── tsconfig.spec.json
├── libs/
│   ├── shared/                # Shared Library
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── product.interface.ts
│   │   │   │   │   ├── user.interface.ts
│   │   │   │   │   ├── order.interface.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── base-response.dto.ts
│   │   │   │   │   ├── pagination.dto.ts
│   ├── ui/                    # UI Library
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.component.ts
│   │   │   │   ├── card/
│   │   │   │   │   ├── card.component.ts
│   │   │   │   ├── ui.module.ts
├── .eslintrc.json
├── .prettierrc
├── angular.json
├── nx.json
├── package.json
├── tsconfig.base.json
└── README.md
```

## Shared Library (`libs/shared/`)

### Interfaces

#### `product.interface.ts`

Defines the `Product` and `Review` interfaces.

```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  userId: string;
  comment: string;
  rating: number;
}
```

#### `user.interface.ts`

Defines the `User` interface.

```typescript
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

#### `order.interface.ts`

Defines the `Order` interface.

```typescript
export interface Order {
  id: string;
  userId: string;
  productIds: string[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}
```

### DTOs

#### `base-response.dto.ts`

Implements the `BaseResponseDto` class.

```typescript
export class BaseResponseDto<T> {
  statusCode: number;
  message: string;
  data: T;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
```

#### `pagination.dto.ts`

Implements the `PaginationDto` class.

```typescript
export class PaginationDto<T> {
  page: number;
  limit: number;
  totalItems: number;
  items: T[];

  constructor(page: number, limit: number, totalItems: number, items: T[]) {
    this.page = page;
    this.limit = limit;
    this.totalItems = totalItems;
    this.items = items;
  }
}
```

## UI Library (`libs/ui/`)

### Components

#### `button.component.ts`

A reusable button component.

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">{{ label }}</button>
  `,
  styles: [`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class ButtonComponent {
  @Input() label: string;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
```

#### `card.component.ts`

A product card component.

```typescript
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
```

### Module

#### `ui.module.ts`

Exports the UI components.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, CardComponent]
})
export class UiModule {}
```

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (optional, for containerized setup)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   ```
2. Navigate to the project directory:
   ```
   cd workspace-blank
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

#### Frontend

1. Navigate to the frontend directory:
   ```
   cd apps/web
   ```
2. Start the Angular development server:
   ```
   npm start
   ```

#### Backend

1. Navigate to the backend directory:
   ```
   cd apps/api
   ```
2. Start the NestJS development server:
   ```
   npm run start:dev
   ```

### Docker Setup

1. Build the Docker image:
   ```
   docker build -t beauty-product-monorepo .
   ```
2. Run the Docker container:
   ```
   docker run -p 3000:3000 beauty-product-monorepo
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
NODE_ENV=development
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

### Testing

#### Frontend

1. Navigate to the frontend directory:
   ```
   cd apps/web
   ```
2. Run the tests:
   ```
   npm test
   ```

#### Backend

1. Navigate to the backend directory:
   ```
   cd apps/api
   ```
2. Run the tests:
   ```
   npm test
   ```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Additional Tasks

### SEO Optimization

Implement SEO optimization by adding meta tags and structured data to the frontend application.

### Analytics Tracking

Set up analytics tracking using a service like Google Analytics or Mixpanel.

### Error Tracking

Create an error tracking service to log and monitor errors in the application.

### Performance Monitoring

Implement performance monitoring to track the application's performance and identify bottlenecks.

### Logging System

Set up a logging system to capture and store logs for debugging and auditing purposes.
