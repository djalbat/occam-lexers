'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var StringLiteralToken = function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _possibleConstructorReturn(this, (StringLiteralToken.__proto__ || Object.getPrototypeOf(StringLiteralToken)).apply(this, arguments));
  }

  _createClass(StringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(StringLiteralToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(StringLiteralToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringLiteralToken = null;

      var matches = content.match(StringLiteralToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var _type = StringLiteralToken.type;


        stringLiteralToken = StringLiteralToken.fromContentLineAndType(content, line, _type);
      }

      return stringLiteralToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(StringLiteralToken.regularExpression);

      return position;
    }
  }]);

  return StringLiteralToken;
}(SignificantToken);

var type = 'string',
    regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(StringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJzdHJpbmdMaXRlcmFsVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSxnQkFBUixDQUF6Qjs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLGtCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCSCxrQkFBdkIsRUFBMkMsSUFBM0MsRUFBaURDLGFBQWpELEVBQWdFQyxXQUFoRSxDQUFQO0FBQXNGOzs7MkNBRTVGRSxPLEVBQVNDLEksRUFBTUMsSSxFQUFNO0FBQUUsYUFBT1QsaUJBQWlCVSxzQkFBakIsQ0FBd0NQLGtCQUF4QyxFQUE0REksT0FBNUQsRUFBcUVDLElBQXJFLEVBQTJFQyxJQUEzRSxDQUFQO0FBQTBGOzs7NkNBRS9HRixPLEVBQVNDLEksRUFBTTtBQUM3QyxVQUFJRyxxQkFBcUIsSUFBekI7O0FBRUEsVUFBTUMsVUFBVUwsUUFBUU0sS0FBUixDQUFjVixtQkFBbUJXLGlCQUFqQyxDQUFoQjs7QUFFQSxVQUFJRixPQUFKLEVBQWE7QUFDWCxZQUFNRyxhQUFhYixNQUFNVSxPQUFOLENBQW5COztBQUVBTCxrQkFBVVEsVUFBVixDQUhXLENBR1c7O0FBSFgsWUFLSE4sS0FMRyxHQUtNTixrQkFMTixDQUtITSxJQUxHOzs7QUFPWEUsNkJBQXFCUixtQkFBbUJPLHNCQUFuQixDQUEwQ0gsT0FBMUMsRUFBbURDLElBQW5ELEVBQXlEQyxLQUF6RCxDQUFyQjtBQUNEOztBQUVELGFBQU9FLGtCQUFQO0FBQ0Q7OzswQ0FFNEJKLE8sRUFBUztBQUNwQyxVQUFNUyxXQUFXVCxRQUFRVSxNQUFSLENBQWVkLG1CQUFtQlcsaUJBQWxDLENBQWpCOztBQUVBLGFBQU9FLFFBQVA7QUFDRDs7OztFQTNCOEJoQixnQjs7QUE4QmpDLElBQU1TLE9BQU8sUUFBYjtBQUFBLElBQ01LLG9CQUFvQixpQkFEMUI7O0FBR0FJLE9BQU9DLE1BQVAsQ0FBY2hCLGtCQUFkLEVBQWtDO0FBQ2hDTSxRQUFNQSxJQUQwQjtBQUVoQ0sscUJBQW1CQTtBQUZhLENBQWxDOztBQUtBTSxPQUFPQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwiZmlsZSI6InN0cmluZ0xpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShTdHJpbmdMaXRlcmFsVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQsIGxpbmUsIHR5cGUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goU3RyaW5nTGl0ZXJhbFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBTdHJpbmdMaXRlcmFsVG9rZW47XG5cbiAgICAgIHN0cmluZ0xpdGVyYWxUb2tlbiA9IFN0cmluZ0xpdGVyYWxUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChTdHJpbmdMaXRlcmFsVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnc3RyaW5nJyxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1wiKD86XFxcXC58W15cIl0pKlwiLztcblxuT2JqZWN0LmFzc2lnbihTdHJpbmdMaXRlcmFsVG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=