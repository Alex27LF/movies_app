import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '../utils/constans.util';
import {ActivityIndicator} from 'react-native-paper';

const LoadingPage = ({statusBar}: any) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden={statusBar} />
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={Colors.orange} />
      </View>
    </ScrollView>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
});
