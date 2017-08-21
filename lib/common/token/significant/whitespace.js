'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var array = necessary.array,
    first = array.first;

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
    value: function asHTML() {
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

        var type = WhitespaceToken.type;

        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
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

WhitespaceToken.type = 'whitespace';

WhitespaceToken.regularExpression = /[\t ]+/;

module.exports = WhitespaceToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFycmF5IiwiZmlyc3QiLCJXaGl0ZXNwYWNlVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImh0bWwiLCJpbm5lckhUTUwiLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxtQkFBbUJELFFBQVEsZ0JBQVIsQ0FBekI7O0FBRU0sSUFBRUUsS0FBRixHQUFZSCxTQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELEtBRFosQ0FDRUMsS0FERjs7SUFHQUMsZTs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0wsaUJBQWlCTSxLQUFqQixDQUF1QkgsZUFBdkIsRUFBd0MsSUFBeEMsRUFBOENDLGFBQTlDLEVBQTZEQyxXQUE3RCxDQUFQO0FBQW1GOzs7NkJBRTlHO0FBQ1AsVUFBTUUsT0FBTyxLQUFLQyxTQUFsQixDQURPLENBQ3VCOztBQUU5QixhQUFPRCxJQUFQO0FBQ0Q7OzsyQ0FFNkJFLE8sRUFBU0MsSSxFQUFNQyxJLEVBQU07QUFBRSxhQUFPWCxpQkFBaUJZLHNCQUFqQixDQUF3Q1QsZUFBeEMsRUFBeURNLE9BQXpELEVBQWtFQyxJQUFsRSxFQUF3RUMsSUFBeEUsQ0FBUDtBQUF1Rjs7OzZDQUU1R0YsTyxFQUFTQyxJLEVBQU07QUFDN0MsVUFBSUcsa0JBQWtCLElBQXRCOztBQUVBLFVBQU1DLFVBQVVMLFFBQVFNLEtBQVIsQ0FBY1osZ0JBQWdCYSxpQkFBOUIsQ0FBaEI7O0FBRUEsVUFBSUYsT0FBSixFQUFhO0FBQ1gsWUFBTUcsYUFBYWYsTUFBTVksT0FBTixDQUFuQjs7QUFFQUwsa0JBQVVRLFVBQVYsQ0FIVyxDQUdXOztBQUV0QixZQUFNTixPQUFPUixnQkFBZ0JRLElBQTdCOztBQUVBRSwwQkFBa0JWLGdCQUFnQlMsc0JBQWhCLENBQXVDSCxPQUF2QyxFQUFnREMsSUFBaEQsRUFBc0RDLElBQXRELENBQWxCO0FBQ0Q7O0FBRUQsYUFBT0UsZUFBUDtBQUNEOzs7MENBRTRCSixPLEVBQVM7QUFDcEMsVUFBTVMsV0FBV1QsUUFBUVUsTUFBUixDQUFlaEIsZ0JBQWdCYSxpQkFBL0IsQ0FBakI7O0FBRUEsYUFBT0UsUUFBUDtBQUNEOzs7O0VBakMyQmxCLGdCOztBQW9DOUJHLGdCQUFnQlEsSUFBaEIsR0FBdUIsWUFBdkI7O0FBRUFSLGdCQUFnQmEsaUJBQWhCLEdBQW9DLFFBQXBDOztBQUVBSSxPQUFPQyxPQUFQLEdBQWlCbEIsZUFBakIiLCJmaWxlIjoid2hpdGVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheTtcblxuY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFdoaXRlc3BhY2VUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFdoaXRlc3BhY2VUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHR5cGUgPSBXaGl0ZXNwYWNlVG9rZW4udHlwZTtcblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goV2hpdGVzcGFjZVRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5XaGl0ZXNwYWNlVG9rZW4udHlwZSA9ICd3aGl0ZXNwYWNlJztcblxuV2hpdGVzcGFjZVRva2VuLnJlZ3VsYXJFeHByZXNzaW9uID0gL1tcXHQgXSsvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcbiJdfQ==