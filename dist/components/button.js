import React from 'react';
import './css/button.css';
export var Button = function (_a) {
    var children = _a.children, variant = _a.variant, onClickHandler = _a.onClickHandler;
    return (React.createElement("button", { type: "button", className: "btn btn".concat(variant), onClick: onClickHandler }, children));
};
//# sourceMappingURL=button.js.map