# Expo Template

English | [中文说明](README_CN.md)

A ready-to-use Expo starter that stays lean but complete, with routing, NativeWind styling, ESLint/Prettier, and practical UI demos (theme toggle, common components, and modal usage).

## Highlights

- Expo Router included with file-based routing out of the box
- NativeWind + Prettier plugin for Tailwind-style workflows
- Navigation essentials ready (`@react-navigation/*`, `react-native-gesture-handler`, `react-native-screens`)
- ESLint + Prettier aligned via Expo config

## Tech stack

- Expo + Expo Router
- React Native + React
- NativeWind (Tailwind-style)
- ESLint + Prettier
- TypeScript

## Create a new project from this template

```bash
npx create-expo-app MyApp --template liusheng22/expo-template
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## What’s included

- NativeWind for styling (Tailwind syntax)
- ESLint setup with Expo config
- Theme toggle (system/light/dark) with persistence
- Component demos (Pressable, TextInput, Switch, Image, Modal)

## Template customization

After you create a new project, update these fields to match your app:

- `package.json` → `name`
- `app.json` → `expo.name`, `expo.slug`, `expo.scheme`
- `app.json` → `expo.ios.bundleIdentifier` and `expo.android.package` (if you add one)

## Publish as a template (GitHub)

1. Push this repo to GitHub (for example: `expo-template`).
2. Share the template command with your team:

```bash
npx create-expo-app MyApp --template liusheng22/expo-template
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
