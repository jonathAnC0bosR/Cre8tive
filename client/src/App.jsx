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
import EditProfile from "./components/Pages/Profile/EditProfile";

import Profile2 from "./components/Pages/Profile/Profile2";


import Profile3 from "./components/Pages/Profile/Profile3";

import BBpost from "./components/Pages/BBpost/BBpost";
import CreateBBpost from "./components/Pages/BBpost/CreateBBpost";
import Skills from "./components/Pages/Skills/Skills";
import Home from "./components/Pages/Home/Home";



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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="block">
          {" "}
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path= '/editProfile' element={<EditProfile />}  />

          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile2 />} />
          <Route path="/CreateBBpost" element={<CreateBBpost />} />
          <Route path="/BBpost" element={<BBpost />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile3" element={<Profile3 />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
