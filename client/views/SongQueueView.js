// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.collection.on('add', function() { // fallback will be update
      //Render
      this.render();
    }, this); 

    this.collection.on("removeFromQueue remove stopOnlySong", function(){
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

