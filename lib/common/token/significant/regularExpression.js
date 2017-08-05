'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var array = necessary.array,
    first = array.first;

var RegularExpressionToken = function (_SignificantToken) {
  _inherits(RegularExpressionToken, _SignificantToken);

  function RegularExpressionToken() {
    _classCallCheck(this, RegularExpressionToken);

    return _possibleConstructorReturn(this, (RegularExpressionToken.__proto__ || Object.getPrototypeOf(RegularExpressionToken)).apply(this, arguments));
  }

  _createClass(RegularExpressionToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(RegularExpressionToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(RegularExpressionToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var regularExpressionToken = null;

      var matches = content.match(RegularExpressionToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var type = RegularExpressionToken.type;

        regularExpressionToken = RegularExpressionToken.fromContentLineAndType(content, line, type);
      }

      return regularExpressionToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(RegularExpressionToken.regularExpression);

      return position;
    }
  }]);

  return RegularExpressionToken;
}(SignificantToken);

RegularExpressionToken.type = 'regularExpression';

RegularExpressionToken.regularExpression = /\/(?:\\.|[^\/])*\//;

module.exports = RegularExpressionToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW4iLCJhcnJheSIsImZpcnN0IiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiY29udGVudCIsImxpbmUiLCJ0eXBlIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSxnQkFBUixDQUF6Qjs7QUFFTSxJQUFFRSxLQUFGLEdBQVlILFNBQVosQ0FBRUcsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxzQjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0wsaUJBQWlCTSxLQUFqQixDQUF1Qkgsc0JBQXZCLEVBQStDLElBQS9DLEVBQXFEQyxhQUFyRCxFQUFvRUMsV0FBcEUsQ0FBUDtBQUEwRjs7OzJDQUVoR0UsTyxFQUFTQyxJLEVBQU1DLEksRUFBTTtBQUFFLGFBQU9ULGlCQUFpQlUsc0JBQWpCLENBQXdDUCxzQkFBeEMsRUFBZ0VJLE9BQWhFLEVBQXlFQyxJQUF6RSxFQUErRUMsSUFBL0UsQ0FBUDtBQUE4Rjs7OzZDQUVuSEYsTyxFQUFTQyxJLEVBQU07QUFDN0MsVUFBSUcseUJBQXlCLElBQTdCOztBQUVBLFVBQU1DLFVBQVVMLFFBQVFNLEtBQVIsQ0FBY1YsdUJBQXVCVyxpQkFBckMsQ0FBaEI7O0FBRUEsVUFBSUYsT0FBSixFQUFhO0FBQ1gsWUFBTUcsYUFBYWIsTUFBTVUsT0FBTixDQUFuQjs7QUFFQUwsa0JBQVVRLFVBQVYsQ0FIVyxDQUdXOztBQUV0QixZQUFNTixPQUFPTix1QkFBdUJNLElBQXBDOztBQUVBRSxpQ0FBeUJSLHVCQUF1Qk8sc0JBQXZCLENBQThDSCxPQUE5QyxFQUF1REMsSUFBdkQsRUFBNkRDLElBQTdELENBQXpCO0FBQ0Q7O0FBRUQsYUFBT0Usc0JBQVA7QUFDRDs7OzBDQUU0QkosTyxFQUFTO0FBQ3BDLFVBQU1TLFdBQVdULFFBQVFVLE1BQVIsQ0FBZWQsdUJBQXVCVyxpQkFBdEMsQ0FBakI7O0FBRUEsYUFBT0UsUUFBUDtBQUNEOzs7O0VBM0JrQ2hCLGdCOztBQThCckNHLHVCQUF1Qk0sSUFBdkIsR0FBOEIsbUJBQTlCOztBQUVBTix1QkFBdUJXLGlCQUF2QixHQUEyQyxvQkFBM0M7O0FBRUFJLE9BQU9DLE9BQVAsR0FBaUJoQixzQkFBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sIGNvbnRlbnQsIGxpbmUsIHR5cGUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbi50eXBlO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25Ub2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goUmVndWxhckV4cHJlc3Npb25Ub2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuUmVndWxhckV4cHJlc3Npb25Ub2tlbi50eXBlID0gJ3JlZ3VsYXJFeHByZXNzaW9uJztcblxuUmVndWxhckV4cHJlc3Npb25Ub2tlbi5yZWd1bGFyRXhwcmVzc2lvbiA9IC9cXC8oPzpcXFxcLnxbXlxcL10pKlxcLy87XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcbiJdfQ==