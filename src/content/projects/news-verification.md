---
title: "News Verification Platform"
description: "A platform for verifying news credibility through community voting."
image: "/images/news-verify.png"
tags: ["Spring Boot", "Vue.js", "Docker", "Supabase", "Java"]
isFeatured: true
---

## The Problem
Misinformation spreads faster than traditional fact-checkers can verify it. We needed a solution where the community could collectively flag suspicious news.

## The Solution
I collaborated with a team to build this full-stack verification platform. **My primary focus was designing the scalable Java backend, optimizing API performance, and containerizing the app.**

* **Backend Engineering:** Built RESTful APIs with **Spring Boot**, implementing **server-side pagination and search** to handle large datasets of news articles.
* **Database Infrastructure:** **Dockerized the persistence layer (MySQL and phpMyAdmin)** to ensure a consistent, database environment for all developers on the team.
* **API Stability:** Led the debugging efforts for the API layer, resolving critical data inconsistency bugs to ensure seamless frontend integration.
* **SupaBase Integration:** Integrated **Supabase Storage** to handle uploaded image, ensuring that images is stored efficiently off-server.
* **Security:** Implemented **Role-Based Access Control**, allowing Admins to manage user roles and moderate content.

## Key Features
* **Community Verdict System:** Visualizes the "Trust vs. Fake" consensus with a dynamic progress bar to quickly show public opinion.
* **Smart Search & Filtering:** Allows users to quickly find specific news topics or filter by verification status (Real/Fake/Disputed).
* **Evidence-Based Reporting:** Integrates **Supabase** for secure image storage, allowing users to attach screenshots or proof to their claims.
