var React = require('react'),
  ReactDOM = require('react-dom');
var ioc = require('socket.io-client');

var App = React.createClass({
  getInitialState: function() {
    return {
      foo: 0
    };
  },
  render: function() {
    return(
      <h2>React Working, foo is {this.state.foo}</h2>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

ioc.connect();
