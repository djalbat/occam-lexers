"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var EntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(EntriesTextarea, Textarea);
    function EntriesTextarea() {
        _classCallCheck(this, EntriesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntriesTextarea).apply(this, arguments));
    }
    _createClass(EntriesTextarea, [
        {
            key: "getEntries",
            value: function getEntries() {
                var value = this.getValue(), entries = JSON.parse(value);
                return entries;
            }
        },
        {
            key: "setEntries",
            value: function setEntries(entries) {
                var value = JSON.stringify(entries, null, "  ");
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getEntries = this.getEntries.bind(this), setEntries = this.setEntries.bind(this);
                return {
                    getEntries: getEntries,
                    setEntries: setEntries
                };
            }
        }
    ]);
    return EntriesTextarea;
}(_textarea.default);
_defineProperty(EntriesTextarea, "defaultProperties", {
    className: "entries",
    spellCheck: "false"
});
exports.default = EntriesTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWIsZUFBZTtjQUFmLGVBQWU7YUFBZixlQUFlOzhCQUFmLGVBQWU7Z0VBQWYsZUFBZTs7aUJBQWYsZUFBZTs7WUFDbEMsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDLEtBQUssUUFBUSxRQUFRLElBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7dUJBRXpCLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRSxFQUFJO3FCQUUzQyxRQUFRLENBQUMsS0FBSztZQUNyQixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsVUFBVSxRQUFRLFVBQVUsQ0FBQyxJQUFJLFFBQ2pDLFVBQVUsUUFBUSxVQUFVLENBQUMsSUFBSTs7b0JBR3JDLFVBQVUsRUFBVixVQUFVO29CQUNWLFVBQVUsRUFBVixVQUFVOztZQUVkLENBQUM7OztXQXRCa0IsZUFBZTtFQUZmLFNBQWE7Z0JBRWIsZUFBZSxHQXdCM0IsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxPQUFTO0lBQ3BCLFVBQVUsR0FBRSxLQUFPOztrQkExQkYsZUFBZSJ9