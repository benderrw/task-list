import { GlobalStyles } from "../../styles/GlobalStyles";

import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Loading } from "../Loading";
import { LocalStoragePage } from "../../pages/LocalStorage";
import { RestAPIPage } from "../../pages/RestAPI";

const router = createBrowserRouter([
  { path: "/", element: <LocalStoragePage /> },
  { path: "/rest", element: <RestAPIPage /> },
]);

function App(): React.JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
