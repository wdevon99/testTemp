//@flow
import React, { Component } from 'react';
import {Text,View,TextInput,TouchableOpacity ,Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {theme} from '../../../styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button  } from 'react-native-elements'

//action genarators
import {updateEmail, updatePassword ,attemptLoginUser  } from '../../../actions/loginActions'
//components
import Loader from '../../common/Loader';
import CustomButton from '../../common/CustomButton';

//Login Screen Component Class
class LoginScreen extends Component {
    
    //onChange Methods
    onEmailChanged=(email)=>{
        this.props.updateEmail(email);
    }
    onPasswordChanged=(password)=>{
        this.props.updatePassword(password);
    }
    //onPress Methods
    onButtonPressed=()=>{
        const { attemptLoginUser , email , password } = this.props;
        //calling the attemptLoginUser() action to start the login process
        attemptLoginUser(email,password);
    }

    renderSpinner=()=>{
        if(this.props.loading){
            return <Loader/>
        }
    }

    render() {
        return (
            <View style={styles.containers}>

                <View style={styles.headerContainers}>
           
                </View>
                <View style={styles.loginFormcontainers}>
                    <TextInput
                        style={styles.textInput}
                        value={this.props.email}
                        placeholder='Email'
                        onChangeText={(email) => this.onEmailChanged(email)}
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.props.password}
                        placeholder='Password'
                        secureTextEntry
                        onChangeText={(password) => this.onPasswordChanged(password)}
                    />
                   
    
                    <Button
                        small
                        backgroundColor={theme.PRIMARY_COLOR}
                        color={theme.WHITE_COLOR}
                        icon={{name: 'sign-in', type: 'font-awesome'}}
                        title='Login' 
                        onPress={this.onButtonPressed}
                    />
                    <Button
                        small
                        backgroundColor='transparent'
                        color={theme.LIGHT_GREY}
                        title='New to Bonfire? SignUp ' 
                    />

                    <Text style={styles.errorMessage} > {this.props.errorMessage} </Text> 
                    <View style={styles.loaderContainer}>
                        {this.renderSpinner()}
                    </View>
                </View>
            </View>
        );
    }
}



//mapStateToProps function
const mapStateToProps=(state)=>{
    return{
        email:state.loginReducer.email,
        password:state.loginReducer.password,
        user:state.loginReducer.user,
        errorMessage:state.loginReducer.errorMessage,
        loading:state.loginReducer.loading
    };
}


export default connect(mapStateToProps ,{updateEmail,updatePassword,attemptLoginUser})(LoginScreen);

// <Icon name={'free-code-camp'} size={55} color={theme.PRIMARY_COLOR}/>
// <Text style={styles.mainText}>BONFIRE</Text>

// <CustomButton onButtonPressed={this.onButtonPressed} buttonName="Login"/>
                   
// <Image
//     style={{height:35,width:200,margin:20}}
//     source={require('../../../../assets/imgs/99xtLogo.png')}
// />