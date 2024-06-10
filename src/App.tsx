import { Suspense, lazy } from "react";
import LoaderIcon from "./assets/loader.svg";

const Home = lazy(() => import("./page/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center ">
          <LoaderIcon className=" w-[400px] h-[400px] animate-bounce" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
