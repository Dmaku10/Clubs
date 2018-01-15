import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Clubs from './components/Clubs';
import ClubDetails from './components/commonApp/ClubDetails'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 12 }}>
            <Scene key="tudo" hideNavBar>
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title=" Login" />
                </Scene>
                <Scene key="main">
                    <Scene key="Clubs" component={Clubs} title="Clubs" initial/>
                    <Scene key="ClubDetails" component={ClubDetails} title="Clubs" initial />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;