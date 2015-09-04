// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  defaults: {
    newPlaylistName: ""
  },

  initialize: function(params) {
    this.set('currentSong', new SongModel()); // WHY?
    this.set('songQueue', new SongQueue());
    this.set('playlists', new Playlists());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // *TODO* put these in the Songs.js 
    params.library.on('play', function(song) {
      // debugger;
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').push(/*new SongModel({
        url: song.get("url"),
        artist: song.get("artist"),
        title: song.get("title")
      })*/song);
      // if (this.get('songQueue').length === 1) {
      //   song.play();
      // }
    }, this);

    this.get('songQueue').on("stopOnlySong", function() {
      this.set('currentSong', null);
      // this.songQueue.set()
    }, this);

    this.get("playlists").on("add", function(playlist){
      console.log("we put in a playlist");
      console.log(playlist);
    }, this);
    //Add a new playlist to the playlist collection
    // this.on('change:newPlaylistName', function(){
    //   this.get("playlists").add(new Playlist({
    //     playlist: this.newPlaylistName
    //   }));
    // }, this);
    
  }

});
