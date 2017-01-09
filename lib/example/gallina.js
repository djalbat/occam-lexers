'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    GallinaLexer = require('../gallina/lexer');

var gallinaLexer = GallinaLexer.fromNothing();

var GallinaExample = function () {
  function GallinaExample() {
    _classCallCheck(this, GallinaExample);
  }

  _createClass(GallinaExample, null, [{
    key: 'run',
    value: function run() {
      Example.contentTextAreaOnChange(function (contextTextAreaValue) {
        Example.updateTokens(gallinaLexer);
      });
    }
  }]);

  return GallinaExample;
}();

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlcXVpcmUiLCJHYWxsaW5hTGV4ZXIiLCJnYWxsaW5hTGV4ZXIiLCJmcm9tTm90aGluZyIsIkdhbGxpbmFFeGFtcGxlIiwiY29udGVudFRleHRBcmVhT25DaGFuZ2UiLCJjb250ZXh0VGV4dEFyZWFWYWx1ZSIsInVwZGF0ZVRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFlBQVIsQ0FBZDtBQUFBLElBQ0lDLGVBQWVELFFBQVEsa0JBQVIsQ0FEbkI7O0FBR0EsSUFBSUUsZUFBZUQsYUFBYUUsV0FBYixFQUFuQjs7SUFFTUMsYzs7Ozs7OzswQkFDUztBQUNYTCxjQUFRTSx1QkFBUixDQUFnQyxVQUFTQyxvQkFBVCxFQUErQjtBQUM3RFAsZ0JBQVFRLFlBQVIsQ0FBcUJMLFlBQXJCO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQkwsY0FBakIiLCJmaWxlIjoiZ2FsbGluYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgR2FsbGluYUxleGVyID0gcmVxdWlyZSgnLi4vZ2FsbGluYS9sZXhlcicpO1xuXG52YXIgZ2FsbGluYUxleGVyID0gR2FsbGluYUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlKGZ1bmN0aW9uKGNvbnRleHRUZXh0QXJlYVZhbHVlKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhnYWxsaW5hTGV4ZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG4iXX0=