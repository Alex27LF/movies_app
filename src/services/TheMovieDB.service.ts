const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.SECRET_KEY}`,
  },
};

export const getImage = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};

export const getDetailsMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  try {
    let res = await fetch(url, apiOptions);
    return await res.json();
  } catch (err) {
    console.error('Error: get movie details ' + err);
  }
};

export const getMovies = async (page: number) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  try {
    let res = await fetch(url, apiOptions);
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.error('Error: get movies ' + err);
  }
};
