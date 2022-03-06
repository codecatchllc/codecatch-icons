import * as React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function AccountIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" })));
}

function CheckIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" })));
}

function ChecklistIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z" })));
}

function ChevronDownIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" })));
}

function ChevronLeftIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" })));
}

function ChevronRightIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" })));
}

function CloseIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" })));
}

function CopyCodeIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" })));
}

function CopyLinkIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m13.06 8.11 1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" })));
}

function DeleteIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" })));
}

function DiscordIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", viewBox: "0 0 30 23", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#fff", d: "M25.396 1.896A24.737 24.737 0 0 0 19.29.002a.093.093 0 0 0-.098.046c-.264.47-.556 1.081-.76 1.562a22.835 22.835 0 0 0-6.86 0 15.807 15.807 0 0 0-.771-1.562.096.096 0 0 0-.098-.046 24.667 24.667 0 0 0-6.107 1.894.087.087 0 0 0-.04.034C.666 7.742-.399 13.41.124 19.008a.103.103 0 0 0 .039.07 24.876 24.876 0 0 0 7.491 3.788.097.097 0 0 0 .105-.035 17.783 17.783 0 0 0 1.533-2.493.095.095 0 0 0-.052-.132 16.375 16.375 0 0 1-2.34-1.115.096.096 0 0 1-.01-.16c.157-.118.315-.24.465-.364a.093.093 0 0 1 .097-.014c4.91 2.242 10.225 2.242 15.077 0a.092.092 0 0 1 .098.012c.15.124.307.248.466.366.054.04.05.125-.008.16-.748.436-1.525.805-2.342 1.114a.096.096 0 0 0-.05.133c.45.873.964 1.704 1.53 2.492a.095.095 0 0 0 .106.036 24.793 24.793 0 0 0 7.503-3.787.096.096 0 0 0 .039-.07c.625-6.472-1.048-12.094-4.436-17.077a.077.077 0 0 0-.039-.036ZM10.025 15.6c-1.478 0-2.696-1.358-2.696-3.024 0-1.667 1.194-3.025 2.696-3.025 1.514 0 2.72 1.37 2.696 3.025 0 1.666-1.194 3.024-2.696 3.024Zm9.968 0c-1.478 0-2.696-1.358-2.696-3.024 0-1.667 1.195-3.025 2.696-3.025 1.514 0 2.72 1.37 2.697 3.025 0 1.666-1.183 3.024-2.697 3.024Z" }));
}

function EditIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" })));
}

function EyeIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" })));
}

function EyeOffIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" })));
}

function FilterIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5 12 13.394 17.596 5H6.404z" })));
}

function GitHubIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" })));
}

function GoBackIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z" })));
}

function InfoIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" })));
}

function InfoFillIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" })));
}

function LoginIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" })));
}

function LogoutIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" })));
}

function MenuIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" })));
}

function MoonIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" })));
}

function MoreIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })));
}

function PaletteIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" })));
}

function ProfileIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" })));
}

function SaveIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M7 19v-6h10v6h2V7.828L16.172 5H5v14h2zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 12v4h6v-4H9z" })));
}

function SearchIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" })));
}

function SettingsIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1.001-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.945 9.945 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001zM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.201-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a7.935 7.935 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.935 7.935 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262a6.932 6.932 0 0 0-.297.297c.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })));
}

function SignUpIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", viewBox: "0 0 24 26", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#fff", stroke: "#fff", strokeWidth: 0.5, d: "M16.389 16.912c.4.156.79.335 1.17.535a.961.961 0 1 1-.9 1.701 9.464 9.464 0 0 0-4.43-1.092c-4.568 0-8.465 3.245-9.32 7.666a.963.963 0 0 1-1.891-.365c.755-3.907 3.483-7.05 7.054-8.444a8.491 8.491 0 0 1-4.357-7.416C3.715 4.804 7.527 1 12.23 1c4.702 0 8.514 3.804 8.514 8.497a8.491 8.491 0 0 1-4.355 7.415Zm2.429-7.415c0-3.63-2.95-6.573-6.588-6.573-3.639 0-6.588 2.943-6.588 6.573 0 3.63 2.95 6.572 6.588 6.572s6.588-2.943 6.588-6.572Zm.43 11.764v-2.884a.958.958 0 0 1 .478-.831.96.96 0 0 1 .973 0 .968.968 0 0 1 .478.83v2.885h2.86a.962.962 0 1 1 0 1.924h-2.86v2.853a.958.958 0 0 1-.478.83.961.961 0 0 1-.973 0 .966.966 0 0 1-.477-.83v-2.853h-2.892a.963.963 0 1 1 0-1.924h2.892Z" }));
}

function SunIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" })));
}

function UploadIcon(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#F8F9FA", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z" })));
}

export { AccountIcon, CheckIcon, ChecklistIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, CopyCodeIcon, CopyLinkIcon, DeleteIcon, DiscordIcon, EditIcon, EyeIcon, EyeOffIcon, FilterIcon, GitHubIcon, GoBackIcon, InfoFillIcon, InfoIcon, LoginIcon, LogoutIcon, MenuIcon, MoonIcon, MoreIcon, PaletteIcon, ProfileIcon, SaveIcon, SearchIcon, SettingsIcon, SignUpIcon, SunIcon, UploadIcon };
//# sourceMappingURL=index.esm.js.map
