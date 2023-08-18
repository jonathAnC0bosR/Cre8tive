import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import Header from "./components/UI/Header";
import "./index.css";
import Landing from "./components/landing/landing";
import Signup from "./components/Pages/Signup/Signup";
import Profile from "./components/Pages/Profile/Profile";
import BBpost from "./components/Pages/BBpost/BBpost";
import Skills from "./components/Pages/Skills/Skills";

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/BBpost" element={<BBpost />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
