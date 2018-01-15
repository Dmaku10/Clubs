import React, { Component } from 'react';
import firebase from "firebase";
import { Text, View, Image} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, createUser,loginUserFail} from '../actions';
import { CardSection,Card, Input, Button, ButtonBlue, Spinner} from './common';
import {Actions} from "react-native-router-flux";

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user)
            }
        })
    }

    async loginWithFacebook() {


        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1038865286256481', { permissions: ['public_profile'] });

        if (type === 'success') {

            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            firebase.auth().signInWithCredential(credential).catch((error) => {
                console.log(error)
            });
            Actions.main();
        }

    }




    renderButton() {
        if (this.props.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login

            </Button>
        );
    }




    render() {
        return (
            <Card>

                <CardSection>

                    label="Email"
                    placeholder="Email"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={thi   <Inputs.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <ButtonBlue onPress={() => this.loginWithFacebook()} >
                        Login with Facebook
                    </ButtonBlue>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, createUser
})(LoginForm);










































