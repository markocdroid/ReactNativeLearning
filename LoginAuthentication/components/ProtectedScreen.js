import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProtectedScreen() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return (
            <View style={styles.container}>
                <Text>Please log in to access this screen.</Text>;
            </View>
        );
    }
    if (user.role === 'admin') {
        return (
            <View style={styles.container}>
                <Text>Access Granted. Welcome Admin!</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text testID='accessDeniedMessage'>Access Denied. Only admins can view this screen.</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProtectedScreen;
