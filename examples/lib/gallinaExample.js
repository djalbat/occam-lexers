'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = require('./example'),
    GallinaLexer = require('../../es6/gallina/lexer');

var gallinaLexer = GallinaLexer.fromNothing();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsImdhbGxpbmFMZXhlciIsImZyb21Ob3RoaW5nIiwiR2FsbGluYUV4YW1wbGUiLCJjb250ZW50VGV4dEFyZWEiLCJvbkNoYW5nZSIsImNvbnRleHRUZXh0QXJlYVZhbHVlIiwidXBkYXRlVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lDLGVBQWVELFFBQVEseUJBQVIsQ0FEbkI7O0FBR0EsSUFBSUUsZUFBZUQsYUFBYUUsV0FBYixFQUFuQjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7MEJBQ1M7QUFDWEwsY0FBUU0sZUFBUixDQUF3QkMsUUFBeEIsQ0FBaUMsVUFBU0Msb0JBQVQsRUFBK0I7QUFDOURSLGdCQUFRUyxZQUFSLENBQXFCRCxvQkFBckIsRUFBMkNMLFlBQTNDO0FBQ0QsT0FGRDtBQUdEOzs7O0VBTDBCSCxPOztBQVE3QlUsT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoiZ2FsbGluYUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyksXG4gICAgR2FsbGluYUxleGVyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dhbGxpbmEvbGV4ZXInKTtcblxudmFyIGdhbGxpbmFMZXhlciA9IEdhbGxpbmFMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKGNvbnRleHRUZXh0QXJlYVZhbHVlKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2Vucyhjb250ZXh0VGV4dEFyZWFWYWx1ZSwgZ2FsbGluYUxleGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuIl19