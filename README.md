# 🌈 React Expandify 🌈

![npm](https://img.shields.io/npm/v/react-expandify?style=for-the-badge)
[![npm version](https://badge.fury.io/js/react-expandify.svg)](https://badge.fury.io/js/react-expandify)

> **Simplifying Expand/Collapse Like Never Before. Zero Dependencies, 100% Awesomeness!**

## 📸 Demo

![React Expandify Demo](https://gcdnb.pbrd.co/images/FiKhccvke4GC.gif?o=1)

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

| Property            | Type                          | Default       | Description                                             |
|---------------------|-------------------------------| ------------- |---------------------------------------------------------|
| `expanded`          | `boolean`                     | `false`       | Determines whether the content is expanded or not.      |
| `children`          | `ReactNode`                   | -             | Children to be rendered inside the component.           |
| `elementType`       | `keyof JSX.IntrinsicElements` | `'div'`       | The HTML element type for the Expandable component.     |
| `expandDuration`    | `number`                      | `300`         | Duration for the expand animation in milliseconds.      |
| `collapseDuration`  | `number`                      | `300`         | Duration for the collapse animation in milliseconds.    |
| `easing`            | `string`                      | `ease-in-out` | Easing function for the expand and collapse animations. |
| `className`         | `string`                      | -             | Additional className for the Expandable component.      |
| `onCollapse`        | `() => void`                  | -             | Callback when the content has collapsed.                |
| `onExpand`          | `() => void`                  | -             | Callback when the content has expanded.                 |

---

## ✨ What You Can Create
<table>
  <tr>
    <td align="center" valign="top">
      <h4 style="margin-top: 8px;">Accordion component</h4>
      <img src="https://gcdnb.pbrd.co/images/LQBimtk5HHpH.gif?o=1" width="100%">
    </td>
    <td align="center" width="50%" valign="top">
      <h4 style="margin-top: 8px;">Toggles</h4>
      <img src="https://gcdnb.pbrd.co/images/FiKhccvke4GC.gif?o=1" width="100%">
    </td>
  </tr>
</table>
---

## 🙏 Contributing

Got ideas or bug reports? Open an issue or send a pull request!

## 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE) for more details.

---

Crafted with 💖 by [Armen Nersisyan](https://github.com/armennersisyan)
