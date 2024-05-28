import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TextInputProps, TouchableOpacity, Text } from 'react-native';

type Props = {

} & TextInputProps;

const Input: React.FC<Props> = props => {
    return (
        <TextInput
            {...props}
        />
    );
};

const Screen: React.FC = ({ navigation }) => {

    const [name, setName] = useState('');

    const buttons = [
        {
            name: 'SUBMIT',
            method: () => navigation.navigate('AnotherScreen', { name })
        },
        {
            name: 'RESET',
            method: () => setName('')
        }
    ]

    return (
        <View style={styles.container}>
            <Input
                value={name}
                onChangeText={(text) => setName(text)}
            />

            {
                buttons.map(item => {
                    return (
                        <TouchableOpacity onPress={item.method()}>
                            <Text style={styles.title}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        color: 'red',
    }
});

export default Screen;