import { useState, useEffect } from "react";
import Dock from "./components/Dock";
import Home from './views/Home'
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])
  return (
    <div>
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
    </div>

  );
}

export default App;
