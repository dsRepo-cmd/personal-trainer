import { Suspense } from "react";
import Home from "./page/Home";

function App() {
  return (
    <Suspense
      fallback={
        <div className=" h-screen w-full flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
