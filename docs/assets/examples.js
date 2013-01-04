$(function () {

  $('textarea.mention').mentionsInput({
    triggerChar : ['@','#'],
    onCaret: true,
    onDataRequest:function (mode, query, callback, triggerChar) {
      var data = [];

      if (triggerChar == '@') {
        data = [
            { id:1, name:'Kenneth Auchenberg', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:2, name:'Jon Froda', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:3, name:'Anders Pollas', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:4, name:'Kasper Hulthin', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:5, name:'Andreas Haugstrup', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:6, name:'Pete Lacey', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
            { id:7, name:'Brennan McEachran', 'avatar':'https://secure.gravatar.com/avatar/2fdf8dfe329dd7dce510bcf0c32e3ef3?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png', 'type':'contact' },
            { id:8, name:'Brennan W. McEachran', 'avatar':'https://secure.gravatar.com/avatar/2fdf8dfe329dd7dce510bcf0c32e3ef3?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png', 'type':'contact' },
            { id:9, name:'Brennan W. H. McEachran', 'avatar':'https://secure.gravatar.com/avatar/2fdf8dfe329dd7dce510bcf0c32e3ef3?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png', 'type':'contact' }
          ];
      }
      else {
        data = [
            { id:'12121',  name:'Pasta', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'issue' },
            { id:'231223', name:'Pizza', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'issue' },
            { id:'72',     name:'Potates', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'issue' },
        ];
      }

      data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 });

      callback.call(this, data);
    }
  });

  $('.get-syntax-text').click(function() {
    $('textarea.mention').mentionsInput('val', function(text) {
      alert(text);
    });
  });

  $('.get-mentions').click(function() {
    $('textarea.mention').mentionsInput('getMentions', function(data) {
      alert(JSON.stringify(data));
    });
  }) ;

});