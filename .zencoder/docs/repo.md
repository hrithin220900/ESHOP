# ESHOP Repository Information Overview

## Repository Summary

ESHOP is a microservices-based e-commerce application built with Nx workspace. It consists of multiple services including an authentication service, API gateway, and a Next.js-based user interface. The project uses TypeScript throughout and follows a modular architecture.

## Repository Structure

- **apps/**: Contains the main applications (auth-service, api-gateway, user-ui)
- **packages/**: Shared libraries and middleware components
- **prisma/**: Database schema and configuration
- **generated/**: Auto-generated Prisma client code

### Main Repository Components

- **auth-service**: Authentication microservice
- **api-gateway**: API gateway for routing requests
- **user-ui**: Next.js frontend application
- **packages/libs**: Shared libraries for database and Redis

## Projects

### Auth Service

**Configuration File**: apps/auth-service/package.json

#### Language & Runtime

**Language**: TypeScript
**Version**: TypeScript ~5.7.2
**Build System**: Nx with Webpack
**Package Manager**: npm

#### Dependencies

**Main Dependencies**:

- Express.js for API server
- Prisma for database ORM
- jsonwebtoken for authentication
- bcryptjs for password hashing
- swagger-ui-express for API documentation

#### Build & Installation

```bash
npx nx build auth-service
npx nx serve auth-service
```

#### Docker

**Dockerfile**: apps/auth-service/Dockerfile
**Image**: Node.js LTS Alpine
**Configuration**: Exposes port 3000, runs as non-root user

#### Testing

**Framework**: Jest
**Test Location**: apps/auth-service/src/**/\*.spec.ts
**Run Command\*\*:

```bash
npx nx test auth-service
```

### API Gateway

**Configuration File**: apps/api-gateway/package.json

#### Language & Runtime

**Language**: TypeScript
**Version**: TypeScript ~5.7.2
**Build System**: Nx with Webpack
**Package Manager**: npm

#### Dependencies

**Main Dependencies**:

- Express.js
- express-http-proxy for service routing
- cors for cross-origin resource sharing

#### Build & Installation

```bash
npx nx build api-gateway
npx nx serve api-gateway
```

### User UI

**Configuration File**: apps/user-ui/package.json

#### Language & Runtime

**Language**: TypeScript
**Version**: TypeScript ~5.7.2
**Framework**: Next.js ~15.1.4
**Build System**: Nx with Next.js
**Package Manager**: npm

#### Dependencies

**Main Dependencies**:

- React 19.0.0
- Next.js ~15.1.4
- @tanstack/react-query for data fetching
- react-hook-form for form handling
- Tailwind CSS for styling

#### Build & Installation

```bash
npx nx build user-ui
npx nx dev user-ui
```

### Database (Prisma)

**Configuration File**: prisma/schema.prisma

#### Specification & Tools

**Type**: MongoDB
**ORM**: Prisma 6.10.0
**Models**: Users, Images

#### Key Resources

**Main Files**:

- prisma/schema.prisma: Database schema definition
- packages/libs/prisma: Shared Prisma utilities

#### Usage & Operations

```bash
npx prisma generate
npx prisma db push
```

### Shared Libraries

**Configuration Files**: packages/\*/package.json

#### Language & Runtime

**Language**: TypeScript
**Build System**: Nx with TypeScript

#### Key Resources

**Main Components**:

- error-handler: Error handling middleware
- middleware: Shared Express middleware
- libs/prisma: Prisma client utilities
- libs/redis: Redis client utilities
