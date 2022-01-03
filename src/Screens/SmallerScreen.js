import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import {
    FaSearch, FaRegPlayCircle, FaGooglePlay, FaApple, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,
} from "react-icons/fa"
import logo from "../Assets/HarpyLogo.png";


const SmallerScreen = props => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={{ width: width, height: height }}>
            {/* no header if small screen? put all this in a drawer later */}

            {/* banner1 here */}
            <View style={{ width: '100%', height: height * 0.5, flexDirection: 'row', padding: 20, }}>
                <View style={styles.banner1Half}>
                    <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                        <Text style={styles.bigText}>Get The Fastest When Delivering Your Parcel</Text>
                        <Text style={styles.smallText}>Harpy is a technological platform and super-app company which offers a unique way of transporting goods. Through collaborating with small and medium enterprises, we aim to help deliver their products to you in the fastest way possible.​</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttons}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons}>
                                <FaRegPlayCircle color='white' />
                                <Text style={styles.buttonText}>Watch Video</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.banner1Half}>
                    <View style={styles.roundOrange}>
                        <Image source={require("../Assets/DeliveryPerson.png")} resizeMode="contain" style={{ width: '100%', height: '100%', }} />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: height * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 3, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "#FFAC18", fontSize: 15 }}>What We Do</Text>
                    <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Your Favourite Parcel</Text>
                    <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Delivery Partner</Text>
                </View>
                <View style={{ flex: 6, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ScrollView horizontal={true} style={{ height: '100%', width: width, }} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, }}>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                    </ScrollView>

                </View>
            </View>
            <View style={{ width: '100%', height: height * 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 3, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "#FFAC18", fontSize: 15 }}>Our Apps</Text>
                    <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Download Now</Text>
                </View>
                <View style={{ flex: 6, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={styles.banner1Half}>
                        <View style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', padding: 10 }}>
                            <Text style={styles.bigText2}>Harpy App</Text>
                            <Text style={styles.smallText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ​</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttons}>
                                    <FaGooglePlay color='white' />
                                    <Text style={styles.buttonText}>Google Play</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons}>
                                    <FaApple color='white' />
                                    <Text style={styles.buttonText}>App Store</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.banner1Half}>
                        <Image source={require("../Assets/BecomeAPartner.png")} resizeMode="contain" style={{ width: '80%', height: '80%', }} />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: height * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 3, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "#FFAC18", fontSize: 15 }}>How Harpy Works</Text>
                    <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Have Fun With</Text>
                    <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Harpy</Text>
                </View>
                <View style={{ flex: 6, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ScrollView horizontal={true} style={{ height: '100%', width: width, }} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, }}>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                        <View style={styles.orangeContainers}></View>
                    </ScrollView>

                </View>
            </View>
            <View style={{ width: '100%', height: height * 0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={styles.banner1Half}>
                    <View style={{ flex: 6, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <ScrollView horizontal={true} style={{ height: '30%', width: width, }} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, }}>
                            <View style={styles.orangeContainers2}></View>
                            <View style={styles.orangeContainers2}></View>
                            <View style={styles.orangeContainers2}></View>
                        </ScrollView>

                    </View>
                </View>
                <View style={styles.banner1Half}>
                    <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', padding: 10 }}>
                        <Text style={styles.bigText2}>Be Our Partner</Text>
                        <Text style={styles.smallText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ​</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ color: 'white', fontSize: 20 }}>Terms & Conditions | Privary Policy</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>© 2021 Harpy Sdn. Bhd. All Rights Reserved</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        flexDirection: 'row',
    },
    footer: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFBC49'
    },
    headerLeft: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        flex: 7,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerText: {
        color: '#666666',
        fontSize: '90%',
        fontWeight: 'bold'
    },
    banner1: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner1Half: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigText: {
        color: '#666666',
        fontSize: 25,
        fontWeight: 'bold',
    },
    bigText2: {
        color: '#FFAA19',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    smallText: {
        color: '#666666',
        fontSize: 10,
    },
    smallText2: {
        color: '#FFAA19',
        fontSize: 15,
        textAlign: 'left',
    },
    buttonContainer: {
        height: '20%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 10,

    },
    buttons: {
        backgroundColor: '#FFAC18',
        width: '45%',
        height: '65%',
        borderRadius: 50,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 8,
    },
    roundOrange: {
        width: "70%",
        height: "90%",
        minWidth: 250,
        minHeight: 250,
        backgroundColor: '#FFC86A',
        borderRadius: 1000,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orangeContainers: {
        backgroundColor: '#FFC86B',
        width: "15%",
        height: '75%',
        borderRadius: 20,

    },
    orangeContainers2: {
        backgroundColor: '#FFC86B',
        width: "30%",
        height: '100%',
        borderRadius: 20,

    },
    banner2: {},
    banner3: {},
    banner4: {},
    banner5: {},
});
export default SmallerScreen;