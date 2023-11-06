import {StyleSheet, Text, View} from 'react-native';
import {Colors, FontFamily} from '../utils/constans.util';

type genreProps = {
  name: string;
};

const GenreCard = (props: genreProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {props.name}</Text>
    </View>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 45,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  text: {
    paddingTop: 5,
    fontFamily: FontFamily.sofia_Regular,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
});
