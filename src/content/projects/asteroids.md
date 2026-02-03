---
title: "Asteroids"
description: "A Java-based arcade game built to practice object-oriented design and structured architecture."
image: "/images/asteroid.png"
tags: ["Java", "OOP", "MVC", "JUnit", "Mockito"]
source: "https://github.com/RinZ5/asteroids"
isFeatured: false
---

## Project Overview
This project is a modern reimplementation of the classic arcade game **Asteroids**, developed as part of a **first-year university assignment**.

The primary goal was to practice applying **object-oriented design principles** and structuring a non-trivial application using the **Model–View–Controller (MVC)** pattern.

## Sprite Handling & Rendering
The game uses **pre-existing sprite assets** sourced externally. However, separate sprites were provided for individual actions (like moving vs. shooting), but no assets existed for performing both simultaneously.

Creating new sprites for every possible action combination was outside the scope of the project. To handle this, I implemented a **layered rendering approach**.

By rendering multiple action sprites at the same position and moving them as a single entity, I allowed different actions to appear simultaneously. This solved the visual requirements without increasing asset complexity or memory usage.

## Architecture & Design
The project follows a strict **MVC structure** to separate game logic from rendering and input handling.

All game entities extend shared base classes. This allows common behavior (like physics or position) to be reused while keeping entity-specific logic isolated, making the codebase easier to modify as we added new features.

## Testing
Testing was a core requirement of the course. While the unit test suite was primarily my teammate's responsibility, I contributed to the quality assurance process.

I focused on **reviewing the test code** and helping **debug edge cases**—specifically regarding collision logic—where errors were not being correctly detected during standard gameplay. We used **Mockito** to isolate these behaviors during debugging.

## Key Technical Details
- **Language:** Java
- **Architecture:** MVC
- **Design Style:** Object-Oriented Programming
- **Testing:** JUnit, Mockito
