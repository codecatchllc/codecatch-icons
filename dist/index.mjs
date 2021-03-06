var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Account.tsx
import * as React from "react";
function AccountIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Account Icon",
    "data-testid": "codecatch-AccountIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  })));
}
var Account_default = AccountIcon;

// src/Branch.tsx
import * as React2 from "react";
function BranchIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Branch Icon",
    "data-testid": "codecatch-BranchIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React2.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React2.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
  })));
}
var Branch_default = BranchIcon;

// src/Check.tsx
import * as React3 from "react";
function CheckIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Check Icon",
    "data-testid": "codecatch-CheckIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React3.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React3.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
  })));
}
var Check_default = CheckIcon;

// src/Checklist.tsx
import * as React4 from "react";
function ChecklistIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Checklist Icon",
    "data-testid": "codecatch-ChecklistIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React4.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React4.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z"
  })));
}
var Checklist_default = ChecklistIcon;

// src/ChevronDown.tsx
import * as React5 from "react";
function ChevronDownIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Chevron Down Icon",
    "data-testid": "codecatch-ChevronDownIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React5.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React5.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
  })));
}
var ChevronDown_default = ChevronDownIcon;

// src/ChevronLeft.tsx
import * as React6 from "react";
function ChevronLeftIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Chevron Left Icon",
    "data-testid": "codecatch-ChevronLeftIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React6.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React6.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React6.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React6.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
  })));
}
var ChevronLeft_default = ChevronLeftIcon;

// src/ChevronRight.tsx
import * as React7 from "react";
function ChevronRightIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Chevron Right Icon",
    "data-testid": "codecatch-ChevronRightIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React7.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React7.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React7.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React7.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React7.createElement("path", {
    d: "m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
  })));
}
var ChevronRight_default = ChevronRightIcon;

// src/Close.tsx
import * as React8 from "react";
function CloseIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Close Icon",
    "data-testid": "codecatch-CloseIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React8.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React8.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React8.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React8.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React8.createElement("path", {
    d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
  })));
}
var Close_default = CloseIcon;

// src/CopyCode.tsx
import * as React9 from "react";
function CopyCodeIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Copy Code Icon",
    "data-testid": "codecatch-CopyCodeIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React9.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React9.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React9.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React9.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React9.createElement("path", {
    d: "m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
  })));
}
var CopyCode_default = CopyCodeIcon;

// src/CopyLink.tsx
import * as React10 from "react";
function CopyLinkIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Copy Link Icon",
    "data-testid": "codecatch-CopyLinkIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React10.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React10.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React10.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React10.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React10.createElement("path", {
    d: "m13.06 8.11 1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"
  })));
}
var CopyLink_default = CopyLinkIcon;

// src/Delete.tsx
import * as React11 from "react";
function DeleteIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Delete Icon",
    "data-testid": "codecatch-DeleteIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React11.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React11.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React11.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React11.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"
  })));
}
var Delete_default = DeleteIcon;

// src/Discord.tsx
import * as React12 from "react";
function DiscordIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Discord Icon",
    "data-testid": "codecatch-DiscordIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React12.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React12.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React12.createElement("path", {
    d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z",
    stroke: "none"
  }));
}
var Discord_default = DiscordIcon;

// src/Download.tsx
import * as React13 from "react";
function DownloadIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Download Icon",
    "data-testid": "codecatch-DownloadIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React13.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React13.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React13.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React13.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React13.createElement("path", {
    d: "M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"
  })));
}
var Download_default = DownloadIcon;

// src/Edit.tsx
import * as React14 from "react";
function EditIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Edit Icon",
    "data-testid": "codecatch-EditIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React14.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React14.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React14.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React14.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React14.createElement("path", {
    d: "M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
  })));
}
var Edit_default = EditIcon;

// src/Eye.tsx
import * as React15 from "react";
function EyeIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Eye Icon",
    "data-testid": "codecatch-EyeIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React15.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React15.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React15.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React15.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React15.createElement("path", {
    d: "M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
  })));
}
var Eye_default = EyeIcon;

// src/EyeOff.tsx
import * as React16 from "react";
function EyeOffIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Eye Off Icon",
    "data-testid": "codecatch-EyeOffIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React16.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React16.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React16.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React16.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React16.createElement("path", {
    d: "M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"
  })));
}
var EyeOff_default = EyeOffIcon;

// src/Filter.tsx
import * as React17 from "react";
function FilterIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Filter Icon",
    "data-testid": "codecatch-FilterIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React17.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React17.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React17.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React17.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React17.createElement("path", {
    d: "M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5 12 13.394 17.596 5H6.404z"
  })));
}
var Filter_default = FilterIcon;

// src/GitHub.tsx
import * as React18 from "react";
function GitHubIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Git Hub Icon",
    "data-testid": "codecatch-GitHubIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React18.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React18.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React18.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React18.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React18.createElement("path", {
    d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
  })));
}
var GitHub_default = GitHubIcon;

// src/GoBack.tsx
import * as React19 from "react";
function GoBackIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Go Back Icon",
    "data-testid": "codecatch-GoBackIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React19.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React19.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React19.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React19.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React19.createElement("path", {
    d: "M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z"
  })));
}
var GoBack_default = GoBackIcon;

// src/Info.tsx
import * as React20 from "react";
function InfoIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Info Icon",
    "data-testid": "codecatch-InfoIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React20.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React20.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React20.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React20.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React20.createElement("path", {
    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
  })));
}
var Info_default = InfoIcon;

// src/InfoFill.tsx
import * as React21 from "react";
function InfoFillIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Info Fill Icon",
    "data-testid": "codecatch-InfoFillIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React21.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React21.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React21.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React21.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React21.createElement("path", {
    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"
  })));
}
var InfoFill_default = InfoFillIcon;

// src/Lock.tsx
import * as React22 from "react";
function LockIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Lock Icon",
    "data-testid": "codecatch-LockIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React22.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React22.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React22.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React22.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React22.createElement("path", {
    d: "M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z"
  })));
}
var Lock_default = LockIcon;

// src/Login.tsx
import * as React23 from "react";
function LoginIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Login Icon",
    "data-testid": "codecatch-LoginIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React23.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React23.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React23.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React23.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React23.createElement("path", {
    d: "M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
  })));
}
var Login_default = LoginIcon;

// src/Logout.tsx
import * as React24 from "react";
function LogoutIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Logout Icon",
    "data-testid": "codecatch-LogoutIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React24.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React24.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React24.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React24.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React24.createElement("path", {
    d: "M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"
  })));
}
var Logout_default = LogoutIcon;

// src/Menu.tsx
import * as React25 from "react";
function MenuIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Menu Icon",
    "data-testid": "codecatch-MenuIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React25.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React25.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React25.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React25.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
  })));
}
var Menu_default = MenuIcon;

// src/Moon.tsx
import * as React26 from "react";
function MoonIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Moon Icon",
    "data-testid": "codecatch-MoonIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React26.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React26.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React26.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React26.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React26.createElement("path", {
    d: "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
  })));
}
var Moon_default = MoonIcon;

// src/More.tsx
import * as React27 from "react";
function MoreIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "More Icon",
    "data-testid": "codecatch-MoreIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React27.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React27.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React27.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React27.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React27.createElement("path", {
    d: "M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  })));
}
var More_default = MoreIcon;

// src/Palette.tsx
import * as React28 from "react";
function PaletteIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Palette Icon",
    "data-testid": "codecatch-PaletteIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React28.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React28.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React28.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React28.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React28.createElement("path", {
    d: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  })));
}
var Palette_default = PaletteIcon;

// src/Profile.tsx
import * as React29 from "react";
function ProfileIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Profile Icon",
    "data-testid": "codecatch-ProfileIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React29.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React29.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React29.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React29.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
  })));
}
var Profile_default = ProfileIcon;

// src/Save.tsx
import * as React30 from "react";
function SaveIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Save Icon",
    "data-testid": "codecatch-SaveIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React30.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React30.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React30.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React30.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M7 19v-6h10v6h2V7.828L16.172 5H5v14h2zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 12v4h6v-4H9z"
  })));
}
var Save_default = SaveIcon;

// src/Search.tsx
import * as React31 from "react";
function SearchIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Search Icon",
    "data-testid": "codecatch-SearchIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React31.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React31.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React31.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React31.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React31.createElement("path", {
    d: "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
  })));
}
var Search_default = SearchIcon;

// src/Settings.tsx
import * as React32 from "react";
function SettingsIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Settings Icon",
    "data-testid": "codecatch-SettingsIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React32.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React32.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React32.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React32.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React32.createElement("path", {
    d: "M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1.001-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.945 9.945 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001zM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.201-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a7.935 7.935 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.935 7.935 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262a6.932 6.932 0 0 0-.297.297c.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  })));
}
var Settings_default = SettingsIcon;

// src/SignUp.tsx
import * as React33 from "react";
function SignUpIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Sign Up Icon",
    "data-testid": "codecatch-SignUpIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React33.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React33.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React33.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React33.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React33.createElement("path", {
    d: "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
  })));
}
var SignUp_default = SignUpIcon;

// src/Sun.tsx
import * as React34 from "react";
function SunIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Sun Icon",
    "data-testid": "codecatch-SunIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React34.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React34.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React34.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React34.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React34.createElement("path", {
    d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
  })));
}
var Sun_default = SunIcon;

// src/Upload.tsx
import * as React35 from "react";
function UploadIcon(_a) {
  var _b = _a, {
    title,
    titleId,
    size = 24,
    color = "#F8F9FA",
    className
  } = _b, rest = __objRest(_b, [
    "title",
    "titleId",
    "size",
    "color",
    "className"
  ]);
  const classNames = ["codecatch-Icon", className];
  const props = __spreadValues(__spreadValues({}, {
    role: "img",
    alt: "Upload Icon",
    "data-testid": "codecatch-UploadIcon",
    width: size,
    height: size,
    className: classNames.join(" ").trim()
  }), rest);
  return /* @__PURE__ */ React35.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    stroke: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React35.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React35.createElement("g", {
    stroke: "none"
  }, /* @__PURE__ */ React35.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"
  })));
}
var Upload_default = UploadIcon;
export {
  Account_default as AccountIcon,
  Branch_default as BranchIcon,
  Check_default as CheckIcon,
  Checklist_default as ChecklistIcon,
  ChevronDown_default as ChevronDownIcon,
  ChevronLeft_default as ChevronLeftIcon,
  ChevronRight_default as ChevronRightIcon,
  Close_default as CloseIcon,
  CopyCode_default as CopyCodeIcon,
  CopyLink_default as CopyLinkIcon,
  Delete_default as DeleteIcon,
  Discord_default as DiscordIcon,
  Download_default as DownloadIcon,
  Edit_default as EditIcon,
  Eye_default as EyeIcon,
  EyeOff_default as EyeOffIcon,
  Filter_default as FilterIcon,
  GitHub_default as GitHubIcon,
  GoBack_default as GoBackIcon,
  InfoFill_default as InfoFillIcon,
  Info_default as InfoIcon,
  Lock_default as LockIcon,
  Login_default as LoginIcon,
  Logout_default as LogoutIcon,
  Menu_default as MenuIcon,
  Moon_default as MoonIcon,
  More_default as MoreIcon,
  Palette_default as PaletteIcon,
  Profile_default as ProfileIcon,
  Save_default as SaveIcon,
  Search_default as SearchIcon,
  Settings_default as SettingsIcon,
  SignUp_default as SignUpIcon,
  Sun_default as SunIcon,
  Upload_default as UploadIcon
};
