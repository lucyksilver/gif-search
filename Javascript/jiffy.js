window.onload = function(){

  const API_KEY = 'Rl74dhAepP1MkjMT6wCrpClhDEscJXd3'

  const searchEl = document.querySelector('.search-input')

  const hintEl = document.querySelector('.search-hint')

function createVideo(src) {

  const video = document.createElement('video')
  video.src = src
  video.muted = true
  video.autoplay = true
  video.loop = true
  video.className = "video"

  return video
}

  const randomChoice = arr => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};

const searchGify = searchTerm => {

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=G&lang=en`).then(response => {
    // Convert to JSON
    return response.json();
  }).then(j => {

    const gif = randomChoice(j.data)
    const src = gif.images.original.mp4

    const video = createVideo(src)


    const videosEl = document.querySelector('.videos')
    videosEl.appendChild(video)
  })
    .catch(error => {

    })
}

// hello



  const doSearch = event => {

    const searchTerm = searchEl.value

    if(searchTerm.length > 2) {
      document.body.classList.add('show-hint')
      hintEl.innerHTML = `Hit enter to search ${searchTerm}`

      } else {

        document.body.classList.remove('show-hint')
      }

    if(event.key === 'Enter' && searchTerm.length > 2) {
    searchGify(searchTerm)
      }
  };

    searchEl.addEventListener('keyup', doSearch);

  };


















