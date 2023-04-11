import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {ButtonGroup} from './components/ButtonGroup';

const App = () => {
  const printButtonLabel = item => {
    console.log(item);
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <ButtonGroup
          buttons={['One', 'Two']}
          doSomthingAfterClick={printButtonLabel}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;

// export default function App() {
//   const printButtonLabel = item => {
//     console.log(item);
//   };
//   return (

//     <View>
//       <Text>Hello</Text>
//     </View>
//     // <View style={styles.container}>
//     //   <Text>message</Text>
//     //   <ButtonGroup
//     //     buttons={['One', 'Two', 'Three']}
//     //     doSomthingAfterClick={printButtonLabel}
//     //   />
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

// import {ButtonGroup} from './components/ButtonGroup';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const printbuttonLabel = item => {
//     console.log(item);
//   };

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.navigationCenter}>Hello World! </Text>
//         <ButtonGroup
//           buttons={['One', 'Two', 'Three']}
//           doSomthingAfterClick={printbuttonLabel}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   navigationCenter: {
//     fontSize: 32,
//     textAlign: 'center',
//     alignContent: 'center',
//   },
//   naviAlign: {
//     alignContent: 'center',
//   },
//   container: {
//     flex: 1,
//     padding: 10,
//   },
// });

// export default App;
