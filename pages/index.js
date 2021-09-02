import Wave from "@foobar404/wave"
import { useEffect, useState } from "react";

const Index = () => {
    // let [wave] = useState(new Wave());

    useEffect(() => {
        // navigator.mediaDevices.getUserMedia({
        //     audio: true
        //  })
        //  .then(function (stream) {
        //     wave.fromStream(stream, "output", {
        //        type: "cubes",
        //        colors: ["red", "white", "blue"]
        //     });
        //  })
        //  .catch(function (err) {
        //     console.log(err.message)
        //  });

        let wave = new Wave()
        const options = {
            type: 'bars', 
            colors: ['black'],
            stroke: 0
        }
        wave.fromElement('audio', 'audio_canvas', options)
    }, [])

    const play = () => {
        const audio = document.getElementById('audio')
        audio.src = '/audio/music.mp3'
        audio.volume = 0.3
        audio.play()
    }

    return (
        <>
        <div>
        <h1>Home page</h1>
        </div>

        <main>
            <canvas id="audio_canvas" height="500" width="500"></canvas>

            <audio id="audio"></audio>
            <button id="play_button" onClick={play}>PLAY</button>
        </main>
        </>
  )
    }
  
  export default Index 