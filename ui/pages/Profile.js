import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle, Defs, Stop, LinearGradient } from 'react-native-svg'; // Import Svg and Path from react-native-svg

// Property Icon
const PropertyIcon = (props) => (
  <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <Path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M8.49941 0L16.7874 5.49164L17 5.6739L16.9989 17H11.0179V16.9703H5.98112V17H0V5.67575L0.212462 5.49356L8.49941 0ZM5.98112 15.7826H11.0179V11.3224C11.0179 10.8304 10.595 10.4316 10.0735 10.4316H6.92551C6.40394 10.4316 5.98112 10.8304 5.98112 11.3224V15.7826Z" 
      fill="white"
    />
  </Svg>
);

// Tenant Icon
const TenantIcon = (props) => (
  <Svg width="20" height="15" viewBox="0 0 20 15" fill="none" {...props}>
    <Path 
      d="M7.22228 14.8676L2.04265 14.8678C1.24748 14.8674 0.488377 14.8451 0.192877 13.8988C-0.0698124 13.0575 0.454428 11.4468 0.849266 10.7014C1.65119 9.18755 3.43712 8.41743 5.00766 7.93448C5.02859 7.90603 5.22864 7.45272 5.2197 7.41805C5.21655 7.40592 5.10489 7.3164 5.08691 7.30031C3.94934 6.28304 3.52594 4.62641 3.67661 3.14573C3.84357 1.50441 5.0452 0.108388 6.75646 0L7.44258 0.0125791C8.89862 0.130256 10.0682 1.5197 10.2687 2.90806C10.4985 4.49888 9.99749 6.3653 8.74625 7.42308L8.91358 7.84012C8.95025 7.92981 8.93327 7.93681 9.02437 7.96592L9.73095 8.19282C10.3222 8.42113 10.9029 8.69007 11.4515 9.00767C12.9333 9.86561 13.7576 11.5689 13.8345 13.2378C13.8681 13.9654 13.5754 14.6134 12.8031 14.8217C12.5263 14.8964 12.2003 14.8674 11.9158 14.8676H7.22228Z" 
      fill="#A37566"
    />
    <Path 
      d="M18.1616 13.9976L16.492 13.9976C15.5487 13.9959 15.1711 14.1032 14.9756 13.0585L14.8492 12.4574C14.388 10.4391 13.5723 9.06944 11.718 7.95815C11.7529 7.83089 11.963 7.62268 11.8882 7.51418L11.6467 7.19211C11.1298 6.46359 10.9076 5.20375 11.0353 4.32308C11.228 2.99522 12.3473 2.09126 13.7906 2.00381C15.6722 1.91871 16.818 3.27004 16.8192 4.89592C16.8198 5.7874 16.6008 6.81815 15.9351 7.50608C15.8542 7.58966 15.7549 7.66663 15.687 7.75942C15.7018 7.79876 15.8116 8.16361 15.8229 8.16711C18.2752 8.92464 19.965 10.0522 19.9998 12.6411C20.005 13.0323 19.9138 13.3385 19.607 13.6236C19.1727 14.0271 18.7244 13.9963 18.1616 13.9976Z" 
      fill="#A37566"
    />
  </Svg>
);

// Search Icon (Left Side)
const SearchIcon = (props) => (
  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.0612 17.4388L14.8368 13.7763C17.6631 10.383 17.3207 5.36694 14.0594 2.38936C10.798 -0.588227 5.77157 -0.473992 2.64889 2.64868C-0.473778 5.77135 -0.588013 10.7978 2.38957 14.0591C5.36716 17.3205 10.3833 17.6629 13.7765 14.8366L17 18.5C17.2931 18.7931 17.7682 18.7931 18.0612 18.5C18.3543 18.2069 18.3543 17.7318 18.0612 17.4388ZM1.75022 8.50001C1.75022 4.77209 4.7723 1.75001 8.50022 1.75001C12.2281 1.75001 15.2502 4.77209 15.2502 8.50001C15.2502 12.2279 12.2281 15.25 8.50022 15.25C4.77401 15.2459 1.75436 12.2262 1.75022 8.50001Z" fill="#A37566"/>
  </Svg>

);

// Filter Icon (Right Side)
const FilterIcon = (props) => (
  <Svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="21.5" cy="21.5" r="21.5" fill="url(#paint0_linear_3389_275)"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.599 20.2866C12.4445 20.3565 12.2833 20.4262 12.112 20.4483C11.3478 20.5472 10.7451 19.639 11.2332 19.0643C11.4029 18.8645 11.7345 18.61 12.021 18.39C12.1319 18.3048 12.2361 18.2249 12.3215 18.1553L20.0908 11.8761C20.1683 11.8138 20.2454 11.7471 20.3235 11.6795C20.6444 11.4018 20.9811 11.1104 21.4194 11.0633C21.9049 11.0015 22.3712 11.4162 22.7459 11.7494L22.7459 11.7494C22.8296 11.8239 22.9087 11.8942 22.9824 11.9543L30.6729 18.1524C30.7434 18.209 30.831 18.2738 30.9269 18.3448C31.2945 18.617 31.783 18.9786 31.89 19.3057C32.1691 20.1595 31.2944 20.7376 30.3912 20.2695C30.3658 20.7296 30.3712 21.1959 30.3767 21.6602V21.6603C30.3789 21.854 30.3812 22.0474 30.3812 22.2398L30.3821 26.953L30.3822 27.0669C30.383 27.4747 30.3839 27.8755 30.2877 28.2779C29.9953 29.5023 28.9886 30.5799 27.6933 30.9279C27.1469 31.0746 26.6083 31.0735 26.0495 31.0724L25.9483 31.0722L22.3887 31.0724V27.3008C23.5384 26.9507 24.375 25.8819 24.375 24.6176V21.8133C24.375 20.2645 23.1195 19.0089 21.5707 19.0089C20.0219 19.0089 18.7663 20.2645 18.7663 21.8133V24.6176C18.7663 25.852 19.5639 26.9002 20.6718 27.2748V31.0724L16.6165 31.0726C14.726 31.0712 13.1461 30.1079 12.7035 28.2947C12.5924 27.8395 12.5946 27.3668 12.5967 26.9005L12.5967 26.9005C12.597 26.8373 12.5973 26.7743 12.5973 26.7114L12.599 20.2866Z" fill="white"/>
    <Defs>
    <LinearGradient id="paint0_linear_3389_275" x1="5.86364" y1="31.2727" x2="65.1515" y2="6.51515" gradientUnits="userSpaceOnUse">
    <Stop stop-color="#AD4675"/>
    <Stop offset="1" stop-color="#EE6E82"/>
    </LinearGradient>
    </Defs>
  </Svg>
);

const CustomSearchBar = () => (
  <View style={styles.searchBarContainer}>
    <SearchIcon style={styles.leftIcon} />
    <TextInput
      style={styles.searchBar}
      placeholder="Ask/Search localities, landmark.."
    />
    <FilterIcon style={styles.rightIcon} />
  </View>
);

const CustomButton = ({ title, onPress, isActive, Icon }) => (
  <TouchableOpacity
    style={[styles.button, isActive && styles.buttonActive]}
    onPress={onPress}
  >
    <View style={styles.buttonContent}>
      <Icon style={styles.icon} />
      <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

// Sample data to render in the list
const properties = [
  {
    id: '1',
    price: '₹5000',
    image: require('../../assets/HomeBanner.png'), // Replace with your image path
    title: '1RK Independent house',
    location: 'Andheri east, Mumbai',
    size: '600sqft',
    availableFrom: '12 Mar 2024',
    distance: '100m',
    timeAgo: '12hr ago',
  },
  {
    id: '2',
    price: '₹5000',
    image: require('../../assets/HomeBanner.png'), // Replace with your image path
    title: '1RK Independent house',
    location: 'Andheri east, Mumbai',
    size: '600sqft',
    availableFrom: '12 Mar 2024',
    distance: '100m',
    timeAgo: '12hr ago',
  },
  // Add more properties as needed
];

const PropertyCard = ({ property }) => (
  <View style={styles.card}>
    <Image source={property.image} style={styles.image} />
    <View style={styles.priceDistanceContainer}>
      <Text style={styles.price}>{property.price}</Text>
      <Text style={styles.distance}>{property.distance}</Text>
    </View>
    <Text style={styles.title}>{property.title}</Text>
    <Text style={styles.location}>{property.location}</Text>
    <View style={styles.detailsContainer}>
      <Text style={styles.size}>{property.size}</Text>
      <Text style={styles.availableFrom}>Available from: {property.availableFrom}</Text>
    </View>
    <Text style={styles.timeAgo}>{property.timeAgo}</Text>
  </View>
);

const RecentViewed = () => {
  return (
    <View style={styles.cardcontainer}>
      <Text style={styles.header}>Recent viewed</Text>
      <FlatList
        data={properties}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PropertyCard property={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default function ProfileScreen() {
  const [activeButton, setActiveButton] = useState('property');

  return (
    <ScrollView style={styles.container}>
      {/* Image with Gradient Overlay */}
      <ImageBackground
        source={require('../../assets/HomeBanner.png')}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.gradient}></View>
          <Text style={styles.text}>Your Text Here</Text>
        </View>
      </ImageBackground>

      {/* Content Below the Image */}
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Property Listings"
            onPress={() => setActiveButton('property')}
            isActive={activeButton === 'property'}
            Icon={PropertyIcon}
          />
          <CustomButton
            title="Tenant & Buyer"
            onPress={() => setActiveButton('tenant')}
            isActive={activeButton === 'tenant'}
            Icon={TenantIcon}
          />
        </View>
        {/* <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        /> */}
        <CustomSearchBar />
        <Text style={styles.infoText}>Can't find the properties, tanant or buyers ? </Text>
      </View>
      <RecentViewed />
      <Text style={styles.infoText}>Can't find the properties, tanant or buyers ? </Text>

      <Text style={styles.infoText}>Can't find the properties, tanant or buyers ? </Text>
      <Text style={styles.infoText}>Can't find the properties, tanant or buyers ? </Text>

      <Text style={styles.infoText}>Can't find the properties, tanant or buyers ? </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  gradient: {
    height: '30%',
    backgroundColor: 'rgba(30, 30, 30, 0.75)',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    opacity: 0.75,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  contentContainer: {
    width: '100%',
    padding: 5,
    backgroundColor: '#FAEEE9',
  },
  searchBar: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: '#C04F5C',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  buttonTextActive: {
    color: 'white',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65, // Set height to 65px
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  rightIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  cardcontainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    paddingLeft: 5,
  },
  card: {
    width: 250,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: 150,
  },
  priceDistanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#000',
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
  },
  distance: {
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  location: {
    fontSize: 14,
    color: '#777',
    paddingHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  size: {
    fontSize: 12,
    color: '#555',
  },
  availableFrom: {
    fontSize: 12,
    color: '#555',
  },
  timeAgo: {
    fontSize: 12,
    color: '#555',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});