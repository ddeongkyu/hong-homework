import React from "react";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Head />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="SignUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
