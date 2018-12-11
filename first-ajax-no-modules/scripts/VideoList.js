'use strict';
const VideoList = (function(){
  
  const generateListItem = function(){
    return `<li data-video-id = "${video.id}">
    <img src = "${video.thumbnail}"/>
    <h3>${video.title}</h3>
  </li>`;
  };

  const render = function(){
    const videoElements = store.videos.map(video => generateListItem(video));
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
            render();
        })
    }    
  };

    const bindEventListeners = function(){
        handleFormSubmit();
    }

  return {
      render,
      bindEventListeners
  }
}());