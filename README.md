
# **Frontend Application for EasyGene-AppGenerator**

This repository contains the frontend code for the **EasyGene** platform. It is built with **Next.js**, **TypeScript**, and **TailwindCSS**. The project provides a robust user authentication system, protected routes, and a dynamic dashboard for logged-in users.

---

## **Table of Contents**

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Authentication Flow](#authentication-flow)
- [Components Overview](#components-overview)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## **Tech Stack**

- **Next.js** - React framework for server-side rendering and static site generation.
- **TypeScript** - Strongly typed JavaScript for improved developer experience.
- **TailwindCSS** - Utility-first CSS framework for rapid UI development.
- **Axios** - HTTP client for API requests.
- **Aceternity UI** - A custom design system with reusable components.
- **Framer Motion** - Animation library for React.

---

## **Features**

- **Authentication**:
  - Signup and Login functionality with access and refresh tokens.
  - Protected routes with token-based authorization.

- **Dashboard**:
  - Displays user information and a list of products.

- **Responsive Design**:
  - Mobile-first and optimized for all devices.

- **Reusable Components**:
  - Built using modular and reusable React components.

- **Error Handling**:
  - Friendly error messages using `Alert` components.

---

## **Setup and Installation**

### **1. Prerequisites**
- Node.js (v16 or above)
- npm or yarn

### **2. Clone the Repository**
```bash
git clone https://github.com/harshitanand/easygen.git
cd easygen
```

### **3. Install Dependencies**
```bash
npm install
# OR
yarn install
```

### **4. Set Up Environment Variables**
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

### **5. Start the Development Server**
```bash
npm run dev
# OR
yarn dev
```

Visit `http://localhost:3000` to access the application.

---

## **Folder Structure**

```plaintext
src
├── app
│   ├── auth            # Authentication-related pages (Login, Signup)
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── signup
│   │   │   └── page.tsx
│   │   └── common.tsx   # Shared logic between login and signup
│   │   └── layout.tsx   # Layout for auth pages
│   ├── dashboard        # Dashboard page
│   │   └── page.tsx
│   └── layout.tsx       # Global layout
│   └── page.tsx         # Root page
├── components
│   ├── ui               # Reusable UI components
│   │   ├── alert.tsx    # Alert component for errors and messages
│   │   ├── background-beams-with-collision.tsx
│   │   ├── hero-parallax.tsx
│   │   ├── input.tsx    # Input component
│   │   ├── label.tsx    # Label component
│   │   └── typewriter-effect.tsx
├── lib                  # Utility and configuration files
│   ├── axiosInstance.ts # Axios setup for API requests
│   └── utils.ts         # Utility functions
├── public               # Static assets (e.g., favicon, images)
├── styles               # Global styles and Tailwind configuration
│   ├── globals.css
│   ├── tailwind.config.ts
├── .env.local           # Environment variables (ignored in git)
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

---

## **Environment Variables**

| Variable Name              | Description                              |
|----------------------------|------------------------------------------|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for backend API (e.g., localhost:8000/api/v1). |

---

## **Authentication Flow**

1. **Signup**:
   - Users can create an account on the `/auth/signup` page.
   - On success, the access token is stored in memory and `localStorage`.

2. **Login**:
   - Users log in on the `/auth/login` page.
   - On success, the access token is stored and the user is redirected to `/dashboard`.

3. **Protected Routes**:
   - Accessing `/dashboard` requires a valid access token.
   - If the token is missing or invalid, the user is redirected to `/auth/login`.

4. **Token Refresh**:
   - If the access token expires, the application automatically refreshes it using a refresh token stored as an HTTP-only cookie.

---

## **Components Overview**

### **Key Components**
1. **`Alert`**:
   - Displays error and success messages.
   - Props:
     - `type`: `'error'` or `'success'`.
     - `dismissible`: Boolean to enable dismissal.

2. **`Input` and `Label`**:
   - Reusable form input and label components.

3. **`HeroParallax`**:
   - Dynamic parallax effect for the dashboard.

4. **`axiosInstance`**:
   - Configured with interceptors to handle authentication tokens and API requests.

---

## **Usage**

### **Start Development Server**
```bash
npm run dev
```

### **Navigate**
1. `/login`: Login page.
2. `/signup`: Signup page.
3. `/dashboard`: User dashboard (requires login).

---

## **API Endpoints**

The frontend communicates with the following backend endpoints:

| Endpoint               | Method | Description                             |
|------------------------|--------|-----------------------------------------|
| `/users/signup`        | POST   | Create a new user account.              |
| `/users/login`         | POST   | Authenticate user and get tokens.       |
| `/users/me`            | GET    | Get details of the authenticated user.  |

---

## **License**

This project is licensed under the MIT License.
