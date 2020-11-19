import React from 'react';
import { Text, View, Image } from 'react-native';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
    const handleToGo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.welcomeAuth.wrapper}>
            <Image 
                source={{uri: "https://1.bp.blogspot.com/-LDwtS_oxYgg/XO67MmzGN7I/AAAAAAAAADI/hrSqgCRod3oIS6NtwjOqdY0okl8hwyi6gCLcBGAs/s1600/logo%2Bdana%2Bdompet%2Bdigital%2BPNG.png"}}
                style={styles.welcomeAuth.image}
            />
            <Text style={styles.welcomeAuth.text}>Welcome To ARWallet</Text>
            <ActionButton 
                title="Login" 
                description="Silahkan masuk jika anda sudah memiliki akun"
                onPress={() => handleToGo('Login')}
            />
            <ActionButton 
                title="Register" 
                description="Silahkan daftar jika anda belum memiliki akun"
                onPress={() => handleToGo('Register')}
            />
        </View>
    )
}

export default WelcomeAuth;

const styles = {
    welcomeAuth: {
        wrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#FFF'
        },
        image: {
            width: 219,
            height: 117,
            marginBottom: 10
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 76
        },
    },
};
