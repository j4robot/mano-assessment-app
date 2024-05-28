import React from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import { ProductItemDto } from '../../api/models/product';

export const ProductDetails = ({navigation, route}: {navigation: any, route: any}) => {

    const {id, title, price,images} = route.params as ProductItemDto;

    console.log({id, title, price,images})

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: images[0].large }} />
            <View style={styles.info}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.price}>₦{price}</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            <Button title="Add to Cart" onPress={() => { }} />
        </ScrollView>
    );
};

const styles = {
    container: {
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    info: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#999',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
} as any;