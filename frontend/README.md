# NPM Tracker

A full-stack web application for searching NPM packages and managing your favorite packages with persistent storage.

## 🎯 Overview

NPM Tracker is a modern web application that allows users to:
- Search for NPM packages in real-time
- View detailed package information (description, links, version, etc.)
- Save packages to their favorites list
- Manage and remove packages from favorites
- View their complete list of favorite packages

The application combines a **React + TypeScript** frontend with a **PHP + MySQL** backend, all containerized with Docker for easy deployment.

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- React 19.2.4 with TypeScript
- React Hot Toast for notifications
- CSS for styling
- Testing Library for unit tests

**Backend:**
- PHP with PDO for database abstraction
- MySQL 8.0 database
- Apache web server (via Docker)

**DevOps:**
- Docker & Docker Compose for containerization
- MySQL service container
- PHP/Apache service container

### Project Structure

```
npm-tracker/
├── frontend/                 # React TypeScript application
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FavoritesList.tsx
│   │   │   └── PackageDetails.tsx
│   │   ├── services/
│   │   │   └── api.ts        # API client
│   │   ├── styles/
│   │   │   └── style.css
│   │   ├── types.ts          # TypeScript interfaces
│   │   ├── App.tsx           # Main component
│   │   └── index.js
│   ├── package.json
│   └── tsconfig.json
├── backend/                  # PHP backend
│   ├── saveFavourite.php     # Add favorite endpoint
│   ├── getFavourite.php      # Get favorites endpoint
│   ├── deleteFavourite.php   # Remove favorite endpoint
│   └── Dockerfile
└── docker-compose.yml        # Docker services configuration
```

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose installed
- Node.js 16+ (for local frontend development)
- Git

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd npm-tracker
   ```

2. **Start Docker containers**
   ```bash
   docker-compose up -d
   ```
   This will start:
   - MySQL database at `localhost:3306`
   - PHP/Apache backend at `http://localhost:8000`

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Start the React development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/saveFavourite.php` | Add package to favorites |
| GET | `/getFavourite.php` | Get all favorite packages |
| POST | `/deleteFavourite.php` | Remove package from favorites |

## 🎨 Features

- **Real-time Search**: Debounced search with NPM registry
- **Package Information**: View package details including description, links, and version
- **Favorites Management**: Add/remove packages from your personal favorites
- **Responsive UI**: Clean and user-friendly interface
- **Toast Notifications**: Real-time feedback for all operations
- **Containerized**: Easy deployment with Docker

## 🧪 Testing

```bash
cd frontend
npm test
```

## 🔨 Building for Production

```bash
cd frontend
npm run build
```

## 📋 Potential Improvements

### Code Quality & Architecture
1. **Error Handling**
   - Add comprehensive error handling in backend PHP files
   - Implement proper HTTP status codes (400, 401, 500)
   - Add input validation and sanitization
   - Create a centralized error response format

2. **Type Safety**
   - Improve TypeScript typing - many `any` types in API responses
   - Create strict interfaces for all API responses
   - Use discriminated unions for error handling

3. **API Service Improvements**
   - Add request interceptors for centralized error handling
   - Implement retry logic for failed requests
   - Add request/response logging for debugging
   - Use AbortController for canceling requests

### Backend Enhancements
1. **Security**
   - Remove hardcoded credentials (create `.env` file)
   - Implement proper authentication/authorization
   - Add rate limiting
   - Implement CSRF protection
   - Use prepared statements consistently (already partially done)

2. **Database**
   - Add timestamps and metadata (created_at, updated_at)
   - Add user support for multi-user favorites
   - Create proper migrations system
   - Add database indexes on frequently queried columns

3. **Code Organization**
   - Create a base controller/service class
   - Implement MVC pattern properly
   - Separate database logic into repository pattern
   - Add logging system

### Frontend Enhancements
1. **State Management**
   - Consider implementing Context API or Redux for better state management
   - Move API calls to custom hooks
   - Implement proper loading states

2. **Testing**
   - Add more unit tests (currently only `utils.test.ts`)
   - Add integration tests
   - Add E2E tests
   - Improve test coverage

3. **Performance**
   - Implement pagination for large favorites lists
   - Add search results pagination
   - Implement local caching of favorites
   - Consider virtual scrolling for large lists

4. **UX/UI**
   - Add loading skeletons
   - Implement empty states
   - Add sort/filter options for favorites
   - Add dark mode support
   - Improve accessibility (ARIA labels, keyboard navigation)
   - Add package version history/tags

### DevOps & Deployment
1. **Docker**
   - Add environment configuration files (.env)
   - Add health checks to containers
   - Implement multi-stage builds to reduce image size
   - Add container logging

2. **Development**
   - Add database initialization script
   - Create proper `.gitignore`
   - Add pre-commit hooks
   - Implement CI/CD pipeline (GitHub Actions)

3. **Documentation**
   - Add API documentation (Swagger/OpenAPI)
   - Add contributing guidelines
   - Add deployment guide
   - Add troubleshooting guide

### Features to Add
1. **User Management**
   - User registration and login
   - Personal favorite collections
   - Share favorites with others

2. **Enhanced Search**
   - Advanced filtering (by date, downloads, maintainer)
   - Search history
   - Popular packages dashboard

3. **Package Insights**
   - Package statistics (downloads, stars)
   - Vulnerability scanning
   - Dependency analysis
   - Version comparisons

4. **Additional Features**
   - Export favorites (JSON, CSV)
   - Package notifications (new versions)
   - Comments/notes on packages
   - Favorites collections/grouping

## 📝 Notes

- Database credentials are currently hardcoded - this should be moved to environment variables
- The application is set up for local development; production deployment requires additional configuration
- CORS is currently allowing all origins - should be restricted in production

## 📄 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here]
