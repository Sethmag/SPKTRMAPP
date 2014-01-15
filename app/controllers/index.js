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
	
Titanium.App.addEventListener("cameraButtonClick", function(e){
	Titanium.Media.showCamera({
		success:function(e){
			if(e.mediaType === Titanium.Media.MEDIA_PHOTO) {
				//It's a photo
				var imageView = Titanium.UI.createImageView ({
					image:e.media,
					width:288,
					height:215,
					top:12,
					zIndex:1 
				})
				win.add(imageView);
			} else if(e.mediaType === Titanium.Media.MEDIA_VIDEO){
				//It's a Video
				var w = Titanium.UI.createWindow({
					title:"New Video",
					backgroundColor:"#000000"
				})
				
				var videoPlayer = Titanium.Media.createVideoPlayer({
					media:e.media
				})
				w.add(videoPlayer);
				videoPlayer.addEventListener("complete", function(e) {
					w.remove(videoPlayer);
					videoPlayer = null;
					w.close();
				})
			}
		},
		error:function(e){
			alert("There was an error");
		},
		cancel:function(e){
			alert("the function was cancelled");
		},
		allowEditing:true,
		saveToPhotoGallery:true,
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO, Titanium.Media.MEDIA_TYPE_VIDEO],
		videoQuality:Titanium.Media.QUALITY_HIGH
});

// 
// $.index.open();
