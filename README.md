# 🌈 React Expandify 🌈

![npm](https://img.shields.io/npm/v/react-expandify?style=for-the-badge)
[![npm version](https://badge.fury.io/js/react-expandify.svg)](https://badge.fury.io/js/react-expandify)

> **Simplifying Expand/Collapse Like Never Before. Zero Dependencies, 100% Awesomeness!**

## 📸 Demo

![React Expandify Demo](expandify-demo.gif)

---

## Table of Contents

- [🚀 Features](#-features)
- [📦 Installation](#-installation)
- [💡 Usage](#-usage)
- [📚 Documentation](#-documentation)
- [🔍 Examples](#-examples)
- [🙏 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Features

- 🎛 **Plug and Play**: Get started instantly, no complicated setup!
- 🌈 **Elemental Freedom**: Use any HTML element as your expandable container.
- 🎨 **Your Style, Your Rules**: Easy-to-add custom classes.
- ⏱ **Tick Tock Goes The Clock**: Control the expand and collapse speed to the millisecond!

---

## 📦 Installation

Add `React Expandify` to your project with npm:

```bash
npm install react-expandify
```

Or use yarn:

```bash
yarn add react-expandify
```

---

## 💡 Usage

Basic example:

```jsx
import { Expandable } from 'react-expandify';
import 'react-expandify/dist/style.css';

const MyApp = () => (
  <Expandable expanded>
    <p>Your awesome content here!</p>
  </Expandable>
);
```

---

## 📚 Documentation

| Prop               | Type                          | Description                                          | Default Value |
| ------------------ | ----------------------------- | ---------------------------------------------------- | ------------- |
| `expanded`         | `boolean`                     | Controls the visibility of the expandable container. | `false`       |
| `children`         | `ReactNode`                   | The content you want to display when expanded.       |               |
| `elementType`      | `keyof JSX.IntrinsicElements` | The HTML element for the container.                  | `div`         |
| `expandDuration`   | `number`                      | Time to fully expand in milliseconds.                | `300`         |
| `collapseDuration` | `number`                      | Time to fully collapse in milliseconds.              | `300`         |
| `className`        | `string`                      | Additional CSS classes to apply.                     |               |

---

## 🙏 Contributing

Got ideas or bug reports? Open an issue or send a pull request!

## 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE) for more details.

---

Crafted with 💖 by [Armen Nersisyan](https://github.com/armennersisyan)
