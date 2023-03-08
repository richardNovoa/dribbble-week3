"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextInput = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-input"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "paragraph"
  }, props.placeholder), /*#__PURE__*/_react.default.createElement("i", {
    className: props.iconRight
  }));
};
var _default = TextInput;
exports.default = _default;