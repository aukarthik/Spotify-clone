import React from 'react'
import './PlayerPlaylist.css'

const playlist = [
  {
    id: 1,
    title: "Sugar",
    artist: "Maroon 5",
    album: "V",
    duration: "3:55",
  },
  {
    id: 2,
    title: "I Aint't Worried",
    artist: "OneRepublic",
    album: "I Aint't Worried",
    duration: "2:28",
  },
  {
    id: 3,
    title: "Shape of you",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "3:53",
  },
  {
    id: 4,
    title: "See you again",
    artist: "Wiz Khalifa",
    album: "Furious 7",
    duration: "3:49",
  },
  {
    id: 5,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: "3:58",
  },
  {
    id: 6,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "4:23",
  },
  {
    id: 7,
    title: "Attention",
    artist: "Charlie Puth",
    album: "Voicenotes",
    duration: "3:28",
  },
  {
    id: 8,
    title: "As It Was",
    artist: "Harry Styles",
    album: "As It Was",
    duration: "2:47",
  },
  {
    id: 9,
    title: "Levitating",
    artist: "Dua Lipa,DaBaby",
    album: "Future Nostalgia",
    duration: "3:23",
  },
  {
    id: 10,
    title: "Faded",
    artist: "Alan Walker",
    album: "Faded",
    duration: "3:32",
  },
]

export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
      <div className='player-playlist-header'>
        <div className='playlist-image-card'></div>
        <div className='playlist-body'>
          <p>PLAYLIST</p>
          <h1>Best of Mine</h1>
        </div>
      </div>

      <div className='playlist-list'>
        <div className='playlist-list-id'>#</div>
        <div className='playlist-list-title'>TITLE</div>
        <div className='playlist-list-album'>ALBUM</div>
        <div className='playlist-list-duration'>DURATION</div>
      </div>

      <div className='playlist-list-container'>
        {playlist.map((item) => {
          return (
            <div className='playlist-list'>
              <div className='playlist-list-id'>{item.id}</div>
              <div className='playlist-list-title'>{item.title}</div>
              <div className='playlist-list-album'>{item.album}</div>
              <div className='playlist-list-duration'>{item.duration}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
