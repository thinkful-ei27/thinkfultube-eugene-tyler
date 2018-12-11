'use strict';
const VideoList = (function(){
  
  const generateListItem = function(videos){
    return `<li data-video-id = "${videos.id}">
    <img src = "${videos.thumbnail}"/>
    <h3>${videos.title}</h3>
  </li>`;
  };

  const render = function(){
    const videoElements = Store.videos.map(video => generateListItem(video));
    $('.results').html(videoElements);
  };

  const handleFormSubmit = function(){
    $('form').on('submit', function() {
      event.preventDefault();
      const searchTermName = $('#search-term').val();
      $('#search-term').val('');
      Api.fetchVideos(searchTermName, function(response){
        const decoratedVideos = Api.decorateResponse(response);
        Store.setVideos(decoratedVideos);
        VideoList.render();
      });
    });    
  };

  const bindEventListeners = function(){
    handleFormSubmit();
  };

  return {
    render,
    bindEventListeners,
    generateListItem,
    handleFormSubmit
  };
}());