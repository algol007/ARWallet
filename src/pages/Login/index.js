import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Input } from '../../components';
import { colors } from '../../utils';
import { IconBackSVG, LoginSVG } from '../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from '../../redux';

const Login = () => {
    const { form } = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();

    // const [form, setForm] = useState({
    //     email: '',
    //     password: ''
    // });

    const onLogin = () => {
        console.log("Data yang dikirim adalah: ", form);
    };

    const onInputChange = (value, inputType) => {
        // setForm({
        //     ...form,
        //     [inputType]: value
        // });
        dispatch(setForm(inputType, value));
    };

    return (
        <View style={styles.login.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <IconBackSVG width={25} height={25} />
                <LoginSVG width={200} height={150} />
                <Text style={styles.login.descriptionText}>
                Login to your existing account to access all the features in ARWallet
                </Text>

                <View style={styles.space(64)} />
                <Input 
                    placeholder="Email"
                    value={form.email} 
                    onChangeText={(value) => onInputChange(value, 'email')}
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Password" 
                    value={form.password} 
                    onChangeText={(value) => onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
                <View style={styles.space(83)} />
                <Button title="Login" onPress={onLogin} />
            </ScrollView>
        </View>
    )
}

export default Login;

const styles = {
    login: {
        container: {
            padding: 20,
            flex: 1
        },
        buttonBack: {
            width: 25,
            height: 25,
            backgroundColor: 'yellow'
        },
        descriptionWrapper: {
            width: 106,
            height: 115,
            backgroundColor: colors.primary,
            marginTop: 8
        },
        descriptionText: {
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.primary,
            marginTop: 16,
            maxWidth: 200
        },
    },
    space: value => {
        return {
            height: value
        }
    }
};
