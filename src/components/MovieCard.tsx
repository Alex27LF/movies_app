import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {IMovieItem} from '../utils/Movie.util';
import {getImage} from '../services/TheMovieDB.service';
import {Colors, FontFamily} from '../utils/constans.util';
import Rating from './Raiting';

const MovieCard = (props: IMovieItem) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          source={{
            uri: getImage(props.backdrop_path),
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.text}>
            {format(new Date(props.release_date), 'dd MMM yyyy')}
          </Text>
          <Rating
            vote_average={props.vote_average}
            vote_count={props.vote_count}
            color={Colors.black}
            size={22}
            fontSize={17}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Details', {id: props.id})}
            style={styles.button}>
            <Text style={styles.buttonText}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginHorizontal: 25,
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: Colors.white,
  },
  image: {
    width: '75%',
    resizeMode: 'cover',
    marginTop: -42,
    borderRadius: 15,
    aspectRatio: 5 / 3,
  },
  title: {
    paddingVertical: 3,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: FontFamily.sofia_ExtraBold,
    color: Colors.orange,
  },
  text: {
    paddingHorizontal: 5,
    fontSize: 17,
    paddingVertical: 1,
    fontFamily: FontFamily.sofia_Regular,
  },
  info: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.orange,
    padding: 5,
    marginTop: 5,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 19,
    color: Colors.white,
    fontFamily: FontFamily.sofia_SemiBold,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  header: {
    marginTop: 48,
    display: 'flex',
    flex: 1,
  },
});
