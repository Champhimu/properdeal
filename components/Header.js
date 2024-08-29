import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, Rect } from 'react-native-svg';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 1.34167H21.1405" stroke="#383838" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M1 7.34167H21.1405" stroke="#383838" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M1 14.3417H21.1405" stroke="#383838" strokeWidth="1.5" strokeLinecap="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={headerStyles.brandName}>Brandname</Text>
      </View>
      <View style={headerStyles.iconContainer}>
        {/* Message SVG */}
        <Svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M19.9 8.72003L3.1 8.72003C2.54305 8.72003 2.0089 8.94128 1.61508 9.33511C1.22125 9.72893 1 10.2631 1 10.82L1 22.02C1 22.577 1.22125 23.1111 1.61508 23.505C2.0089 23.8988 2.54305 24.12 3.1 24.12H8L11.5 28.32L15 24.12L19.9 24.12C20.457 24.12 20.9911 23.8988 21.3849 23.505C21.7788 23.1111 22 22.577 22 22.02L22 10.82C22 10.2631 21.7788 9.72893 21.3849 9.33511C20.9911 8.94128 20.457 8.72003 19.9 8.72003Z" stroke="#383838" strokeWidth="1.68" strokeMiterlimit="10" strokeLinecap="square"/>
          <Path d="M5.8999 14.32L17.0999 14.32" stroke="#383838" strokeWidth="1.68" strokeMiterlimit="10" strokeLinecap="square"/>
          <Path d="M5.8999 18.52H12.1999" stroke="#383838" strokeWidth="1.68" strokeMiterlimit="10" strokeLinecap="square"/>
          <Rect x="13.02" y="1" width="16" height="16" rx="7" fill="#C04F5C"/>
          <Rect x="13.02" y="1" width="16" height="16" rx="7" stroke="white" strokeWidth="2"/>
          <Path d="M20.8651 5.86506C21.1336 5.86719 21.4021 5.91832 21.6705 6.01847C21.939 6.11861 22.184 6.2848 22.4056 6.51705C22.6272 6.74716 22.8051 7.06143 22.9393 7.45987C23.0736 7.85831 23.1407 8.35795 23.1407 8.95881C23.1407 9.54048 23.0853 10.0572 22.9745 10.5089C22.8658 10.9585 22.7082 11.3377 22.5015 11.6467C22.2969 11.9556 22.0477 12.19 21.7536 12.3498C21.4617 12.5096 21.1315 12.5895 20.7629 12.5895C20.3964 12.5895 20.0693 12.517 19.7817 12.3722C19.4962 12.2251 19.2618 12.0217 19.0785 11.7617C18.8974 11.4996 18.7813 11.196 18.7302 10.8509H19.51C19.5803 11.1513 19.7199 11.3995 19.9287 11.5955C20.1396 11.7894 20.4177 11.8864 20.7629 11.8864C21.2678 11.8864 21.6663 11.6658 21.9582 11.2248C22.2522 10.7837 22.3992 10.1605 22.3992 9.35511H22.3481C22.2288 9.53409 22.0871 9.68857 21.923 9.81854C21.7589 9.94851 21.5768 10.0487 21.3765 10.119C21.1762 10.1893 20.9631 10.2244 20.7373 10.2244C20.3623 10.2244 20.0182 10.1317 19.705 9.94638C19.3939 9.75888 19.1446 9.50213 18.9571 9.17614C18.7717 8.84801 18.679 8.47301 18.679 8.05114C18.679 7.65057 18.7685 7.28409 18.9475 6.9517C19.1286 6.61719 19.3822 6.35085 19.7082 6.1527C20.0363 5.95455 20.4219 5.85866 20.8651 5.86506ZM20.8651 6.56818C20.5967 6.56818 20.3548 6.6353 20.1396 6.76953C19.9266 6.90163 19.7572 7.08061 19.6315 7.30646C19.5079 7.53018 19.4461 7.77841 19.4461 8.05114C19.4461 8.32386 19.5057 8.57209 19.6251 8.79581C19.7465 9.0174 19.9116 9.19425 20.1205 9.32635C20.3314 9.45632 20.5711 9.52131 20.8396 9.52131C21.042 9.52131 21.2305 9.48189 21.4053 9.40305C21.58 9.32209 21.7323 9.21236 21.8623 9.07386C21.9944 8.93324 22.0977 8.7745 22.1723 8.59766C22.2469 8.41868 22.2842 8.23224 22.2842 8.03835C22.2842 7.78267 22.2224 7.54297 22.0988 7.31925C21.9773 7.09553 21.809 6.91442 21.5938 6.77592C21.3807 6.63743 21.1379 6.56818 20.8651 6.56818Z" fill="white"/>
        </Svg>

        {/* Notification SVG */}
        <Svg width="30" height="20" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M14.8865 18.9044C14.8865 21.2192 13.0109 23.0956 10.696 23.0956C8.38135 23.0956 6.50488 21.2192 6.50488 18.9044" stroke="#383838" strokeWidth="1.8"/>
          <Path d="M14.4697 18.6798H17.0935C18.1171 18.674 18.9415 17.8389 18.9348 16.8159C18.9331 16.4802 18.8396 16.1504 18.665 15.864L16.6934 12.6323V8.052C16.8363 5.56603 15.5394 3.2195 13.3582 2.01868M13.612 2.16565C11.4985 0.748568 8.40132 1.47505 7.4294 2.01868C5.24812 3.2195 3.95039 5.56603 4.09407 8.052V12.6323L2.12251 15.864C1.58967 16.7374 1.86702 17.8781 2.74129 18.4101C3.02852 18.5846 3.35762 18.6781 3.69331 18.6798H15.2713" stroke="#383838" strokeWidth="1.8"/>
        </Svg>

        {/* Scanner SVG */}
        <Svg width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Rect width="30" height="50" fill="white"/>
          <Path d="M16.8806 19.2H14.2V21.8313H16.8806V19.2Z" fill="#383838"/>
          <Rect x="11.75" y="16.75" width="7.5" height="7.5" stroke="#383838" stroke-width="1.5"/>
          <Path d="M16.8806 30.2H14.2V32.8313H16.8806V30.2Z" fill="#383838"/>
          <Path d="M16.8806 30.2H14.2V32.8313H16.8806V30.2Z" fill="#383838"/>
          <Rect x="11.75" y="27.75" width="7.5" height="7.5" stroke="#383838" stroke-width="1.5"/>
          <Path d="M26.8806 30.2H24.2V32.8313H26.8806V30.2Z" fill="#383838"/>
          <Path d="M29.8806 27.2H27.2V29.8313H29.8806V27.2Z" fill="#383838"/>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M24.9999 27H22.5002H21.0002V28.5V34.5V36H22.5002H28.5002H30.0002V34.5V31H28.5002V34.5H22.5002V28.5H24.9999V27Z" fill="#383838"/>
          <Path d="M26.8806 19.2H24.2V21.8313H26.8806V19.2Z" fill="#383838"/>
          <Rect x="21.7502" y="16.75" width="7.5" height="7.5" stroke="#383838" stroke-width="1.5"/>
        </Svg>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#C04F5C',
    marginLeft: 10, // Add margin to separate the brand name from the hamburger icon
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
