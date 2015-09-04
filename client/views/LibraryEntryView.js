// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  
  initialize: function(){
    this.model.on("change:playCount", this.render, this);
    this.model.on('isCurrentSong', this.addCurrentClass, this);
    this.model.on('remove', this.removeCurrentClass, this);
  },

  template: _.template('<td><a class="queue">Queue</a></td><td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td><td><%= votes %> <i class="fa fa-thumbs-up upvote"></i> <i class="fa fa-thumbs-down downvote"></i></td>'),

  events: {
    'click .queue': function() {
      this.model.enqueue();
    }, 
    'click .upvote': function() {
      this.model.set("votes", this.model.get("votes") + 1);
      this.render();
    },
    'click .downvote': function() {
      this.model.set("votes", this.model.get("votes") - 1);
      this.render();
    }
  },

  addCurrentClass: function() {
    this.$el.addClass("current-song");
  },

  removeCurrentClass: function() {
    this.$el.removeClass("current-song");
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
