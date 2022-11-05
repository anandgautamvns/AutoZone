import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./pages/loading";
import "./App.css";
import "antd/dist/antd.css";
const Page = lazy(() => import("./pages"));

function App() {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Page />
      </Suspense>
    </Provider>
  );
}

export default App;
