'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var IncludeDirectiveToken = function (_Token) {
  _inherits(IncludeDirectiveToken, _Token);

  function IncludeDirectiveToken(string, line, filePath) {
    _classCallCheck(this, IncludeDirectiveToken);

    var _this = _possibleConstructorReturn(this, (IncludeDirectiveToken.__proto__ || Object.getPrototypeOf(IncludeDirectiveToken)).call(this, string, line));

    _this.filePath = filePath;
    return _this;
  }

  _createClass(IncludeDirectiveToken, [{
    key: 'clone',
    value: function clone() {
      var string = this.getString(),
          line = this.getLine(),
          filePath = this.getFilePath(),
          IncludeDirectiveToken = new IncludeDirectiveToken(string, line, filePath);

      return IncludeDirectiveToken;
    }
  }, {
    key: 'getFilePath',
    value: function getFilePath() {
      return this.filePath;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.filePath; ///

      return html;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/include\("[^"]*"\)/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var includeDirectiveToken = null,
          matches = content.match(/^include\("([^"]*)"\)/);

      if (matches) {
        var firstMatch = first(matches),
            secondMatch = second(matches),
            string = firstMatch,
            ///
        filePath = secondMatch; ///

        includeDirectiveToken = new IncludeDirectiveToken(string, line, filePath);
      }

      return includeDirectiveToken;
    }
  }]);

  return IncludeDirectiveToken;
}(Token);

module.exports = IncludeDirectiveToken;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsInN0cmluZyIsImxpbmUiLCJmaWxlUGF0aCIsImdldFN0cmluZyIsImdldExpbmUiLCJnZXRGaWxlUGF0aCIsImh0bWwiLCJjb250ZW50IiwicG9zaXRpb24iLCJzZWFyY2giLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEJDLFFBQTFCLEVBQW9DO0FBQUE7O0FBQUEsOElBQzVCRixNQUQ0QixFQUNwQkMsSUFEb0I7O0FBR2xDLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSGtDO0FBSW5DOzs7OzRCQUVPO0FBQ04sVUFBSUYsU0FBUyxLQUFLRyxTQUFMLEVBQWI7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlGLFdBQVcsS0FBS0csV0FBTCxFQUZmO0FBQUEsVUFHSU4sd0JBQXdCLElBQUlBLHFCQUFKLENBQTBCQyxNQUExQixFQUFrQ0MsSUFBbEMsRUFBd0NDLFFBQXhDLENBSDVCOztBQUtBLGFBQU9ILHFCQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0csUUFBWjtBQUNEOzs7OEJBd0JTO0FBQ1IsVUFBSUksT0FBTyxLQUFLSixRQUFoQixDQURRLENBQ21COztBQUUzQixhQUFPSSxJQUFQO0FBQ0Q7Ozs2QkExQmVDLE8sRUFBUztBQUN2QixVQUFJQyxXQUFXRCxRQUFRRSxNQUFSLENBQWUsb0JBQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JELE8sRUFBU04sSSxFQUFNO0FBQ2hDLFVBQUlTLHdCQUF3QixJQUE1QjtBQUFBLFVBQ0lDLFVBQVVKLFFBQVFLLEtBQVIsQ0FBYyx1QkFBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJSSxjQUFjQyxPQUFPTCxPQUFQLENBRGxCO0FBQUEsWUFFSVgsU0FBU2EsVUFGYjtBQUFBLFlBRXlCO0FBQ3JCWCxtQkFBV2EsV0FIZixDQURXLENBSWlCOztBQUU1QkwsZ0NBQXdCLElBQUlYLHFCQUFKLENBQTBCQyxNQUExQixFQUFrQ0MsSUFBbEMsRUFBd0NDLFFBQXhDLENBQXhCO0FBQ0Q7O0FBRUQsYUFBT1EscUJBQVA7QUFDRDs7OztFQXhDaUNiLEs7O0FBaURwQ29CLE9BQU9DLE9BQVAsR0FBaUJuQixxQkFBakI7O0FBRUEsU0FBU2UsS0FBVCxDQUFlSyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0gsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJpbmNsdWRlRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgSW5jbHVkZURpcmVjdGl2ZVRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGxpbmUsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBsaW5lKTtcblxuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICBJbmNsdWRlRGlyZWN0aXZlVG9rZW4gPSBuZXcgSW5jbHVkZURpcmVjdGl2ZVRva2VuKHN0cmluZywgbGluZSwgZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIEluY2x1ZGVEaXJlY3RpdmVUb2tlbjtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvaW5jbHVkZVxcKFwiW15cIl0qXCJcXCkvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eaW5jbHVkZVxcKFwiKFteXCJdKilcIlxcKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgc3RyaW5nID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlVG9rZW4oc3RyaW5nLCBsaW5lLCBmaWxlUGF0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVG9rZW47XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5maWxlUGF0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmNsdWRlRGlyZWN0aXZlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19