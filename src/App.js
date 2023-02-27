import { useState } from "react";

function App() {
    const [state, setState] = useState(0);

    const increment = () => setState((prev) => prev + 1);

    return (
        <div className="App">
            <h1
                style={{
                    fontSize: 70,
                    color: "green",
                    textDecoration: "underline",
                }}
            >
                value = {state}
            </h1>
            <button
                style={{ background: "yellow", color: "black", padding: 15 }}
                onClick={increment}
            >
                increment!!!
            </button>
        </div>
    );
}

export default App;
