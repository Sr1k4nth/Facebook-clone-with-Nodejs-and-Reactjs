import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay-ts";
import { CustomUseContext } from "./contexts/Datacontext";
import { AuthContext } from "./contexts/AuthContext";

const Home = React.lazy(() => import("./Pages/Home"));
const SignUp = React.lazy(() => import("./Pages/Authentication/SignUp"));
const Login = React.lazy(() => import("./Pages/Authentication/Login"));

function App() {
  const { load, loadmsg } = CustomUseContext();

  return (
    <React.Fragment>
      <LoadingOverlay active={load} spinner text={loadmsg}>
        <Suspense fallback={<div className="loading" />}>
          <AuthContext>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </AuthContext>
        </Suspense>
      </LoadingOverlay>
    </React.Fragment>
  );
}

export default App;