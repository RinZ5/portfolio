---
title: "Dazzle E-Commerce"
description: "A full-stack fashion e-commerce platform featuring a robust, crash-proof Dockerized development environment."
image: "/images/dazzle.png"
tags: ["Node.js", "Express", "MySQL", "Docker", "EJS"]
isFeatured: false
---

## Project Overview
Dazzle is a full-stack clothing e-commerce application that allows users to browse collections, manage shopping carts, and process orders.

I led a **team of 4 developers** to build this system from scratch. My primary focus was designing the **REST API architecture** and engineering the **DevOps environment** to ensure the team could collaborate without problem.

## The Engineering Challenge
Early in development, we faced a critical issue. One of our core developers encountered an issue, while trying to conflicts when trying to install MySQL natively on their machine. This completely stalled their ability to work on their part of the project.

Additionally, the application suffered from **startup race conditions**, where the API would crash immediately because it attempted to connect to the database before the database service was fully initialized.

## The Solution: Containerization
To fix the problem, I migrated our development environment to a fully containerized **Docker Compose** setup.

* **Dockerized Development:** By replacing manual installations with Docker, I allowed the blocked developer to spin up a perfect MySQL instance with a single command (`docker-compose up`), bypassing their local OS issues entirely.
* **Healthcheck Orchestration:** I implemented **Healthchecks** in the `docker-compose.yml`. This forces the Express container to wait until the MySQL container reports it is "healthy" before attempting a connection, resolving **100% of startup race conditions**.
![Admin Dashboard Screenshot](/images/dazzle-admin.png)
*Figure 1: The internal inventory management dashboard, powered by the containerized MySQL backend.*
* **Runtime Safety:** I built a custom **Environment Validation** layer that runs immediately on startup. If a developer forgets a `.env` variable, the app fails fast with a clear error message instead of crashing silently later.

## Key Technical Details
* **Dockerized Persistence:** Configured Docker Volumes to ensure MySQL data persisted across container restarts, preventing data loss during development.
* **RBAC Implementation:** Designed a strict **Role-Based Access Control** system for the Backoffice to ensure only authorized staff could modify product data.
* **Tech Stack:** Used **EJS** for server-side rendering, **Express** for the backend logic, and **MySQL** for relational data storage.
