# Expo 模板

[English](README.md) | 中文说明

一个面向实际项目的 Expo 起步模板，内置路由、NativeWind 样式与基础演示页面（主题切换、常用组件示例、Modal 示例）。

## 亮点

- 已集成 Expo Router（文件路由开箱即用）
- NativeWind + Prettier 插件（Tailwind 风格开发体验）
- 基础导航依赖齐全（`@react-navigation/*`、`react-native-gesture-handler`、`react-native-screens`）
- ESLint 与 Prettier 配置对齐（Expo 配置）

## 使用模板创建新项目

```bash
npx create-expo-app MyApp --template liusheng22/expo-template
```

## 快速开始

1. 安装依赖

   ```bash
   npm install
   ```

2. 启动项目

   ```bash
   npm run start
   ```

终端会提供以下运行方式：

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## 模板包含内容

- NativeWind（Tailwind 风格）
- ESLint（Expo 配置）
- 主题切换（system/light/dark，持久化）
- 组件示例（Pressable、TextInput、Switch、Image、Modal）

## 模板自定义建议

新项目创建后，建议修改以下字段：

- `package.json` → `name`
- `app.json` → `expo.name`, `expo.slug`, `expo.scheme`
- `app.json` → `expo.ios.bundleIdentifier` 和 `expo.android.package`（如果你添加）

## 作为 GitHub 模板发布

1. 将仓库推送到 GitHub（例如：`expo-template`）。
2. 将以下命令分享给团队：

```bash
npx create-expo-app MyApp --template liusheng22/expo-template
```
