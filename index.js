/** @jsx React.DOM */
var React = require('react');

function reverse(str) {
  return str.split('').reverse().join('');
}

var Reverse = React.createClass({
  render: function() {
    return <h1>{reverse(this.props.text)}</h1>;
  }
});

module.exports = Reverse;
