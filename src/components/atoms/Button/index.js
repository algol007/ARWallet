import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        paddingVertical: 13
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

