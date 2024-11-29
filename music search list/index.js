const playlist = {
    data() {
        return {
            playlist: ["切歌 Cut the song", "手放開 Let go of your hands", "眼底星空 Starry sky in your eyes"],
            searchTerm:''
        };
    },
    computed:{
        filteredPlaylist(){
            if(this.searchTerm){
                return this.playlist.filter((song) => 
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            } else {
                return this.playlist;
            }
        }
    }
};

Vue.createApp(playlist).mount("#app");