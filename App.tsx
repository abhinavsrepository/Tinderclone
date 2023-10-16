import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/component/TinderCard/index.js';
import users from './assets/data/users.js'
const jeff ={
  name: 'Jeff',
  bio: 'I m Jeff',
  image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
}
const App = () => {
  return (
    <View style={styles.pageContainer}>
      <Card user={jeff} />
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default App;
