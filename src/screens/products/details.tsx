import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, Button, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ProductItemDto } from '../../api/models/product';
import { getProductById } from '../../api/product';

export const ProductDetails = ({ navigation, route }: { navigation: any, route: any }) => {
    const [showModal, setShowModal] = useState(false);

    const { id} = route.params as ProductItemDto;
    const [product, setProduct] = useState<ProductItemDto>();

    useEffect(() => {
        getProductById(id).then(prod => setProduct(prod));
    }, [setProduct])

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity onPress={openModal}>
                <Image style={styles.image} source={{ uri: product?.images[0].large }} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                visible={showModal}
                transparent={true}
                onRequestClose={() => setShowModal(false)}>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <ImageViewer imageUrls={[{ url: product?.images[0].large || '' }]} />
                </TouchableWithoutFeedback>
            </Modal>

            <View style={styles.info}>
                <Text style={styles.name}>{product?.title}</Text>
                <Text style={styles.price}>₦{product?.price}</Text>
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