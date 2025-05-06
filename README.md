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

## Setup and Run

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

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
