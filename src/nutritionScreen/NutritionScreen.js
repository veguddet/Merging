// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
// import * as Animatable from 'react-native-animatable';


// import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
// import Pizza from '../../src/assets/FoodImages/Pizza.jpg';


// const MAX_HEIGHT = 250;

// const styles = StyleSheet.create({
//   image: {
//     height: MAX_HEIGHT,
//     width: Dimensions.get('window').width,
//     alignSelf: 'stretch',
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 20,
//   },
//   name: {
//     fontWeight: 'bold',
//   },
//   section: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//     backgroundColor: 'white',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   sectionContent: {
//     fontSize: 16,
//     textAlign: 'justify',
//   },
//   keywords: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     flexWrap: 'wrap',
//   },
//   keywordContainer: {
//     backgroundColor: '#999999',
//     borderRadius: 10,
//     margin: 10,
//     padding: 10,
//   },
//   keyword: {
//     fontSize: 16,
//     color: 'white',
//   },
//   titleContainer: {
//     flex: 1,
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageTitle: {
//     color: 'white',
//     backgroundColor: 'transparent',
//     fontSize: 24,
//   },
//   navTitleView: {
//   //  height: MIN_HEIGHT,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 16,
//     opacity: 0,
//   },
//   navTitle: {
//     color: 'white',
//     fontSize: 18,
//     backgroundColor: 'transparent',
//   },
//   sectionLarge: {
//     height: 600,
//   },
// });

// class TvShow extends Component {
//   constructor() {
//     super(props);
//     this.state = { showNavTitle: false };
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <StatusBar barStyle="light-content" />
//         <HeaderImageScrollView
//           maxHeight={MAX_HEIGHT}
//           minHeight={MIN_HEIGHT}
//           maxOverlayOpacity={0.6}
//           minOverlayOpacity={0.3}
//           fadeOutForeground
//           renderHeader={() => <Image source={Pizza} style={styles.image} />}
//           renderFixedForeground={() => (
//             <Animatable.View
//               style={styles.navTitleView}
//               ref={navTitleView => {
//                 this.navTitleView = navTitleView;
//               }}
//             >
//               <Text style={styles.navTitle}>
//                as, (1)
//               </Text>
//             </Animatable.View>
//           )}
//           renderForeground={() => (
//             <View style={styles.titleContainer}>
//               <Text style={styles.imageTitle}>saaa</Text>
//             </View>
//           )}
//         >
//           <TriggeringView
//             style={styles.section}
//             onHide={() => this.navTitleView.fadeInUp(200)}
//             onDisplay={() => this.navTitleView.fadeOut(100)}
//           >
//             <Text style={styles.title}>
//               <Text style={styles.name}>Pizza</Text>, (12)
//             </Text>
//           </TriggeringView>
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Overview</Text>
//             <Text style={styles.sectionContent}>sasass</Text>
//           </View>
//           <View style={[styles.section, styles.sectionLarge]}>
//             <Text style={styles.sectionTitle}>Keywords</Text>
//             <View style={styles.keywords}>
//               {tvShowContent.keywords.map(keyword => (
//                 <View style={styles.keywordContainer} key={keyword}>
//                   <Text style={styles.keyword}>{keyword}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </HeaderImageScrollView>
//       </View>
//     );
//   }
// }

// export default TvShow;