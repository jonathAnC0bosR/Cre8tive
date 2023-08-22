import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';
import Loader from './components/UI/Loader';

import Login from "./components/Pages/Login/Login";
import Header from "./components/UI/Header";
import "./index.css";
import Landing from "./components/landing/landing";
import Signup from "./components/Pages/Signup/Signup";
import EditProfile from "./components/Pages/Profile/EditProfile";
import MainFooter from "./components/UI/MainFooter";

import Profile3 from "./components/Pages/Profile/Profile3";
import BBpost from "./components/Pages/BBpost/BBpost";
import CreateBBpost from "./components/Pages/BBpost/CreateBBpost";
import Skills from "./components/Pages/Skills/Skills1";
import Home from "./components/Pages/Home/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Card from "./components/card/byNeed";

import AboutUs from "./components/Pages/AboutUs/AboutUs";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // uri: '/graphql', //---------------------------------
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the initial loaders from the HTML
    const backgroundLoader = document.getElementById('background-loader');
    const primaryLoader = document.getElementById('primary-loader');
    if (backgroundLoader) backgroundLoader.style.display = 'none';
    if (primaryLoader) primaryLoader.style.display = 'none';

    // Set a delay or wait for data to load, then hide the React loader
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // Example: 3 seconds delay
  }, []);


  return (
    <ApolloProvider client={client}>
      <Router>
        <AnimatePresence>
          {isLoading && <Loader />}
        </AnimatePresence>
        <div className="block">
          {" "}
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/CreateBBpost" element={<CreateBBpost />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Route>

          <Route path="/contactUs" element={<AboutUs />} />
          <Route path="/profile" element={<Profile3 />} />
          <Route path="/BBpost/:id" element={<BBpost />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/card" element={<Card title={"UI/UX"}/>} />

        </Routes>
        <div className="w-full bg-zinc-900">
          <MainFooter />
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
