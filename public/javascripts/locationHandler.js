var params = '';

function locationHandler(callback) {
  console.log(location);
  debugger;
  if (!document.body.children[3].children[0].value) {
    return;
  }
  var _this = this;
  _this.callback = callback;
  debugger;
  if (!isNaN(Number(document.body.children[3].children[0].value.substring(0,8)))) {
    window.location = '/poke?q=' + document.body.children[3].children[0].value;
    return;
  }
  var link = "https://maps.googleapis.com/maps/api/geocode/json?address=\"" + document.body.children[3].children[0].value + "\"&key=AIzaSyASFKsZd-df8PbMMJ2ZgHzXtxhf1-bU5T8"
  $.post(link, function(data) {
    console.log(data);
    if (data.status == 'ZERO_RESULTS') { return; }
    console.log(data.results['0'].geometry.location);
    var params = data.results['0'].geometry.location.lat + ',' + data.results['0'].geometry.location.lng;

    var goto = '/poke?q=' + params;

    _this.callback(goto);

  });
  callback(0);
}

function onSubmitForm() {
  debugger;
  locationHandler(function(value) {
    if (value) {
      setTimeout(function() {
        window.location = value;
      }, 100);
    }
  });
}
