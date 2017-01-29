'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return Token.clone(this, startPosition, endPosition, ErrorToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return Token.fromContentAndLine(content, line, ErrorToken);
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      return Token.fromToken(token, ErrorToken);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var innerHTML = content; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="error">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiY29udGVudCIsImxpbmUiLCJmcm9tQ29udGVudEFuZExpbmUiLCJ0b2tlbiIsImZyb21Ub2tlbiIsImlubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxVOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPSixNQUFNSyxLQUFOLENBQVksSUFBWixFQUFrQkYsYUFBbEIsRUFBaUNDLFdBQWpDLEVBQThDRixVQUE5QyxDQUFQO0FBQW1FOzs7dUNBRTdFSSxPLEVBQVNDLEksRUFBTTtBQUFFLGFBQU9QLE1BQU1RLGtCQUFOLENBQXlCRixPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NMLFVBQXhDLENBQVA7QUFBNkQ7Ozs4QkFFdkZPLEssRUFBTztBQUFFLGFBQU9ULE1BQU1VLFNBQU4sQ0FBZ0JELEtBQWhCLEVBQXVCUCxVQUF2QixDQUFQO0FBQTRDOzs7b0NBRS9DSSxPLEVBQVM7QUFDOUIsVUFBSUssWUFBWUwsT0FBaEIsQ0FEOEIsQ0FDTDs7QUFFekJLLGtCQUFZWCxNQUFNWSxZQUFOLENBQW1CRCxTQUFuQixDQUFaOztBQUVBLFVBQUlFLGdDQUE4QkYsU0FBOUIsWUFBSjs7QUFFQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUFmc0JiLEs7O0FBa0J6QmMsT0FBT0MsT0FBUCxHQUFpQmIsVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRXJyb3JUb2tlbik7IH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVycm9yVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbikgeyByZXR1cm4gVG9rZW4uZnJvbVRva2VuKHRva2VuLCBFcnJvclRva2VuKTsgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBpbm5lckhUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIGlubmVySFRNTCA9IFRva2VuLnNhbml0aXNlSFRNTChpbm5lckhUTUwpO1xuXG4gICAgdmFyIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJlcnJvclwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRva2VuO1xuIl19