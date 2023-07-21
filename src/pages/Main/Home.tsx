import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Animated,
    TextInput,
    ScrollView,
} from 'react-native';

import { COLORS, SIZES, icons, images, data } from '../../exports';

const Home = ({ navigation }) => {


    // Dummy Datas
    const categoryData = [
        {
            id: 1,
            name: 'Cappuccino',
            icon: icons.coffee,
        },
        {
            id: 2,

            name: 'Espresso',
            icon: icons.clock,
        },

        {
            id: 3,
            name: 'Latte',
            icon: icons.ballbar,
        },
        {
            id: 4,
            name: 'Flat West',
            icon: icons.coffee,
        },



    ];




    const [categories, setCategories] = React.useState(categoryData);
    const [coffeeData, setCoffeeData] = React.useState(data.coffeeList);



    function renderHeader() {
        return (

            <View style={ styles.headerContainer}>
                <Animated.View
                    style={ styles.AnimatedContainer }>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius: 50,
                            backgroundColor: COLORS.secondary,

                            width: 45,
                            height: 45,
                        }}
                        onPress={() => { navigation.openDrawer(); }}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: COLORS.lightGray3 }}

                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius: 50,
                            backgroundColor: COLORS.secondary,

                            width: 45,
                            height: 45,
                        }}

                    >
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, borderRadius:10 ,tintColor:COLORS.lightGray3}}

                        />
                    </TouchableOpacity>

                </Animated.View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: COLORS.white, fontSize: 25 }}>Find the best</Text>
                    <Text style={{ color: COLORS.white, fontSize: 25, fontWeight: 'bold' }}>coffee for you</Text>
                </View>

                {/* search */}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.secondary,
                        width: '100%',
                        borderRadius: 12,
                        marginHorizontal: 20,

                        ...styles.shadow,
                    }}>
                        <View style={{ marginLeft: 10 }}>
                            <Image
                                source={icons.search}
                                style={{ height: 20, width: 20, tintColor: COLORS.lightGray3 }}
                            />
                        </View>
                        <TextInput
                            placeholder="Search your fav food"
                            placeholderTextColor={COLORS.lightGray3}
                            style={{

                                fontSize: 12,
                                width: 280,
                                paddingHorizontal: 12,
                            }}
                        />

                    </View>
                </View>


            </View>
        );
    }



    function renderCoffeeList() {
        const renderItem = ({ item }) => (
            <View
                style={{ padding: 17 }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('List', { item }); }}
                    style={{
                        backgroundColor: COLORS.secondary,
                        width: 150,
                        height: 220,
                        borderRadius: 10,
                        ...styles.shadow,
                    }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >

                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{ width: 130, height: 110, borderRadius: 10 }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: COLORS.transparentBlack1,
                                width: 60,
                                height: 20,
                                marginRight: 10,
                                borderBottomLeftRadius: 20,
                                borderTopRightRadius: 10,

                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icons.star} resizeMode="contain" style={{ width: 12, height: 12 }} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: COLORS.white, fontSize: 11 }}>{item.rating}</Text>

                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{}}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.white, fontSize: 20 }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, color: COLORS.white }}>with Oat Milk</Text>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{}}>
                                    <Text style={{ color: COLORS.white, fontSize: 20 }}><Text style={{ color: COLORS.lightGreen }}>$ </Text>{item.amount}</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                        width: 30,
                                        height: 30,
                                        backgroundColor: COLORS.lightGreen,
                                        borderRadius: 10,

                                    }}>

                                    <Image source={icons.plus} resizeMode="contain" style={{ width: 14, height: 14 }} />

                                </View>

                            </View>

                        </View>


                    </View>

                </TouchableOpacity>

            </View>
        );

        return (
            <FlatList
                data={coffeeData}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                numColumns={2}
                showsHorizontalScrollIndicator={false}


            />
        );}


    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
            > */}
                {renderCoffeeList()}
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
    },
    headerContainer : {
        padding: SIZES.padding,
        marginTop: 20,
    },
    AnimatedContainer : { flexDirection: 'row', justifyContent: 'space-between' },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default Home;
