import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Input } from '../../components';
import { colors } from '../../utils';
import { IconBackSVG, LoginSVG } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const Register = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const onRegister = () => {
        console.log("Data yang dikirim adalah: ", form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value
        });
    };

    return (
        <View style={styles.register.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <IconBackSVG width={25} height={25} />
                <LoginSVG width={200} height={150} />
                <Text style={styles.register.descriptionText}>Mohon mengisi beberapa data untuk proses pendaftaran anda</Text>

                <View style={styles.space(64)} />
                <Input 
                    placeholder="Nama Lengkap" 
                    value={form.fullName} 
                    onChangeText={value => onInputChange(value, 'fullName')}
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Email"
                    value={form.email} 
                    onChangeText={value => onInputChange(value, 'email')}
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Password" 
                    value={form.password} 
                    onChangeText={value => onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
                <View style={styles.space(83)} />
                <Button title="Register" onPress={onRegister} />
            </ScrollView>
        </View>
    )
}

export default Register;

const styles = {
    register: {
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
