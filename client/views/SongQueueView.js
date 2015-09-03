// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', function() { // fallback will be update
      if (this.collection.length === 1) {
        this.collection.playFirst();
      }
      this.render();
    }, this); 
    this.render();
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

