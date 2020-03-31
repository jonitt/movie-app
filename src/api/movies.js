import { key } from '../apikey';

export const fetchMovie = (name, year) =>
  fetch(`http://www.omdbapi.com/?t=${name}&apikey=${key}&type=movie&y=${year}`)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      return err;
    });
