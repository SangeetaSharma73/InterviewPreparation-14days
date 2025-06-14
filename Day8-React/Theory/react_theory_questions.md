# React Theory Questions - Explained

## 1. What is JSX?

**JSX** (JavaScript XML) is a syntax extension for JavaScript, used with React to describe what the UI should look like. It looks similar to HTML but is actually syntactic sugar for `React.createElement` calls.

### Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

This gets compiled by **Babel** to:

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

### Why:

- JSX makes code more readable and declarative.
- It combines HTML-like structure with JavaScript logic.

### How Babel helps:

- Babel transforms JSX into `React.createElement` so that browsers can understand and render it.

---

## 2. Props vs. State

| Feature    | Props                        | State                            |
| ---------- | ---------------------------- | -------------------------------- |
| Mutability | Immutable                    | Mutable                          |
| Ownership  | Passed from parent component | Managed within the component     |
| Usage      | Read-only, for configuration | Tracks local changes, user input |

### Why:

- Props are used to pass data down the component tree.
- State is used to manage internal, dynamic data.

### Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>; // props.name is immutable
}
```

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>; // state changes
}
```

---

## 3. Reconciliation

**Reconciliation** is the process React uses to update the DOM efficiently when the state or props change.

### Key Concepts:

- **Virtual DOM:** A lightweight copy of the real DOM.
- **Diffing:** React compares old vs. new virtual DOM trees to find differences.
- **Batching:** React groups multiple updates to reduce re-renders.

### How it works:

- React avoids costly DOM operations by re-rendering only the components that changed.
- It uses keys in lists to identify changes efficiently.

### Example:

```jsx
const items = list.map(item => <li key={item.id}>{item.name}</li>);
```

---

## 4. Controlled vs. Uncontrolled Components

### Controlled Components:

- Form elements controlled by React state.
- Syncs value with state using `onChange`.

### Uncontrolled Components:

- Form elements manage their own state via the DOM.
- Uses `ref` to access values.

### Pros and Cons:

| Type         | Pros                              | Cons                           |
| ------------ | --------------------------------- | ------------------------------ |
| Controlled   | Easier to validate, test, control | More code, frequent re-renders |
| Uncontrolled | Less code, simple forms           | Harder to validate and debug   |

### Example:

**Controlled:**

```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

**Uncontrolled:**

```jsx
<input ref={inputRef} />
```

---

## 5. Synthetic Events vs. Native Events

React wraps native DOM events in **Synthetic Events** for cross-browser compatibility.

### Key Features:

- Pooled for performance (reused for multiple events).
- Compatible with all browsers.

### Example:

```jsx
<button onClick={handleClick}>Click Me</button>
```

### Why:

- React’s synthetic event system simplifies event handling and makes it consistent.
- For async usage, always call `event.persist()` to keep it alive.

---

## 6. Function vs. Class Components

### Class Components:

- Use lifecycle methods like `componentDidMount`.
- Have `this.state`, `this.props`.

### Function Components:

- Use `useState`, `useEffect` hooks.
- Simpler, more concise.

### Performance:

- Hooks allow better code reuse and testability.
- React may optimize function components better.

### Example:

**Class:**

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

**Function:**

```jsx
function MyComponent() {
  return <div>Hello</div>;
}
```

---

## 7. What are React Fragments?

**React Fragments** let you return multiple elements from a component without adding extra nodes to the DOM.

### Why:

- Avoid unnecessary `<div>` wrappers.
- Keeps DOM cleaner.

### Example:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

---

## 8. Explain React.memo

**React.memo** is a higher-order component that prevents unnecessary re-renders of a functional component.

### How:

- React memoizes the result until props change.

### Why:

- Performance optimization for pure components.

### Example:

```jsx
const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});
```

---

## 9. Context Propagation vs. Prop Drilling

### Prop Drilling:

- Passing props through multiple components unnecessarily.

### Context:

- Provides a way to share values (like theme, auth) without prop drilling.

### Use Context When:

- Global/shared data is needed by many nested components.

### Example:

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### Optimization Tips:

- Use `memo`, `useContextSelector` to avoid re-renders.

---

## 10. Error Boundaries

**Error Boundaries** are React components that catch JavaScript errors anywhere in their child component tree.

### How:

- Implement `componentDidCatch` and `getDerivedStateFromError` in class components.

### Why:

- Prevents entire app from crashing.
- Displays fallback UI.

### Example:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

