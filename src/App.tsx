import { Suspense, lazy } from "react";
import LoaderIcon from "./assets/ajax-document-loader.gif";

const Home = lazy(() => import("./page/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center ">
          <img src={LoaderIcon} alt="Loading..." />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
