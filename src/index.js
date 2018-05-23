import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjhibaff95vfv01574uofbwp3"
});

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>, 
document.getElementById('root'));
registerServiceWorker();
