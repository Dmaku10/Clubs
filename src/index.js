import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends React.Component {
    componentWillMount() {
        const config={
            apiKey: "AIzaSyDLj2cd9_cLCfAMuRFTUZ0I1etBNII1HZk",
            authDomain: "nclub-b6902.firebaseapp.com",
            databaseURL: "https://nclub-b6902.firebaseio.com",
            projectId: "nclub-b6902",
            storageBucket: "nclub-b6902.appspot.com",
            messagingSenderId: "416636572985"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;


