// src/Account.tsx
import * as React from "react";
function AccountIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-AccountIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React.createElement("g", { stroke: "none" }, /* @__PURE__ */ React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-4.987-3.744A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.98 6.98 0 0 0 12.16 16a6.98 6.98 0 0 0-5.147 2.256M5.616 16.82A8.98 8.98 0 0 1 12.16 14a8.97 8.97 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }))
  );
}
var Account_default = AccountIcon;

// src/Add.tsx
import * as React2 from "react";
function AddIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-AddIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React2.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React2.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React2.createElement("path", { stroke: "none", d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" })
  );
}
var Add_default = AddIcon;

// src/BarChart.tsx
import * as React3 from "react";
function BarChartIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-BarChartIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React3.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React3.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React3.createElement("g", { stroke: "none" }, /* @__PURE__ */ React3.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React3.createElement("path", { d: "M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z" }))
  );
}
var BarChart_default = BarChartIcon;

// src/Branch.tsx
import * as React4 from "react";
function BranchIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-BranchIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React4.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React4.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React4.createElement("g", { stroke: "none" }, /* @__PURE__ */ React4.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React4.createElement("path", { d: "M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21M6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }))
  );
}
var Branch_default = BranchIcon;

// src/Check.tsx
import * as React5 from "react";
function CheckIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-CheckIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React5.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React5.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React5.createElement("g", { stroke: "none" }, /* @__PURE__ */ React5.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React5.createElement("path", { d: "m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" }))
  );
}
var Check_default = CheckIcon;

// src/Checklist.tsx
import * as React6 from "react";
function ChecklistIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ChecklistIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React6.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React6.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React6.createElement("g", { stroke: "none" }, /* @__PURE__ */ React6.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React6.createElement("path", { d: "M11 4h10v2H11zm0 4h6v2h-6zm0 6h10v2H11zm0 4h6v2h-6zM3 4h6v6H3zm2 2v2h2V6zm-2 8h6v6H3zm2 2v2h2v-2z" }))
  );
}
var Checklist_default = ChecklistIcon;

// src/ChevronDown.tsx
import * as React7 from "react";
function ChevronDownIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ChevronDownIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React7.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React7.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React7.createElement("g", { stroke: "none" }, /* @__PURE__ */ React7.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React7.createElement("path", { d: "m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" }))
  );
}
var ChevronDown_default = ChevronDownIcon;

// src/ChevronLeft.tsx
import * as React8 from "react";
function ChevronLeftIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ChevronLeftIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React8.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React8.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React8.createElement("g", { stroke: "none" }, /* @__PURE__ */ React8.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React8.createElement("path", { d: "m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" }))
  );
}
var ChevronLeft_default = ChevronLeftIcon;

// src/ChevronRight.tsx
import * as React9 from "react";
function ChevronRightIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ChevronRightIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React9.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React9.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React9.createElement("g", { stroke: "none" }, /* @__PURE__ */ React9.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React9.createElement("path", { d: "m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" }))
  );
}
var ChevronRight_default = ChevronRightIcon;

// src/Close.tsx
import * as React10 from "react";
function CloseIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-CloseIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React10.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React10.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React10.createElement("g", { stroke: "none" }, /* @__PURE__ */ React10.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React10.createElement("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" }))
  );
}
var Close_default = CloseIcon;

// src/Copy.tsx
import * as React11 from "react";
function CopyIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-CopyIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React11.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React11.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React11.createElement(
      "path",
      {
        stroke: "none",
        d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8 5 20h10V8zM9 6h8v10h2V4H9zm-2 5h6v2H7zm0 4h6v2H7z"
      }
    )
  );
}
var Copy_default = CopyIcon;

// src/CopyCode.tsx
import * as React12 from "react";
function CopyCodeIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-CopyCodeIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React12.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React12.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React12.createElement("g", { stroke: "none" }, /* @__PURE__ */ React12.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React12.createElement("path", { d: "m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757zm6.96 9H7.66l6.552-18h2.128z" }))
  );
}
var CopyCode_default = CopyCodeIcon;

// src/CopyLink.tsx
import * as React13 from "react";
function CopyLinkIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-CopyLinkIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React13.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React13.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React13.createElement("g", { stroke: "none" }, /* @__PURE__ */ React13.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React13.createElement("path", { d: "m13.06 8.11 1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415zm6.718 6.011-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" }))
  );
}
var CopyLink_default = CopyLinkIcon;

// src/Delete.tsx
import * as React14 from "react";
function DeleteIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-DeleteIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React14.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React14.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React14.createElement("g", { stroke: "none" }, /* @__PURE__ */ React14.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React14.createElement("path", { d: "M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4zM6 6v14h12V6zm3 3h2v8H9zm4 0h2v8h-2z" }))
  );
}
var Delete_default = DeleteIcon;

// src/Discord.tsx
import * as React15 from "react";
function DiscordIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-DiscordIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React15.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React15.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React15.createElement(
      "path",
      {
        stroke: "none",
        d: "M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"
      }
    )
  );
}
var Discord_default = DiscordIcon;

// src/Download.tsx
import * as React16 from "react";
function DownloadIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-DownloadIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React16.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React16.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React16.createElement("g", { stroke: "none" }, /* @__PURE__ */ React16.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React16.createElement("path", { d: "M3 19h18v2H3zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2z" }))
  );
}
var Download_default = DownloadIcon;

// src/Earth.tsx
import * as React17 from "react";
function EarthIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-EarthIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React17.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React17.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React17.createElement("g", { stroke: "none" }, /* @__PURE__ */ React17.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React17.createElement("path", { d: "M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.3 1.3 0 0 0-.306-.43M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" }))
  );
}
var Earth_default = EarthIcon;

// src/Edit.tsx
import * as React18 from "react";
function EditIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-EditIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React18.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React18.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React18.createElement("g", { stroke: "none" }, /* @__PURE__ */ React18.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React18.createElement("path", { d: "M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414z" }))
  );
}
var Edit_default = EditIcon;

// src/ErrorWarning.tsx
import * as React19 from "react";
function ErrorWarningIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ErrorWarningIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React19.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React19.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React19.createElement("g", { stroke: "none" }, /* @__PURE__ */ React19.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React19.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-1-5h2v2h-2zm0-8h2v6h-2z" }))
  );
}
var ErrorWarning_default = ErrorWarningIcon;

// src/ErrorWarningFill.tsx
import * as React20 from "react";
function ErrorWarningFillIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ErrorWarningFillIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React20.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React20.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React20.createElement("g", { stroke: "none" }, /* @__PURE__ */ React20.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React20.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-1-7v2h2v-2zm0-8v6h2V7z" }))
  );
}
var ErrorWarningFill_default = ErrorWarningFillIcon;

// src/Expand.tsx
import * as React21 from "react";
function ExpandIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ExpandIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React21.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React21.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React21.createElement("g", { stroke: "none" }, /* @__PURE__ */ React21.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React21.createElement("path", { d: "M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z" }))
  );
}
var Expand_default = ExpandIcon;

// src/Eye.tsx
import * as React22 from "react";
function EyeIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-EyeIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React22.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React22.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React22.createElement("g", { stroke: "none" }, /* @__PURE__ */ React22.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React22.createElement("path", { d: "M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" }))
  );
}
var Eye_default = EyeIcon;

// src/EyeOff.tsx
import * as React23 from "react";
function EyeOffIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-EyeOffIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React23.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React23.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React23.createElement("g", { stroke: "none" }, /* @__PURE__ */ React23.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React23.createElement("path", { d: "M17.882 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a11 11 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.97 8.97 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264-1.431-1.43A8.9 8.9 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.95 10.95 0 0 1-2.012 4.592m-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" }))
  );
}
var EyeOff_default = EyeOffIcon;

// src/FileCode.tsx
import * as React24 from "react";
function FileCodeIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-FileCodeIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React24.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React24.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React24.createElement("g", { stroke: "none" }, /* @__PURE__ */ React24.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React24.createElement("path", { d: "M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415zM6.343 12 9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415z" }))
  );
}
var FileCode_default = FileCodeIcon;

// src/Filter.tsx
import * as React25 from "react";
function FilterIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-FilterIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React25.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React25.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React25.createElement("g", { stroke: "none" }, /* @__PURE__ */ React25.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React25.createElement("path", { d: "M14 14v6l-4 2v-8L4 5V3h16v2zM6.404 5 12 13.394 17.596 5z" }))
  );
}
var Filter_default = FilterIcon;

// src/Follow.tsx
import * as React26 from "react";
function FollowIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-FollowIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React26.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React26.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React26.createElement("g", { stroke: "none" }, /* @__PURE__ */ React26.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React26.createElement("path", { d: "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m5.793 8.914 3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414z" }))
  );
}
var Follow_default = FollowIcon;

// src/FullscreenExit.tsx
import * as React27 from "react";
function FullscreenExitIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-FullscreenExitIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React27.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React27.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React27.createElement(
      "path",
      {
        stroke: "none",
        d: "M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z"
      }
    )
  );
}
var FullscreenExit_default = FullscreenExitIcon;

// src/GitHub.tsx
import * as React28 from "react";
function GitHubIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-GitHubIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React28.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React28.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React28.createElement("g", { stroke: "none" }, /* @__PURE__ */ React28.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React28.createElement("path", { d: "M12 2C6.475 2 2 6.475 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.3 9.3 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" }))
  );
}
var GitHub_default = GitHubIcon;

// src/GoBack.tsx
import * as React29 from "react";
function GoBackIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-GoBackIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React29.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React29.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React29.createElement("g", { stroke: "none" }, /* @__PURE__ */ React29.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React29.createElement("path", { d: "M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12z" }))
  );
}
var GoBack_default = GoBackIcon;

// src/Google.tsx
import * as React30 from "react";
function GoogleIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-GoogleIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React30.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React30.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React30.createElement("g", { stroke: "none" }, /* @__PURE__ */ React30.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React30.createElement("path", { d: "M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49" }))
  );
}
var Google_default = GoogleIcon;

// src/Group.tsx
import * as React31 from "react";
function GroupIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-GroupIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React31.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React31.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React31.createElement(
      "path",
      {
        stroke: "none",
        d: "M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      }
    )
  );
}
var Group_default = GroupIcon;

// src/Info.tsx
import * as React32 from "react";
function InfoIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-InfoIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React32.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React32.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React32.createElement("g", { stroke: "none" }, /* @__PURE__ */ React32.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React32.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16M11 7h2v2h-2zm0 4h2v6h-2z" }))
  );
}
var Info_default = InfoIcon;

// src/InfoFill.tsx
import * as React33 from "react";
function InfoFillIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-InfoFillIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React33.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React33.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React33.createElement("g", { stroke: "none" }, /* @__PURE__ */ React33.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React33.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-1-11v6h2v-6zm0-4v2h2V7z" }))
  );
}
var InfoFill_default = InfoFillIcon;

// src/Linkedin.tsx
import * as React34 from "react";
function LinkedinIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-LinkedinIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React34.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React34.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React34.createElement(
      "path",
      {
        stroke: "none",
        d: "M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406c0 .717.594 1.297 1.328 1.297h15.339C20.4 21 21 20.42 21 19.703V4.297c0-.716-.6-1.297-1.334-1.297z"
      }
    )
  );
}
var Linkedin_default = LinkedinIcon;

// src/Lock.tsx
import * as React35 from "react";
function LockIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-LockIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React35.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React35.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React35.createElement("g", { stroke: "none" }, /* @__PURE__ */ React35.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React35.createElement("path", { d: "M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm13 2H5v10h14zm-8 5.732a2 2 0 1 1 2 0V18h-2zM8 8h8V7a4 4 0 1 0-8 0z" }))
  );
}
var Lock_default = LockIcon;

// src/Login.tsx
import * as React36 from "react";
function LoginIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-LoginIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React36.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React36.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React36.createElement("g", { stroke: "none" }, /* @__PURE__ */ React36.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React36.createElement("path", { d: "M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4V8l5 4-5 4v-3H2v-2z" }))
  );
}
var Login_default = LoginIcon;

// src/Logout.tsx
import * as React37 from "react";
function LogoutIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-LogoutIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React37.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React37.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React37.createElement("g", { stroke: "none" }, /* @__PURE__ */ React37.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React37.createElement("path", { d: "M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4 5-4z" }))
  );
}
var Logout_default = LogoutIcon;

// src/Menu.tsx
import * as React38 from "react";
function MenuIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-MenuIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React38.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React38.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React38.createElement("g", { stroke: "none" }, /* @__PURE__ */ React38.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React38.createElement("path", { d: "M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" }))
  );
}
var Menu_default = MenuIcon;

// src/Moon.tsx
import * as React39 from "react";
function MoonIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-MoonIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React39.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React39.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React39.createElement("g", { stroke: "none" }, /* @__PURE__ */ React39.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React39.createElement("path", { d: "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 8 8 0 0 0 4 12" }))
  );
}
var Moon_default = MoonIcon;

// src/More.tsx
import * as React40 from "react";
function MoreIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-MoreIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React40.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React40.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React40.createElement("g", { stroke: "none" }, /* @__PURE__ */ React40.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React40.createElement("path", { d: "M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" }))
  );
}
var More_default = MoreIcon;

// src/Palette.tsx
import * as React41 from "react";
function PaletteIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-PaletteIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React41.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React41.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React41.createElement("g", { stroke: "none" }, /* @__PURE__ */ React41.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React41.createElement("path", { d: "M12 2c5.522 0 10 3.978 10 8.889a5.56 5.56 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2m-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.56 3.56 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.65 3.65 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" }))
  );
}
var Palette_default = PaletteIcon;

// src/Play.tsx
import * as React42 from "react";
function PlayIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-PlayIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React42.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React42.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React42.createElement(
      "path",
      {
        stroke: "none",
        d: "M9 8.482v7.036L15.03 12zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"
      }
    )
  );
}
var Play_default = PlayIcon;

// src/Profile.tsx
import * as React43 from "react";
function ProfileIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ProfileIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React43.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React43.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React43.createElement("g", { stroke: "none" }, /* @__PURE__ */ React43.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React43.createElement("path", { d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm2 2h6v6H6zm2 2v2h2V9zm-2 6h12v2H6zm8-8h4v2h-4zm0 4h4v2h-4z" }))
  );
}
var Profile_default = ProfileIcon;

// src/Reddit.tsx
import * as React44 from "react";
function RedditIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-RedditIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React44.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React44.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React44.createElement(
      "path",
      {
        stroke: "none",
        d: "M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m6.67-10a1.46 1.46 0 0 0-2.47-1 7.1 7.1 0 0 0-3.85-1.23l.65-3.12 2.14.45a1 1 0 1 0 .13-.61L12.821 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 3 3 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a3 3 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33m-10 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38 3.27 3.27 0 0 0 2.08.63 3.28 3.28 0 0 0 2.09-.61.28.28 0 1 1 .39.4zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04z"
      }
    )
  );
}
var Reddit_default = RedditIcon;

// src/Robot.tsx
import * as React45 from "react";
function RobotIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-RobotIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React45.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React45.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React45.createElement(
      "path",
      {
        stroke: "none",
        d: "M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M6 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6m-4 3H0v6h2zm20 0h2v6h-2zM9 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      }
    )
  );
}
var Robot_default = RobotIcon;

// src/Save.tsx
import * as React46 from "react";
function SaveIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-SaveIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React46.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React46.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React46.createElement("g", { stroke: "none" }, /* @__PURE__ */ React46.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React46.createElement("path", { d: "M7 19v-6h10v6h2V7.828L16.172 5H5v14zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 12v4h6v-4z" }))
  );
}
var Save_default = SaveIcon;

// src/Search.tsx
import * as React47 from "react";
function SearchIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-SearchIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React47.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React47.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React47.createElement("g", { stroke: "none" }, /* @__PURE__ */ React47.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React47.createElement("path", { d: "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.868-3.133-7-7-7s-7 3.132-7 7 3.132 7 7 7a6.98 6.98 0 0 0 4.875-1.975z" }))
  );
}
var Search_default = SearchIcon;

// src/Settings.tsx
import * as React48 from "react";
function SettingsIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-SettingsIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React48.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React48.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React48.createElement("g", { stroke: "none" }, /* @__PURE__ */ React48.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React48.createElement("path", { d: "M2.213 14.06a9.95 9.95 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.95 9.95 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986s1.132-1.286 1.001-2.396a9.95 9.95 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.95 9.95 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403s1.286 1.132 2.396 1.001a9.95 9.95 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.95 9.95 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986s-1.132 1.286-1.001 2.396a9.95 9.95 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.95 9.95 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403s-1.286-1.132-2.396-1.001M4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212q.144.153.297.297c.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457q.21.006.42 0c.305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262q.153-.144.297-.297c-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086q.006-.21 0-.42c-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a8 8 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a8 8 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262a7 7 0 0 0-.297.297c.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79q-.006.21 0 .42M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }))
  );
}
var Settings_default = SettingsIcon;

// src/ShareVia.tsx
import * as React49 from "react";
function ShareViaIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ShareViaIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React49.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React49.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React49.createElement(
      "path",
      {
        stroke: "none",
        d: "m13.12 17.023-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      }
    )
  );
}
var ShareVia_default = ShareViaIcon;

// src/SignUp.tsx
import * as React50 from "react";
function SignUpIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-SignUpIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React50.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React50.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React50.createElement("g", { stroke: "none" }, /* @__PURE__ */ React50.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React50.createElement("path", { d: "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" }))
  );
}
var SignUp_default = SignUpIcon;

// src/Sun.tsx
import * as React51 from "react";
function SunIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-SunIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React51.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React51.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React51.createElement("g", { stroke: "none" }, /* @__PURE__ */ React51.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React51.createElement("path", { d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z" }))
  );
}
var Sun_default = SunIcon;

// src/ThumbUp.tsx
import * as React52 from "react";
function ThumbUpIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ThumbUpIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React52.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React52.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React52.createElement("g", { stroke: "none" }, /* @__PURE__ */ React52.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React52.createElement("path", { d: "M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858M5 11H3v8h2z" }))
  );
}
var ThumbUp_default = ThumbUpIcon;

// src/ThumbUpFill.tsx
import * as React53 from "react";
function ThumbUpFillIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ThumbUpFillIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React53.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React53.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React53.createElement("g", { stroke: "none" }, /* @__PURE__ */ React53.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React53.createElement("path", { d: "M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m5.293-1.293 6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707" }))
  );
}
var ThumbUpFill_default = ThumbUpFillIcon;

// src/Unfollow.tsx
import * as React54 from "react";
function UnfollowIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-UnfollowIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React54.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React54.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React54.createElement("g", { stroke: "none" }, /* @__PURE__ */ React54.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React54.createElement("path", { d: "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m7 6.586 2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415z" }))
  );
}
var Unfollow_default = UnfollowIcon;

// src/Upload.tsx
import * as React55 from "react";
function UploadIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-UploadIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React55.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      stroke: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React55.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React55.createElement("g", { stroke: "none" }, /* @__PURE__ */ React55.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React55.createElement("path", { d: "M3 19h18v2H3zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z" }))
  );
}
var Upload_default = UploadIcon;

// src/X.tsx
import * as React56 from "react";
function XIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-XIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim()
    },
    ...rest
  };
  return /* @__PURE__ */ React56.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      viewBox: "0 0 396 396",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ React56.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ React56.createElement("path", { d: "M301.026 37.125h54.582l-119.246 136.29 140.283 185.46h-109.84l-86.031-112.48-98.439 112.48H27.72l127.545-145.777L20.691 37.125H133.32l77.764 102.812zm-19.157 289.08h30.245L116.886 68.079H84.431z" })
  );
}
var X_default = XIcon;
export {
  Account_default as AccountIcon,
  Add_default as AddIcon,
  BarChart_default as BarChartIcon,
  Branch_default as BranchIcon,
  Check_default as CheckIcon,
  Checklist_default as ChecklistIcon,
  ChevronDown_default as ChevronDownIcon,
  ChevronLeft_default as ChevronLeftIcon,
  ChevronRight_default as ChevronRightIcon,
  Close_default as CloseIcon,
  CopyCode_default as CopyCodeIcon,
  Copy_default as CopyIcon,
  CopyLink_default as CopyLinkIcon,
  Delete_default as DeleteIcon,
  Discord_default as DiscordIcon,
  Download_default as DownloadIcon,
  Earth_default as EarthIcon,
  Edit_default as EditIcon,
  ErrorWarningFill_default as ErrorWarningFillIcon,
  ErrorWarning_default as ErrorWarningIcon,
  Expand_default as ExpandIcon,
  Eye_default as EyeIcon,
  EyeOff_default as EyeOffIcon,
  FileCode_default as FileCodeIcon,
  Filter_default as FilterIcon,
  Follow_default as FollowIcon,
  FullscreenExit_default as FullscreenExitIcon,
  GitHub_default as GitHubIcon,
  GoBack_default as GoBackIcon,
  Google_default as GoogleIcon,
  Group_default as GroupIcon,
  InfoFill_default as InfoFillIcon,
  Info_default as InfoIcon,
  Linkedin_default as LinkedinIcon,
  Lock_default as LockIcon,
  Login_default as LoginIcon,
  Logout_default as LogoutIcon,
  Menu_default as MenuIcon,
  Moon_default as MoonIcon,
  More_default as MoreIcon,
  Palette_default as PaletteIcon,
  Play_default as PlayIcon,
  Profile_default as ProfileIcon,
  Reddit_default as RedditIcon,
  Robot_default as RobotIcon,
  Save_default as SaveIcon,
  Search_default as SearchIcon,
  Settings_default as SettingsIcon,
  ShareVia_default as ShareViaIcon,
  SignUp_default as SignUpIcon,
  Sun_default as SunIcon,
  ThumbUpFill_default as ThumbUpFillIcon,
  ThumbUp_default as ThumbUpIcon,
  Unfollow_default as UnfollowIcon,
  Upload_default as UploadIcon,
  X_default as XIcon
};
