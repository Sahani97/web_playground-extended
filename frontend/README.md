# Docker Setup Instructions - Web Playground Extended

## Prerequisites

#### Make sure you have the following installed:

- **Node.js** (Version 20 or higher)
- **Docker** (Version 26.1.4 or higher)
- **Docker Compose** (Version 2.27.1 or higher)


## Local Development Setup

1. **Build and start the containers**:
   ```bash
   docker-compose -f docker-compose.yml up --build

2. **Access the application**:

    Upon completed setup, the application is accessible at: http://localhost:3000
    

## Production Setup

1. **Build and start the containers**:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build

2. **Access the application**:

    Upon completed setup, the application is accessible at: http://localhost


