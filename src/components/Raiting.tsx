import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, FontFamily} from '../utils/constans.util';

const Rating = (props: any) => {
  return (
    <View style={styles.rating}>
      <Feather name="star" size={props.size} color={Colors.yellow} />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          paddingHorizontal: 5,
          fontSize: props.fontSize,
          paddingVertical: 1,
          fontFamily: FontFamily.sofia_Regular,
          color: props.fontColor ? props.fontColor : null,
        }}>
        {props.vote_average.toFixed(1) + ' / ' + props.vote_count}
      </Text>
      <Ionicons
        name="person-circle-outline"
        color={props.color}
        size={props.size}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    display: 'flex',
  },
});
