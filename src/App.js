import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
