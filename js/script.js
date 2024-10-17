let videoList = document.querySelectorAll(".video-list-container .list");

videoList.forEach(vid => {
  vid.onclick = () =>{
    let src = vid.querySelector(".list-video").src;
    let title = vid.querySelector(".list-title").innerHTML;
    document.querySelector(".main-video-container .main-video").src = src;
    document.querySelector(".main-video-container .main-video").play();
    document.querySelector(".main-video-container .main-video-title").innerHTML = title;
  };
});

const aktif = document.querySelectorAll('.list');
const ja = document.querySelectorAll('.list-title');
aktif.addEventListener("click", function(){
  aktif.style.backgroundColor = "#ddd";
  ja.style.color = "white";
});

