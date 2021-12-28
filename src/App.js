import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FaSearch, FaRegPlayCircle } from "react-icons/fa"
// const windowHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: require("./Assets/HarpyLogo.png"),
      deliveryPerson: require("./Assets/DeliveryPerson.png"),
      becomeAPartner: require("./Assets/BecomeAPartner.png"),
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
              <Text style={styles.headerText}>Get The Fastest</Text>
              <Text style={styles.headerText}>When Delivering</Text>
              <Text style={styles.headerText}>Your Parcel</Text>
            </View>
            <View style={{ width: '60%' }}>
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
            <Text style={{ fontSize: 25, color: '#666666' }}>Your Favourite Parcel</Text>
            <Text style={{ fontSize: 25, color: '#666666' }}>Delivery Partner</Text>
          </View>

          <View style={styles.collageContainer}>
            <View style={styles.collage}></View>
            <View style={styles.collage}></View>
            <View style={styles.collage}></View>
            <View style={styles.collage}></View>
            <View style={styles.collage}></View>
          </View>
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
              <Text style={{ fontSize: 35, color: '#FFAA19', fontWeight: 'bold' }}>
                Harpy App
              </Text>
              <View style={{ width: '70%' }}>
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
            <View style={styles.horizontalSectionRight}>
              <Image source={this.state.becomeAPartner} style={{ width: 487.5, height: 280.5, }} />
            </View>
          </View>
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
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  collageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'

  },
  collage: {
    backgroundColor: '#FFC86B',
    height: 220,
    width: 220,
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
    justifyContent: 'center',
    alignItems: 'center',
  }
})