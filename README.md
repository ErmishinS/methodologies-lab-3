# Lab 3 — Containerization Experiments

This repository contains three small applications written in Python, Go, and JavaScript (Node.js). They are used for experimenting with Docker containerization, image optimization, and orchestration with Docker Compose as part of a university lab on software development technologies.

## 📁 Project Structure
.
├── python/     # Python FastAPI application with uvicorn
├── go/         # Go Fiber web application
├── js/         # Node.js Express application with MongoDB
└── README.md

---

## 🔧 Goals of the Lab

- Build and containerize applications written in different programming languages.
- Optimize Docker images using techniques like `.dockerignore`, `.dockerfile` restructuring, and multi-stage builds.
- Compare build time, image size, and performance across languages and image configurations.
- Use Docker Compose to run services locally with supporting dependencies (e.g. MongoDB).

---

## 📦 Projects Overview

### Python (FastAPI)
A simple FastAPI web application that exposes HTTP endpoints. The Dockerfile includes virtual environment setup and requirements installation. Experiments include using base `python` images versus `alpine`.

### Go (Fiber)
A lightweight Go web server using the Fiber framework. It demonstrates Go’s static binary compilation and efficient image building using `scratch`, `alpine`, and `distroless` base images.

### JavaScript (Node.js)
A Node.js + Express application connected to MongoDB. The service allows basic book operations and is tested with both regular and Alpine-based Docker images.

---

## 📊 Research Outcome

Each project is used to evaluate:

- Image size differences between base images
- Build times
- Layer reuse and multi-stage optimization
- Runtime performance differences across environments

---

## 📚 Technologies Used

- Python 3.13, FastAPI, Uvicorn
- Go 1.22, Fiber
- Node.js 18, Express, MongoDB
- Docker, Docker Compose

---

## 📌 Requirements

- Docker
- Docker Compose
