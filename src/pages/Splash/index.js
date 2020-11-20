import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    })

    return (
        <View style={styles.wrapper}>
            <Image 
                source={{uri: "https://1.bp.blogspot.com/-LDwtS_oxYgg/XO67MmzGN7I/AAAAAAAAADI/hrSqgCRod3oIS6NtwjOqdY0okl8hwyi6gCLcBGAs/s1600/logo%2Bdana%2Bdompet%2Bdigital%2BPNG.png"}}
                style={styles.image}
            />
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
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
});
