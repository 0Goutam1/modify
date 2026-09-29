import React from "react";
import "./playlist.scss";
import { useSong } from "../hook/useSong";

const PlayList = ({ mood }) => {
  const { handleGetSong } = useSong();

  const songs = useSong

  const filteredSongs = mood
    ? songs.filter((song) => song.mood === mood.toLowerCase())
    : songs;

  const playSong = (song) => {
    handleGetSong({
      mood: song.mood,
      title: song.title,
      posterUrl: song.posterUrl,
      url: song.url,
    });
  };

  return (
    <div className="mood-playlist">

      <div className="playlist-header">
        <div>
          <span className="playlist-label">YOUR VIBE</span>
          <h2>{mood ? `${mood} Playlist` : "Mood Playlist"}</h2>
        </div>

        <span className="song-count">
          {filteredSongs.length} songs
        </span>
      </div>

      <div className="playlist-list">

        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <div
              className="playlist-song"
              key={song.id}
              onClick={() => playSong(song)}
            >

              <span className="song-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <img
                src={song.posterUrl}
                alt={song.title}
                className="song-image"
              />

              <div className="song-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>

              <span className="song-duration">
                {song.duration}
              </span>

              <button className="play-btn">
                ▶
              </button>

            </div>
          ))
        ) : (
          <div className="empty-playlist">
            <div className="empty-icon">♫</div>
            <h3>No songs found</h3>
            <p>
              We couldn't find songs for this mood.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PlayList;