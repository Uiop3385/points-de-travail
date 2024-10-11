window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421', // Replace with an icon if desired
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
