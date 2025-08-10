

# 🍽️ Savor Backend - Express Server

This is the backend server for **Savor**, a restaurant management system. It provides RESTful API endpoints for handling food items, user-specific food listings, purchases, and orders. It is built with **Express.js**, **MongoDB**, and **Firebase Admin SDK** for secure JWT authentication.

This server handles food management, user authentication, order handling, top foods sorting, and secure data operations.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)

---

<br/>

## 🔗 Live Server

- **API Base URL:** [https://savor-server.vercel.app](https://savor-server.vercel.app)
- 🔗 **Client (Frontend)**: [https://savor-client.vercel.app](https://savor-client.vercel.app) 

---

<br/>

## 🎯 Purpose

To serve secure, scalable, and RESTful endpoints for the Savor web application. This server handles:

- Creating and managing food items
- Handling food purchases
- Managing personal listings and orders
- Authenticating users securely using Firebase JWT

---

<br/>

## ✨ Key Features

- 🔐 **Firebase JWT Authentication**: Verifies user identity using Firebase ID tokens.
- 🚫 **401 Unauthorized Handling**: Blocks unauthenticated requests.
- 🚷 **403 Forbidden Handling**: Prevents users from modifying or deleting other users' data.
- 🥘 **Food Management**: Add, update, delete, and retrieve food items.
- 🛒 **Order Management**: Purchase, view, and delete orders.
- 📊 **Top Foods Sorting**: Sort food by purchase count.
- 🔍 **Searchable Food List**: Supports case-insensitive search by food name.
- 🧠 **Secure Token Flow**: Firebase token passed via headers and validated on each protected route.

---

<br/>

## 🧰 Technologies Used

| Technology       | Description                                   |
|------------------|-----------------------------------------------|
| Node.js          | JavaScript runtime environment for server-side development |
| Express.js       | Web application framework for Node.js         |
| MongoDB          | NoSQL document database                        |
| Firebase         | Authentication services via Firebase Admin SDK|
| REST API         | Architectural style for API endpoints          |

---

<br/>

## 📦 Dependencies

| Package         | Purpose                                       |
|-----------------|-----------------------------------------------|
| express         | Web framework for Node.js                      |
| mongodb         | Official MongoDB Node.js driver                |
| firebase-admin  | Firebase Admin SDK for server-side auth       |
| cors            | Middleware to enable Cross-Origin Resource Sharing |
| dotenv          | Loads environment variables from `.env` files |

---

<br/>

## 🛡️ Security & Authentication

All sensitive routes are protected using Firebase JWT tokens:

- Tokens are sent via request headers.
- Middleware (`verifyFirebase`) decodes and validates tokens using Firebase Admin SDK.
- If token is missing or invalid: returns `401 Unauthorized`.
- If user tries to modify unauthorized data: returns `403 Forbidden`.

---

<br/>

## 📁 API Endpoints

### Public Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Server status check |
| GET | `/insertAllFoods` | Inserts dummy food data (once) |
| GET | `/foods` | Get all food items, with optional title search |
| GET | `/food?id=ID` | Get a specific food item by ID |
| GET | `/top-foods` | Get top 6 foods by purchase count |

### Protected Endpoints *(require valid Firebase token in `Authorization` header)*
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/foods` | Add a new food (only by authenticated user) |
| GET | `/foods/my-foods?ownerEmail=email` | Get all foods added by the user |
| DELETE | `/foods/my-foods?id=ID` | Delete a user's food item |
| PUT | `/foods/my-foods?id=ID` | Update a user's food item |
| PUT | `/food/stock?id=ID` | Update stock and purchase count of a food |
| POST | `/food/purchase` | Purchase a food item (only if not user's own) |
| GET | `/my-orders?email=email` | Get the user's purchase orders |
| DELETE | `/my-orders?id=ID` | Delete a specific order |

---

<br/>

# 🚀 Savor-Server - Local Development Setup Guide
Follow these steps to run the Savor project on your local machine.

## Prerequisites
- Node.js (v16 or higher recommended)
- npm 
- Git


## Step-by-Step Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/ArunRoy404/Savor-Server.git
   cd Savor-Server
   ```

2. **Set up environment variables**
    Create a .env file in the root directory and add the following variables with your own credentials:

    ```bash
        DB_USER=your_db_username
        DB_PASS=your_db_password
        FB_SERVICE_KEY=your_firebase_admin_key_base64_encoded
    ```

    You'll need to:
    - Create a Firebase project at https://firebase.google.com/


3. **Install dependencies**
   ```bash
        npm install
   ```
    
4. **Run The Development Server**
   ```bash
        node index.js
        # or
        nodemon index.js
   ```

5. **Access the application**
    Open your browser and visit: http://localhost:3000
