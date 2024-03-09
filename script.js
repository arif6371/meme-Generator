

function generateMeme() {
  
  const memetitle = document.querySelector(".meme-title");
  const memeimg = document.querySelector(".meme-img");
  const authoroutput = document.querySelector(".author span");
  // Your meme generation code goes here
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      memetitle.innerText = title;
      memeimg.src = url;
      authoroutput.innerText = author;
      console.log(author, title, url);
    });
}

generateMeme()