// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function() { // fallback will be update
      //Render
      this.render();
    }, this); 
    this.render();

    this.collection.on("removeFromQueue remove", function(){
      // if(this.collection.length > 0){

      //   this.collection.playFirst();
      // }
      //Render
      this.render();
    }, this);
  },

  render: function() {
    // debugger;
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

