export interface IMovieItem {
  id: number;
  title: string;
  release_date: Date;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  navigation: any;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}
