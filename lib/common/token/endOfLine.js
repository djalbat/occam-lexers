'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('./significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken);
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);

      return endOfLineToken;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = ''; ///

      return html;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImxpbmUiLCJjb250ZW50IiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tQ29udGVudEFuZExpbmUiLCJodG1sIiwidHlwZSIsInR5cGVzIiwiZW5kT2ZMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsZUFBUixDQUF2Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0osaUJBQWlCSyxLQUFqQixDQUF1QixJQUF2QixFQUE2QkYsYUFBN0IsRUFBNENDLFdBQTVDLEVBQXlERixjQUF6RCxDQUFQO0FBQWtGOzs7NkJBRXRHSSxJLEVBQU07QUFDcEIsVUFBSUMsVUFBVSxFQUFkO0FBQUEsVUFDSUMsaUJBQWlCUixpQkFBaUJTLGtCQUFqQixDQUFvQ0YsT0FBcEMsRUFBNkNELElBQTdDLEVBQW1ESixjQUFuRCxDQURyQjs7QUFHQSxhQUFPTSxjQUFQO0FBQ0Q7OztvQ0FFc0JELE8sRUFBUztBQUM5QixVQUFJRyxPQUFPLEVBQVgsQ0FEOEIsQ0FDZDs7QUFFaEIsYUFBT0EsSUFBUDtBQUNEOzs7O0VBZDBCVixnQjs7QUFpQjdCRSxlQUFlUyxJQUFmLEdBQXNCWCxpQkFBaUJZLEtBQWpCLENBQXVCQyxTQUE3Qzs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIEVuZE9mTGluZVRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lKSB7XG4gICAgdmFyIGNvbnRlbnQgPSAnJyxcbiAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBFbmRPZkxpbmVUb2tlbik7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSAnJzsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuRW5kT2ZMaW5lVG9rZW4udHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuZW5kT2ZMaW5lO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19