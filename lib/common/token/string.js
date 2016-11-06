'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var StringToken = function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  function StringToken(content, line) {
    _classCallCheck(this, StringToken);

    var type = SignificantToken.types.string;

    return _possibleConstructorReturn(this, (StringToken.__proto__ || Object.getPrototypeOf(StringToken)).call(this, content, line, type));
  }

  _createClass(StringToken, [{
    key: 'clone',
    value: function clone() {
      return _get(StringToken.prototype.__proto__ || Object.getPrototypeOf(StringToken.prototype), 'clone', this).call(this, StringToken);
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var stringToken = null,
          matches = content.match(/("[^"]*")/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        stringToken = new StringToken(content, line);
      }

      return stringToken;
    }
  }]);

  return StringToken;
}(SignificantToken);

module.exports = StringToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc3RyaW5nLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiU3RyaW5nVG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJ0eXBlcyIsInN0cmluZyIsInBvc2l0aW9uIiwic2VhcmNoIiwic3RyaW5nVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLFc7OztBQUNKLHVCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixRQUFJQyxPQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCQyxNQUFsQzs7QUFEeUIscUhBR25CSixPQUhtQixFQUdWQyxJQUhVLEVBR0pDLElBSEk7QUFJMUI7Ozs7NEJBRVE7QUFBRSw2SEFBbUJILFdBQW5CO0FBQWtDOzs7NkJBRTdCQyxPLEVBQVM7QUFDdkIsVUFBSUssV0FBV0wsUUFBUU0sTUFBUixDQUFlLFNBQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBU0MsSSxFQUFNO0FBQ2hDLFVBQUlNLGNBQWMsSUFBbEI7QUFBQSxVQUNJQyxVQUFVUixRQUFRUyxLQUFSLENBQWMsV0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUFSLGtCQUFVVSxVQUFWLENBSFcsQ0FHVzs7QUFFdEJILHNCQUFjLElBQUlSLFdBQUosQ0FBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixDQUFkO0FBQ0Q7O0FBRUQsYUFBT00sV0FBUDtBQUNEOzs7O0VBNUJ1QlYsZ0I7O0FBK0IxQmUsT0FBT0MsT0FBUCxHQUFpQmQsV0FBakI7O0FBRUEsU0FBU1ksS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuc3RyaW5nO1xuICAgIFxuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICB9XG5cbiAgY2xvbmUgKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXCJbXlwiXSpcIi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RyaW5nVG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFwiW15cIl0qXCIpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdHJpbmdUb2tlbiA9IG5ldyBTdHJpbmdUb2tlbihjb250ZW50LCBsaW5lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZ1Rva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19