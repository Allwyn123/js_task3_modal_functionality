// ***************************** modal events *****************************

var video_panel = document.querySelector(".video_panel");
var panel_bg = document.querySelector(".panel_bg");
var video = document.querySelector(`video[title = "Modal-Function-Video"]`);
var play_btn = document.querySelector(`a[title = "play_button"]`);

play_btn.addEventListener('click', function(){
    video_panel.style.display = "block";
});

panel_bg.addEventListener('click', function(){
    video_panel.style.display = "none";
});


// ***************************** modal events *****************************
