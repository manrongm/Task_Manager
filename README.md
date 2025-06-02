# Task Manager App

A simple and modern React Native task manager built using [Expo](https://expo.dev/). This app allows users to add, complete, and delete daily tasks in a clean, responsive UI.

## Features

- Add new tasks with a tap
- Mark tasks as complete using checkbox icons
- Delete tasks with one click

## Technologies Used

- React Native (Expo)
- JavaScript
- React Hooks (`useState`)
- Expo CLI

## 🚀 Getting Started

Follow these steps to set up and run the app locally:

### 1. Clone the Repository

```bash
git clone https://github.com/manrongm/Task_Manager.git
cd Task_Manager
```

### 2. Install Node.js and npm

If you haven't installed Node.js yet, download and install it from the official website:

[https://nodejs.org/](https://nodejs.org/)

To verify installation:

```bash
node -v
npm -v
```

### 3. Install Expo CLI

Expo CLI is a command line tool for developing and building React Native apps.

```bash
npm install -g expo-cli
```

### 4. Install Project Dependencies

After navigating into the project directory, install all the dependencies listed in `package.json`:

```bash
npm install
```

This will download all required libraries such as `react`, `react-native`, and any components used in your project.

### 5. Start the App

```bash
npx expo start
```

You will see a QR code in your terminal or browser.

- Open the **Expo Go** app on your mobile device and scan the QR code.
- If you're using a laptop/desktop, press `w` to open the app in your default web browser.

## Special Instructions

- All tasks are stored locally (no backend/database).

## Project Structure

```
Task_Manager/
├── App.js
├── components/
│   └── TaskItem.js
├── package.json
├── README.md
```