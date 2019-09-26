'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant');

var endOfLineType = types.endOfLineType;

var EndOfLineNonSignificantToken = function (_NonSignificantToken) {
  _inherits(EndOfLineNonSignificantToken, _NonSignificantToken);

  function EndOfLineNonSignificantToken() {
    _classCallCheck(this, EndOfLineNonSignificantToken);

    return _possibleConstructorReturn(this, (EndOfLineNonSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineNonSignificantToken)).apply(this, arguments));
  }

  _createClass(EndOfLineNonSignificantToken, [{
    key: 'asHTML',
    value: function asHTML() {
      var html = '\n'; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfLineNonSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineNonSignificantToken.prototype), 'clone', this).call(this, EndOfLineNonSignificantToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromMatch',
    value: function fromMatch(match) {
      return NonSignificantToken.fromMatch(EndOfLineNonSignificantToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(EndOfLineNonSignificantToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return NonSignificantToken.fromWithinContent(EndOfLineNonSignificantToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return NonSignificantToken.positionWithinContent(EndOfLineNonSignificantToken, content);
    }
  }]);

  return EndOfLineNonSignificantToken;
}(NonSignificantToken);

var type = endOfLineType,
    regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineNonSignificantToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfLineNonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUeXBlIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtYXRjaCIsImZyb21NYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsYUFBUixDQUFkO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLDRCQUFSLENBRDVCOztJQUdRRSxhLEdBQWtCSCxLLENBQWxCRyxhOztJQUVGQyw0Qjs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxPQUFPLElBQWIsQ0FETyxDQUNhOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSwrSkFBbUJILDRCQUFuQixFQUFpREUsYUFBakQsRUFBZ0VDLFdBQWhFO0FBQStFOzs7OEJBRWxHQyxLLEVBQU87QUFBRSxhQUFPTixvQkFBb0JPLFNBQXBCLENBQThCTCw0QkFBOUIsRUFBNERJLEtBQTVELENBQVA7QUFBNEU7OztnQ0FFbkZFLE8sRUFBUztBQUFFLGFBQU9SLG9CQUFvQlMsV0FBcEIsQ0FBZ0NQLDRCQUFoQyxFQUE4RE0sT0FBOUQsQ0FBUDtBQUFnRjs7O3NDQUVyRkEsTyxFQUFTO0FBQUUsYUFBT1Isb0JBQW9CVSxpQkFBcEIsQ0FBc0NSLDRCQUF0QyxFQUFvRU0sT0FBcEUsQ0FBUDtBQUFzRjs7OzBDQUU3RkEsTyxFQUFTO0FBQUUsYUFBT1Isb0JBQW9CVyxxQkFBcEIsQ0FBMENULDRCQUExQyxFQUF3RU0sT0FBeEUsQ0FBUDtBQUEwRjs7OztFQWZ6RlIsbUI7O0FBa0IzQyxJQUFNWSxPQUFPWCxhQUFiO0FBQUEsSUFDTVksb0JBQW9CLFlBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNiLDRCQUFkLEVBQTRDO0FBQzFDVSxZQUQwQztBQUUxQ0M7QUFGMEMsQ0FBNUM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJmLDRCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGVuZE9mTGluZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGFzSFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJ1xcbic7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2gobWF0Y2gpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbU1hdGNoKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIG1hdGNoKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBlbmRPZkxpbmVUeXBlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFxyXFxufFxccnxcXG4vO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=