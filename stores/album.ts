import { defineStore } from "pinia";
import type { Album } from "~/types/Album";

export const useAlbumStore = defineStore("album", {
  state: () => ({
    albums: [
      { id: 1, title: "Rock star", favourite: false },
      { id: 2, title: "Meditation", favourite: false },
      { id: 3, title: "Workout hits 90's", favourite: false },
      { id: 4, title: "Music for Studying", favourite: false },
      { id: 5, title: "Playlist 2019", favourite: true },
    ] as Album[],
  }),
  getters: {
    getAlbums: (state) => state.albums,
  },
  actions: {
    addAlbum(payload: { album: Album }) {
      this.albums.push(payload.album);
    },
    removeAlbumById(id: number) {
      this.albums = this.albums.filter((album) => album.id !== id);
    },
    toggleFavouriteState(id: number) {
      const album = this.albums.find((album) => album.id === id);
      if (album) {
        album.favourite = !album.favourite;
      }
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
  },
});
