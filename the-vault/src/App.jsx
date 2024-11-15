import "./App.css";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import Checkout from "./pages/Checkout";
import AuthProvider, { useAuth } from "./firebase/Auth";
import Register from "./pages/Register";

//creatin a protectroute in order to force the user to login

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart"  element={<Cart />} />
        <Route
          path="/checkout"
          
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login"  element={<Login />} />
      <Route path="/register"  element={<Register />} />
      
    </>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
