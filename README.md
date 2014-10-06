# utahjs-reverse

A little example browser module published to npm. It is a React component that
is compiled with browserify and reactify. It reverses and then renders text.


It gets consumed in [utahjs-reverse-consumer](https://github.com/jergason/utahjs-reverse-consumer).



`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ M A G I C A L (ಥ﹏ಥ)`



## Installation

```bash
npm install --save utahjs-reverse
```

## Usage

```JavaScript
/** @jsx React.DOM */
var React = require('react');
var Reverse = require('utahjs-reverse');

React.renderComponent(Reverse({text: 'Hello darkness my old friend'}), document.body);
```
