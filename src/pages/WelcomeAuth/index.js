import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

const ActionButton = ({title, description}) => {
    return (
        <View style={styles.actionButtonWrapper}>
            <Text style={styles.actionButtonDescription}>
                {description}
            </Text>
            <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const WelcomeAuth = () => {
    return (
        <View style={styles.welcomeAuthWrapper}>
            <Image 
                source={{uri: "https://1.bp.blogspot.com/-LDwtS_oxYgg/XO67MmzGN7I/AAAAAAAAADI/hrSqgCRod3oIS6NtwjOqdY0okl8hwyi6gCLcBGAs/s1600/logo%2Bdana%2Bdompet%2Bdigital%2BPNG.png"}}
                style={styles.welcomeAuthImage}
            />
            <Text style={styles.welcomeAuthText}>Welcome To ARWallet</Text>
            <ActionButton 
                title="Login" 
                description="Silahkan masuk, jika anda sudah memiliki akun"
            />
            <ActionButton 
                title="Register" 
                description="Silahkan mendaftar, jika anda belum memiliki akun"
            />
        </View>
    )
}

export default WelcomeAuth;

const styles = StyleSheet.create({
    welcomeAuthWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFF'
    },
    welcomeAuthImage: {
        width: 219,
        height: 117,
        marginBottom: 10
    },
    welcomeAuthText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6379F4',
        marginBottom: 76
    },
    actionButtonWrapper: {
        marginBottom: 43,
        maxWidth: 255
    },
    actionButtonDescription: {
        fontSize: 10,
        color: 'rgba(58, 61, 66, 0.6);',
        textAlign: 'center',
        paddingHorizontal: '15%',
        marginBottom: 6
    },
    buttonWrapper: {
        backgroundColor: '#6379F4',
        borderRadius: 25,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});
