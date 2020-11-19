import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import { colors } from '../../utils';

const ActionButton = ({description, title, onPress}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.description}>
                {description}
            </Text>
            <Button title={title} onPress={onPress} />
        </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 43,
        maxWidth: 255
    },
    description: {
        fontSize: 10,
        color: colors.text.primary60,
        textAlign: 'center',
        paddingHorizontal: '15%',
        marginBottom: 6
    },
});
