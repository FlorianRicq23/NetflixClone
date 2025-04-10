/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.themoviedb.org/3/'


const fetchMovies = async (endpoint) => {
  const { data } = await axios.get(
    `${API_URL}${endpoint}?language=en-EN&api_key=${API_KEY}`
  )
  return data
}

export default {
  getHomeMovies: async () => {
    return [
      {
        slug: 'top-rated',
        title: 'Mieux notés',
        items: await fetchMovies('movie/top_rated'),
      },
      {
        slug: 'trend-allweek',
        title: 'Tendance',
        items: await fetchMovies('trending/all/week'),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await fetchMovies('discover/movie?with_genres=28'),
      },
      {
        slug: 'upcoming',
        title: 'Prochaines sorties',
        items: await fetchMovies('movie/upcoming'),
      },
      {
        slug: 'nowplaying',
        title: 'Au cinéma',
        items: await fetchMovies('movie/now_playing'),
      },
      {
        slug: 'tvpopular',
        title: 'Séries populaires',
        items: await fetchMovies('tv/popular'),
      },
      {
        slug: 'ontheair',
        title: "A l'écran",
        items: await fetchMovies('tv/on_the_air'),
      },
      {
        slug: 'popular-tv',
        title: 'Séries populaires Netflix',
        items: await fetchMovies('discover/tv?with_type=2'),
      },
    ]
  },
  getTvShows: async () => {
    return [
      {
        slug: 'tvpopular',
        title: 'Séries populaires',
        items: await fetchMovies('tv/popular'),
      },
      {
        slug: 'top-rated',
        title: 'Mieux notés',
        items: await fetchMovies('tv/top_rated'),
      },
      {
        slug: 'ontheair',
        title: "A l'écran",
        items: await fetchMovies('tv/on_the_air'),
      },
      {
        slug: 'popular-tv',
        title: 'Séries populaires Netflix',
        items: await fetchMovies('discover/tv?with_type=2'),
      },
    ]
  },
  getMovies: async () => {
    return [
      {
        slug: 'tvpopular',
        title: 'Films populaires',
        items: await fetchMovies('movie/popular'),
      },
      {
        slug: 'top-rated',
        title: 'Mieux notés',
        items: await fetchMovies('movie/top_rated'),
      },
      {
        slug: 'nowplaying',
        title: 'Au cinéma',
        items: await fetchMovies('movie/now_playing'),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await fetchMovies('discover/movie?with_genres=28'),
      },
    ]
  },
  getHomeMovieDetails: async (movieId, type) => {
    let info = []
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await fetchMovies(`movie/${movieId}`)
          break
        case 'tv':
          info = await fetchMovies(`tv/${movieId}`)
          break
        default:
          break
      }
    }
    return info
  },
  getRandomMovieDetails: async (movieId) => {
    let info = []
    if (movieId) {
      info = await fetchMovies(`discover/movie?with_genres=${movieId}`)
    }
    return info
  },
  getSimilarMovies: async (movieId, type) => {
    let info = []
    if (movieId) {
      if (type==='movie') info = await fetchMovies(`movie/${movieId}/similar`)
      else info = await fetchMovies(`tv/${movieId}/similar`)
    }
    return info
  },
  getPopularMovies: async () => {
    let info = []
    info = await fetchMovies(`movie/popular`)
    return info
  },
  getTvSeason: async (movieId, season) => {
    let info = []
    if (movieId) {
      info = await fetchMovies(`tv/${movieId}/season/${season}`)
    }
    return info
  },
  getTvEpisodes: async (movieId) => {
    let info = []
    if (movieId) {
      info = await fetchMovies(`tv/${movieId}/episode_groups`)
    }
    return info
  },
  getSearchMovies: async (keyword) => {
    let info = []
    if (keyword) {
      //info = await fetchMovies(`search/movie`)
      const fetchMovies = async (endpoint) => {
        const { data } = await axios.get(
          `${API_URL}${endpoint}?language=en-EN&api_key=${API_KEY}&query=${keyword}`
        )
        return data
      }
      info = await fetchMovies(`search/movie`)
    }
    return info
  },
}
