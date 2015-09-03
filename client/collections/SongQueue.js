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
    // this.on('dequeue', function(song) {
    //   this.shift();
    //   if (this.length > 0) {
    //     this.playFirst();
    //   }
    // }, this);

    //For ended listener
    this.on('ended', function(song){
      // this.trigger('dequeue');
    }, this);

    // Remove listener
    this.on('removeFromQueue remove', function(song) {
      //Check if removing first song
      var removedFirst = this.at(0) === song;
      // debugger;
      this.remove(song); // backbone method to remove stuff from collections
      if (this.length === 0) {
        this.trigger("stopOnlySong", this);
      }
      // debugger;
      if(removedFirst){
        this.playFirst();
      };
    }, this);
  }, 

  playFirst: function() {
    debugger;
    if(this.models.length > 0){
      this.models[0].play();
      this.models[0].set("playCount", this.models[0].get("playCount") + 1);
    } else {
      this.trigger("ended");
    }
  }

});