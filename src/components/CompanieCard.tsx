import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, FontFamily} from '../utils/constans.util';

type companieProps = {
  logo_path: string;
  name: string;
};

const CompanieCard = (props: companieProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.logo_path,
        }}
        style={styles.image}
      />
      <Text style={styles.text}> {props.name}</Text>
    </View>
  );
};

export default CompanieCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderColor: Colors.orange,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 85,
  },
  text: {
    paddingTop: 5,
    fontFamily: FontFamily.sofia_Regular,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
  },
});
