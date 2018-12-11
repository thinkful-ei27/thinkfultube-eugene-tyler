'use strict';
const Api = (function(){

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyCUw3GT00dV11Ki1S--E4ULDjlqlJoDAC8';
  const fetchVideos = function(searchTerm, callback){
    const query = {
      'part': 'snippet',
      'key': API_KEY,
      'q': `${searchTerm}`,
    };
    $.getJSON(BASE_URL, query, callback);
  };

  const decorateResponse = function(response) {
    let result = response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });
    return result;
  };

  return{
    fetchVideos,
    decorateResponse

  };




}());
