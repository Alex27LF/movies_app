import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IMovieDetails} from '../utils/Movie.util';
import LinearGradient from 'react-native-linear-gradient';
import {format} from 'date-fns';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {getDetailsMovie, getImage} from '../services/TheMovieDB.service';
import {Colors, FontFamily} from '../utils/constans.util';
import CloseButton from '../components/CloseButton';
import Rating from '../components/Raiting';
import GenreCard from '../components/GenreCard';
import CompanieCard from '../components/CompanieCard';
import LoadingPage from '../components/LoadingPage';

const MovieDetailsScreen = ({navigation, route}: any) => {
  const [movie, setMovie] = useState<IMovieDetails>();

  useEffect(() => {
    (async () => {
      const dataMovie = await getDetailsMovie(route.params.id);
      setMovie(dataMovie);
    })();
  }, [route.params.id]);

  if (movie === undefined && movie == null) {
    return <LoadingPage statusBar={true} />;
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={{
            uri: getImage(movie.backdrop_path),
          }}
          style={styles.imageBG}>
          <LinearGradient
            colors={[Colors.BlackRGB10, Colors.black]}
            style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <CloseButton
                name="chevron-back-outline"
                header={''}
                action={() => navigation.goBack()}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.holder}>
              <Image
                source={{uri: getImage(movie.poster_path)}}
                style={styles.image}
              />
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={styles.time}>
                <Feather
                  name="clock"
                  size={18}
                  color={Colors.white}
                  style={styles.margin}
                />
                <Text style={styles.timeText}>
                  {Math.floor(movie.runtime / 60)}h{' '}
                  {Math.floor(movie.runtime % 60)}m
                </Text>
                <Rating
                  vote_average={movie.vote_average}
                  vote_count={movie.vote_count}
                  color={Colors.white}
                  size={18}
                  fontSize={18}
                  fontColor={Colors.white}
                />
              </View>
              <Text style={styles.tagText}>{movie.tagline}</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentOverview}>
          <View style={styles.itemCenter}>
            <FlatList
              data={movie.genres}
              keyExtractor={(item: any) => item.id}
              bounces={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              contentContainerStyle={styles.itemSpace}
              renderItem={({item}) => {
                return <GenreCard name={item.name} />;
              }}
            />
          </View>
          <Text style={styles.text}>{movie.overview}</Text>
          <View style={styles.money}>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Release date:</Text>
              <Text style={styles.text}>
                {format(new Date(movie.release_date), 'dd MMMM yyyy')}
              </Text>
            </View>
            {movie.adult ? (
              <View style={styles.info}>
                <Text style={styles.text}>for Adults</Text>
                <Octicons
                  name={'circle-slash'}
                  color={Colors.orange}
                  size={18}
                  style={styles.adultSpace}
                />
              </View>
            ) : null}
          </View>
          <View style={styles.money}>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Budget:</Text>
              <Text style={styles.text}>
                $ {Math.floor(movie.budget / 1000000)} M.
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Revenue:</Text>
              <Text style={styles.text}>
                $ {Math.floor(movie.revenue / 1000000)} M.
              </Text>
            </View>
          </View>
          <View style={styles.companieSpace}>
            <Text style={styles.infoTitle}>Production Companies</Text>
            <View style={styles.companieSpaceTop}>
              <FlatList
                data={movie.production_companies}
                keyExtractor={(item: any) => item.id}
                bounces={false}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                renderItem={({item}) => {
                  return (
                    <CompanieCard
                      logo_path={
                        item.logo_path
                          ? getImage(item.logo_path)
                          : 'https://res.cloudinary.com/img-cloud-alex/image/upload/v1695927448/skills/liflzlyf3fzcwfnk2u8n.png'
                      }
                      name={item.name}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  appHeaderContainer: {
    marginHorizontal: 10,
    marginTop: 35,
  },
  imageBG: {
    width: '100%',
    aspectRatio: 3000 / 1800,
  },
  linearGradient: {
    height: '100%',
  },
  image: {
    width: '80%',
    aspectRatio: 10 / 16,
    position: 'absolute',
    left: 18,
    borderRadius: 10,
    top: -15,
  },
  title: {
    fontSize: 25,
    paddingVertical: 5,
    color: Colors.orange,
    fontFamily: FontFamily.sofia_Bold,
    textAlign: 'left',
  },
  card: {
    width: '95%',
    top: -65,
    height: 130,
  },
  row: {flexDirection: 'row'},
  holder: {flex: 1, position: 'relative'},
  contentHolder: {
    flex: 2,
    marginLeft: 10,
  },
  margin: {marginRight: 5},
  time: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  timeText: {
    fontFamily: FontFamily.sofia_Medium,
    fontSize: 18,
    color: Colors.white,
    textAlign: 'left',
  },
  tagText: {
    paddingTop: 3,
    fontFamily: FontFamily.sofia_Medium,
    fontSize: 15,
    color: Colors.white,
  },
  contentOverview: {
    top: -48,
    paddingHorizontal: 15,
  },
  itemCenter: {alignItems: 'center'},
  itemSpace: {gap: 10},
  info: {
    flexDirection: 'row',
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  infoTitle: {
    fontFamily: FontFamily.sofia_Bold,
    fontSize: 16,
    color: Colors.orange,
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: FontFamily.sofia_Regular,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'justify',
  },
  adultSpace: {paddingHorizontal: 5},
  companieSpace: {alignItems: 'center', paddingVertical: 5},
  companieSpaceTop: {paddingTop: 8},
});
