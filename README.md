# Beauty Product Monorepo

This repository contains the code for a beauty product application. It is structured as a monorepo with separate folders for the frontend and backend.

## Repository Structure

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

## Overview

### Angular Frontend

The frontend of this application is built using Angular 19. It includes various components such as the header component, which contains the navigation bar and logo.

### NestJS Backend

The backend of this application is built using NestJS. It includes various modules such as the auth module, which handles user authentication and registration.

### Shared Library

The shared library contains common interfaces and DTOs used across the application. It includes:

- `product.interface.ts`: Defines the `Product` and `Review` interfaces.
- `user.interface.ts`: Defines the `User` interface.
- `order.interface.ts`: Defines the `Order` interface.
- `base-response.dto.ts`: Implements the `BaseResponseDto` class.
- `pagination.dto.ts`: Implements the `PaginationDto` class.

### UI Library

The UI library contains reusable UI components. It includes:

- `button.component.ts`: A reusable button component.
- `card.component.ts`: A product card component.
- `ui.module.ts`: Exports the UI components.

## Setup and Run

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

## Documentation

For detailed documentation, refer to the `docs/documentation.md` file.
