---
title: "Co-Finance"
description: "A financial dashboard for visualizing stock market data."
image: "/images/co-finance.png"
tags: ["Vuejs", "Go", "Docker", "GitHub Actions"]
source: "https://github.com/RinZ5/co-finance" 
link: "https://co-finance.supawit.win/"
isFeatured: true
---

## The Problem
Market data is often scattered across different websites. I found myself constantly switching tabs just to check basic stock prices and earnings reports. I needed a single, clean interface to view the specific market metrics I care about in one place.

## The Solution
I built a centralized data aggregator that pulls data from the **Finnhub API** and presents it in a unified dashboard.

* **Backend:** A **Go** server that acts as a proxy to fetch and filter external API data.
* **Frontend:** A **Vue.js** interface designed for quick readability, focusing on data visualization.
* **Infrastructure:** Containerized with **Docker** and deployed via a **GitHub Actions CI/CD pipeline** for automated deployment.

## Key Features
* **Analyst & Insider Insights:** Visualizes complex datasets like **Analyst Buy/Sell Consensus** and **Insider Trading Activity** in easy-to-read widgets.
* **Smart News Aggregation:** Pulls relevant company news and headlines alongside stock performance to provide context for price movements.
* **Key Financial Metrics:** Instantly calculates and displays core statistics like **P/E Ratio**, **Market Cap**, and **Earnings Surprise** without needing a database.
