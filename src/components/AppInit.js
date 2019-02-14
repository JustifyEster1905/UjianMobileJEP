import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBXg2alnp2v4JpTDPwjLPdgw1NSmpuLI6I",
            authDomain: "ujianmobile-42a0c.firebaseapp.com",
            databaseURL: "https://ujianmobile-42a0c.firebaseio.com",
            projectId: "ujianmobile-42a0c",
            storageBucket: "ujianmobile-42a0c.appspot.com",
            messagingSenderId: "542996761405"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            } else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        )
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);