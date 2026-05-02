# clinic-management-backend

<p align="center">
  <img src="images/health-tech.png" alt="HealthTech Logo" width="140"/>
</p>

<h1 align="center">HealthTech – Clinic Management Backend API</h1>

<p>
  A secure, modular, and role-based REST API powering the <b>HealthTech: Clinic Management System</b>.
  <br/>
  Built using <b>Node.js</b>, <b>Express</b>, <b>Sequelize ORM</b>, and <b>MySQL</b>, with support for multi-environment configuration,
  scalable design, and modern Docker-based deployment.
</p>

# 📚 Table of Contents

1. [🏥 About the Backend](#-about-the-backend)
2. [🧱 Technology Stack](#-technology-stack)
3. [🏛️ System Architecture](#️-system-architecture)
4. [🗂️ Folder Structure](#-folder-structure)
5. [⚙️ Environment Configuration](#️-environment-configuration)
6. [💻 Getting Started with the Server](#-getting-started-with-the-server)
7. [🧪 API Overview](#-api-overview)
8. [🔮 Future Enhancements](#-future-enhancements)
9. [👤 Author](#-author)


# 🏥 About the Backend

The **Clinic Management Backend API** serves as the core engine of the HealthTech platform. It manages all server-side operations, ensuring secure, efficient, and reliable communication between the frontend application and the underlying database. Designed with scalability and modularity in mind, the backend handles all business logic required for day-to-day clinical workflows.

At its foundation, the backend provides robust **authentication and authorization** using JWT, enabling secure login and protecting sensitive healthcare data. A **role-based access control system** ensures that each type of user—Admin, Doctor, Lab Technician, and Front Office Staff—has appropriate permissions for interacting with various modules.

The API supports complete **patient management**, doctor availability, scheduling logic, **appointment handling**, and medical workflows such as **lab test processing** and reporting. Administrative features like **staff management**, billing operations, and event handling are also integrated to deliver a comprehensive clinical management solution.

With seamless **MySQL integration** (via Sequelize ORM) and multi-environment configuration using `.env` files, the backend is highly flexible and fully containerized using Docker, ensuring consistent performance across development and deployment environments.


# 🧱 Technology Stack

| Layer | Tools |
|------|--------|
| **Runtime** | Node.js (v14) |
| **Framework** | Express.js |
| **ORM** | Sequelize |
| **Database** | MySQL (Dockerized) / SQLite (Local Dev) |
| **Auth** | JWT-based Authentication |
| **Deployment** | Docker + Docker Compose |
| **Environment Management** | dotenv with 3-file configuration |
| **Logging** | Console logs + Docker logs |
| **Architecture** | MVC + DAO Layer |

# 🏛️ System Architecture

The backend follows a clean and modular architecture designed to separate concerns and keep the codebase scalable.  
At a high level, the backend uses a structured combination of:

- **Routes** – Define API endpoints and map them to controllers  
- **Controllers** – Handle request validation, processing, and responses  
- **DAO Layer** – Encapsulates all database queries using Sequelize  
- **Models** – Represent database tables using Sequelize ORM  
- **Config Layer** – Database connection handling and environment loading  
- **Services (future expansion)** – Ideal place for reusable business logic

This layered architecture ensures:

- Maintainability  
- Reusability  
- Easy debugging  
- Clear separation between business logic and data access  

## 🗄️ Database Architecture (ERD)

Below is the **Entity Relationship Diagram (ERD)** used by the backend.  
It describes how the major entities—Patients, Doctors, Staff, Lab Technicians, Appointments, and Reports—connect to each other.

<p align="center">
  <img src="images/erd-schema.png" alt="Database ERD Diagram" width="900"/>
</p>

The system supports:

- **Multiple user roles**, each linked to specific functionality  
- **Doctor–patient relationships**  
- **Appointment scheduling**  
- **Lab processing workflows**  
- **Billing and administrative records**  

This ERD forms the foundation for the Sequelize models in the backend.

# 📁 Folder Structure

The backend is organized using a clean MVC + DAO architecture.  
Below is the folder tree with explanations for each major directory:

```
Clinic_Management_Backend/
│
├── config/
│   ├── database.js          # Sequelize database connection (MySQL/SQLite)
│   └── env.js (optional)    # Centralized environment loader
│
├── controllers/             # Handles request logic and response formatting
│   ├── patient.controller.js
│   ├── doctor.controller.js
│   ├── appointment.controller.js
│   └── ...
│
├── dao/                     # Data Access Layer (Sequelize queries)
│   ├── patient.dao.js
│   ├── doctor.dao.js
│   └── ...
│
├── models/                  # Sequelize models representing database tables
│   ├── patient.model.js
│   ├── doctor.model.js
│   ├── appointment.model.js
│   └── ...
│
├── routes/                  # API routes (maps URLs → controllers)
│   ├── index.js
│   ├── patient.routes.js
│   ├── doctor.routes.js
│   └── ...
│
├── seed.js                  # Seeds roles, users, doctors, staff, etc.
│
├── Dockerfile.dev           # Dockerfile for development container
├── docker-compose.yml       # Docker orchestration (backend + MySQL)
│
├── .env                     # Global runtime variables (e.g., PORT)
├── .env.mysql               # Environment for MySQL deployments (Docker)
├── .env.sqlite              # Environment for SQLite local development
│
└── index.js                 # Backend application entrypoint
```

# ⚙️ Environment Configuration

The backend uses **three environment files**, each responsible for a different setup.  
You can edit these files to change database settings, server ports, and secrets.

### **1. `.env` — Main Runtime Environment**
This file contains global settings for the backend.

```
PORT=4000
```

**Used for:**
- Setting the backend server port  
- Docker Compose port mapping  



### **2. `.env.mysql` — MySQL (Docker Environment)**
This file is used when the backend runs inside Docker with MySQL.

```
DB_SCHEMA=clinic
DB_USER=clinicuser
DB_PASSWORD=clinicpass
DB_HOST=mysql
DB_PORT=3306
TOKEN_SECRET=your-secret
```

**Used for:**
- Database credentials  
- JWT secret  
- MySQL container configuration  


### **3. `.env.sqlite` — SQLite (Local Development)**
Used when running the backend locally without Docker.

```
DB_DIALECT=sqlite
DB_STORAGE=./local.sqlite
DB_PORT=4001
```

**Used for:**
- Lightweight local database  
- Local development without MySQL  

# 🚀 Getting Started with the Server

This section explains how to run the Clinic Management Backend in two ways:

- **Using Docker (Recommended)**
- **Running Locally without Docker**

Both options are simple and depend on which environment you prefer for development or deployment.


## 🐳 Running with Docker (Recommended)

Using Docker provides the most consistent environment.  
It automatically starts both:

- The **backend server**
- The **MySQL database**

### ✅ Prerequisites

- Docker installed   
- `.env` and `.env.mysql` files present in the project root

### ▶️ Start the server with Docker

Run:

```
docker compose up --build
```

This will:
- Build the backend container  
- Start the MySQL database  
- Load environment variables  
- Run the backend on the port specified in `.env`

By default, the server is available at:

```
http://localhost:4000
```

(Or whichever port you set inside `.env`)


# 💻 Running the Backend Locally

When running the backend **without Docker**, the system automatically uses **SQLite**, based on the npm scripts already defined in `package.json`.


## ▶️ 1. Install dependencies

```bash
npm install
```

## ▶️ 2. Run the backend locally with SQLite

Simply run:

```bash
npm run start-sqlite
```

This will:

- Set `NODE_ENV=sqlite`
- Load `.env` (global settings like `PORT`)
- Load `.env.sqlite` (SQLite configuration)
- Automatically create the SQLite database file if it doesn't exist

The backend will start on the port defined in `.env`.


## 🔄 Environment Switching

| Mode | Command | Uses File | Database |
|------|---------|-----------|----------|
| **Docker / MySQL** | `npm start` | `.env.mysql` | MySQL |
| **Local / SQLite** | `npm run start-sqlite` | `.env.sqlite` | SQLite |
| **Development** | `npm run dev` | Depends on `.env` files | Same as above |

The backend will always load:

1. `.env` first (for PORT)  
2. `.env.<NODE_ENV>` next (for DB settings)

This ensures consistent and predictable behavior in all environments.

# 🧪 API Overview

The Clinic Management Backend provides a structured REST API to support all major workflows of the HealthTech system.  
Below is a simplified overview of the key API groups and their common endpoints.


## 🔐 Authentication

```
POST /login
```

Used by all user roles (Admin, Doctor, Front Office, Lab Technician) to log into the system and receive a JWT token.


## 🧑‍⚕️ Doctors

```
GET /doctors                   # List all doctors
GET /doctors/:id               # Fetch doctor by ID
GET /doctors/email/:email      # Fetch doctor by email
POST /doctors                  # Create new doctor
PUT /doctors/:id               # Update doctor details
DELETE /doctors/:id            # Remove doctor
```


## 🧑‍🦽 Patients

```
GET /patients                  # List all patients
GET /patients/:id              # Fetch patient details
POST /patients                 # Add new patient
PUT /patients/:id              # Update patient information
DELETE /patients/:id           # Remove patient
```


## 📅 Appointments

```
POST /appointments             # Create appointment
GET /appointments              # List all appointments
GET /appointments/:id          # Appointment details
GET /appointments/doctor/:id   # Appointments for a doctor
DELETE /appointments/:id       # Cancel appointment
```


## 🧪 Lab Reports

```
GET /labreports                # List all lab reports
GET /labreports/:id            # Get a specific report
POST /labreports               # Create a new lab report
PUT /labreports/:id            # Update report
DELETE /labreports/:id         # Delete report
```


## 👥 Staff

```
GET /staff                     # List all staff
POST /staff                    # Add staff member
PUT /staff/:id                 # Update staff details
DELETE /staff/:id              # Remove staff
```


## 📣 Events

```
GET /events                    # List events
POST /events                   # Create new event
DELETE /events/:id             # Remove event
```


## 🧾 Billing

```
GET /billing                   # List all bills
POST /billing                  # Create invoice
GET /billing/:id               # Invoice details
```


### ✔ General Notes

- All protected routes require a valid **JWT token**.
- Response data is generally returned in:
```
{
  success: true/false,
  message: "...",
  data: {...}
}
```
- Doctors and staff records are automatically linked to user accounts where applicable.

This overview provides a quick reference to understand the backend’s main capabilities.

# 🔮 Future Enhancements

The backend is fully functional, but there are several improvements planned to enhance performance, maintainability, and scalability. Below is a brief list of potential future enhancements:


### 🚀 1. Input Validation with Zod or Joi
Add schema-based validation for all incoming requests to ensure strict data integrity and consistent error handling.


### 🧱 2. Service Layer Integration
Move business logic out of controllers into a dedicated **service layer** to improve maintainability and code reuse.


### 📘 3. Swagger / OpenAPI Documentation
Provide interactive API documentation to assist developers and external systems in integrating with the backend.


### ⚡ 4. Redis Caching
Introduce caching for frequently accessed data (doctor lists, appointments, patient history) to improve response times.


### 🧪 5. Sequelize Migrations
Replace auto-sync with structured database migrations for safer version control and deployment consistency.



# 👤 Author  
Developed by **Dmitruz**  
Software Developer & Robotics Engineer