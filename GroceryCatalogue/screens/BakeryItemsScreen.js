
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryScreen() {
    const bakery = [
        { name: 'Pizza', price: '$1.99', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg' },
        { name: 'Cookie', price: '$0.90', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Choco_chip_cookie.png' },
        { name: 'Bun', price: '$0.50', image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Sesame_seed_hamburger_buns.jpg' },
        { name: 'Crostata', price: '$0.90', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Crostata_con_crema_e_fragole.jpg' },
        { name: 'Bacon & Egg Pie', price: '$1.00', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Bacon%26egg_pie.jpg' },
        { name: 'Pound Layer Cake', price: '$2.90', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Fresh baked goods for your daily needs</Text>

            {bakery.map((item, index) => (
                <View key={index} style={styles.itemContainer} >

                    <Image source={{ uri: item.image }} style={styles.image} />

                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => alert(`${vegetable.name} added to cart`)}>
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            ))}
        </ScrollView>
    );
}
