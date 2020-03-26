import key from '../../apikey';

export const fetchMovie = () =>
  fetch(`http://www.omdbapi.com/?t=titanic&apikey=${key}`)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      return err;
    });
