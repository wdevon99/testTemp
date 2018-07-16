//@flow
import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';


//Login Screen Component Class
class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.containers}>
                <Text>Profile</Text>
            </View>
        );
    }
}


//mapStateToProps function
const mapStateToProps=(state)=>{
    return{

    };
}


export default connect(mapStateToProps)(ProfileScreen);
