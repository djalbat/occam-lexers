'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BracketToken = require('../bracket');

var CurlyOpeningBracketToken = function (_BracketToken) {
  _inherits(CurlyOpeningBracketToken, _BracketToken);

  function CurlyOpeningBracketToken(str) {
    _classCallCheck(this, CurlyOpeningBracketToken);

    return _possibleConstructorReturn(this, (CurlyOpeningBracketToken.__proto__ || Object.getPrototypeOf(CurlyOpeningBracketToken)).call(this, str));
  }

  _createClass(CurlyOpeningBracketToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new CurlyOpeningBracketToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\{)/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          curly = new CurlyOpeningBracketToken(str);

      return curly;
    }
  }]);

  return CurlyOpeningBracketToken;
}(BracketToken);

module.exports = CurlyOpeningBracketToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2JyYWNrZXQvb3BlbmluZ0N1cmx5LmpzIl0sIm5hbWVzIjpbIkJyYWNrZXRUb2tlbiIsInJlcXVpcmUiLCJDdXJseU9wZW5pbmdCcmFja2V0VG9rZW4iLCJzdHIiLCJnZXRTdHIiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiY3VybHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsd0I7OztBQUNKLG9DQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsK0lBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLHdCQUFKLENBQTZCQyxHQUE3QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsT0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxRQUFRLElBQUlOLHdCQUFKLENBQTZCQyxHQUE3QixDQURaOztBQUdBLGFBQU9LLEtBQVA7QUFDRDs7OztFQXRCb0NSLFk7O0FBeUJ2Q1MsT0FBT0MsT0FBUCxHQUFpQlIsd0JBQWpCIiwiZmlsZSI6Im9wZW5pbmdDdXJseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJyYWNrZXRUb2tlbiA9IHJlcXVpcmUoJy4uL2JyYWNrZXQnKTtcblxuY2xhc3MgQ3VybHlPcGVuaW5nQnJhY2tldFRva2VuIGV4dGVuZHMgQnJhY2tldFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBDdXJseU9wZW5pbmdCcmFja2V0VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxceykvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIGN1cmx5ID0gbmV3IEN1cmx5T3BlbmluZ0JyYWNrZXRUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIGN1cmx5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VybHlPcGVuaW5nQnJhY2tldFRva2VuO1xuXG4iXX0=