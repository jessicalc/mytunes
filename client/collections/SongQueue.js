// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    //Add listener 
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    //Dequeue listener
    this.on('dequeue', function(song) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    //For ended listener
    this.on('ended', function(song){
      this.trigger('dequeue');
    }, this);

    // Remove listener
    this.on('removeFromQueue', function(song) {
      this.remove(song);
    }, this);
  }, 

  playFirst: function() {
    this.models[0].play();
  }

});