// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    // this.addPlaylistFormView = new AddPlaylistFormView({});
    // this.playlistsView = new PlaylistsView({collection: this.model.get('playlists')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(this.model.get('currentSong'));
      if (this.model.get("currentSong")) { 
        this.model.get('currentSong').trigger("isCurrentSong");
      }
    }, this);

    //Listen for triggers from the playlist view button
    // this.addPlaylistFormView.on("createNewPlaylist", function(){
    //   // debugger;
    //   this.model.newPlaylistName = $('.add-playlist-form input').val();
    //   this.model.get('playlists').add(new Playlist({newestPlaylistName: this.model.newPlaylistName}));
    //   debugger;
    //   // this.playlistsView.add(new )
    // }, this);

    // this.model.on('change:playlists', function() {}, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      // this.addPlaylistFormView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      // this.playlistsView.$el
    ]);
  }

});
