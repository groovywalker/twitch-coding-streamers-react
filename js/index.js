var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js

var Headline = function (_React$Component) {
  _inherits(Headline, _React$Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        { className: 'jumbotron' },
        'Twitch Coding Streamers'
      );
    }
  }]);

  return Headline;
}(React.Component);

var Channels = function (_React$Component2) {
  _inherits(Channels, _React$Component2);

  function Channels() {
    _classCallCheck(this, Channels);

    return _possibleConstructorReturn(this, (Channels.__proto__ || Object.getPrototypeOf(Channels)).apply(this, arguments));
  }

  _createClass(Channels, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'OgamingSC2-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'OgamingSC2-img', src: '#' }),
              'OgamingSC2'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'OgamingSC2-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'esl-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'esl-img', src: '#' }),
              'EST_SC2'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'esl-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'freecodecamp-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'freecodecamp-img', src: '#' }),
              'Freecodecamp'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'freecodecamp-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'storbeck-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'storbeck-img', src: '#' }),
              'storbeck'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'storbeck-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'terakilobyte-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'terakilobyte-img', src: '#' }),
              'terakilobyte'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'terakilobyte-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'habathcx-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'habathcx-img', src: '#' }),
              'habathcx'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'habathcx-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'robotcaleb-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'robotcaleb-img', src: '#' }),
              'RobotCaleb'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'robotcaleb-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'thomasballinger-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'thomasballinger-img', src: '#' }),
              'thomasballinger'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'thomasballinger-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'noobs2ninjas-a' },
              React.createElement('img', { className: 'img-responsive img-circle img-thumbnail', id: 'noobs2ninjas-img', src: '#' }),
              'noobs2ninjas'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'noobs2ninjas-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { 'class': 'col-xs-6', href: '#', target: '_blank', id: 'beohoff-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'beohoff-img', src: '#' }),
              'beohoff'
            ),
            React.createElement('p', { 'class': 'col-xs-6', id: 'beohoff-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'brunofin-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'brunofin-img', src: '#' }),
              'brunofin'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'brunofin-p' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col card' },
            React.createElement(
              'a',
              { className: 'col-xs-6', href: '#', target: '_blank', id: 'comster404-a' },
              React.createElement('img', { 'class': 'img-responsive img-circle img-thumbnail', id: 'comster404-img', src: '#' }),
              'comster404'
            ),
            React.createElement('p', { className: 'col-xs-6', id: 'comster404-p' })
          )
        )
      );
    }
  }]);

  return Channels;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(Headline, null),
        React.createElement(Channels, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// Start
$(document).ready(function () {

  //OgamingSC2
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?', function (data) {

    if (data.stream == null) {
      $('#OgamingSC2-p').text('offline').addClass('text-danger');
    }

    $('#OgamingSC2-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#OgamingSC2-a').attr('href', data.stream.channel.url);

    // console.log(data);
  });

  //Gets channel info
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/OgamingSC2?callback=?', function (data) {

    $('#OgamingSC2-img').attr('src', data.logo);

    if (data.error) {
      $('#OgamingSC2-p').text('Account Closed');
    }

    $('#OgamingSC2-a').attr('href', data.url);
    // console.log(data);
  });

  //ESL_SC2
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function (data) {

    if (data.stream == null) {
      $('#esl-p').text('offline').addClass('text-danger');
    }

    $('#esl-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#esl-a').attr('href', data.stream.channel.url);

    // console.log(data);
  });

  //Gets channel info
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/ESL_SC2?callback=?', function (data) {

    $('#esl-img').attr('src', data.logo);

    if (data.error) {
      $('#esl-p').text('Account Closed');
    }

    $('#esl-a').attr('href', data.url);
    // console.log(data);
  });

  //Freecodecamp

  //Gets stream info
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function (data) {

    if (data.stream == null) {
      $('#freecodecamp-p').text('offline').addClass('text-danger');
    }

    $('#freecodecamp-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#freecodecamp-a').attr('href', data.stream.channel.url);

    // console.log(data);
  });

  //Gets channel info
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function (data) {

    $('#freecodecamp-img').attr('src', data.logo);

    if (data.error) {
      $('#freecodecamp-p').text('Account Closed');
    }

    $('#freecodecamp-a').attr('href', data.url);
    // console.log(data);
  });

  //Storbeck
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/storbeck?callback=?', function (data) {

    if (data.stream == null) {
      $('#storbeck-p').text('offline').addClass('text-danger');
    }

    $('#storbeck-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#storbeck-a').attr('href', data.stream.channel.url);
    // console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/storbeck?callback=?', function (data) {

    $('#storbeck-img').attr('src', data.logo);

    if (data.error) {
      $('#storbeck-p').text('Account Closed');
    }

    $('#storbeck-a').attr('href', data.url);
    // console.log(data);
  });

  //terakilobyte
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/terakilobyte?callback=?', function (data) {

    if (data.stream == null) {
      $('#terakilobyte-p').text('offline').addClass('text-danger');
    }

    $('#terakilobyte-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#terakilobyte-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/terakilobyte?callback=?', function (data) {

    $('#terakilobyte-img').attr('src', data.logo);

    if (data.error) {
      $('#terakilobyte-p').text('Account Closed');
    }

    $('#terakilobyte-a').attr('href', data.url);
    //console.log(data);
  });

  //habathcx
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/habathcx?callback=?', function (data) {

    if (data.stream == null) {
      $('#habathcx-p').text('offline').addClass('text-danger');
    }

    $('#habathcx-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#habathcx-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/habathcx?callback=?', function (data) {
    $('#habathcx-img').attr('src', data.logo);

    if (data.error) {
      $('#habathcx-p').text('Account Closed');
    }

    $('#habathcx-a').attr('href', data.url);
    //console.log(data);
  });

  //RobotCaleb
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/robotcaleb?callback=?', function (data) {

    if (data.stream === null) {
      $('#robotcaleb-p').text('offline').addClass('text-danger');
    }

    $('#robotcaleb-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#robotcaleb-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/robotcaleb?callback=?', function (data) {

    $('#robotcaleb-img').attr('src', data.logo);

    if (data.error) {
      $('#robotcaleb-p').text('Account Closed').addClass('text-danger');
    }

    $('#robotcaleb-a').attr('href', data.url);
    //console.log(data);
  });

  //thomasballinger
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/thomasballinger?callback=?', function (data) {

    if (data.stream === null) {
      $('#thomasballinger-p').text('offline').addClass('text-danger');
    }

    $('#thomasballinger-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#thomasballinger-a').attr('href', data.stream.channel.url);

    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/thomasballinger?callback=?', function (data) {

    $('#thomasballinger-img').attr('src', data.logo);

    if (data.error) {
      $('#thomasballinger-p').text('Account Closed');
    }

    $('#thomasballinger-a').attr('href', data.url);
    //console.log(data);
  });

  //noobs2ninjas
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas?callback=?', function (data) {

    if (data.stream === null) {
      $('#noobs2ninjas-p').text('offline').addClass('text-danger');
    }

    $('#noobs2ninjas-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#noobs2ninjas-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/noobs2ninjas?callback=?', function (data) {

    $('#noobs2ninjas-img').attr('src', data.logo);

    if (data.error) {
      $('#noobs2ninjas-p').text('Account Closed');
    }

    $('#noobs2ninjas-a').attr('href', data.url);
    //console.log(data);
  });

  //beohoff
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/beohoff?callback=?', function (data) {

    if (data.stream === null) {
      $('#beohoff-p').text('offline').addClass('text-danger');
    }

    $('#beohoff-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#beohoff-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/beohoff?callback=?', function (data) {

    $('#beohoff-img').attr('src', data.logo);

    if (data.error) {
      $('#beohoff-p').text('Account Closed');
    }

    $('#beohoff-a').attr('href', data.url);
    //console.log(data);
  });

  //brunofin
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/brunofin?callback=?', function (data) {

    if (data.stream == null) {
      $('#brunofin-p').text('offline').addClass('text-danger');
    }

    $('#brunofin-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#brunofin-a').attr('href', data.stream.channel.url);
    // console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/brunofin?callback=?', function (data) {

    $('#brunofin-img').attr('src', data.logo);

    if (data.error) {
      $('#brunofin-p').text('Account Closed');
    }

    $('#brunofin-a').attr('href', data.url);
    // console.log(data);
  });

  //Comster404
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/comster404?callback=?', function (data) {

    if (data.stream == null) {
      $('#comster404-p').text('offline').addClass('text-danger');
    }

    $('#comster404-p').text(data.stream.game + ' - ' + data.stream.channel.status).addClass('text-primary');

    $('#comster404-a').attr('href', data.stream.channel.url);
    //console.log(data);
  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/comster404?callback=?', function (data) {

    $('#comster404-img').attr('src', data.logo);

    if (data.error) {
      $('#comster404-p').text('Account Closed');
    }

    $('#comster404-a').attr('href', data.url);
    // console.log(data.data);
  });
}); // End