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

      Example.updateTokens(gallinaLexer);
    }
  }]);

  return GallinaExample;
}();

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlcXVpcmUiLCJHYWxsaW5hTGV4ZXIiLCJnYWxsaW5hTGV4ZXIiLCJmcm9tTm90aGluZyIsIkdhbGxpbmFFeGFtcGxlIiwiY29udGVudFRleHRBcmVhT25DaGFuZ2UiLCJjb250ZXh0VGV4dEFyZWFWYWx1ZSIsInVwZGF0ZVRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFlBQVIsQ0FBZDtBQUFBLElBQ0lDLGVBQWVELFFBQVEsa0JBQVIsQ0FEbkI7O0FBR0EsSUFBSUUsZUFBZUQsYUFBYUUsV0FBYixFQUFuQjs7SUFFTUMsYzs7Ozs7OzswQkFDUztBQUNYTCxjQUFRTSx1QkFBUixDQUFnQyxVQUFTQyxvQkFBVCxFQUErQjtBQUM3RFAsZ0JBQVFRLFlBQVIsQ0FBcUJMLFlBQXJCO0FBQ0QsT0FGRDs7QUFJQUgsY0FBUVEsWUFBUixDQUFxQkwsWUFBckI7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJMLGNBQWpCIiwiZmlsZSI6ImdhbGxpbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgIEdhbGxpbmFMZXhlciA9IHJlcXVpcmUoJy4uL2dhbGxpbmEvbGV4ZXInKTtcblxudmFyIGdhbGxpbmFMZXhlciA9IEdhbGxpbmFMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWFPbkNoYW5nZShmdW5jdGlvbihjb250ZXh0VGV4dEFyZWFWYWx1ZSkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoZ2FsbGluYUxleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGdhbGxpbmFMZXhlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hRXhhbXBsZTtcbiJdfQ==