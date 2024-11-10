import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Landing from "./pages/Landing";
import HomeLayout from "./layouts/HomeLayout";
import Company from "./pages/Company";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DepositPage from "./pages/DepositPage";
import HomePage from "./pages/HomePage";
import CompanyDetails from "./pages/CompanyDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Landing />} />
      <Route path="home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="companies" element={<Company />} />
        <Route path="details" element={<CompanyDetails />} />
        <Route path="deposit" element={<DepositPage />} />
        <Route
          path="settings"
          element={
            <div>
              <h1>Settings</h1>
            </div>
          }
        />
        <Route
          path="help"
          element={
            <div>
              <h1>Help</h1>
            </div>
          }
        />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
