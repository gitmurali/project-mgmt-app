import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "components/Clients";
import AddClientModal from "components/AddClientModal";
import Projects from "components/Projects";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="Container">
            <AddClientModal />
            <Projects />
            <Clients />
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
