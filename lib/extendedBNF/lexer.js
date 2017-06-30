'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    entries = require('./entries'),
    specialSymbols = require('./specialSymbols'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var ExtendedBNFLexer = function (_CommonLexer) {
  _inherits(ExtendedBNFLexer, _CommonLexer);

  function ExtendedBNFLexer() {
    _classCallCheck(this, ExtendedBNFLexer);

    return _possibleConstructorReturn(this, (ExtendedBNFLexer.__proto__ || Object.getPrototypeOf(ExtendedBNFLexer)).apply(this, arguments));
  }

  _createClass(ExtendedBNFLexer, [{
    key: 'linesFromExtendedBNF',
    value: function linesFromExtendedBNF(extendedBNF) {
      var content = extendedBNF,
          ///
      lines = _get(ExtendedBNFLexer.prototype.__proto__ || Object.getPrototypeOf(ExtendedBNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          extendedBNFLexer = new ExtendedBNFLexer(rules, Line);

      return extendedBNFLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var extendedBNFLexer = ExtendedBNFLexer.fromEntries(entries);

      return extendedBNFLexer;
    }
  }]);

  return ExtendedBNFLexer;
}(CommonLexer);

module.exports = ExtendedBNFLexer;

ExtendedBNFLexer.entries = entries;

ExtendedBNFLexer.specialSymbols = specialSymbols;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImVudHJpZXMiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkYiLCJjb250ZW50IiwibGluZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZXh0ZW5kZWRCTkZMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLFVBQVVELFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxrQkFBUixDQUZ2QjtBQUFBLElBR01HLFFBQVFILFFBQVEsaUJBQVIsQ0FIZDtBQUFBLElBSU1JLGNBQWNKLFFBQVEsaUJBQVIsQ0FKcEI7O0lBTU1LLGdCOzs7Ozs7Ozs7Ozt5Q0FDaUJDLFcsRUFBYTtBQUNoQyxVQUFNQyxVQUFVRCxXQUFoQjtBQUFBLFVBQThCO0FBQ3hCRSxtSkFBK0JELE9BQS9CLENBRE47O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7Z0NBRWtCUCxPLEVBQVM7QUFDMUIsVUFBTVEsUUFBUU4sTUFBTU8sV0FBTixDQUFrQlQsT0FBbEIsQ0FBZDtBQUFBLFVBQ01VLG1CQUFtQixJQUFJTixnQkFBSixDQUFxQkksS0FBckIsRUFBNEJWLElBQTVCLENBRHpCOztBQUdBLGFBQU9ZLGdCQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsbUJBQW1CTixpQkFBaUJLLFdBQWpCLENBQTZCVCxPQUE3QixDQUF6Qjs7QUFFQSxhQUFPVSxnQkFBUDtBQUNEOzs7O0VBbkI0QlAsVzs7QUFzQi9CUSxPQUFPQyxPQUFQLEdBQWlCUixnQkFBakI7O0FBRUFBLGlCQUFpQkosT0FBakIsR0FBMkJBLE9BQTNCOztBQUVBSSxpQkFBaUJILGNBQWpCLEdBQWtDQSxjQUFsQyIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEV4dGVuZGVkQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBleHRlbmRlZEJORiwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgZXh0ZW5kZWRCTkZMZXhlciA9IG5ldyBFeHRlbmRlZEJORkxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZXh0ZW5kZWRCTkZMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBleHRlbmRlZEJORkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRlZEJORkxleGVyO1xyXG5cclxuRXh0ZW5kZWRCTkZMZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuXHJcbkV4dGVuZGVkQk5GTGV4ZXIuc3BlY2lhbFN5bWJvbHMgPSBzcGVjaWFsU3ltYm9scztcclxuIl19