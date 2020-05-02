"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var types = require("../../../../types"),
    NonSignificantToken = require("../../../../token/nonSignificant");

var endOfMultiLineCommentType = types.endOfMultiLineCommentType;

var EndOfMultiLineCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(EndOfMultiLineCommentToken, _NonSignificantToken);

  var _super = _createSuper(EndOfMultiLineCommentToken);

  function EndOfMultiLineCommentToken() {
    _classCallCheck(this, EndOfMultiLineCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfMultiLineCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(EndOfMultiLineCommentToken.prototype), "clone", this).call(this, EndOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: "isInComment",
    value: function isInComment() {
      var inComment = false;
      return inComment;
    }
  }], [{
    key: "match",
    value: function match(content) {
      return NonSignificantToken.match(EndOfMultiLineCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content);
    }
  }]);

  return EndOfMultiLineCommentToken;
}(NonSignificantToken);

var type = endOfMultiLineCommentType,
    ///
regularExpression = /^\*\//;
Object.assign(EndOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = EndOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJpbkNvbW1lbnQiLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsbUJBQUQsQ0FBckI7QUFBQSxJQUNNQyxtQkFBbUIsR0FBR0QsT0FBTyxDQUFDLGtDQUFELENBRG5DOztJQUdRRSx5QixHQUE4QkgsSyxDQUE5QkcseUI7O0lBRUZDLDBCOzs7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLG1HQUFtQkYsMEJBQW5CLEVBQStDQyxhQUEvQyxFQUE4REMsV0FBOUQ7QUFBNkU7OztrQ0FFbkc7QUFDWixVQUFNQyxTQUFTLEdBQUcsS0FBbEI7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sbUJBQW1CLENBQUNPLEtBQXBCLENBQTBCTCwwQkFBMUIsRUFBc0RJLE9BQXRELENBQVA7QUFBd0U7OztnQ0FFN0VBLE8sRUFBUztBQUFFLGFBQU9OLG1CQUFtQixDQUFDUSxXQUFwQixDQUFnQ04sMEJBQWhDLEVBQTRESSxPQUE1RCxDQUFQO0FBQThFOzs7O0VBWHJFTixtQjs7QUFjekMsSUFBTVMsSUFBSSxHQUFHUix5QkFBYjtBQUFBLElBQXlDO0FBQ25DUyxpQkFBaUIsR0FBRyxPQUQxQjtBQUdBQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1YsMEJBQWQsRUFBMEM7QUFDeENPLEVBQUFBLElBQUksRUFBSkEsSUFEd0M7QUFFeENDLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFGd0MsQ0FBMUM7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWiwwQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdHlwZXNcIiksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCIpO1xuXG5jb25zdCB7IGVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcKlxcLy87XG5cbk9iamVjdC5hc3NpZ24oRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19