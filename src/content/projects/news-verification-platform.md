---
title: "News Verification Platform"
description: "A platform for verifying news credibility through community voting."
image: "/images/news-verify.png"
tags: ["Spring Boot", "Vue.js", "Docker", "Supabase", "Java"]
isFeatured: true
---

## Project Overview
This platform is a community-driven tool designed to crowd-source the fact-checking process, allowing users to collectively flag and debate the credibility of news articles.

I collaborated with a team to build this full-stack solution. **My primary focus was architecting the core Backend API and establishing the DevOps infrastructure.**

## The Development Challenge
As the project evolved and we added complex features like search filters and evidence uploading, our frontend codebase began to suffer from **growing complexity**.

The initial state management logic became messy and difficult to maintain. Data flow was inconsistent across components, making it risky to add new features without breaking existing functionality.

## The Solution
I stepped in to re-architect the frontend data flow while establishing a solid backend foundation.

* **Core Backend Architecture:** I established the **Spring Boot** project structure, defining the standard `Controller-Service-Repository` layers for the team. I implemented the core logic for **server-side pagination and search**, ensuring the API could efficiently send just the data needed for the current page.
* **Pinia Data Architecture:** I designed a centralized **Pinia** store pattern to handle API data. Instead of components fetching data individually, I structured the store to cache API responses.
    * This allowed components to consume data instantly from the local state, keeping the UI snappy.
* **Codebase Refactoring:** I led a major refactor of the frontend logic. By decoupling the tangled store code into modular units, I paid down technical debt and restored the team's ability to iterate quickly.
* **Robust Infrastructure:** I **Dockerized the persistence layer** (MySQL). This resolved "environment drift" issues, ensuring every developer on the team ran the exact same database configuration locally.

## Key Features
* **Community Verdict System:** Visualizes the "Trust vs. Fake" consensus with a dynamic progress bar.
* **Reactive Search:** Users can filter news topics instantly using the cached data in the Pinia store.
* **Evidence-Based Reporting:** Users can attach screenshots to their claims, backed by **Supabase** cloud storage.

## Key Technical Details
* **Backend Logic:** Built the core **Spring Boot** API.
* **State Management:** Architected a modular **Pinia** store to cache API responses, enabling instant search filters for the user.
* **Scalable Storage:** Integrated **Supabase** object storage to handle uploaded images. 
* **Infrastructure:** Dockerized the **MySQL** database to ensure every developer was running the exact same environment.
