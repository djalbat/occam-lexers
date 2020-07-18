"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _significant = _interopRequireDefault(require("../common/token/significant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var Rule = /*#__PURE__*/function () {
  function Rule(type, regularExpression) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getRegularExpression",
    value: function getRegularExpression() {
      return this.regularExpression;
    }
  }, {
    key: "match",
    value: function match(content) {
      var significantToken = null;
      var matches = content.match(this.regularExpression);

      if (matches !== null) {
        var index = matches.index;

        if (index === 0) {
          var firstMatch = first(matches);
          content = firstMatch; ///

          var contentLength = content.length;

          if (contentLength > 0) {
            significantToken = _significant["default"].fromContentAndType(content, this.type);
          }
        }
      }

      return significantToken;
    }
  }, {
    key: "asEntry",
    value: function asEntry() {
      var entry = {},
          regularExpressionPattern = "".concat(this.regularExpression);
      entry[this.type] = regularExpressionPattern;
      return entry;
    }
  }], [{
    key: "fromToken",
    value: function fromToken(Token) {
      var type = Token.type,
          regularExpression = Token.regularExpression,
          rule = new Rule(type, regularExpression);
      return rule;
    }
  }, {
    key: "fromEntry",
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          type = firstEntryKey,
          ///
      regularExpressionPattern = entry[type],
          rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
      return rule;
    }
  }, {
    key: "fromTypeAndRegularExpressionPattern",
    value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
      var unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? "u" : "",
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(type, regularExpression);
      return rule;
    }
  }]);

  return Rule;
}();

exports["default"] = Rule;

function isUnicode(regularExpressionPattern) {
  var unicodeRegularExpression = /u{/,
      ///
  index = regularExpressionPattern.search(unicodeRegularExpression),
      unicode = index !== -1;
  return unicode;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoZXMiLCJtYXRjaCIsImluZGV4IiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwiZW50cnkiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJUb2tlbiIsInJ1bGUiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsImZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwidW5pY29kZSIsImlzVW5pY29kZSIsImZsYWdzIiwicmVnRXhwIiwiUmVnRXhwIiwidW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsaUJBQWxCLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRDs7OzBCQUVLQyxPLEVBQVM7QUFDYixVQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUVBLFVBQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxLQUFSLENBQWMsS0FBS0osaUJBQW5CLENBQWhCOztBQUVBLFVBQUlHLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUFBLFlBQ1pFLEtBRFksR0FDRkYsT0FERSxDQUNaRSxLQURZOztBQUdwQixZQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGNBQU1DLFVBQVUsR0FBR1YsS0FBSyxDQUFDTyxPQUFELENBQXhCO0FBRUFGLFVBQUFBLE9BQU8sR0FBR0ssVUFBVixDQUhlLENBR087O0FBRXRCLGNBQU1DLGFBQWEsR0FBR04sT0FBTyxDQUFDTyxNQUE5Qjs7QUFFQSxjQUFJRCxhQUFhLEdBQUcsQ0FBcEIsRUFBdUI7QUFDckJMLFlBQUFBLGdCQUFnQixHQUFHTyx3QkFBaUJDLGtCQUFqQixDQUFvQ1QsT0FBcEMsRUFBNkMsS0FBS0YsSUFBbEQsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0csZ0JBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTVMsS0FBSyxHQUFHLEVBQWQ7QUFBQSxVQUNNQyx3QkFBd0IsYUFBTSxLQUFLWixpQkFBWCxDQUQ5QjtBQUdBVyxNQUFBQSxLQUFLLENBQUMsS0FBS1osSUFBTixDQUFMLEdBQW1CYSx3QkFBbkI7QUFFQSxhQUFPRCxLQUFQO0FBQ0Q7Ozs4QkFFZ0JFLEssRUFBTztBQUFBLFVBQ2RkLElBRGMsR0FDY2MsS0FEZCxDQUNkZCxJQURjO0FBQUEsVUFDUkMsaUJBRFEsR0FDY2EsS0FEZCxDQUNSYixpQkFEUTtBQUFBLFVBRWhCYyxJQUZnQixHQUVULElBQUloQixJQUFKLENBQVNDLElBQVQsRUFBZUMsaUJBQWYsQ0FGUztBQUl0QixhQUFPYyxJQUFQO0FBQ0Q7Ozs4QkFFZ0JILEssRUFBTztBQUN0QixVQUFNSSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixLQUFaLENBQWxCO0FBQUEsVUFDTU8sYUFBYSxHQUFHdEIsS0FBSyxDQUFDbUIsU0FBRCxDQUQzQjtBQUFBLFVBRU1oQixJQUFJLEdBQUdtQixhQUZiO0FBQUEsVUFFNEI7QUFDdEJOLE1BQUFBLHdCQUF3QixHQUFHRCxLQUFLLENBQUNaLElBQUQsQ0FIdEM7QUFBQSxVQUlNZSxJQUFJLEdBQUdoQixJQUFJLENBQUNxQixtQ0FBTCxDQUF5Q3BCLElBQXpDLEVBQStDYSx3QkFBL0MsQ0FKYjtBQU1BLGFBQU9FLElBQVA7QUFDRDs7O3dEQUUwQ2YsSSxFQUFNYSx3QixFQUEwQjtBQUN6RSxVQUFNUSxPQUFPLEdBQUdDLFNBQVMsQ0FBQ1Qsd0JBQUQsQ0FBekI7QUFBQSxVQUNNVSxLQUFLLEdBQUdGLE9BQU8sR0FBRyxHQUFILEdBQVMsRUFEOUI7QUFBQSxVQUVNRyxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXWix3QkFBWCxFQUFxQ1UsS0FBckMsQ0FGZjtBQUFBLFVBR010QixpQkFBaUIsR0FBR3VCLE1BSDFCO0FBQUEsVUFHa0M7QUFDNUJULE1BQUFBLElBQUksR0FBRyxJQUFJaEIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGlCQUFmLENBSmI7QUFNQSxhQUFPYyxJQUFQO0FBQ0Q7Ozs7Ozs7O0FBR0gsU0FBU08sU0FBVCxDQUFtQlQsd0JBQW5CLEVBQTZDO0FBQzNDLE1BQU1hLHdCQUF3QixHQUFHLElBQWpDO0FBQUEsTUFBdUM7QUFDakNwQixFQUFBQSxLQUFLLEdBQUdPLHdCQUF3QixDQUFDYyxNQUF6QixDQUFnQ0Qsd0JBQWhDLENBRGQ7QUFBQSxNQUVNTCxPQUFPLEdBQUlmLEtBQUssS0FBSyxDQUFDLENBRjVCO0FBSUEsU0FBT2UsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcmVndWxhckV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoKGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHRoaXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgYXNFbnRyeSgpIHtcbiAgICBjb25zdCBlbnRyeSA9IHt9LFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGAke3RoaXMucmVndWxhckV4cHJlc3Npb259YDtcblxuICAgIGVudHJ5W3RoaXMudHlwZV0gPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyBcInVcIiA6IFwiXCIsXG4gICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cCwgLy8vXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgdW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uID0gL3V7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iXX0=