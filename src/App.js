import { useState, useEffect } from "react";
import Dock from "./components/Dock";
import Home from './views/Home'
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])
  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <div >
            <Home />
            <Dock />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
