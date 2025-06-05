import { defineStore } from "pinia";
import type { Album } from "~/types/Album";

export const useAlbumStore = defineStore("album", {
  state: () => ({
    albums: [] as Album[],
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
