'use strict';
const Store = (function() {

  const videos = [];
  const setVideos = function(videos) {
    Store.videos = videos;
  };

  return {
    videos,
    setVideos
  };


}());