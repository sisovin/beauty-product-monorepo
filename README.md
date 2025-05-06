# Beauty Product Monorepo

Welcome to the **Beauty Product Monorepo**, a repository designed to house both frontend and backend applications for a beauty products platform. This repository is structured as a **monorepo**, enabling seamless collaboration, code sharing, and development across multiple projects.

---

## Table of Contents

- [Monorepo Organization](#monorepo-organization)
- [Frontend (Angular 19)](#frontend-angular-19)
- [Backend (NestJS)](#backend-nestjs)
- [Shared Libraries](#shared-libraries)
- [Tooling](#tooling)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Monorepo Organization

This monorepo is organized into two main directories:

- `apps/`: Contains both the **frontend** (web) and **backend** (api) applications.
- `libs/`: Contains reusable **shared code** that can be utilized by both applications.

This structure ensures code reusability, modularity, and efficient development workflows.

---

## Frontend (Angular 19)

The frontend application is built using **Angular 19**, leveraging modern web development practices. Key features include:

- **Component-based architecture**: A clear separation of concerns for scalable and maintainable code.
- **Feature modules**: Organized modules for better encapsulation and modularity.
- **Services**: Centralized business logic for reusable and testable code.
- **Models**: Strongly typed models for improved type safety and consistency.

### Key Directories

- `apps/web`: Angular frontend application.
- `libs/ui`: Shared library for reusable UI components.

---

## Backend (NestJS)

The backend application is powered by **NestJS**, a progressive Node.js framework for building efficient and scalable server-side applications. Key features include:

- **Modular architecture**: Following NestJS conventions to keep the codebase organized and scalable.
- **Domain-driven structure**: Separate modules for key domains such as:
  - **Auth**: User authentication and authorization.
  - **Products**: Product management.
  - **Orders**: Order processing and management.
  - **Users**: User profiles and data management.
- **Prisma ORM**: Leveraging Prisma for intuitive and efficient database access.
- **Shared DTOs**: Ensuring consistent request/response validation across services.

### Key Directories

- `apps/api`: NestJS backend application.
- `libs/shared`: Shared library for common interfaces and DTOs.

---

## Shared Libraries

The `libs/` directory contains libraries that are shared between the frontend and backend applications, promoting reusability and consistency:

- **`shared`**: Contains common interfaces and DTOs used across the monorepo.
- **`ui`**: Houses reusable UI components for the Angular frontend.

---

## Tooling

This repository uses modern tools to ensure efficient development workflows and maintain high code quality:

- **Nx Workspace**: For managing the monorepo and facilitating dependency graph visualization, caching, and task execution.
- **ESLint**: For enforcing consistent coding standards.
- **Prettier**: For automatic code formatting.
- **Jest**: For unit and integration testing across both applications.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Nx CLI](https://nx.dev/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sisovin/beauty-product-monorepo.git
   cd beauty-product-monorepo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Serve the applications:
   - Frontend:
     ```bash
     nx serve web
     ```
   - Backend:
     ```bash
     nx serve api
     ```

4. Access the frontend in your browser and the backend at the provided API URL.

---

## Contributing

We welcome contributions to the Beauty Product Monorepo! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
