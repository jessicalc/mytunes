// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function(params) {
  },

  events: {
    'click': 'removeFromQueue'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  removeFromQueue: function() {
    this.model.removeFromQueue()
  }
});
