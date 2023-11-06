import {StyleSheet, FlatList, View, StatusBar, Dimensions} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import {IMovieItem} from '../utils/Movie.util';
import {Snackbar} from 'react-native-paper';
import {getMovies} from '../services/TheMovieDB.service';
import {Colors, FontFamily} from '../utils/constans.util';
import AppBar from '../components/AppBar';
import LoadingPage from '../components/LoadingPage';

const {height} = Dimensions.get('window');

const MoviesScreen = ({navigation}: any) => {
  const [movies, setMovies] = useState<IMovieItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndList, setIsEndList] = useState(false);
  const [visible, setVisible] = useState(false);

  const getNewMovies = () => {
    if (!isLoading && !isEndList) {
      setIsLoading(true);
      (async () => {
        const dataMovies = await getMovies(currentPage);
        setCurrentPage(currentPage + 1);
        setMovies([...movies, ...dataMovies]);
        setIsLoading(false);
        if (currentPage >= 500) {
          setIsEndList(true);
          setIsLoading(false);
          showSnackbar();
        }
      })();
    }
  };

  useEffect(() => {
    getNewMovies();
  }, [currentPage]);

  const showSnackbar = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3500);
  };

  const renderFooter = () => {
    return (
      <View style={styles.loadingContainer}>
        {isLoading ? <ActivityIndicator color={Colors.orange} /> : null}
      </View>
    );
  };

  const renderSnackBar = (message: string) => {
    return (
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Close',
          onPress: () => {
            setVisible(false);
          },
        }}>
        {message}
      </Snackbar>
    );
  };

  if (movies.length === 0) {
    return <LoadingPage statusBar={false} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.InputHeaderContainer}>
        <AppBar />
      </View>
      <View style={styles.scrollViewContainer}>
        <FlatList
          data={movies}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          snapToInterval={height * 0.89}
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          contentContainerStyle={styles.contentSpace}
          renderItem={({item}) => {
            return (
              <MovieCard
                id={item.id}
                title={item.title}
                release_date={item.release_date}
                backdrop_path={item.backdrop_path}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                navigation={navigation}
                vote_count={item.vote_count}
              />
            );
          }}
          onEndReached={getNewMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
        {visible ? renderSnackBar('These are the latest movies...') : null}
      </View>
    </View>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  scrollViewContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    paddingVertical: 5,
    color: Colors.orange,
    fontFamily: FontFamily.sofia_Bold,
  },
  InputHeaderContainer: {
    marginHorizontal: 28,
    marginTop: 25,
  },
  loadingContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  contentSpace: {gap: 5},
});
