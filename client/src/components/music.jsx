import React, { useEffect, useRef } from "react";

const music = ({ soundId, shouldLoop }) => {
  const audioRef = useRef(null);
  const apiKey = "DzsBedlWKUcQD7LIDr286m1MUXNcxvGucP2cEmVv";
  // const soundId = "251461"; //   beats (699618, 335688, 251461,) // cheers (353923, 267247) incase of cheers we must turn off the loop and set it to false
  // for more sounds -  https://freesound.org/

  useEffect(() => {
    async function getMusic() {
      try {
        const response = await fetch(
          `https://freesound.org/apiv2/sounds/${soundId}/?token=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.previews && data.previews["preview-hq-mp3"]) {
          audioRef.current.src = data.previews["preview-hq-mp3"];
          audioRef.current.loop = shouldLoop;
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        } else if (data.previews && data.previews["preview-lq-mp3"]) {
          audioRef.current.src = data.previews["preview-lq-mp3"];
          audioRef.current.loop = shouldLoop;
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        } else {
          console.warn("No MP3 preview URL found.");
        }
      } catch (error) {
        console.error("Error fetching Music:", error);
      }
    }

    getMusic();
  }, [apiKey, soundId]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};

export default music;
