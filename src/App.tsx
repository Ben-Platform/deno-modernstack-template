import { createSignal, onMount } from "solid-js";

export const App = () => {
  const [count, setCount] = createSignal(0);
  const [apiData, setApiData] = createSignal("Loading...");

  onMount(async () => {
    // This calls your Hono API
    const res = await fetch("/api/hello");
    const data = await res.json();
    setApiData(data.message);
  });

  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>SolidJS + Hono</h1>
      <p>Backend says: <strong>{apiData()}</strong></p>
      
      <button onClick={() => setCount(count() + 1)}>
        Count is: {count()}
      </button>
    </div>
  );
};