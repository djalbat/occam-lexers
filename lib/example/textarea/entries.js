"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EntriesTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var EntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(EntriesTextarea, Textarea);
    var _super = _create_super(EntriesTextarea);
    function EntriesTextarea() {
        _class_call_check(this, EntriesTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(EntriesTextarea, [
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
_define_property(EntriesTextarea, "defaultProperties", {
    className: "entries",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2VudHJpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRW50cmllc1RleHRhcmVhIiwiZ2V0RW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJlbnRyaWVzIiwiSlNPTiIsInBhcnNlIiwic2V0RW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0o7Z0JBRTNCLE9BQU9FO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsT0FBTyxFQUFFO2dCQUNsQixJQUFNRixRQUFRRyxLQUFLRyxTQUFTLENBQUNKLFNBQVMsSUFBSSxFQUFFO2dCQUU1QyxJQUFJLENBQUNLLFFBQVEsQ0FBQ1A7WUFDaEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1ULGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNVLElBQUksQ0FBQyxJQUFJLEdBQ3RDSixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxJQUFJLENBQUMsSUFBSTtnQkFFNUMsT0FBUTtvQkFDTlYsWUFBQUE7b0JBQ0FNLFlBQUFBO2dCQUNGO1lBQ0Y7OztXQXRCbUJQO0VBQXdCWSxpQkFBUTtBQXdCbkQsaUJBeEJtQlosaUJBd0JaYSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=