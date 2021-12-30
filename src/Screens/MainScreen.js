import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
    FaSearch, FaRegPlayCircle, FaGooglePlay, FaApple, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,
} from "react-icons/fa"
const { width, height } = Dimensions.get('window');

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require("../Assets/HarpyLogo.png"),
            deliveryPerson: require("../Assets/DeliveryPerson.png"),
            becomeAPartner: require("../Assets/BecomeAPartner.png"),
        }
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.navBar}>
                    <View style={styles.navBarLogoLeft}>
                        <Image
                            source={this.state.logo}
                            style={styles.logo}

                        />
                    </View>
                    <View style={styles.navBarItems}>
                        <Text style={styles.text}>Why Harpy?</Text>
                        <Text style={styles.text}>Services</Text>
                        <Text style={styles.text}>Download</Text>
                        <Text style={styles.text}>Become Our Partner</Text>
                        <FaSearch />
                    </View>
                </View>
                <View style={styles.banner}>
                    <View style={styles.bannerLeft}>
                        <View>

                        </View>
                        <View style={{ width: '60%' }}>
                            <Text style={styles.headerText}>Get The Fastest</Text>
                            <Text style={styles.headerText}>When Delivering</Text>
                            <Text style={styles.headerText}>Your Parcel</Text>
                            <Text style={styles.text}>
                                Harpy is a technological platform and super-app company
                                which offers a unique way of transporting goods. Through
                                collaborating with small and medium enterprises, we aim
                                to help deliver their products to you in the fastest way possible.
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttons}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons}>
                                <FaRegPlayCircle color="white" />
                                <Text style={styles.buttonText}>Watch Video</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.bannerRight}>
                        <View style={styles.circle}>
                            <Image
                                source={this.state.deliveryPerson}
                                resizeMode="contain"
                                style={{ width: '100%', height: '100%' }}

                            />
                        </View>
                    </View>
                </View>
                <View style={styles.sections}>
                    <View style={styles.textTop}>
                        <Text style={{ fontSize: 15, color: '#FFAC18' }}>What We Do</Text>
                        <Text style={{ fontSize: 25, color: '#666666', fontWeight: 'bold', }}>Your Favourite Parcel</Text>
                        <Text style={{ fontSize: 25, color: '#666666', fontWeight: 'bold', }}>Delivery Partner</Text>
                    </View>

                    <ScrollView style={styles.collageContainer} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }} horizontal={true}>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                    </ScrollView>
                </View>
                <View style={styles.smallSection}>
                    <Text style={{ color: '#FFAC18' }}>Our Apps</Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#666666', }}>Download Now</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.sections}>
                    <View style={styles.horizontalSection}>
                        <View style={styles.horizontalSectionLeft}>

                            <View style={{ width: '70%' }}>
                                <Text style={{ fontSize: 35, color: '#FFAA19', fontWeight: 'bold', }}>
                                    Harpy App
                                </Text>
                                <Text style={{ color: '#FFAA19', fontSize: 15, }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                </Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.buttons2}>
                                        <FaGooglePlay color="white" />
                                        <Text style={styles.buttonText}>Google Play</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttons2}>
                                        <FaApple color="white" />
                                        <Text style={styles.buttonText}>App Store</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                        <View style={styles.horizontalSectionRight}>
                            <Image source={this.state.becomeAPartner} style={{ width: 487.5, height: 280.5, }} />
                        </View>
                    </View>
                </View>
                <View style={styles.sections}>
                    <View style={styles.textTop}>
                        <Text style={{ fontSize: 15, color: '#FFAC18' }}>How Harpy Works</Text>
                        <Text style={{ fontSize: 25, color: '#666666', fontWeight: 'bold', }}>Have Fun With </Text>
                        <Text style={{ fontSize: 25, color: '#666666', fontWeight: 'bold', }}>Harpy</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '30%', }}>
                            <TouchableOpacity style={styles.buttons3} onPress={() => { }}>
                                <FaRegPlayCircle color="white" />
                                <Text style={styles.buttonText}>Watch Video</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <ScrollView style={styles.collageContainer} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }} horizontal={true}>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                        <View style={styles.collage}></View>
                    </ScrollView>

                </View>
                <View style={styles.sections}>
                    <View style={styles.horizontalSection}>
                        <View style={styles.horizontalSectionRight}>
                            <View style={styles.collage2}></View>
                            <View style={styles.collage2}></View>
                            <View style={styles.collage2}></View>
                        </View>
                        <View style={styles.horizontalSectionLeft}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontSize: 35, color: '#FFAA19', fontWeight: 'bold', textAlign: 'left' }}>
                                    Be Our Partner
                                </Text>
                                <Text style={{ color: '#FFAA19', fontSize: 15, }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.harpyAddress}>
                        <View style={{ width: '90%', height: '100%' }}>
                            <Text style={{ color: '#666666', fontSize: 30, fontWeight: 'bold' }}>HARPY</Text>
                            <Text style={{ color: '#666666', fontSize: 12, }}>Because Time is Precious</Text>
                            <Text style={{ color: '#666666', fontSize: 15, }}>
                                3rd Floor, Lot 29, Block D,
                                J/n Singgah Mata 1, Asia City,
                                88000 Kota Kinabalu,
                                Sabah
                            </Text>
                        </View>

                    </View>
                    <View style={styles.aboutCategories}>
                        <View style={styles.categoryHeader}>
                            <Text style={{ color: '#666666', fontSize: 15, fontWeight: "bold", }}>About</Text>
                        </View>
                        <View style={styles.categoryBody}>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Brand Story </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Locations </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Trust & Safety </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Careers </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}> </Text>
                        </View>
                    </View>
                    <View style={styles.aboutCategories}>
                        <View style={styles.categoryHeader}>
                            <Text style={{ color: '#666666', fontSize: 15, fontWeight: "bold", }}>Consumer</Text>
                        </View>
                        <View style={styles.categoryBody}>
                            <Text style={{ color: '#666666', fontSize: 13, }}>What's New </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyMail </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyFood </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyMart </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyPay </Text>
                        </View>
                    </View>
                    <View style={styles.aboutCategories}>
                        <View style={styles.categoryHeader}>
                            <Text style={{ color: '#666666', fontSize: 15, fontWeight: "bold", }}>Harpy Rider</Text>
                        </View>
                        <View style={styles.categoryBody}>
                            <Text style={{ color: '#666666', fontSize: 13, }}>What's New </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Transport </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyMail Partner </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Rider Centre </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}> </Text>
                        </View>
                    </View>
                    <View style={styles.aboutCategories}>
                        <View style={styles.categoryHeader}>
                            <Text style={{ color: '#666666', fontSize: 15, textAlign: 'center', fontWeight: "bold", }}>Harpy Cloud Runner</Text>
                        </View>
                        <View style={styles.categoryBody}>
                            <Text style={{ color: '#666666', fontSize: 13, }}>What's New </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Transport </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>HarpyMail Partner </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Rider Centre </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}> </Text>
                        </View>
                    </View>
                    <View style={styles.aboutCategories}>
                        <View style={styles.categoryHeader}>
                            <Text style={{ color: '#666666', fontSize: 15, fontWeight: "bold", }}>Quick Links</Text>
                        </View>
                        <View style={styles.categoryBody}>
                            <Text style={{ color: '#666666', fontSize: 13, }}>What's New </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Food Menu </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>COVID-19 Updates </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}>Developer Tools </Text>
                            <Text style={{ color: '#666666', fontSize: 13, }}> </Text>
                        </View>
                    </View>
                    <View style={styles.harpyAddress}>
                        <View style={{ width: '90%', height: '100%' }}>
                            <View style={styles.socMedTop}>
                                <Text style={{ color: '#666666', fontSize: 15, }}>Follow Us and Keep Updated</Text>
                            </View>
                            <View style={styles.socMedMid}>
                                <FaInstagramSquare color='#FFAC18' size={40} />
                                <FaFacebookSquare color='#FFAC18' size={40} />
                                <FaTwitterSquare color='#FFAC18' size={40} />
                            </View>
                            <View style={styles.socMedBottom}>
                                <TouchableOpacity style={styles.buttons4}>
                                    <FaGooglePlay color="white" />
                                    <Text style={styles.buttonText}>Google Play</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons4}>
                                    <FaApple color="white" />
                                    <Text style={styles.buttonText}>App Store</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>Terms & Conditions</Text>
                        </TouchableOpacity>

                        <Text style={styles.footerText}> | </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>Privacy Policies</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.footerText}>
                        @2021 Harpy Sdn. Bhd. All Rights Reserved
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
    },
    text: {
        fontWeight: 'bold',
        color: '#666666',
    },
    navBar: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navBarLogoLeft: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 50
    },
    logo: {
        width: 55,
        height: 28,
    },
    navBarItems: {
        flex: 5,
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    banner: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    bannerLeft: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 20
    },
    buttons: {
        backgroundColor: '#FFAC18',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '30%',
        height: '75%',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'left',
        color: '#666666'
    },
    bannerRight: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#FFC86A',
        width: 450,
        height: 450,
        borderRadius: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sections: {
        width: '100%',
        height: 350,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    textTop: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,

    },
    collageContainer: {
        width: "90%",
    },
    collage: {
        backgroundColor: '#FFC86B',
        height: 200,
        width: 200,
        borderRadius: 20,

    },
    collage2: {
        backgroundColor: '#FFC86B',
        height: 200,
        width: 200,
        borderRadius: 20,

    },
    smallSection: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    horizontalSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    horizontalSectionLeft: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    horizontalSectionRight: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttons2: {
        backgroundColor: '#FFAC18',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '40%',
        height: '200%',
        borderRadius: 10,
    },
    buttons3: {
        backgroundColor: '#FFAC18',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        width: '70%',
        height: '100%',
    },
    aboutSection: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    harpyAddress: {
        paddingHorizontal: 10,
        flex: 2,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutCategories: {
        flex: 1,
        height: '100%',
    },
    categoryHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryBody: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFBC49',
    },
    footerText: {
        color: 'white',
        fontSize: 15,
    },
    socMedTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    socMedMid: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    socMedBottom: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttons4: {
        backgroundColor: '#FFAC18',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        width: '40%',
        height: '90%',
    },
})