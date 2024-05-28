import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { getProducts } from '../../api/product';
import { ProductItemDto } from '../../api/models/product';

export const Product = ({ navigation }: {navigation: any}) => {

    const [products, setProducts] = useState<ProductItemDto[]>();

    React.useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <>
            <SafeAreaView>
                <StatusBar translucent backgroundColor="#42c762" barStyle="dark-content" hidden={false} />
            </SafeAreaView>

            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={products}
                    horizontal={false}
                    numColumns={2}
                    //@ts-ignore
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={styles.separator} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetails', { ...item })}>
                                <View style={styles.cardHeader}>
                                    <View>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.price}>₦{item.price}</Text>
                                    </View>
                                </View>

                                <Image style={styles.cardImage} source={{ uri: item.images[0].original }} />

                                <View style={styles.cardFooter}></View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#E6E6E6',
    },
    listContainer: {
        alignItems: 'center',
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: 'white',
        flexBasis: '47%',
        marginHorizontal: 5,
        borderRadius: 7
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 12,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    /******** card components **************/
    title: {
        fontSize: 15,
        flex: 1,
    },
    price: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
    buyNow: {
        color: 'purple',
    },
    icon: {
        width: 25,
        height: 25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarLabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
