import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProfileScreen() {

    const { user, logout } = useContext(AuthContext);
    if (!user) {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>Please log in.</Text>
                </View>
            </View>
        );

    }

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>Welcome, {user.username}!</Text>
                <Text>Email: {user.email}</Text>
                <Button title="Logout" onPress={logout} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
});



export default ProfileScreen;
