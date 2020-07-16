Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));

var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement("button", { type: "button", onClick: onClick }, children));
};

ReactDOM.render(React.createElement(Button, null, "rendered button for dev"), document.querySelector('#root'));

exports.Button = Button;
//# sourceMappingURL=index.js.map
