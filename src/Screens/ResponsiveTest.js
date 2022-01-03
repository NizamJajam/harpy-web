// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import SideMenu from 'react-native-side-menu-updated';
// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;

// export default class ResponsiveTest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             width: windowWidth,
//         }
//     }
//     renderMainScreen() {
//         if (windowWidth < 1366) {
//             return (
//                 //doesn't work lol
//                 <SideMenu>
//                     <View style={styles.main}>
//                         <Text style={{ color: 'black' }}>less than 1366</Text>
//                     </View>
//                 </SideMenu>
//             )
//         }
//         else {
//             return (

//                 <View style={styles.main}>
//                     <Text style={{ color: 'black' }}>More than 1366</Text>
//                 </View>


//             )
//         }
//     }
//     render() {
//         return (
//             this.renderMainScreen()
//         )
//     }
// }
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         width: windowWidth,
//         height: windowHeight,
//         backgroundColor: "red",
//         justifyContent: 'center',
//         alignItems: 'center'

//     },
// })

import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import {
    FaSearch, FaRegPlayCircle, FaGooglePlay, FaApple, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,
} from "react-icons/fa"
import logo from "../Assets/HarpyLogo.png";
import SmallerScreen from "./SmallerScreen"

//code is written twice, one for big screen, one for smaller
const ResponsiveTest = props => {
    const { height, width } = useWindowDimensions(); //this checks the window size

    //if the window size is small, render this 
    if (width >= 483 && width < 1000) {
        return (
            <SmallerScreen />
        )
    }
    //if screen size is big, render this
    else if (width >= 1000) {
        return (
            <View style={{ width: width, height: height, maxWidth: 1920, minWidth: 630, }}>
                {/* header here */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={require("../Assets/HarpyLogo.png")} style={{ width: 55, height: 28 }} />
                    </View>
                    <View style={styles.headerRight}>
                        <Text style={styles.headerText}>Why Harpy?</Text>
                        <Text style={styles.headerText}>Services</Text>
                        <Text style={styles.headerText}>Download</Text>
                        <Text style={styles.headerText}>Be Our Partner</Text>
                        <FaSearch color='#666666' />
                    </View>
                </View>
                {/* banner1 here */}
                <View style={{ width: '100%', height: height * 0.8, flexDirection: 'row' }}>
                    <View style={styles.banner1Half}>
                        <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
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
                <View style={{ width: '100%', height: height * 0.6, justifyContent: 'center', alignItems: 'center' }}>
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
                <View style={{ width: '100%', height: height * 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 3, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#FFAC18", fontSize: 15 }}>Our Apps</Text>
                        <Text style={{ color: "#666666", fontSize: 25, fontWeight: 'bold' }}>Download Now</Text>
                    </View>
                    <View style={{ flex: 6, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={styles.banner1Half}>
                            <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', padding: 10 }}>
                                <Text style={styles.bigText2}>Harpy App</Text>
                                <Text style={styles.smallText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type​</Text>
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
                <View style={{ width: '100%', height: height * 0.6, justifyContent: 'center', alignItems: 'center' }}>
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
                <View style={{ width: '100%', height: height * 0.8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={styles.banner1Half}>
                        <View style={{ flex: 6, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
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
                            <Text style={styles.smallText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type​</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Terms & Conditions | Privary Policy</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>© 2021 Harpy Sdn. Bhd. All Rights Reserved</Text>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
                <Text>why would you do this please stop</Text>
            </View>
        )
    }

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
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    bigText2: {
        color: '#FFAA19',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    smallText: {
        color: '#666666',
        fontSize: '90%',
        textAlign: 'left',
    },
    smallText2: {
        color: '#FFAA19',
        fontSize: '90%',
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
        width: '40%',
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
        fontSize: 17,
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
        width: "25%",
        height: '100%',
        borderRadius: 20,

    },
    banner2: {},
    banner3: {},
    banner4: {},
    banner5: {},
});
export default ResponsiveTest;