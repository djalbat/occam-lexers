'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = require('./example'),
    grammar = require('../../es6/gallina/grammar'),
    GallinaLexer = require('../../es6/gallina/lexer');

var gallinaLexer = GallinaLexer.fromGrammar(grammar);

var GallinaExample = function (_Example) {
  _inherits(GallinaExample, _Example);

  function GallinaExample() {
    _classCallCheck(this, GallinaExample);

    return _possibleConstructorReturn(this, (GallinaExample.__proto__ || Object.getPrototypeOf(GallinaExample)).apply(this, arguments));
  }

  _createClass(GallinaExample, null, [{
    key: 'run',
    value: function run() {
      Example.contentTextArea.onChange(function (contextTextAreaValue) {
        Example.updateTokens(contextTextAreaValue, gallinaLexer);
      });
    }
  }]);

  return GallinaExample;
}(Example);

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsImdyYW1tYXIiLCJHYWxsaW5hTGV4ZXIiLCJnYWxsaW5hTGV4ZXIiLCJmcm9tR3JhbW1hciIsIkdhbGxpbmFFeGFtcGxlIiwiY29udGVudFRleHRBcmVhIiwib25DaGFuZ2UiLCJjb250ZXh0VGV4dEFyZWFWYWx1ZSIsInVwZGF0ZVRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLDJCQUFSLENBRGQ7QUFBQSxJQUVJRSxlQUFlRixRQUFRLHlCQUFSLENBRm5COztBQUlBLElBQUlHLGVBQWVELGFBQWFFLFdBQWIsQ0FBeUJILE9BQXpCLENBQW5COztJQUVNSSxjOzs7Ozs7Ozs7OzswQkFDUztBQUNYTixjQUFRTyxlQUFSLENBQXdCQyxRQUF4QixDQUFpQyxVQUFTQyxvQkFBVCxFQUErQjtBQUM5RFQsZ0JBQVFVLFlBQVIsQ0FBcUJELG9CQUFyQixFQUEyQ0wsWUFBM0M7QUFDRCxPQUZEO0FBR0Q7Ozs7RUFMMEJKLE87O0FBUTdCVyxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJnYWxsaW5hRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKSxcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dhbGxpbmEvZ3JhbW1hcicpLFxuICAgIEdhbGxpbmFMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2VzNi9nYWxsaW5hL2xleGVyJyk7XG5cbnZhciBnYWxsaW5hTGV4ZXIgPSBHYWxsaW5hTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oY29udGV4dFRleHRBcmVhVmFsdWUpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGNvbnRleHRUZXh0QXJlYVZhbHVlLCBnYWxsaW5hTGV4ZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG4iXX0=