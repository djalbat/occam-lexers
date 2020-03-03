'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant');

var whitespaceType = types.whitespaceType;

var WhitespaceToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(WhitespaceToken, _NonSignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(WhitespaceToken).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: "asHTML",
    value: function asHTML() {
      var html = this.innerHTML; ///

      return html;
    }
  }, {
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(WhitespaceToken.prototype), "clone", this).call(this, WhitespaceToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return NonSignificantToken.match(WhitespaceToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(WhitespaceToken, content);
    }
  }]);

  return WhitespaceToken;
}(NonSignificantToken);

var type = whitespaceType,
    ///
regularExpression = /^[\t ]+/;
Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = WhitespaceToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoaXRlc3BhY2UuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIndoaXRlc3BhY2VUeXBlIiwiV2hpdGVzcGFjZVRva2VuIiwiaHRtbCIsImlubmVySFRNTCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBckI7QUFBQSxJQUNNQyxtQkFBbUIsR0FBR0QsT0FBTyxDQUFDLDRCQUFELENBRG5DOztJQUdRRSxjLEdBQW1CSCxLLENBQW5CRyxjOztJQUVGQyxlOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQU1DLElBQUksR0FBRyxLQUFLQyxTQUFsQixDQURPLENBQ3VCOztBQUU5QixhQUFPRCxJQUFQO0FBQ0Q7OzswQkFFS0UsYSxFQUFlQyxXLEVBQWE7QUFBRSx3RkFBbUJKLGVBQW5CLEVBQW9DRyxhQUFwQyxFQUFtREMsV0FBbkQ7QUFBa0U7OzswQkFFekZDLE8sRUFBUztBQUFFLGFBQU9QLG1CQUFtQixDQUFDUSxLQUFwQixDQUEwQk4sZUFBMUIsRUFBMkNLLE9BQTNDLENBQVA7QUFBNkQ7OztnQ0FFbEVBLE8sRUFBUztBQUFFLGFBQU9QLG1CQUFtQixDQUFDUyxXQUFwQixDQUFnQ1AsZUFBaEMsRUFBaURLLE9BQWpELENBQVA7QUFBbUU7Ozs7RUFYckVQLG1COztBQWM5QixJQUFNVSxJQUFJLEdBQUdULGNBQWI7QUFBQSxJQUE4QjtBQUN4QlUsaUJBQWlCLEdBQUcsU0FEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNYLGVBQWQsRUFBK0I7QUFDN0JRLEVBQUFBLElBQUksRUFBSkEsSUFENkI7QUFFN0JDLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFGNkIsQ0FBL0I7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixlQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi90eXBlcycpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgd2hpdGVzcGFjZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoV2hpdGVzcGFjZVRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChXaGl0ZXNwYWNlVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gd2hpdGVzcGFjZVR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15bXFx0IF0rLztcblxuT2JqZWN0LmFzc2lnbihXaGl0ZXNwYWNlVG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcbiJdfQ==