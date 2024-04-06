let progress = document.getElementById("progress");
        let songs = document.getElementById("songs");
        let ctrlIcon = document.getElementById("ctrlIcon");

        var songImg = document.querySelector('.song-img');

        songs.onloadedmetadata = function(){
            progress.max = songs.duration;
            progress.value = songs.currentTime;
        }

        function playPause(){
            if(ctrlIcon.classList.contains("fa-pause")){
                songs.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
                songImg.classList.remove('rotate');

            }
            else{
                songs.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
                songImg.classList.add('rotate');
            }
        }

        if(songs.play()){
            setInterval(()=>{
                progress.value = songs.currentTime;
            },500);
        }

        progress.onchange = function(){
            songs.play();
            songs.currentTime = progress.value;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
            songImg.classList.add('rotate');
        }

        function nextSong() {
            songs.src = 'Audio/Shape of You-(PagalSongs.Com.IN).mp3';
            songImg.src="Images/ShapeOfYou.jpg";
            document.querySelector(".song-name").innerHTML = "Shape of You";
            document.querySelector(".artist").innerHTML = "Ed Sheeran";
            songs.play();
        }

        function prevSong(){
            songs.src = 'Audio/Despacito(PaglaSongs).mp3';
            songImg.src="Images/despacito.png";
            document.querySelector(".song-name").innerHTML = "Despacito";
            document.querySelector(".artist").innerHTML = "Luis Fonsi ft. Daddy Yankee";
            songs.play();
        }
