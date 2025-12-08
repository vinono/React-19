# React 19 新特性概览

React 19 带来了一系列令人兴奋的新特性，旨在简化开发流程、提升性能并增强用户体验。以下是核心特性的详细总结：

## 1. Actions (异步函数支持)

React 19 将异步函数提升为一等公民，极大地简化了数据变更和状态管理。

- **`useActionState`**: 用于管理异步 Action 的状态（如 loading、error、success）。它允许你在 JavaScript 尚未加载完成时提供降级体验。
- **`useFormStatus`**: 一个方便的 Hook，允许子组件直接访问父 `<form>` 的状态（如 `pending`），而无需通过 props 层层传递。
- **`useOptimistic`**: 让你能够轻松实现乐观 UI 更新（Optimistic UI）。在异步操作完成之前，立即在界面上反馈用户的操作，提升响应速度感。

## 2. 新 Hooks & API

引入了新的原语来处理资源加载和现有的 Hook 改进。

- **`use()` API**: 一个全新的 API，用于在渲染过程中读取资源（如 Promise 或 Context）。
  - **支持条件调用**: 与传统的 Hooks 不同，`use()` 可以在循环和条件语句（如 `if`）中调用。
  - **搭配 Suspense**: 当读取 Promise 时，它会自动与 React Suspense 集成，处理加载状态。
- **`useDeferredValue` 初始值**: 现在接受可选的第二个参数作为初始值，优化了首次渲染的体验。
- **Ref 清理函数**: `ref` 回调函数现在支持返回一个清理函数（类似于 `useEffect` 的清理函数），使得管理 DOM 相关的副作用更加直观。

## 3. 服务端组件 (Server Components) & 指令

进一步明确了服务端与客户端的边界。

- **Server Components**: 默认情况下，组件在服务端渲染。
- **指令 (Directives)**:
  - `'use client'`: 标记组件为客户端组件，允许使用 Hooks 和事件处理。
  - `'use server'`: 标记函数为服务端 Action，允许客户端代码直接调用服务端逻辑。
- **简化的 Context**: 现在可以直接使用 `<Context>` 作为 Provider，而不再需要 `<Context.Provider>`。

## 4. 元数据 (Metadata) & 资源管理

React 原生接管了文档头部标签的管理。

- **文档元数据**: 直接在组件树的任何位置渲染 `<title>`, `<meta>`, `<link>` 等标签，React 会自动将它们提升（Hoist）到文档的 `<head>` 中，并确保去重。
- **样式表优先级**: 支持 `precedence` 属性来声明样式表的优先级，React 会负责按正确的顺序加载样式，解决样式冲突问题。
- **资源预加载**: 支持 `preload`, `preinit` 等 API 来优化资源加载性能。

## 5. Web Components 改进

React 19 也就是 React 团队兑现承诺的版本，大幅改善了对 Web Components 的支持，现在可以无缝地在 React 中使用自定义元素，能够正确处理属性和属性的传递。

## 总结

React 19 的核心主题是 **"简化"** 和 **"原生支持"**。它通过内置对异步操作、元数据管理和资源加载的支持，减少了对第三方库的依赖，让开发者能够写出更简洁、更高效的代码。
