function doClick(e) {
    alert($.label.text);
}

var sound = Titanium.Media.createSound({
    url: 'Sound/12.mp3',
    preload: true
});

function play () {
sound.play();
}


Titanium.App.addEventListener("webButtonClick", function(){
	alert('Button in webpage was clicked!');
	play();
	Titanium.App.fireEvent("musicIsPlaying");
});


$.index.open();
