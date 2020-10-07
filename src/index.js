// import axios here
const axios = require('axios');
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios(url);//all this test wants us to do is call the URL with axios. everything that the test is looking for will be inside that url!!!!!
  //we thought were thinking way to hard that we overlooked the simple solution!
 
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios(url).then(result => result.data);
}

const getMovieByIdFailure = () => {
  const fakeId = 5783; // FAKE ID HERE, we changed the id from 1 to 5783 so that the movie wouldnt exist
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here

   return axios(url).then(res => res.data.status).catch(error => error.response.status);ç
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}