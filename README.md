# Constell Interview Task

## TL;DR

Quick setup and run:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

OR

Checkout: http://constell.movahedmanesh.com/

## Table of Contents

- [Description](#Description)
- [Packages/Tech Used](#packages-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Deployment](#Deployment)
- [Limitations](#Limitations)

## Description

This is the interview task for Constell. The task is to implement a small subset of a CRM system. The design was provided by Constell and the task was to implement the design as close as possible with the following features:

- Component Design for various sections
- CRUD for Data
- Interactivity between the components

## Packages/Technology Used

- Vue3
- typescript
- Nuxt.js <3
- Sass
- Formkit
- Pinia was installed but not used. global state sharing was handled by the useState utility provided by Nuxt.
- Insomnia
- Prettier
- Iconify

## Features

The following Views/Components/Features were implemented:

- Layout
  - Side Bar
  - Bottom Nav
  - Top Nav
- Venue People
  - Teams Section
    - Team Card
    - Create the button add team
  - People Section
    - People Card
    - Create the button add people
- User Edit Page
  - Form
- CRUD
  - People
  - Teams
  - Address
- [Insomnia Client](https://insomnia.rest/) is provided for testing the API

## Project Structure

Te project is structured as follows:

- At the top level, the code adheres to the Nuxt standard project structure. (e.g. `pages`, `components`, `layouts`, etc.)
- At the second level, the code is grouped based on functionality (e.g. `people`, `teams`, `address`, etc.). This way based on experience helps with scaling of the collaboration over the project.

## Deployment

WIP

## Limitations

- Axios wasn't used. Instead the provided $fetch utility for Nuxt was used.
- No Persistence: Simple in-memory storage is used for the data. This means that the data will be lost on fresh deployment.
- Though for the navigation both style of icon exist (outline and filled), it's not used since we don't have multi page routing.
- The back button on the Top Bar is not responsive.
- Phone number prefix select is not implemented. the prefix is fixated for the task.
- Form Validation on the backend is not implemented. The form validation is only on the frontend.
