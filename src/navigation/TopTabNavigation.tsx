// CustomTopBar.js

import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const TopTabNavigation = (data: any) => {
    data = {
        user: {
            username: 'gecole',
            avatar: 'https://static.wikia.nocookie.net/jamescameronsavatar/images/0/08/Neytiri_Profilbild.jpg/revision/latest?cb=20100107164021&path-prefix=de'
        }
    }
    const navigation = useNavigation();
    // const route = useRoute();
    const state = useNavigationState(state => state)

    useEffect(() => {
        console.log(state)
    }, [state])

    return(
        <View style={styles.outerNav}>
            <View style={styles.innerNav}>
                <View style={styles.leftArea}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                        <Text>{'<-'}</Text>
                    </TouchableOpacity>
                    {/* logo example */}
                    <View style={{ height: '100%', aspectRatio: 1, backgroundColor: 'red', borderRadius: 10 }}/>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <View style={styles.avatar}>
                        {
                            data.user?.avatar
                            ? (
                                <Image
                                source={{ uri: data.user.avatar }}
                                style={{ width: '100%', height: '100%' }}
                                onError={() => {
                                    return(
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#dddddf' }}>
                                        <Text style={{ fontWeight: '500' }}>{ data.user?.username?.substring(0, 2) }</Text>
                                    </View>
                                    )
                                }}
                                />
                            )
                            : (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#dddddf' }}>
                                    <Text style={{ fontWeight: '500' }}>{ data.user?.username?.substring(0, 2) }</Text>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 20,
        right: 20,
        borderRadius: 60,
        zIndex: 10
    },
    innerNav: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fffffffa',
        borderRadius: 60,
        display: 'flex',
        flexDirection: 'row',
        padding: 6
    },
    leftArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        overflow: 'hidden'
    },
});

export default TopTabNavigation
