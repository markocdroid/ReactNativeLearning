import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { styles } from "./App";

const TravelServicesScreen = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3' }}
            style={styles.backgroundImage}
            blurRadius={5}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.serviceCard}>
                    <Text style={styles.text}>Our Travel Services</Text>
                    <Text style={styles.serviceTitle}>- Flight Booking</Text>
                    <Text style={styles.serviceTitle}>- Hotel Reservations</Text>
                    <Text style={styles.serviceTitle}>- Guided Tours</Text>
                    <Text style={styles.serviceTitle}>- Travel Insurance</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default TravelServicesScreen;