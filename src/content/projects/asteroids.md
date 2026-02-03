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

I structured the game entities to render multiple sprite layers (e.g., Ship Body, Engine Flame, Muzzle Flash) on top of each other. These layers move as a single coordinate object, but their visibility is toggled independently based on the game state. This allowed for complex visual states without needing unique assets for every combination.

## Architecture & Design
The project follows a strict **MVC structure** to separate game logic from rendering and input handling.

All game entities extend shared base classes. This allows common behavior (like physics or position) to be reused while keeping entity-specific logic isolated, making the codebase easier to modify as we added new features.

## Testing
Testing was a core requirement of the course. While the unit test suite was primarily my teammate's responsibility, I contributed to the quality assurance process.

I focused on **reviewing the test code** and helping **debug edge cases**—specifically regarding collision logic—where errors were not being correctly detected during standard gameplay. We used **Mockito** to isolate these behaviors during debugging.

## Key Technical Details
* **Architectural Pattern:** Implemented a strict **MVC** structure to decouple game logic from the view layer, making the codebase easier to debug and extend.
* **Rendering Strategy:** Developed a **layered rendering system** where separate sprites are stacked and controlled as a single entity, allowing for complex animation states (like moving + shooting) without creating unique assets for every combination.
* **Quality Assurance:** Utilized **Mockito** to isolate dependencies during testing, allowing us to verify complex physics logic without launching the app and trying to get the test situation by ourselves.
