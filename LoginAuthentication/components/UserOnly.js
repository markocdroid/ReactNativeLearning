import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function UserOnly() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return (
            <View style={styles.container}>
                <Text>Please log in to access this screen.</Text>
            </View>
        );
    }

    //For exercise purpose:  Only this user can log in with required credentials from lab.
    if (user.username === 'user') {
        return (
            <View style={styles.container}>
                <Text>Access Granted. Welcome User! </Text>;
            </View>
        );
    }
    else if (user.role === 'admin') {
        return (
            <View style={styles.container}>
                <Text>Access denied to admins.</Text>
            </View>
        );
    }
    else return (
        <Text testID='accessDeniedMessage'>Access Denied. Only user can view this screen.</Text>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UserOnly;
