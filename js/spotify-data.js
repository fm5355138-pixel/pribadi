const SPOTIFY_DATA = {

  /* PROFIL */
  profile: {
    name: "dellSwift",
    image: "img/profil-spotify.jpg",
    url: "https://open.spotify.com/playlist/0uCBJpmjHGf9B6LxFhUXml?si=46ac9cfa2c494c65&pt=0d2286e34add80cb541addb6fcebdef6",
  },

  /* STATISTIK */
  stats: {
    playlists:  3,
    likedSongs: 1.173,
    topArtists: 5,
  },

/* Playlist*/
  playlists: [
    {
      id:    "playlist-1",
      name:  "My playlist",
      total: 39,
      image: "img/Pegatinas_ Xxxtentacion.jpg",
      url:   "https://open.spotify.com/playlist/4o4g8INbSjEKDfF8oWDnAM?si=df6deb1320614ad0&pt=b8af2caf51c3b4308cb9ebd47d04d700",
    },
    {
      id:    "playlist-2",
      name:  "MOOD",
      total: 10,
      image: "img/playlist-2.webp",
      url:   "https://open.spotify.com/playlist/2fBCDyydzdN9Pt1iqbJLRV?si=5be558368c044a08&pt=d96fa469bdc6b83fc6458236ba6b54c9",
    },
  ],

  /* LAGU YANG DISUKAI */
  likedSongs: [
    {
      id:       "track-1",
      title:    "White Ferrari",
      artist:   "Frank Ocean",
      image:    "img/spotify-lagu/white ferrari, frank ocean.jpg",
      url:      "https://open.spotify.com/intl-id/track/2LMkwUfqC6S6s6qDVlEuzV?si=24931b55f98b405b",
      duration: "4:09",
    },
    {
      id:       "track-2",
      title:    "Mesra-mesraanya Kecil-kecilan dulu",
      artist:   "Sal Priadi",
      image:    "img/spotify-lagu/— sullyoon nmixx sal priadi moodboard.jpg",
      url:      "https://open.spotify.com/intl-id/track/5p0ietGkLNEqx1Z7ijkw5g?si=3d99d81e9f9f4d66",
      duration: "3:30",
    },
    {
      id:       "track-3",
      title:    "Guilty as Sin?",
      artist:   "Taylor Swift",
      image:    "img/spotify-lagu/TaylorSwift.jpg",
      url:      "https://open.spotify.com/intl-id/track/0W0iAC1VGlB82PI6elxFYf?si=ca7f39ddf3764bb2",
      duration: "4:14",
    },
    {
      id:       "track-4",
      title:    "That's Why You Go Away",
      artist:   "Strange Foreign Beauty",
      image:    "img/spotify-lagu/thats-why-you-go-away.webp",
      url:      "https://open.spotify.com/track/2ccW4vFSVKRgVjkZzvdjRw?si=6lZrivxkSHyyuEb0uzikzA",
      duration: "4:13",
    },
    {
      id:       "track-5",
      title:    "berlin",
      artist:   "Kendis",
      image:    "img/spotify-lagu/berlin.PNG",
      url:      "https://open.spotify.com/intl-id/track/716EFADuhOuYUCLRltcwnC?si=2d554ea7c8f54c1b",
      duration: "3:36",
    },
  ],

  /* ARTIS FAVORIT */
  topArtists: [
    {
      id:    "artist-1",
      name:  "One Direction",
      genre: "Pop",
      image: "img/spotify-artis/one-direction-profil.webp",
      url:   "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq",
    },
    {
      id:    "artist-2",
      name:  "Westlife",
      genre: "Pop",
      image: "img/spotify-artis/westlife-profil.webp",
      url:   "https://open.spotify.com/artist/3GwtnkyBVM6sMPfVfmFOhG",
    },
    {
      id:    "artist-3",
      name:  "Bruno Mars",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
      url:   "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C",
    },
    {
      id:    "artist-4",
      name:  "Afgan",
      genre: "Pop",
      image: "img/spotify-artis/afgan-profil.webp",
      url:   "https://open.spotify.com/artist/4hYoijj2oGhG6d9vCEn7Aw",
    },
    {
      id:    "artist-5",
      name:  "Justin Beiber",
      genre: "Pop",
      image: "img/spotify-artis/justin-beiber-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/1uNFoZAHBGtllmzznpCI3s?si=ka9UkNbWR8Sp_-VzbNREEA",
    },
    {
      id:    "artist-6",
      name:  "Mahalini",
      genre: "Pop",
      image: "img/spotify-artis/mahalini-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/3wOsYKZM0zcKNasi3I7fP4?si=tNxxNayhQu6ofoBL_EbbWg",
    },
    {
      id:    "artist-7",
      name:  "Adele",
      genre: "Pop",
      image: "img/spotify-artis/adele-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/3wOsYKZM0zcKNasi3I7fP4?si=tNxxNayhQu6ofoBL_EbbWg",
    },
    {
      id:    "artist-8",
      name:  "Oasis",
      genre: "Rock",
      image: "img/spotify-artis/oasis-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/2DaxqgrOhkeH0fpeiQq2f4?si=W8AeZmzTTY-j-cflZjWtBA",
    },
    {
      id:    "artist-9",
      name:  "Avenged Sevenfold",
      genre: "Rock",
      image: "img/spotify-artis/a7x-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/0nmQIMXWTXfhgOBdNzhGOs?si=uZIS5sHJQhWVTs5iGnTzng",
    },
        {
      id:    "artist-9",
      name:  "Taylor Swift",
      genre: "Pop dan Country.",
      image: "img/spotify-artis/taylor-swift.jpg",
      url:   "spotify:artist:06HL4z0CvFAxyc27GXpf02",
    },
  ],
};