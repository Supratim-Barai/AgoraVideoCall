/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from "./Component/Home";
import Video from "./Component/Video"
import { Router, Scene, ActionConst } from 'react-native-router-flux';

// const App: () => React$Node = () => {
//   return (
  
//       <Home/>
 
//   );
// };

const RouterComponent = () => (
	<Router>
		<Scene>
			<Scene key="Home" component={Home} title="Agora Video Call" initial type={ActionConst.RESET} />
			<Scene key="Video" component={Video} title="Video Feed" type={ActionConst.RESET} hideNavBar={true} />
		</Scene>
	</Router>
);

export default RouterComponent;
