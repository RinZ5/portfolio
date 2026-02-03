---
title: "Dazzle E-Commerce"
description: "A full-stack fashion e-commerce platform featuring a robust, crash-proof Dockerized development environment."
image: "/images/dazzle.png"
tags: ["Node.js", "Express", "MySQL", "Docker", "EJS"]
isFeatured: false
---

## Project Overview
Dazzle is a full-stack clothing e-commerce application that allows users to browse collections, manage shopping carts, and process orders.

I led a **team of 4 developers** to build this system from scratch. My primary focus was architecting the **REST API** and engineering the **DevOps environment** to ensure a smooth development for the team.

## The Challenge
Early in development, we faced a problem. One of our core developers encountered a problem when trying to install MySQL natively, which completely stalled their ability to work on their part.

Additionally, the application suffered from **startup race conditions**. The API would crash immediately upon launch because it attempted to query the database before the MySQL service was fully initialized and ready to accept connections.

## The Solution
To resolve these bottlenecks, I migrated our development environment to a fully containerized **Docker Compose** setup.

* **Dockerized Consistency:** By containerizing the stack, I replaced manual installations with a deterministic environment. This allowed the blocked developer to spin up a fully configured MySQL instance with a single command (`docker-compose up`), bypassing their local OS issues entirely.
* **Healthcheck Orchestration:** I implemented **Healthchecks** in the container orchestration. This forces the Express container to wait until the MySQL container reports it is "healthy" before attempting a connection, **resolving the startup race conditions**.
* **Runtime Safety:** I built a custom **Environment Validation** layer that runs on startup. If a developer forgets a critical `.env` variable, the app fails fast with a clear, descriptive error message instead of crashing silently later during execution.
![Admin Dashboard Screenshot](/images/dazzle-admin.png)
*Figure 1: The internal inventory management dashboard, powered by the containerized MySQL backend.*


## Key Technical Details
* **Data Persistence:** Configured Docker Volumes to ensure MySQL data persisted across container restarts, preventing data loss during development cycles.
* **Security:** Implemented **Role-Based Access Control (RBAC)** middleware to secure administrative endpoints, ensuring only authorized staff could modify inventory data.
* **Tech Stack:** **Express** (Backend API), **EJS** (Server-Side Rendering), and **MySQL** (Relational Data).
