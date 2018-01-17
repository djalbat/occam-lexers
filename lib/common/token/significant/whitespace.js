'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(WhitespaceToken, this, startPosition, endPosition);
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.innerHTML; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(WhitespaceToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var whitespaceToken = null;

      var matches = content.match(WhitespaceToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var _type = WhitespaceToken.type;


        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, _type);
      }

      return whitespaceToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(WhitespaceToken.regularExpression);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

var type = 'whitespace',
    regularExpression = /[\t ]+/;

Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = WhitespaceToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJXaGl0ZXNwYWNlVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImZpbGVQYXRoIiwiaHRtbCIsImlubmVySFRNTCIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSxnQkFBUixDQUF6Qjs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLGU7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9MLGlCQUFpQk0sS0FBakIsQ0FBdUJILGVBQXZCLEVBQXdDLElBQXhDLEVBQThDQyxhQUE5QyxFQUE2REMsV0FBN0QsQ0FBUDtBQUFtRjs7OzJCQUVoSEUsUSxFQUFVO0FBQ2YsVUFBTUMsT0FBTyxLQUFLQyxTQUFsQixDQURlLENBQ2U7O0FBRTlCLGFBQU9ELElBQVA7QUFDRDs7OzJDQUU2QkUsTyxFQUFTQyxJLEVBQU1DLEksRUFBTTtBQUFFLGFBQU9aLGlCQUFpQmEsc0JBQWpCLENBQXdDVixlQUF4QyxFQUF5RE8sT0FBekQsRUFBa0VDLElBQWxFLEVBQXdFQyxJQUF4RSxDQUFQO0FBQXVGOzs7NkNBRTVHRixPLEVBQVNDLEksRUFBTTtBQUM3QyxVQUFJRyxrQkFBa0IsSUFBdEI7O0FBRUEsVUFBTUMsVUFBVUwsUUFBUU0sS0FBUixDQUFjYixnQkFBZ0JjLGlCQUE5QixDQUFoQjs7QUFFQSxVQUFJRixPQUFKLEVBQWE7QUFDWCxZQUFNRyxhQUFhaEIsTUFBTWEsT0FBTixDQUFuQjs7QUFFQUwsa0JBQVVRLFVBQVYsQ0FIVyxDQUdXOztBQUhYLFlBS0hOLEtBTEcsR0FLTVQsZUFMTixDQUtIUyxJQUxHOzs7QUFPWEUsMEJBQWtCWCxnQkFBZ0JVLHNCQUFoQixDQUF1Q0gsT0FBdkMsRUFBZ0RDLElBQWhELEVBQXNEQyxLQUF0RCxDQUFsQjtBQUNEOztBQUVELGFBQU9FLGVBQVA7QUFDRDs7OzBDQUU0QkosTyxFQUFTO0FBQ3BDLFVBQU1TLFdBQVdULFFBQVFVLE1BQVIsQ0FBZWpCLGdCQUFnQmMsaUJBQS9CLENBQWpCOztBQUVBLGFBQU9FLFFBQVA7QUFDRDs7OztFQWpDMkJuQixnQjs7QUFvQzlCLElBQU1ZLE9BQU8sWUFBYjtBQUFBLElBQ01LLG9CQUFvQixRQUQxQjs7QUFHQUksT0FBT0MsTUFBUCxDQUFjbkIsZUFBZCxFQUErQjtBQUM3QlMsUUFBTUEsSUFEdUI7QUFFN0JLLHFCQUFtQkE7QUFGVSxDQUEvQjs7QUFLQU0sT0FBT0MsT0FBUCxHQUFpQnJCLGVBQWpCIiwiZmlsZSI6IndoaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShXaGl0ZXNwYWNlVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFdoaXRlc3BhY2VUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChXaGl0ZXNwYWNlVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnd2hpdGVzcGFjZScsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9bXFx0IF0rLztcblxuT2JqZWN0LmFzc2lnbihXaGl0ZXNwYWNlVG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG4iXX0=