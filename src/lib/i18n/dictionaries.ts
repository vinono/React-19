export type Dictionary = typeof en;

export const en = {
  nav: {
    home: "Home",
    actions: "Actions",
    hooks: "Hooks",
    server: "Server",
    metadata: "Metadata",
    sandbox: "Sandbox",
    toggleMenu: "Toggle menu",
  },
  home: {
    heroTitle: "React 19 Showcase",
    heroSubtitle:
      "Exploring the next generation of React features with interactive demos and sandboxes.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    featuresTitle: "New Features",
    featuresSubtitle:
      "Dive into the latest capabilities introduced in React 19.",
  },
  pages: {
    actions: {
      title: "Actions & Async Operations",
      description:
        "React 19 introduces first-class support for async functions in transitions, actions, and form handling.",
    },
    hooks: {
      title: "New Hooks & APIs",
      description:
        "React 19 brings powerful new primitives like the use() API and improvements to existing hooks.",
    },
    server: {
      title: "Server Components & Directives",
      description:
        "Understanding the boundary between Server and Client in React 19, plus new Context API improvements.",
    },
    metadata: {
      title: "Metadata & Assets",
      description:
        "Native support for document metadata and intelligent asset loading.",
    },
  },
  features: {
    actions: {
      title: "Actions",
      description:
        "Simplify data mutations and state management with first-class support for async functions.",
      useActionState: {
        title: "useActionState",
        description:
          "Manages form state, providing degraded experiences when JavaScript is unavailable. It handles pending states, errors, and optimistic updates automatically.",
        label: "Update Name",
        placeholder: "Enter a name (or 'error' to fail)",
        button: {
          default: "Update",
          pending: "Updating...",
        },
        success: "Ready to submit.",
        codeTitle: "Code Example",
      },
      useFormStatus: {
        title: "useFormStatus",
        description:
          "Access the status of a parent form without prop drilling. This hook must be used inside a component rendered within the form.",
        label: "Newsletter Subscription",
        placeholder: "Enter your email",
        button: {
          default: "Subscribe",
          pending: "Submitting...",
        },
        submitting: "Parent form is submitting via {method} to {action}...",
        submitted: "Submitting data: {email}",
        codeTitle: "Code Example",
      },
      useOptimistic: {
        title: "useOptimistic",
        description:
          "Show optimistic state while async requests are in progress. The UI updates immediately, then reconciles when the server responds.",
        placeholder: "Type a message...",
        sending: "Sending...",
        codeTitle: "Code Example",
      },
    },
    hooks: {
      title: "New Hooks",
      description:
        "Powerful new hooks like `use()`, `useOptimistic`, and `useFormStatus`.",
      use: {
        title: "use() API",
        description:
          "A new API to read resources like Promises or Context during render. Unlike hooks, `use` can be called within loops and conditional statements.",
        promiseTitle: "Reading Promises",
        fetchButton: "Fetch Message",
        loading: "Loading...",
        startPrompt: "Click button to start",
        contextTitle: "Reading Context Conditionally",
        showContext: "Show Context Message",
        contextValue: "Current theme context value:",
        codeTitle: "Code Example",
      },
      refCleanup: {
        title: "Ref Callback Cleanup",
        description:
          "React 19 allows ref callbacks to return a cleanup function, similar to `useEffect`. This makes it easier to manage resources associated with DOM nodes.",
        mount: "Mount Component",
        unmount: "Unmount Component",
        status: "Status:",
        monitored: "I am a monitored element",
        codeTitle: "Code Example",
      },
      useDeferredValue: {
        title: "useDeferredValue Initial Value",
        description:
          "The `useDeferredValue` hook now accepts an optional second argument for the initial value. This is useful for the first render before the deferred value is available.",
        label: "Type something fast:",
        placeholder: "Type here...",
        realtime: "Real-time Value",
        deferred: "Deferred Value",
        note: 'Note: The initial value argument is used on the initial render. In this demo, we pass "" as the initial value.',
        codeTitle: "Code Example",
      },
    },
    server: {
      title: "Server Components",
      description:
        "Understanding the boundary between Server and Client environments.",
      serverComponents: {
        title: "Server Components & Directives",
        description:
          "React 19 introduces directives to distinguish between Server and Client environments. While this is a client-side SPA, understanding these concepts is crucial.",
        server: {
          title: "Server",
          desc: "Data Access\nSecrets\nHeavy Compute",
        },
        client: {
          title: "Client",
          desc: "Interactivity\nBrowser APIs\nState/Effects",
        },
        serialization: "Serialization",
        stream: "Stream",
        useServer: "Mark server-side functions callable from client",
        useClient: "Mark components that need client-side features",
        codeTitle: "Code Example",
      },
      context: {
        title: "Streamlined Context API",
        description:
          "In React 19, you can render `<Context>` directly as a provider instead of `<Context.Provider>`.",
        button: "Current theme: {theme}",
        codeTitle: "Code Example",
      },
    },
    metadata: {
      title: "Metadata",
      description:
        "Native support for document metadata like `<title>` and `<meta>` tags.",
      metadata: {
        title: "Document Metadata",
        description:
          "React 19 adds native support for rendering document metadata tags like <title>, <meta>, and <link> anywhere in your component tree. React automatically hoists them to the <head>.",
        pageTitle: "Page Title",
        metaDescription: "Meta Description",
        note: "Check your browser tab title and inspect the <head> to see changes!",
        codeTitle: "Code Example",
      },
      stylesheet: {
        title: "Stylesheet Precedence",
        description:
          "React 19 allows you to specify `precedence` for stylesheets. React manages the insertion order in the DOM to ensure correct cascading, even with Suspense and concurrent rendering.",
        default: "Default Precedence",
        high: "High Precedence",
        boxText: "I am a styled box",
        boxNote: "My style depends on which stylesheet wins!",
        codeTitle: "Code Example",
      },
    },
  },
  common: {
    backToHome: "Back to Home",
    viewCode: "View Code",
    sandbox: "Sandbox",
    explanation: "Explanation",
  },
};

export const zh: Dictionary = {
  nav: {
    home: "首页",
    actions: "Actions",
    hooks: "Hooks",
    server: "Server",
    metadata: "Metadata",
    sandbox: "沙箱",
    toggleMenu: "切换菜单",
  },
  home: {
    heroTitle: "React 19 展示",
    heroSubtitle: "通过交互式演示和沙箱探索下一代 React 特性。",
    getStarted: "开始使用",
    learnMore: "了解更多",
    featuresTitle: "新特性",
    featuresSubtitle: "深入了解 React 19 引入的最新功能。",
  },
  pages: {
    actions: {
      title: "Actions & 异步操作",
      description:
        "React 19 为 Transition、Actions 和表单处理中的异步函数提供了原生支持。",
    },
    hooks: {
      title: "新 Hooks & API",
      description:
        "React 19 带来了强大的新原语，如 use() API，并对现有 Hooks 进行了改进。",
    },
    server: {
      title: "服务端组件 & 指令",
      description:
        "理解 React 19 中服务端和客户端的边界，以及 Context API 的新改进。",
    },
    metadata: {
      title: "元数据 & 资源",
      description: "原生支持文档元数据和智能资源加载。",
    },
  },
  features: {
    actions: {
      title: "Actions",
      description: "通过对异步函数的一流支持，简化数据变更和状态管理。",
      useActionState: {
        title: "useActionState",
        description:
          "管理表单状态，在 JavaScript 不可用时提供降级体验。它自动处理挂起状态、错误和乐观更新。",
        label: "更新名称",
        placeholder: "输入名称（或输入 'error' 模拟失败）",
        button: {
          default: "更新",
          pending: "更新中...",
        },
        success: "准备提交。",
        codeTitle: "代码示例",
      },
      useFormStatus: {
        title: "useFormStatus",
        description:
          "无需属性传递即可访问父表单的状态。此 Hook 必须在表单内渲染的组件中使用。",
        label: "订阅通讯",
        placeholder: "输入您的邮箱",
        button: {
          default: "订阅",
          pending: "提交中...",
        },
        submitting: "父表单正在通过 {method} 提交到 {action}...",
        submitted: "正在提交数据：{email}",
        codeTitle: "代码示例",
      },
      useOptimistic: {
        title: "useOptimistic",
        description:
          "在异步请求进行时显示乐观状态。UI 会立即更新，然后在服务器响应时进行协调。",
        placeholder: "输入消息...",
        sending: "发送中...",
        codeTitle: "代码示例",
      },
    },
    hooks: {
      title: "新 Hooks",
      description:
        "强大的新 Hooks，如 `use()`、`useOptimistic` 和 `useFormStatus`。",
      use: {
        title: "use() API",
        description:
          "一个新的 API，用于在渲染期间读取 Promise 或 Context 等资源。与 Hooks 不同，`use` 可以在循环和条件语句中调用。",
        promiseTitle: "读取 Promise",
        fetchButton: "获取消息",
        loading: "加载中...",
        startPrompt: "点击按钮开始",
        contextTitle: "条件性读取 Context",
        showContext: "显示 Context 消息",
        contextValue: "当前主题 Context 值：",
        codeTitle: "代码示例",
      },
      refCleanup: {
        title: "Ref 回调清理",
        description:
          "React 19 允许 ref 回调返回一个清理函数，类似于 `useEffect`。这使得管理与 DOM 节点相关的资源变得更加容易。",
        mount: "挂载组件",
        unmount: "卸载组件",
        status: "状态：",
        monitored: "我是一个被监控的元素",
        codeTitle: "代码示例",
      },
      useDeferredValue: {
        title: "useDeferredValue 初始值",
        description:
          "`useDeferredValue` Hook 现在接受可选的第二个参数作为初始值。这对于在延迟值可用之前的首次渲染非常有用。",
        label: "快速输入一些内容：",
        placeholder: "在此输入...",
        realtime: "实时值",
        deferred: "延迟值",
        note: '注意：初始值参数用于初始渲染。在此演示中，我们将 "" 作为初始值传递。',
        codeTitle: "代码示例",
      },
    },
    server: {
      title: "服务端组件",
      description: "理解服务端和客户端环境之间的边界。",
      serverComponents: {
        title: "服务端组件与指令",
        description:
          "React 19 引入了指令来区分服务端和客户端环境。虽然这是一个客户端 SPA，但理解这些概念至关重要。",
        server: {
          title: "服务端",
          desc: "数据访问\n密钥\n繁重计算",
        },
        client: {
          title: "客户端",
          desc: "交互性\n浏览器 API\n状态/副作用",
        },
        serialization: "序列化",
        stream: "流",
        useServer: "标记可从客户端调用的服务端函数",
        useClient: "标记需要客户端特性的组件",
        codeTitle: "代码示例",
      },
      context: {
        title: "简化的 Context API",
        description:
          "在 React 19 中，您可以直接将 `<Context>` 渲染为提供者，而不是 `<Context.Provider>`。",
        button: "当前主题：{theme}",
        codeTitle: "代码示例",
      },
    },
    metadata: {
      title: "元数据",
      description: "原生支持文档元数据，如 `<title>` 和 `<meta>` 标签。",
      metadata: {
        title: "文档元数据",
        description:
          "React 19 原生支持在组件树的任何位置渲染文档元数据标签，如 <title>、<meta> 和 <link>。React 会自动将它们提升到 <head> 中。",
        pageTitle: "页面标题",
        metaDescription: "Meta 描述",
        note: "检查浏览器标签标题并检查 <head> 以查看更改！",
        codeTitle: "代码示例",
      },
      stylesheet: {
        title: "样式表优先级",
        description:
          "React 19 允许您指定样式表的 `precedence`（优先级）。React 管理 DOM 中的插入顺序以确保正确的层叠，即使在使用 Suspense 和并发渲染时也是如此。",
        default: "默认优先级",
        high: "高优先级",
        boxText: "我是一个样式化的盒子",
        boxNote: "我的样式取决于哪个样式表获胜！",
        codeTitle: "代码示例",
      },
    },
  },
  common: {
    backToHome: "返回首页",
    viewCode: "查看代码",
    sandbox: "沙箱",
    explanation: "解释",
  },
};

export const dictionaries = { en, zh };
