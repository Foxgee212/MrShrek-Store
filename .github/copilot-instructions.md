# Copilot Instructions for MrShrek Store

## Project Overview
- **Stack:** React (frontend), Vite (build tool), Node.js/Express (API in `src/server.js`)
- **Structure:**
  - `src/components/`: Reusable UI components (e.g., `Navbar`, `ProductCard`, `SidebarFilters`)
  - `src/pages/`: Route-level views (e.g., `Home`, `Product`, `Cart`, `AdminDashboard`)
  - `src/context/`: React Contexts for state management (e.g., `AuthContext`, `CartContext`, `OrderContext`, `AdminContext`)
  - `src/data/products.js`: Static product data
  - `public/Iphones/`: Product images
  - `src/server.js`: Express server for API endpoints

## Key Patterns & Conventions
- **Component Structure:**
  - Use functional components and hooks (no class components)
  - Props are passed explicitly; context is used for global state
  - UI logic is separated into components, business logic into context/providers
- **State Management:**
  - Use React Context for cart, auth, admin, and order state
  - Contexts are initialized in `src/context/` and consumed via hooks
- **Routing:**
  - Page components in `src/pages/` are mapped to routes (see main app entry)
- **API Integration:**
  - Local API endpoints are defined in `src/server.js` (Express)
  - Frontend fetches data from these endpoints (see usage in context/providers)
- **Assets:**
  - Product images are referenced from `public/Iphones/`
  - Use relative paths for images in components

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (Vite dev server)
- **Build for Production:**
  - `npm run build`
- **Preview Production Build:**
  - `npm run preview`
- **Run Backend API:**
  - `node src/server.js` (if using Express API)
- **Linting:**
  - `npm run lint` (ESLint config in `eslint.config.js`)

## Integration Points
- **Frontend/Backend:**
  - Frontend fetches from Express endpoints (see `src/server.js`)
  - No database integration; uses static data in `src/data/products.js`
- **External Dependencies:**
  - React, Vite, Express, ESLint (see `package.json`)

## Examples
- **Add a new product:**
  - Update `src/data/products.js` and add image to `public/Iphones/`
- **Add a new page:**
  - Create a component in `src/pages/` and add route in main app file
- **Extend context:**
  - Add new context/provider in `src/context/` and wrap in `App.jsx`

## Tips for AI Agents
- Always use functional components and hooks
- Reference context for global state, not props drilling
- Keep UI logic in components, business/data logic in context/providers
- Use relative imports for assets and modules
- Follow naming conventions: PascalCase for components, camelCase for functions/variables

---
If any section is unclear or missing, please ask for clarification or provide feedback to improve these instructions.
