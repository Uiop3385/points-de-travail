window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: 'https://example.com/icon.png', // Replace with an icon if desired
      text: 'Définir les points',
      callback: function(t) {
        return t.popup({
          title: 'Définir les points',
          url: './points.html',  // This will open the form to set points
          height: 200
        });
      }
    }];
  }
});
