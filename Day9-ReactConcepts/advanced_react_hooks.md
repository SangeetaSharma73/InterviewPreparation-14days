# Day 7 – Advanced React Hooks Concepts

## 1. **`useState` Internals: State Persistence Across Renders**

- `useState` allows functional components to persist local state.
- On re-render, React **remembers the state value** associated with the component instance.
- Internally, React uses a **linked list of hooks** to track state across re-renders.
- State updates trigger a **re-render**, during which React restores the state based on call order.

```js
const [count, setCount] = useState(0);
```

---

## 2. **`useEffect` Timing: Mount, Update, and Cleanup Phases**

- Runs **after the DOM is painted** (non-blocking).
- By default, it runs on **mount and updates**.
- Cleanup function is invoked:
  - Before re-running the effect on updates.
  - During unmounting.

```js
useEffect(() => {
  const id = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(id); // Cleanup
}, []);
```

---

## 3. **Rules of Hooks**

- Must be called at the **top level** (not in loops or conditions).
- Must be called in the **same order** on every render.
- For `useEffect`, you should specify all **dependencies** in the `[]` array to avoid stale closures and bugs.

```js
useEffect(() => {
  console.log(value);
}, [value]); // Exhaustive deps
```

---

## 4. **Use Cases for `useRef` vs `useState`**

| Feature        | `useState`             | `useRef`                          |
|----------------|------------------------|------------------------------------|
| Triggers rerender | Yes                | No                                 |
| Mutable value    | No (frozen per render) | Yes (`ref.current`)                |
| DOM reference    | No                    | Yes (pass to `ref` attribute)      |

```js
const countRef = useRef(0); // Useful for timers, mutable counters
```

---

## 5. **Context API Internals: Provider, Consumer, Value Propagation**

- `React.createContext()` returns a Context object.
- `Provider` wraps components and provides a value.
- All consumers **automatically re-render** when the context value changes.

```js
const ThemeContext = createContext();
<ThemeContext.Provider value="dark">...</ThemeContext.Provider>
```

---

## 6. **Optimizing Context: Splitting and Memoizing**

- Avoid prop-drilling by **splitting contexts** for different state domains (e.g., auth, theme).
- Use `useMemo()` to prevent unnecessary renders.

```js
<ThemeContext.Provider value={useMemo(() => theme, [theme])}>
```

---

## 7. **When to Use `useReducer` vs. `useState`**

- Use `useReducer` when:
  - State logic is complex or involves multiple sub-values.
  - Future state depends on previous state.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 8. **Custom Hook Pattern: Reusable Logic**

- Encapsulate common logic (e.g., fetching data, animations).
- Custom hooks **start with `use`** and can use other hooks inside.

```js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
```

---

## 9. **`useLayoutEffect` vs `useEffect`**

| Feature         | `useEffect`              | `useLayoutEffect`                |
|------------------|--------------------------|----------------------------------|
| Timing           | After paint (async)      | Before paint (sync)              |
| Use case         | Fetching, analytics      | Measuring DOM, animations        |

```js
useLayoutEffect(() => {
  const dimensions = ref.current.getBoundingClientRect();
});
```

---

## 10. **Testing Hooks**

- Use [`@testing-library/react-hooks`](https://react-hooks-testing-library.com/) or directly with **Jest** and custom render functions.
- Key points:
  - Use `renderHook()` to test hooks in isolation.
  - Use `act()` to test state updates.

```js
const { result } = renderHook(() => useCounter());
act(() => result.current.increment());
expect(result.current.count).toBe(1);
```
