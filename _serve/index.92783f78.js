// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"25TcJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3a7a7fbf92783f78";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bXLqa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>// Export App & Cpx Global Objects
    (0, _config.Config));
parcelHelpers.export(exports, "DB", ()=>(0, _db.DB));
parcelHelpers.export(exports, "Cpx", ()=>(0, _cpx.Cpx));
parcelHelpers.export(exports, "ComponentRoot", ()=>// Export Components
    (0, _root.ComponentRoot));
parcelHelpers.export(exports, "ComponentNav", ()=>(0, _nav.ComponentNav));
parcelHelpers.export(exports, "PageHome", ()=>// Export Pages
    (0, _home.PageHome));
parcelHelpers.export(exports, "PageAbout", ()=>(0, _about.PageAbout));
var _config = require("./config");
var _cpx = require("./cpx");
var _db = require("../db/db");
// Components
var _root = require("./components/Root/Root");
var _nav = require("./components/Nav/Nav");
// Pages
var _home = require("./pages/home");
var _about = require("./pages/about");

},{"./config":"6Z2L1","./cpx":"dMUol","../db/db":"bjCHj","./components/Root/Root":"jFDNf","./components/Nav/Nav":"13T9Y","./pages/home":"jILT7","./pages/about":"faVIF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Z2L1":[function(require,module,exports) {
/**
 * @file config.ts
 * @description
 * This file contains the configuration for the application
 * @example
 * import { Config } from "./config";
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>Config);
const Config = {
    name: "app",
    version: "0.0.1",
    prefix: "app"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dMUol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cpx", ()=>Cpx);
var _element = require("./element");
var _element1 = require("./utils/element");
var _config = require("./config");
// PlugIns & Utilities
var _storage = require("./utils/storage");
var _state = require("./utils/state");
var _http = require("./utils/http");
var _sanitize = require("./utils/sanitize");
var _time = require("./utils/time");
var _json = require("./utils/json");
var _icons = require("./utils/icons");
var _id = require("./utils/id");
var _string = require("./utils/string");
var _copy = require("./utils/copy");
var _audio = require("./utils/audio");
var _video = require("./utils/video");
var _object = require("./utils/object");
// Cpx Utility Components
var _index = require("./components/Accordion/index");
var _index1 = require("./components/Audio/index");
var _badge = require("./components/Badge");
var _code = require("./components/Code");
var _dropDown = require("./components/DropDown");
var _slider = require("./components/Slider");
var _parse = require("./components/Parse");
var _picture = require("./components/Picture");
var _suspense = require("./components/Suspense");
var _skeleton = require("./components/Skeleton");
var _index2 = require("./components/Text/index");
var _index3 = require("./components/Tab/index");
var _video1 = require("./components/Video");
/**
 * @class Cpx
 * @description
 * This is the main class for the Cpx library.
 * It contains all the core functionality of the library.
 */ const Components = {
    AccordionGroup: // Accordion
    (0, _index.AccordionGroup),
    AccordionItem: (0, _index.AccordionItem),
    AudioPlayer: // Audio
    (0, _index1.AudioPlayer),
    AudioCurrent: (0, _index1.AudioCurrent),
    AudioPlaylist: (0, _index1.AudioPlaylist),
    AudioControls: (0, _index1.AudioControls),
    AudioControl: (0, _index1.AudioControl),
    BadgeElement: // Badge
    (0, _badge.BadgeElement),
    DropDown: // DropDown
    (0, _dropDown.DropDown),
    CodeBlock: // Code
    (0, _code.CodeBlock),
    SliderContainer: //Slider
    (0, _slider.SliderContainer),
    SliderItem: (0, _slider.SliderItem),
    ParseMarkdown: // Parse
    (0, _parse.ParseMarkdown),
    PictureElement: // Picture
    (0, _picture.PictureElement),
    SuspenseAll: // Suspense
    (0, _suspense.SuspenseAll),
    SkeletonElement: // Skeleton
    (0, _skeleton.SkeletonElement),
    TextElement: // Text
    (0, _index2.TextElement),
    TabContainer: // Tab
    (0, _index3.TabContainer),
    TabHeader: (0, _index3.TabHeader),
    TabContent: (0, _index3.TabContent),
    TabToggle: (0, _index3.TabToggle),
    VideoPlayer: // Video
    (0, _video1.VideoPlayer),
    VideoControls: (0, _video1.VideoControls),
    VideoControl: (0, _video1.VideoControl),
    VideoPlaylist: (0, _video1.VideoPlaylist),
    VideoPlaylistItem: (0, _video1.VideoPlaylistItem)
};
const Functions = {
    audioAPI: (0, _audio.audioAPI),
    videoAPI: (0, _video.videoAPI),
    sliderAPI: (0, _slider.runSlider),
    copyAPI: (0, _copy.Copy)
};
const Cpx = {
    Element: // Base Element
    (0, _element.CpxElement),
    // Utility Components
    Components,
    // API to use in UI and FrontEnd
    Functions,
    define: // Define Custom Elements
    (0, _element1.define),
    Config: // Config
    (0, _config.Config),
    State: // PlugIns & Utilities
    (0, _state.State),
    Storage: (0, _storage.Storage),
    Http: (0, _http.Http),
    Sanitize: (0, _sanitize.Sanitize),
    Time: (0, _time.Time),
    Json: (0, _json.Json),
    Icon: (0, _icons.Icon),
    Id: (0, _id.Id),
    String: (0, _string.String),
    Object: (0, _object.Object)
};

},{"./element":"7TddR","./utils/element":"hxwwf","./config":"74IoG","./utils/storage":"hcLcL","./utils/state":"eqXTg","./utils/http":"g2z9M","./utils/sanitize":"7HptL","./utils/time":"jyJao","./utils/json":"flwVA","./utils/icons":"bLiR6","./utils/id":"UhlEf","./utils/string":"8hamB","./utils/copy":"1dAm7","./utils/audio":"8K745","./utils/video":"dmuKk","./utils/object":"bshMI","./components/Accordion/index":"fVDc8","./components/Audio/index":"4F7iZ","./components/Badge":"9lAy8","./components/Code":"lX5Z0","./components/DropDown":"8vhOB","./components/Slider":"lta5S","./components/Parse":"1CUIs","./components/Picture":"gOZMd","./components/Suspense":"kLJ9V","./components/Skeleton":"1hvL3","./components/Text/index":"6N7g9","./components/Tab/index":"lwDpZ","./components/Video":"bg3EL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TddR":[function(require,module,exports) {
/**
 * @class Element
 * @extends HTMLElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 *
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxElement
 * @extends HTMLElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 * @property {any} storage - A reference to the Storage class. This is used to store data in the browser's local storage.
 * @property {any} state - A reference to the State class. This is used to store the state of the component.
 * @method {Function} reRender - A method that re-renders the component.
 * @method {Function} setInitialState - A method that sets the initial state of the component.
 * @method {Function} addClickHandler - A method that adds event listeners to the component.
 * @method {Function} render - A method that renders the component.
 * @method {Function} connectedCallback - A method that is called when the component is connected to the DOM.
 * @method {Function} render - A method that renders the component.
 * @method {Function} addClickHandler - A method that adds event listeners to the component.
 * @method {Function} connectedCallback - A method that is called when the component is connected to the DOM.
 */ parcelHelpers.export(exports, "CpxElement", ()=>CpxElement);
var _state = require("./utils/state");
var _storage = require("./utils/storage");
class CpxElement extends HTMLElement {
    constructor(){
        super();
        console.log("Connected Callback");
        this.componentName = this.setAttribute("component:name", this.tagName.toLowerCase());
        this.ID = this.getAttribute("component:id") || this.setAttribute("component:id", Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0").toString());
        this.initialContent = this.innerHTML;
        this.storage = (0, _storage.Storage);
        this.state = (0, _state.State);
    }
    reRender() {
        this.render();
    }
    /**
   * setInitialState
   * @description
   * This method sets the initial state of the component.
   * It is called when the component is connected to the DOM.
   * @param page
   * @param modalisactive
   * @param modalcontent
   */ setInitialState(page = "home") {
        if (!this.state.has("page")) document.addEventListener("DOMContentLoaded", ()=>{
            this.state.delete("page");
            this.state.set("page", page);
        });
    }
    /**
   * addEventListeners
   * @description
   * This method adds event listeners to the component.
   * It is called when the element with the correct attribute is clicked
   * @param elements
   */ addLoadHandler(elements = "*") {
    // Load things here when DOM is ready
    }
    addRenderOnClick() {
        const allElements = this.querySelectorAll("[click:render]");
        allElements.forEach((element)=>{
            element.addEventListener("click", ()=>{
                this.render();
            });
        });
    }
    addDeleteOnClick() {
        const allElements = this.querySelectorAll("[click:delete]");
        allElements.forEach((element)=>{
            element.addEventListener("click", ()=>{
                this.innerHTML = "";
                this.render();
            });
        });
    }
    /**
   * @name addClickHandler
   * @param elements
   * @description
   * This method adds event listeners to the component.
   * It is called when the element with the correct attribute is clicked
   */ addClickHandler(elements = "*") {
        // Get all elements within the component
        const allElements = this.querySelectorAll(elements);
        // Loop through each element
        allElements.forEach((element)=>{
            // Get all attributes of the current element
            const attributes = Array.from(element.attributes);
            // Loop through each attribute
            attributes.forEach((attribute)=>{
                const { name, value } = attribute;
                // Check if the attribute starts with 'click:'
                if (name.startsWith("click:")) {
                    // console.log("Attribute:", name, value);
                    // Extract the action, target (state or storage), and setter from the attribute name
                    const matchResult = name.match(/^click:(state|storage):set\s*\(([^,]+),([^)]+)\)/);
                    if (matchResult && matchResult.length === 4) {
                        const [, target, key, valueString] = matchResult;
                        // console.log("Parts:", target, key, valueString);
                        if (target === "state" || target === "storage") // console.log("Processing:", target, key, valueString);
                        // Add event listener
                        element.addEventListener("click", ()=>{
                            if (target === "state") // console.log("State Key:", key);
                            this.state.set(key.trim(), valueString.trim());
                            else if (target === "storage") // console.log("Storage Key:", key);
                            this.storage.set(key.trim(), valueString.trim());
                            const root = document.querySelectorAll(`app-root`); // NOt good, cant be sure that root is <app-root> element
                            root.forEach((root)=>{
                                root.render();
                            });
                        });
                    }
                }
            });
        });
    }
    connectedCallback() {
        this.setAttribute("id", this.ID);
        this.render();
        this.addClickHandler();
    }
    render() {
        this.innerHTML = this.initialContent;
    }
}

},{"./utils/state":"eqXTg","./utils/storage":"hcLcL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqXTg":[function(require,module,exports) {
/**
 * State is managed via the URL SearchParams API
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>State);
const State = {
    set: (key, value)=>{
        const url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.history.pushState({}, "", url);
    },
    get: (key)=>{
        const url = new URL(window.location.href);
        return url.searchParams.get(key);
    },
    has: (key)=>{
        const url = new URL(window.location.href);
        return url.searchParams.has(key);
    },
    hasNot: (key)=>{
        const url = new URL(window.location.href);
        return !url.searchParams.has(key);
    },
    delete: (key)=>{
        const url = new URL(window.location.href);
        url.searchParams.delete(key);
        window.history.pushState({}, "", url);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcLcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Storage", ()=>Storage);
const Storage = {
    Local: {
        get: (key)=>{
            return localStorage.getItem(key);
        },
        set: (key, value)=>{
            localStorage.setItem(key, value);
        },
        has: (key)=>{
            return localStorage.getItem(key) !== null;
        },
        hasNot: (key)=>{
            return localStorage.getItem(key) === null;
        }
    },
    Session: {
        get: (key)=>{
            return sessionStorage.getItem(key);
        },
        set: (key, value)=>{
            sessionStorage.setItem(key, value);
        },
        has: (key)=>{
            return sessionStorage.getItem(key) !== null;
        },
        hasNot: (key)=>{
            return sessionStorage.getItem(key) === null;
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxwwf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "define", ()=>define);
function define(element, name) {
    if (customElements.get(element) === undefined) customElements.define(element, name);
    else console.error(`Element ${element} already exists`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74IoG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>Config);
const Config = {
    name: "cpx",
    version: "2.0",
    enviroment: "dev",
    isLogging: true,
    isDebugMode: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2z9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Http", ()=>Http);
const Http = {
    fetch: async (url)=>{
        const response = await fetch(url);
        return response.json();
    },
    xhr: (url, options)=>{
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(options.method, url);
            xhr.onload = ()=>{
                if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
                else reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.onerror = ()=>{
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    },
    post: async (url, data)=>{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    },
    put: async (url, data)=>{
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    },
    delete: async (url)=>{
        const response = await fetch(url, {
            method: "DELETE"
        });
        return response.json();
    },
    patch: async (url, data)=>{
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HptL":[function(require,module,exports) {
/**
 * 
 * 
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sanitize", ()=>Sanitize);
parcelHelpers.export(exports, "Unsanitize", ()=>Unsanitize);
const Sanitize = {
    html: function(str) {
        return str.replace(/[&<>"']/g, function(match) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
            return entities[match];
        });
    },
    css: function(str) {
        return str.replace(/[^a-zA-Z0-9]/g, "\\$&");
    },
    js: function(str) {
        return str.replace(/[^a-zA-Z0-9]/g, "\\$&");
    }
};
const Unsanitize = {
    html: function(str) {
        const entities = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        };
        return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match)=>entities[match]);
    },
    css: function(str) {
        return str.replace(/\\(.)/g, "$1");
    },
    js: function(str) {
        return str.replace(/\\(.)/g, "$1");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyJao":[function(require,module,exports) {
/**
 * Time
 * @description Time utility functions
 * @example
 * Time.now;
 * Time.nowIn(-5);
 * Time.days;
 * Time.daysShort;
 * Time.months;
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Time", ()=>Time);
const Time = {
    now: new Date(),
    nowIn: function(timezone = 0) {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const nd = new Date(utc + 3600000 * timezone);
        return nd;
    },
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    daysShort: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flwVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Json", ()=>Json);
const Json = {
    stringify: function(obj) {
        return JSON.stringify(obj);
    },
    parse: function(str) {
        return JSON.parse(str);
    },
    clone: function(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    compare: function(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    },
    isEmpty: function(obj) {
        return JSON.stringify(obj) === "{}";
    },
    isNotEmpty: function(obj) {
        return JSON.stringify(obj) !== "{}";
    },
    isNull: function(obj) {
        return JSON.stringify(obj) === "null";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLiR6":[function(require,module,exports) {
/**
 * Icons
 * @description: This file contains all the icons used in the application.
 * @example
 * import { Icon } from "./utils/icons";
 * const icon = Icon.home;
 * @returns {string} - The SVG string of the home icon.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Icon", ()=>Icon);
var _homeSvg = require("bundle-text:../../assets/icons/home.svg");
var _homeSvgDefault = parcelHelpers.interopDefault(_homeSvg);
var _informationCircleSvg = require("bundle-text:../../assets/icons/information-circle.svg");
var _informationCircleSvgDefault = parcelHelpers.interopDefault(_informationCircleSvg);
var _envelopeSvg = require("bundle-text:../../assets/icons/envelope.svg");
var _envelopeSvgDefault = parcelHelpers.interopDefault(_envelopeSvg);
var _userCircleSvg = require("bundle-text:../../assets/icons/user-circle.svg");
var _userCircleSvgDefault = parcelHelpers.interopDefault(_userCircleSvg);
var _userSvg = require("bundle-text:../../assets/icons/user.svg");
var _userSvgDefault = parcelHelpers.interopDefault(_userSvg);
var _academicCapSvg = require("bundle-text:../../assets/icons/academic-cap.svg");
var _academicCapSvgDefault = parcelHelpers.interopDefault(_academicCapSvg);
var _bookOpenSvg = require("bundle-text:../../assets/icons/book-open.svg");
var _bookOpenSvgDefault = parcelHelpers.interopDefault(_bookOpenSvg);
var _briefcaseSvg = require("bundle-text:../../assets/icons/briefcase.svg");
var _briefcaseSvgDefault = parcelHelpers.interopDefault(_briefcaseSvg);
var _chartBarSvg = require("bundle-text:../../assets/icons/chart-bar.svg");
var _chartBarSvgDefault = parcelHelpers.interopDefault(_chartBarSvg);
var _clipboardSvg = require("bundle-text:../../assets/icons/clipboard.svg");
var _clipboardSvgDefault = parcelHelpers.interopDefault(_clipboardSvg);
var _codeBracketSvg = require("bundle-text:../../assets/icons/code-bracket.svg");
var _codeBracketSvgDefault = parcelHelpers.interopDefault(_codeBracketSvg);
var _cogSvg = require("bundle-text:../../assets/icons/cog.svg");
var _cogSvgDefault = parcelHelpers.interopDefault(_cogSvg);
var _circleStackSvg = require("bundle-text:../../assets/icons/circle-stack.svg");
var _circleStackSvgDefault = parcelHelpers.interopDefault(_circleStackSvg);
var _cubeSvg = require("bundle-text:../../assets/icons/cube.svg");
var _cubeSvgDefault = parcelHelpers.interopDefault(_cubeSvg);
var _banknotesSvg = require("bundle-text:../../assets/icons/banknotes.svg");
var _banknotesSvgDefault = parcelHelpers.interopDefault(_banknotesSvg);
var _currencyDollarSvg = require("bundle-text:../../assets/icons/currency-dollar.svg");
var _currencyDollarSvgDefault = parcelHelpers.interopDefault(_currencyDollarSvg);
var _currencyEuroSvg = require("bundle-text:../../assets/icons/currency-euro.svg");
var _currencyEuroSvgDefault = parcelHelpers.interopDefault(_currencyEuroSvg);
var _currencyPoundSvg = require("bundle-text:../../assets/icons/currency-pound.svg");
var _currencyPoundSvgDefault = parcelHelpers.interopDefault(_currencyPoundSvg);
var _currencyRupeeSvg = require("bundle-text:../../assets/icons/currency-rupee.svg");
var _currencyRupeeSvgDefault = parcelHelpers.interopDefault(_currencyRupeeSvg);
var _currencyYenSvg = require("bundle-text:../../assets/icons/currency-yen.svg");
var _currencyYenSvgDefault = parcelHelpers.interopDefault(_currencyYenSvg);
var _computerDesktopSvg = require("bundle-text:../../assets/icons/computer-desktop.svg");
var _computerDesktopSvgDefault = parcelHelpers.interopDefault(_computerDesktopSvg);
var _documentTextSvg = require("bundle-text:../../assets/icons/document-text.svg");
var _documentTextSvgDefault = parcelHelpers.interopDefault(_documentTextSvg);
var _exclamationCircleSvg = require("bundle-text:../../assets/icons/exclamation-circle.svg");
var _exclamationCircleSvgDefault = parcelHelpers.interopDefault(_exclamationCircleSvg);
var _exclamationTriangleSvg = require("bundle-text:../../assets/icons/exclamation-triangle.svg");
var _exclamationTriangleSvgDefault = parcelHelpers.interopDefault(_exclamationTriangleSvg);
var _shieldExclamationSvg = require("bundle-text:../../assets/icons/shield-exclamation.svg");
var _shieldExclamationSvgDefault = parcelHelpers.interopDefault(_shieldExclamationSvg);
var _arrowDownTraySvg = require("bundle-text:../../assets/icons/arrow-down-tray.svg");
var _arrowDownTraySvgDefault = parcelHelpers.interopDefault(_arrowDownTraySvg);
var _eyeSvg = require("bundle-text:../../assets/icons/eye.svg");
var _eyeSvgDefault = parcelHelpers.interopDefault(_eyeSvg);
var _arrowDownSvg = require("bundle-text:../../assets/icons/arrow-down.svg");
var _arrowDownSvgDefault = parcelHelpers.interopDefault(_arrowDownSvg);
var _arrowLeftSvg = require("bundle-text:../../assets/icons/arrow-left.svg");
var _arrowLeftSvgDefault = parcelHelpers.interopDefault(_arrowLeftSvg);
var _arrowRightSvg = require("bundle-text:../../assets/icons/arrow-right.svg");
var _arrowRightSvgDefault = parcelHelpers.interopDefault(_arrowRightSvg);
var _arrowUpSvg = require("bundle-text:../../assets/icons/arrow-up.svg");
var _arrowUpSvgDefault = parcelHelpers.interopDefault(_arrowUpSvg);
var _arrowDownRightSvg = require("bundle-text:../../assets/icons/arrow-down-right.svg");
var _arrowDownRightSvgDefault = parcelHelpers.interopDefault(_arrowDownRightSvg);
var _arrowDownLeftSvg = require("bundle-text:../../assets/icons/arrow-down-left.svg");
var _arrowDownLeftSvgDefault = parcelHelpers.interopDefault(_arrowDownLeftSvg);
var _arrowUpRightSvg = require("bundle-text:../../assets/icons/arrow-up-right.svg");
var _arrowUpRightSvgDefault = parcelHelpers.interopDefault(_arrowUpRightSvg);
var _arrowUpLeftSvg = require("bundle-text:../../assets/icons/arrow-up-left.svg");
var _arrowUpLeftSvgDefault = parcelHelpers.interopDefault(_arrowUpLeftSvg);
var _arrowLongDownSvg = require("bundle-text:../../assets/icons/arrow-long-down.svg");
var _arrowLongDownSvgDefault = parcelHelpers.interopDefault(_arrowLongDownSvg);
var _arrowLongLeftSvg = require("bundle-text:../../assets/icons/arrow-long-left.svg");
var _arrowLongLeftSvgDefault = parcelHelpers.interopDefault(_arrowLongLeftSvg);
var _arrowLongRightSvg = require("bundle-text:../../assets/icons/arrow-long-right.svg");
var _arrowLongRightSvgDefault = parcelHelpers.interopDefault(_arrowLongRightSvg);
var _arrowLongUpSvg = require("bundle-text:../../assets/icons/arrow-long-up.svg");
var _arrowLongUpSvgDefault = parcelHelpers.interopDefault(_arrowLongUpSvg);
var _arrowUturnLeftSvg = require("bundle-text:../../assets/icons/arrow-uturn-left.svg");
var _arrowUturnLeftSvgDefault = parcelHelpers.interopDefault(_arrowUturnLeftSvg);
var _arrowUturnRightSvg = require("bundle-text:../../assets/icons/arrow-uturn-right.svg");
var _arrowUturnRightSvgDefault = parcelHelpers.interopDefault(_arrowUturnRightSvg);
var _arrowUturnUpSvg = require("bundle-text:../../assets/icons/arrow-uturn-up.svg");
var _arrowUturnUpSvgDefault = parcelHelpers.interopDefault(_arrowUturnUpSvg);
var _arrowUturnDownSvg = require("bundle-text:../../assets/icons/arrow-uturn-down.svg");
var _arrowUturnDownSvgDefault = parcelHelpers.interopDefault(_arrowUturnDownSvg);
var _chevronDownSvg = require("bundle-text:../../assets/icons/chevron-down.svg");
var _chevronDownSvgDefault = parcelHelpers.interopDefault(_chevronDownSvg);
var _chevronLeftSvg = require("bundle-text:../../assets/icons/chevron-left.svg");
var _chevronLeftSvgDefault = parcelHelpers.interopDefault(_chevronLeftSvg);
var _chevronRightSvg = require("bundle-text:../../assets/icons/chevron-right.svg");
var _chevronRightSvgDefault = parcelHelpers.interopDefault(_chevronRightSvg);
var _chevronUpSvg = require("bundle-text:../../assets/icons/chevron-up.svg");
var _chevronUpSvgDefault = parcelHelpers.interopDefault(_chevronUpSvg);
var _chevronDoubleDownSvg = require("bundle-text:../../assets/icons/chevron-double-down.svg");
var _chevronDoubleDownSvgDefault = parcelHelpers.interopDefault(_chevronDoubleDownSvg);
var _chevronDoubleLeftSvg = require("bundle-text:../../assets/icons/chevron-double-left.svg");
var _chevronDoubleLeftSvgDefault = parcelHelpers.interopDefault(_chevronDoubleLeftSvg);
var _chevronDoubleRightSvg = require("bundle-text:../../assets/icons/chevron-double-right.svg");
var _chevronDoubleRightSvgDefault = parcelHelpers.interopDefault(_chevronDoubleRightSvg);
var _chevronDoubleUpSvg = require("bundle-text:../../assets/icons/chevron-double-up.svg");
var _chevronDoubleUpSvgDefault = parcelHelpers.interopDefault(_chevronDoubleUpSvg);
var _cloudArrowDownSvg = require("bundle-text:../../assets/icons/cloud-arrow-down.svg");
var _cloudArrowDownSvgDefault = parcelHelpers.interopDefault(_cloudArrowDownSvg);
var _cloudArrowUpSvg = require("bundle-text:../../assets/icons/cloud-arrow-up.svg");
var _cloudArrowUpSvgDefault = parcelHelpers.interopDefault(_cloudArrowUpSvg);
var _folderSvg = require("bundle-text:../../assets/icons/folder.svg");
var _folderSvgDefault = parcelHelpers.interopDefault(_folderSvg);
var _folderOpenSvg = require("bundle-text:../../assets/icons/folder-open.svg");
var _folderOpenSvgDefault = parcelHelpers.interopDefault(_folderOpenSvg);
var _folderPlusSvg = require("bundle-text:../../assets/icons/folder-plus.svg");
var _folderPlusSvgDefault = parcelHelpers.interopDefault(_folderPlusSvg);
var _folderMinusSvg = require("bundle-text:../../assets/icons/folder-minus.svg");
var _folderMinusSvgDefault = parcelHelpers.interopDefault(_folderMinusSvg);
var _folderArrowDownSvg = require("bundle-text:../../assets/icons/folder-arrow-down.svg");
var _folderArrowDownSvgDefault = parcelHelpers.interopDefault(_folderArrowDownSvg);
var _adjustmentsHorizontalSvg = require("bundle-text:../../assets/icons/adjustments-horizontal.svg");
var _adjustmentsHorizontalSvgDefault = parcelHelpers.interopDefault(_adjustmentsHorizontalSvg);
var _adjustmentsVerticalSvg = require("bundle-text:../../assets/icons/adjustments-vertical.svg");
var _adjustmentsVerticalSvgDefault = parcelHelpers.interopDefault(_adjustmentsVerticalSvg);
var _archiveBoxSvg = require("bundle-text:../../assets/icons/archive-box.svg");
var _archiveBoxSvgDefault = parcelHelpers.interopDefault(_archiveBoxSvg);
var _archiveBoxXMarkSvg = require("bundle-text:../../assets/icons/archive-box-x-mark.svg");
var _archiveBoxXMarkSvgDefault = parcelHelpers.interopDefault(_archiveBoxXMarkSvg);
var _archiveBoxArrowDownSvg = require("bundle-text:../../assets/icons/archive-box-arrow-down.svg");
var _archiveBoxArrowDownSvgDefault = parcelHelpers.interopDefault(_archiveBoxArrowDownSvg);
var _bars2Svg = require("bundle-text:../../assets/icons/bars-2.svg");
var _bars2SvgDefault = parcelHelpers.interopDefault(_bars2Svg);
var _bars3Svg = require("bundle-text:../../assets/icons/bars-3.svg");
var _bars3SvgDefault = parcelHelpers.interopDefault(_bars3Svg);
var _bars4Svg = require("bundle-text:../../assets/icons/bars-4.svg");
var _bars4SvgDefault = parcelHelpers.interopDefault(_bars4Svg);
var _bars3BottomLeftSvg = require("bundle-text:../../assets/icons/bars-3-bottom-left.svg");
var _bars3BottomLeftSvgDefault = parcelHelpers.interopDefault(_bars3BottomLeftSvg);
var _bars3BottomRightSvg = require("bundle-text:../../assets/icons/bars-3-bottom-right.svg");
var _bars3BottomRightSvgDefault = parcelHelpers.interopDefault(_bars3BottomRightSvg);
var _bars3CenterLeftSvg = require("bundle-text:../../assets/icons/bars-3-center-left.svg");
var _bars3CenterLeftSvgDefault = parcelHelpers.interopDefault(_bars3CenterLeftSvg);
var _barsArrowUpSvg = require("bundle-text:../../assets/icons/bars-arrow-up.svg");
var _barsArrowUpSvgDefault = parcelHelpers.interopDefault(_barsArrowUpSvg);
var _barsArrowDownSvg = require("bundle-text:../../assets/icons/bars-arrow-down.svg");
var _barsArrowDownSvgDefault = parcelHelpers.interopDefault(_barsArrowDownSvg);
var _bellSvg = require("bundle-text:../../assets/icons/bell.svg");
var _bellSvgDefault = parcelHelpers.interopDefault(_bellSvg);
var _bellAlertSvg = require("bundle-text:../../assets/icons/bell-alert.svg");
var _bellAlertSvgDefault = parcelHelpers.interopDefault(_bellAlertSvg);
var _bellSnoozeSvg = require("bundle-text:../../assets/icons/bell-snooze.svg");
var _bellSnoozeSvgDefault = parcelHelpers.interopDefault(_bellSnoozeSvg);
var _bellSlashSvg = require("bundle-text:../../assets/icons/bell-slash.svg");
var _bellSlashSvgDefault = parcelHelpers.interopDefault(_bellSlashSvg);
var _boltSvg = require("bundle-text:../../assets/icons/bolt.svg");
var _boltSvgDefault = parcelHelpers.interopDefault(_boltSvg);
var _boltSlashSvg = require("bundle-text:../../assets/icons/bolt-slash.svg");
var _boltSlashSvgDefault = parcelHelpers.interopDefault(_boltSlashSvg);
var _bookmarkSvg = require("bundle-text:../../assets/icons/bookmark.svg");
var _bookmarkSvgDefault = parcelHelpers.interopDefault(_bookmarkSvg);
var _bookmarkSquareSvg = require("bundle-text:../../assets/icons/bookmark-square.svg");
var _bookmarkSquareSvgDefault = parcelHelpers.interopDefault(_bookmarkSquareSvg);
var _buildingLibrarySvg = require("bundle-text:../../assets/icons/building-library.svg");
var _buildingLibrarySvgDefault = parcelHelpers.interopDefault(_buildingLibrarySvg);
var _buildingOfficeSvg = require("bundle-text:../../assets/icons/building-office.svg");
var _buildingOfficeSvgDefault = parcelHelpers.interopDefault(_buildingOfficeSvg);
var _buildingOffice2Svg = require("bundle-text:../../assets/icons/building-office-2.svg");
var _buildingOffice2SvgDefault = parcelHelpers.interopDefault(_buildingOffice2Svg);
var _buildingStorefrontSvg = require("bundle-text:../../assets/icons/building-storefront.svg");
var _buildingStorefrontSvgDefault = parcelHelpers.interopDefault(_buildingStorefrontSvg);
var _cameraSvg = require("bundle-text:../../assets/icons/camera.svg");
var _cameraSvgDefault = parcelHelpers.interopDefault(_cameraSvg);
var _calendarSvg = require("bundle-text:../../assets/icons/calendar.svg");
var _calendarSvgDefault = parcelHelpers.interopDefault(_calendarSvg);
var _clockSvg = require("bundle-text:../../assets/icons/clock.svg");
var _clockSvgDefault = parcelHelpers.interopDefault(_clockSvg);
var _creditCardSvg = require("bundle-text:../../assets/icons/credit-card.svg");
var _creditCardSvgDefault = parcelHelpers.interopDefault(_creditCardSvg);
var _shoppingCartSvg = require("bundle-text:../../assets/icons/shopping-cart.svg");
var _shoppingCartSvgDefault = parcelHelpers.interopDefault(_shoppingCartSvg);
var _chartBarSquareSvg = require("bundle-text:../../assets/icons/chart-bar-square.svg");
var _chartBarSquareSvgDefault = parcelHelpers.interopDefault(_chartBarSquareSvg);
var _chartPieSvg = require("bundle-text:../../assets/icons/chart-pie.svg");
var _chartPieSvgDefault = parcelHelpers.interopDefault(_chartPieSvg);
var _chatBubbleBottomCenterTextSvg = require("bundle-text:../../assets/icons/chat-bubble-bottom-center-text.svg");
var _chatBubbleBottomCenterTextSvgDefault = parcelHelpers.interopDefault(_chatBubbleBottomCenterTextSvg);
var _chatBubbleBottomCenterSvg = require("bundle-text:../../assets/icons/chat-bubble-bottom-center.svg");
var _chatBubbleBottomCenterSvgDefault = parcelHelpers.interopDefault(_chatBubbleBottomCenterSvg);
var _chatBubbleLeftEllipsisSvg = require("bundle-text:../../assets/icons/chat-bubble-left-ellipsis.svg");
var _chatBubbleLeftEllipsisSvgDefault = parcelHelpers.interopDefault(_chatBubbleLeftEllipsisSvg);
var _chatBubbleOvalLeftSvg = require("bundle-text:../../assets/icons/chat-bubble-oval-left.svg");
var _chatBubbleOvalLeftSvgDefault = parcelHelpers.interopDefault(_chatBubbleOvalLeftSvg);
var _chatBubbleOvalLeftEllipsisSvg = require("bundle-text:../../assets/icons/chat-bubble-oval-left-ellipsis.svg");
var _chatBubbleOvalLeftEllipsisSvgDefault = parcelHelpers.interopDefault(_chatBubbleOvalLeftEllipsisSvg);
var _faceSmileSvg = require("bundle-text:../../assets/icons/face-smile.svg");
var _faceSmileSvgDefault = parcelHelpers.interopDefault(_faceSmileSvg);
var _faceFrownSvg = require("bundle-text:../../assets/icons/face-frown.svg");
var _faceFrownSvgDefault = parcelHelpers.interopDefault(_faceFrownSvg);
var _fireSvg = require("bundle-text:../../assets/icons/fire.svg");
var _fireSvgDefault = parcelHelpers.interopDefault(_fireSvg);
var _filmSvg = require("bundle-text:../../assets/icons/film.svg");
var _filmSvgDefault = parcelHelpers.interopDefault(_filmSvg);
var _flagSvg = require("bundle-text:../../assets/icons/flag.svg");
var _flagSvgDefault = parcelHelpers.interopDefault(_flagSvg);
var _globeAltSvg = require("bundle-text:../../assets/icons/globe-alt.svg");
var _globeAltSvgDefault = parcelHelpers.interopDefault(_globeAltSvg);
var _globeAmericasSvg = require("bundle-text:../../assets/icons/globe-americas.svg");
var _globeAmericasSvgDefault = parcelHelpers.interopDefault(_globeAmericasSvg);
var _globeEuropeAfricaSvg = require("bundle-text:../../assets/icons/globe-europe-africa.svg");
var _globeEuropeAfricaSvgDefault = parcelHelpers.interopDefault(_globeEuropeAfricaSvg);
var _globeAsiaAustraliaSvg = require("bundle-text:../../assets/icons/globe-asia-australia.svg");
var _globeAsiaAustraliaSvgDefault = parcelHelpers.interopDefault(_globeAsiaAustraliaSvg);
var _handRaisedSvg = require("bundle-text:../../assets/icons/hand-raised.svg");
var _handRaisedSvgDefault = parcelHelpers.interopDefault(_handRaisedSvg);
var _handThumbDownSvg = require("bundle-text:../../assets/icons/hand-thumb-down.svg");
var _handThumbDownSvgDefault = parcelHelpers.interopDefault(_handThumbDownSvg);
var _handThumbUpSvg = require("bundle-text:../../assets/icons/hand-thumb-up.svg");
var _handThumbUpSvgDefault = parcelHelpers.interopDefault(_handThumbUpSvg);
var _hashtagSvg = require("bundle-text:../../assets/icons/hashtag.svg");
var _hashtagSvgDefault = parcelHelpers.interopDefault(_hashtagSvg);
var _heartSvg = require("bundle-text:../../assets/icons/heart.svg");
var _heartSvgDefault = parcelHelpers.interopDefault(_heartSvg);
var _identificationSvg = require("bundle-text:../../assets/icons/identification.svg");
var _identificationSvgDefault = parcelHelpers.interopDefault(_identificationSvg);
var _inboxSvg = require("bundle-text:../../assets/icons/inbox.svg");
var _inboxSvgDefault = parcelHelpers.interopDefault(_inboxSvg);
var _inboxArrowDownSvg = require("bundle-text:../../assets/icons/inbox-arrow-down.svg");
var _inboxArrowDownSvgDefault = parcelHelpers.interopDefault(_inboxArrowDownSvg);
var _inboxStackSvg = require("bundle-text:../../assets/icons/inbox-stack.svg");
var _inboxStackSvgDefault = parcelHelpers.interopDefault(_inboxStackSvg);
var _keySvg = require("bundle-text:../../assets/icons/key.svg");
var _keySvgDefault = parcelHelpers.interopDefault(_keySvg);
var _languageSvg = require("bundle-text:../../assets/icons/language.svg");
var _languageSvgDefault = parcelHelpers.interopDefault(_languageSvg);
var _lightBulbSvg = require("bundle-text:../../assets/icons/light-bulb.svg");
var _lightBulbSvgDefault = parcelHelpers.interopDefault(_lightBulbSvg);
var _linkSvg = require("bundle-text:../../assets/icons/link.svg");
var _linkSvgDefault = parcelHelpers.interopDefault(_linkSvg);
var _listBulletSvg = require("bundle-text:../../assets/icons/list-bullet.svg");
var _listBulletSvgDefault = parcelHelpers.interopDefault(_listBulletSvg);
var _lockClosedSvg = require("bundle-text:../../assets/icons/lock-closed.svg");
var _lockClosedSvgDefault = parcelHelpers.interopDefault(_lockClosedSvg);
var _lockOpenSvg = require("bundle-text:../../assets/icons/lock-open.svg");
var _lockOpenSvgDefault = parcelHelpers.interopDefault(_lockOpenSvg);
var _magnifyingGlassMinusSvg = require("bundle-text:../../assets/icons/magnifying-glass-minus.svg");
var _magnifyingGlassMinusSvgDefault = parcelHelpers.interopDefault(_magnifyingGlassMinusSvg);
var _magnifyingGlassPlusSvg = require("bundle-text:../../assets/icons/magnifying-glass-plus.svg");
var _magnifyingGlassPlusSvgDefault = parcelHelpers.interopDefault(_magnifyingGlassPlusSvg);
var _magnifyingGlassSvg = require("bundle-text:../../assets/icons/magnifying-glass.svg");
var _magnifyingGlassSvgDefault = parcelHelpers.interopDefault(_magnifyingGlassSvg);
var _mapPinSvg = require("bundle-text:../../assets/icons/map-pin.svg");
var _mapPinSvgDefault = parcelHelpers.interopDefault(_mapPinSvg);
var _mapSvg = require("bundle-text:../../assets/icons/map.svg");
var _mapSvgDefault = parcelHelpers.interopDefault(_mapSvg);
var _megaphoneSvg = require("bundle-text:../../assets/icons/megaphone.svg");
var _megaphoneSvgDefault = parcelHelpers.interopDefault(_megaphoneSvg);
var _microphoneSvg = require("bundle-text:../../assets/icons/microphone.svg");
var _microphoneSvgDefault = parcelHelpers.interopDefault(_microphoneSvg);
var _moonSvg = require("bundle-text:../../assets/icons/moon.svg");
var _moonSvgDefault = parcelHelpers.interopDefault(_moonSvg);
var _newspaperSvg = require("bundle-text:../../assets/icons/newspaper.svg");
var _newspaperSvgDefault = parcelHelpers.interopDefault(_newspaperSvg);
var _noSymbolSvg = require("bundle-text:../../assets/icons/no-symbol.svg");
var _noSymbolSvgDefault = parcelHelpers.interopDefault(_noSymbolSvg);
var _paperAirplaneSvg = require("bundle-text:../../assets/icons/paper-airplane.svg");
var _paperAirplaneSvgDefault = parcelHelpers.interopDefault(_paperAirplaneSvg);
var _paperClipSvg = require("bundle-text:../../assets/icons/paper-clip.svg");
var _paperClipSvgDefault = parcelHelpers.interopDefault(_paperClipSvg);
var _pencilSvg = require("bundle-text:../../assets/icons/pencil.svg");
var _pencilSvgDefault = parcelHelpers.interopDefault(_pencilSvg);
var _pencilSquareSvg = require("bundle-text:../../assets/icons/pencil-square.svg");
var _pencilSquareSvgDefault = parcelHelpers.interopDefault(_pencilSquareSvg);
var _phoneSvg = require("bundle-text:../../assets/icons/phone.svg");
var _phoneSvgDefault = parcelHelpers.interopDefault(_phoneSvg);
var _phoneArrowDownLeftSvg = require("bundle-text:../../assets/icons/phone-arrow-down-left.svg");
var _phoneArrowDownLeftSvgDefault = parcelHelpers.interopDefault(_phoneArrowDownLeftSvg);
var _phoneArrowUpRightSvg = require("bundle-text:../../assets/icons/phone-arrow-up-right.svg");
var _phoneArrowUpRightSvgDefault = parcelHelpers.interopDefault(_phoneArrowUpRightSvg);
var _plusSvg = require("bundle-text:../../assets/icons/plus.svg");
var _plusSvgDefault = parcelHelpers.interopDefault(_plusSvg);
var _plusCircleSvg = require("bundle-text:../../assets/icons/plus-circle.svg");
var _plusCircleSvgDefault = parcelHelpers.interopDefault(_plusCircleSvg);
var _minusSvg = require("bundle-text:../../assets/icons/minus.svg");
var _minusSvgDefault = parcelHelpers.interopDefault(_minusSvg);
var _minusCircleSvg = require("bundle-text:../../assets/icons/minus-circle.svg");
var _minusCircleSvgDefault = parcelHelpers.interopDefault(_minusCircleSvg);
var _queueListSvg = require("bundle-text:../../assets/icons/queue-list.svg");
var _queueListSvgDefault = parcelHelpers.interopDefault(_queueListSvg);
var _viewColumnsSvg = require("bundle-text:../../assets/icons/view-columns.svg");
var _viewColumnsSvgDefault = parcelHelpers.interopDefault(_viewColumnsSvg);
var _questionMarkCircleSvg = require("bundle-text:../../assets/icons/question-mark-circle.svg");
var _questionMarkCircleSvgDefault = parcelHelpers.interopDefault(_questionMarkCircleSvg);
var _rocketLaunchSvg = require("bundle-text:../../assets/icons/rocket-launch.svg");
var _rocketLaunchSvgDefault = parcelHelpers.interopDefault(_rocketLaunchSvg);
var _scaleSvg = require("bundle-text:../../assets/icons/scale.svg");
var _scaleSvgDefault = parcelHelpers.interopDefault(_scaleSvg);
var _funnelSvg = require("bundle-text:../../assets/icons/funnel.svg");
var _funnelSvgDefault = parcelHelpers.interopDefault(_funnelSvg);
var _xMarkSvg = require("bundle-text:../../assets/icons/x-mark.svg");
var _xMarkSvgDefault = parcelHelpers.interopDefault(_xMarkSvg);
var _shareSvg = require("bundle-text:../../assets/icons/share.svg");
var _shareSvgDefault = parcelHelpers.interopDefault(_shareSvg);
var _speakerWaveSvg = require("bundle-text:../../assets/icons/speaker-wave.svg");
var _speakerWaveSvgDefault = parcelHelpers.interopDefault(_speakerWaveSvg);
var _playSvg = require("bundle-text:../../assets/icons/play.svg");
var _playSvgDefault = parcelHelpers.interopDefault(_playSvg);
var _forwardSvg = require("bundle-text:../../assets/icons/forward.svg");
var _forwardSvgDefault = parcelHelpers.interopDefault(_forwardSvg);
var _backwardSvg = require("bundle-text:../../assets/icons/backward.svg");
var _backwardSvgDefault = parcelHelpers.interopDefault(_backwardSvg);
var _arrowPathSvg = require("bundle-text:../../assets/icons/arrow-path.svg");
var _arrowPathSvgDefault = parcelHelpers.interopDefault(_arrowPathSvg);
const Icon = {
    arrowPath: (0, _arrowPathSvgDefault.default),
    forward: (0, _forwardSvgDefault.default),
    backward: (0, _backwardSvgDefault.default),
    play: (0, _playSvgDefault.default),
    speakerWave: (0, _speakerWaveSvgDefault.default),
    home: (0, _homeSvgDefault.default),
    share: (0, _shareSvgDefault.default),
    xMark: (0, _xMarkSvgDefault.default),
    eye: (0, _eyeSvgDefault.default),
    informationCircle: (0, _informationCircleSvgDefault.default),
    envelope: (0, _envelopeSvgDefault.default),
    userCircle: (0, _userCircleSvgDefault.default),
    user: (0, _userSvgDefault.default),
    academicCap: (0, _academicCapSvgDefault.default),
    bookOpen: (0, _bookOpenSvgDefault.default),
    briefcase: (0, _briefcaseSvgDefault.default),
    chartBar: (0, _chartBarSvgDefault.default),
    clipboard: (0, _clipboardSvgDefault.default),
    codeBracket: (0, _codeBracketSvgDefault.default),
    cog: (0, _cogSvgDefault.default),
    circleStack: (0, _circleStackSvgDefault.default),
    cube: (0, _cubeSvgDefault.default),
    banknotes: (0, _banknotesSvgDefault.default),
    currencyDollar: (0, _currencyDollarSvgDefault.default),
    currencyEuro: (0, _currencyEuroSvgDefault.default),
    currencyPound: (0, _currencyPoundSvgDefault.default),
    currencyRupee: (0, _currencyRupeeSvgDefault.default),
    currencyYen: (0, _currencyYenSvgDefault.default),
    computerDesktop: (0, _computerDesktopSvgDefault.default),
    documentText: (0, _documentTextSvgDefault.default),
    exclamationCircle: (0, _exclamationCircleSvgDefault.default),
    exclamationTrriangle: (0, _exclamationTriangleSvgDefault.default),
    shieldExclamation: (0, _shieldExclamationSvgDefault.default),
    arrowDownTray: (0, _arrowDownTraySvgDefault.default),
    arrowDown: (0, _arrowDownSvgDefault.default),
    arrowLeft: (0, _arrowLeftSvgDefault.default),
    arrowRight: (0, _arrowRightSvgDefault.default),
    arrowUp: (0, _arrowUpSvgDefault.default),
    arrowDownRight: (0, _arrowDownRightSvgDefault.default),
    arrowDownLeft: (0, _arrowDownLeftSvgDefault.default),
    arrowUpRight: (0, _arrowUpRightSvgDefault.default),
    arrowUpLeft: (0, _arrowUpLeftSvgDefault.default),
    arrowLongDown: (0, _arrowLongDownSvgDefault.default),
    arrowLongLeft: (0, _arrowLongLeftSvgDefault.default),
    arrowLongRight: (0, _arrowLongRightSvgDefault.default),
    arrowLongUp: (0, _arrowLongUpSvgDefault.default),
    arrowUTurnLeft: (0, _arrowUturnLeftSvgDefault.default),
    arrowUTurnRight: (0, _arrowUturnRightSvgDefault.default),
    arrowUTurnUp: (0, _arrowUturnUpSvgDefault.default),
    arrowUTurnDown: (0, _arrowUturnDownSvgDefault.default),
    chevronDown: (0, _chevronDownSvgDefault.default),
    chevronLeft: (0, _chevronLeftSvgDefault.default),
    chevronRight: (0, _chevronRightSvgDefault.default),
    chevronUp: (0, _chevronUpSvgDefault.default),
    chevronDoubleDown: (0, _chevronDoubleDownSvgDefault.default),
    chevronDoubleLeft: (0, _chevronDoubleLeftSvgDefault.default),
    chevronDoubleRight: (0, _chevronDoubleRightSvgDefault.default),
    chevronDoubleUp: (0, _chevronDoubleUpSvgDefault.default),
    cloudArrowDown: (0, _cloudArrowDownSvgDefault.default),
    cloudArrowUp: (0, _cloudArrowUpSvgDefault.default),
    folder: (0, _folderSvgDefault.default),
    folderOpen: (0, _folderOpenSvgDefault.default),
    folderPlus: (0, _folderPlusSvgDefault.default),
    folderMinus: (0, _folderMinusSvgDefault.default),
    folderArrowDown: (0, _folderArrowDownSvgDefault.default),
    adjustmentsHorizontal: (0, _adjustmentsHorizontalSvgDefault.default),
    adjustmentsVertical: (0, _adjustmentsVerticalSvgDefault.default),
    archiveBox: (0, _archiveBoxSvgDefault.default),
    archiveBoxXMark: (0, _archiveBoxXMarkSvgDefault.default),
    archiveBoxArrowDown: (0, _archiveBoxArrowDownSvgDefault.default),
    bars2: (0, _bars2SvgDefault.default),
    bars3: (0, _bars3SvgDefault.default),
    bars4: (0, _bars4SvgDefault.default),
    bars3BottomLeft: (0, _bars3BottomLeftSvgDefault.default),
    bars3BottomRight: (0, _bars3BottomRightSvgDefault.default),
    bars3CenterLeft: (0, _bars3CenterLeftSvgDefault.default),
    barsArrowUp: (0, _barsArrowUpSvgDefault.default),
    barsArrowDown: (0, _barsArrowDownSvgDefault.default),
    bell: (0, _bellSvgDefault.default),
    bellAlert: (0, _bellAlertSvgDefault.default),
    bellSnooze: (0, _bellSnoozeSvgDefault.default),
    bellSlash: (0, _bellSlashSvgDefault.default),
    bolt: (0, _boltSvgDefault.default),
    boltSlash: (0, _boltSlashSvgDefault.default),
    bookmark: (0, _bookmarkSvgDefault.default),
    bookmarkSquare: (0, _bookmarkSquareSvgDefault.default),
    buildingLibrary: (0, _buildingLibrarySvgDefault.default),
    buildingOffice: (0, _buildingOfficeSvgDefault.default),
    buildingOffice2: (0, _buildingOffice2SvgDefault.default),
    buildingStorefront: (0, _buildingStorefrontSvgDefault.default),
    camera: (0, _cameraSvgDefault.default),
    chartBarSquare: (0, _chartBarSquareSvgDefault.default),
    chartPie: (0, _chartPieSvgDefault.default),
    chatBubbleBottomCenterText: (0, _chatBubbleBottomCenterTextSvgDefault.default),
    chatBubbleBottomCenter: (0, _chatBubbleBottomCenterSvgDefault.default),
    chatBubbleLeftEllipsis: (0, _chatBubbleLeftEllipsisSvgDefault.default),
    chatBubbleOvalLeft: (0, _chatBubbleOvalLeftSvgDefault.default),
    chatBubbleOvalLeftEllipsis: (0, _chatBubbleOvalLeftEllipsisSvgDefault.default),
    clock: (0, _clockSvgDefault.default),
    creditCard: (0, _creditCardSvgDefault.default),
    calendar: (0, _calendarSvgDefault.default),
    faceSmile: (0, _faceSmileSvgDefault.default),
    faceFrown: (0, _faceFrownSvgDefault.default),
    fire: (0, _fireSvgDefault.default),
    film: (0, _filmSvgDefault.default),
    flag: (0, _flagSvgDefault.default),
    globeAlt: (0, _globeAltSvgDefault.default),
    globeAmericas: (0, _globeAmericasSvgDefault.default),
    globeEuropeAfrica: (0, _globeEuropeAfricaSvgDefault.default),
    globeAsiaAustralia: (0, _globeAsiaAustraliaSvgDefault.default),
    handRaised: (0, _handRaisedSvgDefault.default),
    handThumbDown: (0, _handThumbDownSvgDefault.default),
    handThumbUp: (0, _handThumbUpSvgDefault.default),
    hashtag: (0, _hashtagSvgDefault.default),
    heart: (0, _heartSvgDefault.default),
    identification: (0, _identificationSvgDefault.default),
    inbox: (0, _inboxSvgDefault.default),
    inboxArrowDown: (0, _inboxArrowDownSvgDefault.default),
    inboxStack: (0, _inboxStackSvgDefault.default),
    key: (0, _keySvgDefault.default),
    language: (0, _languageSvgDefault.default),
    lightBulb: (0, _lightBulbSvgDefault.default),
    link: (0, _linkSvgDefault.default),
    listBullet: (0, _listBulletSvgDefault.default),
    lockClosed: (0, _lockClosedSvgDefault.default),
    lockOpen: (0, _lockOpenSvgDefault.default),
    magnifyingGlassMinus: (0, _magnifyingGlassMinusSvgDefault.default),
    magnifyingGlassPlus: (0, _magnifyingGlassPlusSvgDefault.default),
    magnifyingGlass: (0, _magnifyingGlassSvgDefault.default),
    mapPin: (0, _mapPinSvgDefault.default),
    map: (0, _mapSvgDefault.default),
    megaphone: (0, _megaphoneSvgDefault.default),
    microphone: (0, _microphoneSvgDefault.default),
    moon: (0, _moonSvgDefault.default),
    newspaper: (0, _newspaperSvgDefault.default),
    noSymbol: (0, _noSymbolSvgDefault.default),
    paperAirplane: (0, _paperAirplaneSvgDefault.default),
    paperClip: (0, _paperClipSvgDefault.default),
    pencil: (0, _pencilSvgDefault.default),
    pencilSquare: (0, _pencilSquareSvgDefault.default),
    phone: (0, _phoneSvgDefault.default),
    phoneArrowDownLeft: (0, _phoneArrowDownLeftSvgDefault.default),
    phoneArrowUpRight: (0, _phoneArrowUpRightSvgDefault.default),
    plus: (0, _plusSvgDefault.default),
    plusCircle: (0, _plusCircleSvgDefault.default),
    minus: (0, _minusSvgDefault.default),
    minusCircle: (0, _minusCircleSvgDefault.default),
    queueList: (0, _queueListSvgDefault.default),
    viewColumns: (0, _viewColumnsSvgDefault.default),
    questionMarkCircle: (0, _questionMarkCircleSvgDefault.default),
    shoppingCart: (0, _shoppingCartSvgDefault.default),
    rocketLaunch: (0, _rocketLaunchSvgDefault.default),
    scale: (0, _scaleSvgDefault.default),
    funnel: (0, _funnelSvgDefault.default)
};

},{"bundle-text:../../assets/icons/home.svg":"iQb5W","bundle-text:../../assets/icons/information-circle.svg":"3dz4R","bundle-text:../../assets/icons/envelope.svg":"g7qxJ","bundle-text:../../assets/icons/user-circle.svg":"jEIlT","bundle-text:../../assets/icons/user.svg":"DXmAU","bundle-text:../../assets/icons/academic-cap.svg":"iL6Ej","bundle-text:../../assets/icons/book-open.svg":"3zhvH","bundle-text:../../assets/icons/briefcase.svg":"6dHeA","bundle-text:../../assets/icons/chart-bar.svg":"3012f","bundle-text:../../assets/icons/clipboard.svg":"9Za9l","bundle-text:../../assets/icons/code-bracket.svg":"hBgHx","bundle-text:../../assets/icons/cog.svg":"ieGub","bundle-text:../../assets/icons/circle-stack.svg":"c0NuT","bundle-text:../../assets/icons/cube.svg":"ga0r8","bundle-text:../../assets/icons/banknotes.svg":"eD2Jw","bundle-text:../../assets/icons/currency-dollar.svg":"8k5B3","bundle-text:../../assets/icons/currency-euro.svg":"eWTyp","bundle-text:../../assets/icons/currency-pound.svg":"hWJz8","bundle-text:../../assets/icons/currency-rupee.svg":"7OZV0","bundle-text:../../assets/icons/currency-yen.svg":"bEKCv","bundle-text:../../assets/icons/computer-desktop.svg":"djCzr","bundle-text:../../assets/icons/document-text.svg":"inkGj","bundle-text:../../assets/icons/exclamation-circle.svg":"aLypg","bundle-text:../../assets/icons/exclamation-triangle.svg":"4WdhA","bundle-text:../../assets/icons/shield-exclamation.svg":"gF9YE","bundle-text:../../assets/icons/arrow-down-tray.svg":"ddn9B","bundle-text:../../assets/icons/eye.svg":"4aLTY","bundle-text:../../assets/icons/arrow-down.svg":"d7hRc","bundle-text:../../assets/icons/arrow-left.svg":"7hsF0","bundle-text:../../assets/icons/arrow-right.svg":"iutL5","bundle-text:../../assets/icons/arrow-up.svg":"iqQr4","bundle-text:../../assets/icons/arrow-down-right.svg":"3No3s","bundle-text:../../assets/icons/arrow-down-left.svg":"h8SeD","bundle-text:../../assets/icons/arrow-up-right.svg":"gTLd1","bundle-text:../../assets/icons/arrow-up-left.svg":"kRFMc","bundle-text:../../assets/icons/arrow-long-down.svg":"9LjqB","bundle-text:../../assets/icons/arrow-long-left.svg":"hUtrL","bundle-text:../../assets/icons/arrow-long-right.svg":"klE0j","bundle-text:../../assets/icons/arrow-long-up.svg":"h2RYe","bundle-text:../../assets/icons/arrow-uturn-left.svg":"jy1rB","bundle-text:../../assets/icons/arrow-uturn-right.svg":"Ztpsz","bundle-text:../../assets/icons/arrow-uturn-up.svg":"2fl0Y","bundle-text:../../assets/icons/arrow-uturn-down.svg":"j8Tbp","bundle-text:../../assets/icons/chevron-down.svg":"hjdyT","bundle-text:../../assets/icons/chevron-left.svg":"iM9b0","bundle-text:../../assets/icons/chevron-right.svg":"ftfYC","bundle-text:../../assets/icons/chevron-up.svg":"dZbFg","bundle-text:../../assets/icons/chevron-double-down.svg":"igFlu","bundle-text:../../assets/icons/chevron-double-left.svg":"eAcQW","bundle-text:../../assets/icons/chevron-double-right.svg":"873nd","bundle-text:../../assets/icons/chevron-double-up.svg":"knGZx","bundle-text:../../assets/icons/cloud-arrow-down.svg":"26wWn","bundle-text:../../assets/icons/cloud-arrow-up.svg":"c0qyG","bundle-text:../../assets/icons/folder.svg":"dahEh","bundle-text:../../assets/icons/folder-open.svg":"eRY3l","bundle-text:../../assets/icons/folder-plus.svg":"2tcME","bundle-text:../../assets/icons/folder-minus.svg":"ktKpM","bundle-text:../../assets/icons/folder-arrow-down.svg":"aXI6g","bundle-text:../../assets/icons/adjustments-horizontal.svg":"kAHNq","bundle-text:../../assets/icons/adjustments-vertical.svg":"5l5jf","bundle-text:../../assets/icons/archive-box.svg":"h9g7d","bundle-text:../../assets/icons/archive-box-x-mark.svg":"aB34H","bundle-text:../../assets/icons/archive-box-arrow-down.svg":"bJMOX","bundle-text:../../assets/icons/bars-2.svg":"8dyG5","bundle-text:../../assets/icons/bars-3.svg":"4ZH5n","bundle-text:../../assets/icons/bars-4.svg":"ch2Wi","bundle-text:../../assets/icons/bars-3-bottom-left.svg":"mQpN4","bundle-text:../../assets/icons/bars-3-bottom-right.svg":"h4vtT","bundle-text:../../assets/icons/bars-3-center-left.svg":"deq5I","bundle-text:../../assets/icons/bars-arrow-up.svg":"kRPr8","bundle-text:../../assets/icons/bars-arrow-down.svg":"bdh17","bundle-text:../../assets/icons/bell.svg":"i7ptK","bundle-text:../../assets/icons/bell-alert.svg":"2egdz","bundle-text:../../assets/icons/bell-snooze.svg":"jhypF","bundle-text:../../assets/icons/bell-slash.svg":"bps8X","bundle-text:../../assets/icons/bolt.svg":"iyh73","bundle-text:../../assets/icons/bolt-slash.svg":"bHQxt","bundle-text:../../assets/icons/bookmark.svg":"1BQub","bundle-text:../../assets/icons/bookmark-square.svg":"78IVk","bundle-text:../../assets/icons/building-library.svg":"j1A1n","bundle-text:../../assets/icons/building-office.svg":"eIfeM","bundle-text:../../assets/icons/building-office-2.svg":"dJsdy","bundle-text:../../assets/icons/building-storefront.svg":"5pdnM","bundle-text:../../assets/icons/camera.svg":"iKsU7","bundle-text:../../assets/icons/calendar.svg":"lFDhx","bundle-text:../../assets/icons/clock.svg":"jreCI","bundle-text:../../assets/icons/credit-card.svg":"2JczD","bundle-text:../../assets/icons/shopping-cart.svg":"eT5u0","bundle-text:../../assets/icons/chart-bar-square.svg":"8EB4A","bundle-text:../../assets/icons/chart-pie.svg":"9w1Ez","bundle-text:../../assets/icons/chat-bubble-bottom-center-text.svg":"8tYFk","bundle-text:../../assets/icons/chat-bubble-bottom-center.svg":"jDUR1","bundle-text:../../assets/icons/chat-bubble-left-ellipsis.svg":"fjMa7","bundle-text:../../assets/icons/chat-bubble-oval-left.svg":"4m7Fe","bundle-text:../../assets/icons/chat-bubble-oval-left-ellipsis.svg":"f2rDc","bundle-text:../../assets/icons/face-smile.svg":"e2GEP","bundle-text:../../assets/icons/face-frown.svg":"gRPrB","bundle-text:../../assets/icons/fire.svg":"2kSPX","bundle-text:../../assets/icons/film.svg":"3LF91","bundle-text:../../assets/icons/flag.svg":"3h2EC","bundle-text:../../assets/icons/globe-alt.svg":"hQC04","bundle-text:../../assets/icons/globe-americas.svg":"2oLqV","bundle-text:../../assets/icons/globe-europe-africa.svg":"cA7uw","bundle-text:../../assets/icons/globe-asia-australia.svg":"c5pGC","bundle-text:../../assets/icons/hand-raised.svg":"931wA","bundle-text:../../assets/icons/hand-thumb-down.svg":"i5F8P","bundle-text:../../assets/icons/hand-thumb-up.svg":"dwDsP","bundle-text:../../assets/icons/hashtag.svg":"axa9o","bundle-text:../../assets/icons/heart.svg":"l3NCU","bundle-text:../../assets/icons/identification.svg":"freGQ","bundle-text:../../assets/icons/inbox.svg":"hxyyx","bundle-text:../../assets/icons/inbox-arrow-down.svg":"lB6If","bundle-text:../../assets/icons/inbox-stack.svg":"eCq7W","bundle-text:../../assets/icons/key.svg":"6ss1a","bundle-text:../../assets/icons/language.svg":"dZi5m","bundle-text:../../assets/icons/light-bulb.svg":"bMK7v","bundle-text:../../assets/icons/link.svg":"isIgL","bundle-text:../../assets/icons/list-bullet.svg":"j3iAc","bundle-text:../../assets/icons/lock-closed.svg":"lQ9s6","bundle-text:../../assets/icons/lock-open.svg":"e8GV5","bundle-text:../../assets/icons/magnifying-glass-minus.svg":"7AReM","bundle-text:../../assets/icons/magnifying-glass-plus.svg":"k4yNb","bundle-text:../../assets/icons/magnifying-glass.svg":"5cZvL","bundle-text:../../assets/icons/map-pin.svg":"l1Gm3","bundle-text:../../assets/icons/map.svg":"idhSu","bundle-text:../../assets/icons/megaphone.svg":"4776E","bundle-text:../../assets/icons/microphone.svg":"kTVle","bundle-text:../../assets/icons/moon.svg":"301q0","bundle-text:../../assets/icons/newspaper.svg":"c1wDk","bundle-text:../../assets/icons/no-symbol.svg":"7AC0t","bundle-text:../../assets/icons/paper-airplane.svg":"dMc4J","bundle-text:../../assets/icons/paper-clip.svg":"9aFwu","bundle-text:../../assets/icons/pencil.svg":"cRH1U","bundle-text:../../assets/icons/pencil-square.svg":"8ut5b","bundle-text:../../assets/icons/phone.svg":"9Zx5v","bundle-text:../../assets/icons/phone-arrow-down-left.svg":"eXlPH","bundle-text:../../assets/icons/phone-arrow-up-right.svg":"l3WYE","bundle-text:../../assets/icons/plus.svg":"liadF","bundle-text:../../assets/icons/plus-circle.svg":"9Mlei","bundle-text:../../assets/icons/minus.svg":"65Z0p","bundle-text:../../assets/icons/minus-circle.svg":"2Z4AB","bundle-text:../../assets/icons/queue-list.svg":"7zzGl","bundle-text:../../assets/icons/view-columns.svg":"hDZyi","bundle-text:../../assets/icons/question-mark-circle.svg":"8Tbgz","bundle-text:../../assets/icons/rocket-launch.svg":"hYs18","bundle-text:../../assets/icons/scale.svg":"amZek","bundle-text:../../assets/icons/funnel.svg":"4TUiK","bundle-text:../../assets/icons/x-mark.svg":"9N1yE","bundle-text:../../assets/icons/share.svg":"6IMvY","bundle-text:../../assets/icons/speaker-wave.svg":"gFpsN","bundle-text:../../assets/icons/play.svg":"jOgmx","bundle-text:../../assets/icons/forward.svg":"bF4PR","bundle-text:../../assets/icons/backward.svg":"2sWCx","bundle-text:../../assets/icons/arrow-path.svg":"lrDzh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQb5W":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 12L11.2045 3.04549C11.6438 2.60615 12.3562 2.60615 12.7955 3.04549L21.75 12M4.5 9.75V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75M8.25 21H16.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3dz4R":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 8.25H12.0075V8.2575H12V8.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"g7qxJ":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jEIlT":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"DXmAU":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.75 6C15.75 8.07107 14.071 9.75 12 9.75C9.9289 9.75 8.24996 8.07107 8.24996 6C8.24996 3.92893 9.9289 2.25 12 2.25C14.071 2.25 15.75 3.92893 15.75 6Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M4.5011 20.1182C4.5714 16.0369 7.90184 12.75 12 12.75C16.0982 12.75 19.4287 16.0371 19.4988 20.1185C17.216 21.166 14.6764 21.75 12.0003 21.75C9.32396 21.75 6.78406 21.1659 4.5011 20.1182Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iL6Ej":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.25933 10.1466C3.98688 12.2307 3.82139 14.3483 3.76853 16.494C6.66451 17.703 9.41893 19.1835 12 20.9036C14.5811 19.1835 17.3355 17.703 20.2315 16.494C20.1786 14.3484 20.0131 12.2307 19.7407 10.1467M4.25933 10.1466C3.38362 9.8523 2.49729 9.58107 1.60107 9.3337C4.84646 7.05887 8.32741 5.0972 12 3.49255C15.6727 5.0972 19.1536 7.05888 22.399 9.33371C21.5028 9.58109 20.6164 9.85233 19.7407 10.1467M4.25933 10.1466C6.94656 11.0499 9.5338 12.1709 12.0001 13.4886C14.4663 12.1709 17.0535 11.0499 19.7407 10.1467M6.75 15C7.16421 15 7.5 14.6642 7.5 14.25C7.5 13.8358 7.16421 13.5 6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15ZM6.75 15V11.3245C8.44147 10.2735 10.1936 9.31094 12 8.44329M4.99264 19.9926C6.16421 18.8211 6.75 17.2855 6.75 15.75V14.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3zhvH":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917M12 6.04168V20.2917\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"6dHeA":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 14.1499V18.4C20.25 19.4944 19.4631 20.4359 18.3782 20.58C16.2915 20.857 14.1624 21 12 21C9.83757 21 7.70854 20.857 5.62185 20.58C4.5369 20.4359 3.75 19.4944 3.75 18.4V14.1499M20.25 14.1499C20.7219 13.7476 21 13.1389 21 12.4889V8.70569C21 7.62475 20.2321 6.69082 19.1631 6.53086C18.0377 6.36247 16.8995 6.23315 15.75 6.14432M20.25 14.1499C20.0564 14.315 19.8302 14.4453 19.5771 14.5294C17.1953 15.3212 14.6477 15.75 12 15.75C9.35229 15.75 6.80469 15.3212 4.42289 14.5294C4.16984 14.4452 3.94361 14.3149 3.75 14.1499M3.75 14.1499C3.27808 13.7476 3 13.1389 3 12.4889V8.70569C3 7.62475 3.7679 6.69082 4.83694 6.53086C5.96233 6.36247 7.10049 6.23315 8.25 6.14432M15.75 6.14432V5.25C15.75 4.00736 14.7426 3 13.5 3H10.5C9.25736 3 8.25 4.00736 8.25 5.25V6.14432M15.75 6.14432C14.5126 6.0487 13.262 6 12 6C10.738 6 9.48744 6.0487 8.25 6.14432M12 12.75H12.0075V12.7575H12V12.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3012f":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9Za9l":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hBgHx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ieGub":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"c0NuT":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ga0r8":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eD2Jw":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8k5B3":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 6V18M9 15.1818L9.87887 15.841C11.0504 16.7197 12.9498 16.7197 14.1214 15.841C15.2929 14.9623 15.2929 13.5377 14.1214 12.659C13.5355 12.2196 12.7677 12 11.9999 12C11.275 12 10.5502 11.7804 9.99709 11.341C8.891 10.4623 8.891 9.03772 9.9971 8.15904C11.1032 7.28036 12.8965 7.28036 14.0026 8.15904L14.4175 8.48863M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eWTyp":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.25 7.75625C12.667 7.19798 10.8341 7.5519 9.56802 8.81802C7.81066 10.5754 7.81066 13.4246 9.56802 15.182C10.8341 16.4481 12.667 16.802 14.25 16.2437M7.5 10.5H12.75M7.5 13.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hWJz8":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.1213 7.62877C12.9497 6.45719 11.0503 6.45719 9.87868 7.62877C9.37424 8.13321 9.08699 8.7726 9.01694 9.43073C8.9944 9.64251 9.01512 9.85582 9.04524 10.0667L9.5512 13.6084C9.68065 14.5146 9.5307 15.4386 9.12135 16.2573L9 16.5L10.5385 15.9872C11.0003 15.8332 11.4997 15.8332 11.9615 15.9872L12.6158 16.2053C13.182 16.394 13.7999 16.3501 14.3336 16.0832L15 15.75M8.25 12H12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"7OZV0":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 8.25L9 8.25M15 11.25H9M12 17.25L9 14.25H10.5C12.1569 14.25 13.5 12.9069 13.5 11.25C13.5 9.59315 12.1569 8.25 10.5 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bEKCv":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 7.5L12 12M12 12L15 7.5M12 12V17.25M15 12H9M15 15H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"djCzr":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 17.25V18.2574C9 19.053 8.68393 19.8161 8.12132 20.3787L7.5 21H16.5L15.8787 20.3787C15.3161 19.8161 15 19.053 15 18.2574V17.25M21 5.25V15C21 16.2426 19.9926 17.25 18.75 17.25H5.25C4.00736 17.25 3 16.2426 3 15V5.25M21 5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"inkGj":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"aLypg":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 9V12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 15.75H12.0075V15.7575H12V15.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4WdhA":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.9998 9.00006V12.7501M2.69653 16.1257C1.83114 17.6257 2.91371 19.5001 4.64544 19.5001H19.3541C21.0858 19.5001 22.1684 17.6257 21.303 16.1257L13.9487 3.37819C13.0828 1.87736 10.9167 1.87736 10.0509 3.37819L2.69653 16.1257ZM11.9998 15.7501H12.0073V15.7576H11.9998V15.7501Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"gF9YE":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 9V12.75M12 2.71426C9.8495 4.75089 6.94563 6.00001 3.75 6.00001C3.69922 6.00001 3.64852 5.9997 3.59789 5.99907C3.2099 7.17918 3 8.44011 3 9.75006C3 15.3416 6.82432 20.0399 12 21.372C17.1757 20.0399 21 15.3416 21 9.75006C21 8.44011 20.7901 7.17918 20.4021 5.99907C20.3515 5.9997 20.3008 6.00001 20.25 6.00001C17.0544 6.00001 14.1505 4.75089 12 2.71426ZM12 15.75H12.0075V15.7575H12V15.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ddn9B":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4aLTY":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42372 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.36119 19.5 3.42564 16.4931 2.03555 12.3224Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"d7hRc":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"7hsF0":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iutL5":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iqQr4":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 10.5L12 3M12 3L19.5 10.5M12 3V21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3No3s":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 4.5L19.5 19.5M19.5 19.5V8.25M19.5 19.5H8.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"h8SeD":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.5 4.5L4.5 19.5M4.5 19.5L15.75 19.5M4.5 19.5L4.5 8.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"gTLd1":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"kRFMc":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9LjqB":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.75 17.25L12 21M12 21L8.25 17.25M12 21L12 3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hUtrL":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.75 15.75L3 12M3 12L6.75 8.25M3 12H21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"klE0j":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"h2RYe":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jy1rB":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 15L3 9M3 9L9 3M3 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"Ztpsz":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 15L21 9M21 9L15 3M21 9H9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21H12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2fl0Y":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 9L15 3M15 3L21 9M15 3L15 15C15 18.3137 12.3137 21 9 21C5.68629 21 3 18.3137 3 15L3 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"j8Tbp":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 15L9 21M9 21L3 15M9 21V9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9V12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hjdyT":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.5 8.25L12 15.75L4.5 8.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iM9b0":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.75 19.5L8.25 12L15.75 4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ftfYC":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.25 4.5L15.75 12L8.25 19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dZbFg":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 15.75L12 8.25L19.5 15.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"igFlu":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 5.25L12 12.75L19.5 5.25M4.5 11.25L12 18.75L19.5 11.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eAcQW":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.75 4.5L11.25 12L18.75 19.5M12.75 4.5L5.25 12L12.75 19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"873nd":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.25 4.5L12.75 12L5.25 19.5M11.25 4.5L18.75 12L11.25 19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"knGZx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 18.75L12 11.25L19.5 18.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M4.5 12.75L12 5.25L19.5 12.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"26wWn":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 9.75V16.5M12 16.5L9 13.5M12 16.5L15 13.5M6.75 19.5C4.26472 19.5 2.25 17.4853 2.25 15C2.25 13.0071 3.54555 11.3167 5.3404 10.7252C5.28105 10.4092 5.25 10.0832 5.25 9.75C5.25 6.85051 7.60051 4.5 10.5 4.5C12.9312 4.5 14.9765 6.1526 15.5737 8.39575C15.8654 8.30113 16.1767 8.25 16.5 8.25C18.1569 8.25 19.5 9.59315 19.5 11.25C19.5 11.5981 19.4407 11.9324 19.3316 12.2433C20.7453 12.7805 21.75 14.1479 21.75 15.75C21.75 17.8211 20.0711 19.5 18 19.5H6.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"c0qyG":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 16.5L12 9.75M12 9.75L15 12.75M12 9.75L9 12.75M6.75 19.5C4.26472 19.5 2.25 17.4853 2.25 15C2.25 13.0071 3.54555 11.3167 5.3404 10.7252C5.28105 10.4092 5.25 10.0832 5.25 9.75C5.25 6.85051 7.60051 4.5 10.5 4.5C12.9312 4.5 14.9765 6.1526 15.5737 8.39575C15.8654 8.30113 16.1767 8.25 16.5 8.25C18.1569 8.25 19.5 9.59315 19.5 11.25C19.5 11.5981 19.4407 11.9324 19.3316 12.2433C20.7453 12.7805 21.75 14.1479 21.75 15.75C21.75 17.8211 20.0711 19.5 18 19.5H6.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dahEh":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 12.75V12C2.25 10.7574 3.25736 9.75 4.5 9.75H19.5C20.7426 9.75 21.75 10.7574 21.75 12V12.75M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eRY3l":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.74999 9.77602C3.86203 9.7589 3.97698 9.75 4.09426 9.75H19.9057C20.023 9.75 20.138 9.7589 20.25 9.77602M3.74999 9.77602C2.55399 9.9588 1.68982 11.0788 1.86688 12.3182L2.72402 18.3182C2.88237 19.4267 3.83169 20.25 4.95141 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.74999 9.77602V6C3.74999 4.75736 4.75735 3.75 5.99999 3.75H9.87867C10.2765 3.75 10.658 3.90804 10.9393 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2426 6.75 20.25 7.75736 20.25 9V9.77602\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2tcME":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 10.5V16.5M15 13.5H9M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ktKpM":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 13.5H9M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"aXI6g":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 13.5L12 16.5M12 16.5L15 13.5M12 16.5L12 10.5M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"kAHNq":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.5 6L20.25 6M10.5 6C10.5 6.82843 9.82843 7.5 9 7.5C8.17157 7.5 7.5 6.82843 7.5 6M10.5 6C10.5 5.17157 9.82843 4.5 9 4.5C8.17157 4.5 7.5 5.17157 7.5 6M3.75 6H7.5M10.5 18H20.25M10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18M10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18M3.75 18L7.5 18M16.5 12L20.25 12M16.5 12C16.5 12.8284 15.8284 13.5 15 13.5C14.1716 13.5 13.5 12.8284 13.5 12M16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12M3.75 12H13.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"5l5jf":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6 13.5L6 3.75M6 13.5C6.82843 13.5 7.5 14.1716 7.5 15C7.5 15.8284 6.82843 16.5 6 16.5M6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5M6 20.25L6 16.5M18 13.5V3.75M18 13.5C18.8284 13.5 19.5 14.1716 19.5 15C19.5 15.8284 18.8284 16.5 18 16.5M18 13.5C17.1716 13.5 16.5 14.1716 16.5 15C16.5 15.8284 17.1716 16.5 18 16.5M18 20.25L18 16.5M12 7.5V3.75M12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5M12 20.25V10.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"h9g7d":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.99976 11.25H13.9998M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"aB34H":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bJMOX":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M12 10.5V17.25M12 17.25L9 14.25M12 17.25L15 14.25M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8dyG5":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 9H20.25M3.75 15.75H20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4ZH5n":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"ch2Wi":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"mQpN4":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"h4vtT":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"deq5I":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 6.75H20.25M3.75 12H12M3.75 17.25H20.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"kRPr8":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 4.5H17.25M3 9H12.75M3 13.5H8.25M13.5 12.75L17.25 9M17.25 9L21 12.75M17.25 9V21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bdh17":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 4.5H17.25M3 9H12.75M3 13.5H12.75M17.25 9V21M17.25 21L13.5 17.25M17.25 21L21 17.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"i7ptK":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2egdz":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.6863 3 6.00001 5.68629 6.00001 9L5.99982 9.75C5.99982 12.0656 5.12529 14.177 3.68849 15.7719C5.42142 16.4116 7.24845 16.857 9.14315 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14315 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3432 21 9.00001 19.6569 9.00001 18C9.00001 17.6797 9.0502 17.3712 9.14315 17.0818M3.12445 7.5C3.41173 5.78764 4.18254 4.23924 5.29169 3M18.7083 3C19.8175 4.23924 20.5883 5.78764 20.8756 7.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jhypF":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818M10.5 8.25H13.5L10.5 12.75H13.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bps8X":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.14314 17.0818C10.0799 17.1929 11.0332 17.25 11.9998 17.25C12.3306 17.25 12.6599 17.2433 12.9874 17.2301M9.14314 17.0818C7.24843 16.857 5.4214 16.4116 3.68848 15.7719C5.02539 14.2879 5.87549 12.3567 5.98723 10.2299M9.14314 17.0818C9.05019 17.3712 9 17.6797 9 18C9 19.6569 10.3431 21 12 21C13.2864 21 14.3837 20.1903 14.8101 19.0527M16.7749 16.7749L21 21M16.7749 16.7749C17.9894 16.5298 19.1706 16.1929 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919L18 9C18 5.68629 15.3137 3 12 3C9.5667 3 7.47171 4.44849 6.53026 6.53026M16.7749 16.7749L6.53026 6.53026M3 3L6.53026 6.53026\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iyh73":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bHQxt":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.4123 15.6549L9.75 21.75L13.4949 17.7376M9.25736 13.5H3.75L6.40873 10.6514M8.4569 8.4569L14.25 2.25L12 10.5H20.25L15.5431 15.5431M8.4569 8.4569L3 3M8.4569 8.4569L15.5431 15.5431M15.5431 15.5431L21 21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"1BQub":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"78IVk":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.5 3.75V16.5L12 14.25L7.5 16.5V3.75M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6C3.75 4.75736 4.75736 3.75 6 3.75H7.5M16.5 3.75H7.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"j1A1n":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eIfeM":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 21H20.25M4.5 3H19.5M5.25 3V21M18.75 3V21M9 6.75H10.5M9 9.75H10.5M9 12.75H10.5M13.5 6.75H15M13.5 9.75H15M13.5 12.75H15M9 21V17.625C9 17.0037 9.50368 16.5 10.125 16.5H13.875C14.4963 16.5 15 17.0037 15 17.625V21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dJsdy":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 21H21.75M3.75 3V21M14.25 3V21M20.25 7.5V21M6.75 6.75H7.5M6.75 9.75H7.5M6.75 12.75H7.5M10.5 6.75H11.25M10.5 9.75H11.25M10.5 12.75H11.25M6.75 21V17.625C6.75 17.0037 7.25368 16.5 7.875 16.5H10.125C10.7463 16.5 11.25 17.0037 11.25 17.625V21M3 3H15M14.25 7.5H21M17.25 11.25H17.2575V11.2575H17.25V11.25ZM17.25 14.25H17.2575V14.2575H17.25V14.25ZM17.25 17.25H17.2575V17.2575H17.25V17.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"5pdnM":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.5 21V13.5C13.5 13.0858 13.8358 12.75 14.25 12.75H17.25C17.6642 12.75 18 13.0858 18 13.5V21M13.5 21H2.36088M13.5 21H18M18 21H21.6391M20.25 21V9.34876M3.75 21V9.349M3.75 9.349C4.89729 10.0121 6.38977 9.85293 7.37132 8.87139C7.41594 8.82677 7.45886 8.78109 7.50008 8.73444C8.04979 9.3572 8.85402 9.74998 9.75 9.74998C10.646 9.74998 11.4503 9.35717 12 8.73435C12.5497 9.35717 13.354 9.74998 14.25 9.74998C15.1459 9.74998 15.9501 9.35725 16.4998 8.73456C16.541 8.78114 16.5838 8.82675 16.6284 8.8713C17.61 9.85293 19.1027 10.0121 20.25 9.34876M3.75 9.349C3.52788 9.22062 3.31871 9.06142 3.12868 8.87139C1.95711 7.69982 1.95711 5.80032 3.12868 4.62875L4.31797 3.43946C4.59927 3.15816 4.9808 3.00012 5.37863 3.00012H18.6212C19.019 3.00012 19.4005 3.15816 19.6818 3.43946L20.871 4.62866C22.0426 5.80023 22.0426 7.69973 20.871 8.8713C20.6811 9.06125 20.472 9.2204 20.25 9.34876M6.75 18H10.5C10.9142 18 11.25 17.6642 11.25 17.25V13.5C11.25 13.0858 10.9142 12.75 10.5 12.75H6.75C6.33579 12.75 6 13.0858 6 13.5V17.25C6 17.6642 6.33579 18 6.75 18Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"iKsU7":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.82689 6.1749C6.46581 6.75354 5.86127 7.13398 5.186 7.22994C4.80655 7.28386 4.42853 7.34223 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9.57403C21.75 8.50664 21.0009 7.58043 19.948 7.40498C19.5715 7.34223 19.1934 7.28387 18.814 7.22995C18.1387 7.13398 17.5342 6.75354 17.1731 6.17491L16.3519 4.85889C15.9734 4.25237 15.3294 3.85838 14.6155 3.82005C13.7496 3.77355 12.8775 3.75 12 3.75C11.1225 3.75 10.2504 3.77355 9.3845 3.82005C8.6706 3.85838 8.02658 4.25237 7.64809 4.85889L6.82689 6.1749Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M16.5 12.75C16.5 15.2353 14.4853 17.25 12 17.25C9.51472 17.25 7.5 15.2353 7.5 12.75C7.5 10.2647 9.51472 8.25 12 8.25C14.4853 8.25 16.5 10.2647 16.5 12.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M18.75 10.5H18.7575V10.5075H18.75V10.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"lFDhx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jreCI":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 6V12H16.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2JczD":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eT5u0":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8EB4A":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.5 14.25V16.5M10.5 12V16.5M13.5 9.75V16.5M16.5 7.5V16.5M6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9w1Ez":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8tYFk":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.5 8.25H16.5M7.5 11.25H12M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.08596 16.1529 7.22724 16.2796 8.37985 16.3655C8.73004 16.3916 9.05017 16.5753 9.24496 16.8674L12 21L14.755 16.8675C14.9498 16.5753 15.2699 16.3917 15.6201 16.3656C16.7727 16.2796 17.914 16.153 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jDUR1":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.02548 16.144 7.10495 16.2659 8.19464 16.3513C8.66142 16.388 9.08828 16.6324 9.348 17.022L12 21L14.652 17.0221C14.9117 16.6325 15.3386 16.388 15.8053 16.3514C16.895 16.2659 17.9745 16.1441 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"fjMa7":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.625 9.75C8.625 9.95711 8.45711 10.125 8.25 10.125C8.04289 10.125 7.875 9.95711 7.875 9.75C7.875 9.54289 8.04289 9.375 8.25 9.375C8.45711 9.375 8.625 9.54289 8.625 9.75ZM8.625 9.75H8.25M12.375 9.75C12.375 9.95711 12.2071 10.125 12 10.125C11.7929 10.125 11.625 9.95711 11.625 9.75C11.625 9.54289 11.7929 9.375 12 9.375C12.2071 9.375 12.375 9.54289 12.375 9.75ZM12.375 9.75H12M16.125 9.75C16.125 9.95711 15.9571 10.125 15.75 10.125C15.5429 10.125 15.375 9.95711 15.375 9.75C15.375 9.54289 15.5429 9.375 15.75 9.375C15.9571 9.375 16.125 9.54289 16.125 9.75ZM16.125 9.75H15.75M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.04357 16.1467 7.14151 16.27 8.25 16.3556V21L12.4335 16.8165C12.6402 16.6098 12.9193 16.4923 13.2116 16.485C15.1872 16.4361 17.1331 16.2678 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4m7Fe":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 20.25C16.9706 20.25 21 16.5563 21 12C21 7.44365 16.9706 3.75 12 3.75C7.02944 3.75 3 7.44365 3 12C3 14.1036 3.85891 16.0234 5.2728 17.4806C5.70538 17.9265 6.01357 18.5192 5.85933 19.121C5.68829 19.7883 5.368 20.3959 4.93579 20.906C5.0918 20.9339 5.25 20.9558 5.40967 20.9713C5.60376 20.9903 5.80078 21 6 21C7.28201 21 8.47016 20.5979 9.44517 19.9129C10.2551 20.1323 11.1125 20.25 12 20.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"f2rDc":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75M21 12C21 16.5563 16.9706 20.25 12 20.25C11.1125 20.25 10.2551 20.1323 9.44517 19.9129C8.47016 20.5979 7.28201 21 6 21C5.80078 21 5.60376 20.9903 5.40967 20.9713C5.25 20.9558 5.0918 20.9339 4.93579 20.906C5.41932 20.3353 5.76277 19.6427 5.91389 18.8808C6.00454 18.4238 5.7807 17.9799 5.44684 17.6549C3.9297 16.1782 3 14.1886 3 12C3 7.44365 7.02944 3.75 12 3.75C16.9706 3.75 21 7.44365 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"e2GEP":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75ZM9.375 9.75H9.3825V9.765H9.375V9.75ZM15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75ZM14.625 9.75H14.6325V9.765H14.625V9.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"gRPrB":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75ZM9.375 9.75H9.3825V9.765H9.375V9.75ZM15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75ZM14.625 9.75H14.6325V9.765H14.625V9.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2kSPX":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.3622 5.21361C18.2427 6.50069 20.25 9.39075 20.25 12.7497C20.25 17.306 16.5563 20.9997 12 20.9997C7.44365 20.9997 3.75 17.306 3.75 12.7497C3.75 10.5376 4.62058 8.52889 6.03781 7.04746C6.8043 8.11787 7.82048 8.99731 9.00121 9.60064C9.04632 6.82497 10.348 4.35478 12.3621 2.73413C13.1255 3.75788 14.1379 4.61821 15.3622 5.21361Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M12 18C14.0711 18 15.75 16.3211 15.75 14.25C15.75 12.3467 14.3321 10.7746 12.4949 10.5324C11.4866 11.437 10.7862 12.6779 10.5703 14.0787C9.78769 13.8874 9.06529 13.5425 8.43682 13.0779C8.31559 13.4467 8.25 13.8407 8.25 14.25C8.25 16.3211 9.92893 18 12 18Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3LF91":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.375 19.5H20.625M3.375 19.5C2.75368 19.5 2.25 18.9963 2.25 18.375M3.375 19.5H4.875C5.49632 19.5 6 18.9963 6 18.375M2.25 18.375V5.625M2.25 18.375V16.875C2.25 16.2537 2.75368 15.75 3.375 15.75M21.75 18.375V5.625M21.75 18.375C21.75 18.9963 21.2463 19.5 20.625 19.5M21.75 18.375V16.875C21.75 16.2537 21.2463 15.75 20.625 15.75M20.625 19.5H19.125C18.5037 19.5 18 18.9963 18 18.375M20.625 4.5H3.375M20.625 4.5C21.2463 4.5 21.75 5.00368 21.75 5.625M20.625 4.5H19.125C18.5037 4.5 18 5.00368 18 5.625M21.75 5.625V7.125C21.75 7.74632 21.2463 8.25 20.625 8.25M3.375 4.5C2.75368 4.5 2.25 5.00368 2.25 5.625M3.375 4.5H4.875C5.49632 4.5 6 5.00368 6 5.625M2.25 5.625V7.125C2.25 7.74632 2.75368 8.25 3.375 8.25M3.375 8.25H4.875M3.375 8.25C2.75368 8.25 2.25 8.75368 2.25 9.375V10.875C2.25 11.4963 2.75368 12 3.375 12M4.875 8.25C5.49632 8.25 6 7.74632 6 7.125V5.625M4.875 8.25C5.49632 8.25 6 8.75368 6 9.375V10.875M6 5.625V10.875M6 5.625C6 5.00368 6.50368 4.5 7.125 4.5H16.875C17.4963 4.5 18 5.00368 18 5.625M19.125 8.25H20.625M19.125 8.25C18.5037 8.25 18 7.74632 18 7.125V5.625M19.125 8.25C18.5037 8.25 18 8.75368 18 9.375V10.875M20.625 8.25C21.2463 8.25 21.75 8.75368 21.75 9.375V10.875C21.75 11.4963 21.2463 12 20.625 12M18 5.625V10.875M7.125 12H16.875M7.125 12C6.50368 12 6 11.4963 6 10.875M7.125 12C6.50368 12 6 12.5037 6 13.125M6 10.875C6 11.4963 5.49632 12 4.875 12M18 10.875C18 11.4963 17.4963 12 16.875 12M18 10.875C18 11.4963 18.5037 12 19.125 12M16.875 12C17.4963 12 18 12.5037 18 13.125M6 18.375V13.125M6 18.375C6 18.9963 6.50368 19.5 7.125 19.5H16.875C17.4963 19.5 18 18.9963 18 18.375M6 18.375V16.875C6 16.2537 5.49632 15.75 4.875 15.75M18 18.375V13.125M18 18.375V16.875C18 16.2537 18.5037 15.75 19.125 15.75M18 13.125V14.625C18 15.2463 18.5037 15.75 19.125 15.75M18 13.125C18 12.5037 18.5037 12 19.125 12M6 13.125V14.625C6 15.2463 5.49632 15.75 4.875 15.75M6 13.125C6 12.5037 5.49632 12 4.875 12M3.375 12H4.875M3.375 12C2.75368 12 2.25 12.5037 2.25 13.125V14.625C2.25 15.2463 2.75368 15.75 3.375 15.75M19.125 12H20.625M20.625 12C21.2463 12 21.75 12.5037 21.75 13.125V14.625C21.75 15.2463 21.2463 15.75 20.625 15.75M3.375 15.75H4.875M19.125 15.75H20.625\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"3h2EC":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 3V4.5M3 21V15M3 15L5.77009 14.3075C7.85435 13.7864 10.0562 14.0281 11.9778 14.9889L12.0856 15.0428C13.9687 15.9844 16.1224 16.2359 18.1718 15.7537L21.2861 15.0209C21.097 13.2899 21 11.5313 21 9.75C21 7.98343 21.0954 6.23914 21.2814 4.52202L18.1718 5.25369C16.1224 5.73591 13.9687 5.48435 12.0856 4.54278L11.9778 4.48892C10.0562 3.52812 7.85435 3.28641 5.77009 3.80748L3 4.5M3 15V4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hQC04":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 21C16.1926 21 19.7156 18.1332 20.7157 14.2529M12 21C7.80742 21 4.28442 18.1332 3.2843 14.2529M12 21C14.4853 21 16.5 16.9706 16.5 12C16.5 7.02944 14.4853 3 12 3M12 21C9.51472 21 7.5 16.9706 7.5 12C7.5 7.02944 9.51472 3 12 3M12 3C15.3652 3 18.299 4.84694 19.8431 7.58245M12 3C8.63481 3 5.70099 4.84694 4.15692 7.58245M19.8431 7.58245C17.7397 9.40039 14.9983 10.5 12 10.5C9.00172 10.5 6.26027 9.40039 4.15692 7.58245M19.8431 7.58245C20.5797 8.88743 21 10.3946 21 12C21 12.778 20.9013 13.5329 20.7157 14.2529M20.7157 14.2529C18.1334 15.6847 15.1619 16.5 12 16.5C8.8381 16.5 5.86662 15.6847 3.2843 14.2529M3.2843 14.2529C3.09871 13.5329 3 12.778 3 12C3 10.3946 3.42032 8.88743 4.15692 7.58245\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2oLqV":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.11507 5.19043L6.4339 7.10337C6.63948 8.33689 7.22535 9.47535 8.10962 10.3596L9.75 12L9.36262 12.7747C9.14607 13.2079 9.23096 13.731 9.57336 14.0734L10.9205 15.4205C11.1315 15.6315 11.25 15.9176 11.25 16.216V17.3047C11.25 17.7308 11.4908 18.1204 11.8719 18.3109L12.0247 18.3874C12.4579 18.6039 12.981 18.519 13.3234 18.1766L14.0461 17.4539C15.161 16.339 15.952 14.9419 16.3344 13.4122C16.4357 13.0073 16.2962 12.5802 15.9756 12.313L14.6463 11.2053C14.3947 10.9956 14.0642 10.906 13.7411 10.9598L12.5711 11.1548C12.2127 11.2146 11.8475 11.0975 11.5906 10.8406L11.2955 10.5455C10.8562 10.1062 10.8562 9.39384 11.2955 8.9545L11.4266 8.82336C11.769 8.48095 12.2921 8.39607 12.7253 8.61263L13.3292 8.91459C13.4415 8.97076 13.5654 9 13.691 9C14.2924 9 14.6835 8.3671 14.4146 7.82918L14.25 7.5L15.5057 6.66289C16.1573 6.22849 16.6842 5.63157 17.0344 4.93112L17.1803 4.63942M6.11507 5.19043C4.20716 6.84073 3 9.27939 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.95801 19.4908 6.26851 17.1803 4.63942M6.11507 5.19043C7.69292 3.82562 9.75004 3 12 3C13.9286 3 15.7155 3.6066 17.1803 4.63942\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"cA7uw":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.8929 13.3929L19.7582 12.2582C19.5872 12.0872 19.4449 11.8897 19.3367 11.6734L18.2567 9.5133C18.1304 9.26078 17.7938 9.20616 17.5942 9.4058C17.3818 9.61824 17.0708 9.69881 16.782 9.61627L15.5091 9.25259C15.0257 9.11447 14.5239 9.40424 14.402 9.892C14.3108 10.2566 14.4587 10.6392 14.7715 10.8476L15.3582 11.2388C15.9489 11.6326 16.0316 12.4684 15.5297 12.9703L15.3295 13.1705C15.1185 13.3815 15 13.6676 15 13.966V14.3768C15 14.7846 14.8892 15.1847 14.6794 15.5344L13.3647 17.7254C12.9834 18.3611 12.2964 18.75 11.5552 18.75C10.9724 18.75 10.5 18.2776 10.5 17.6948V16.5233C10.5 15.6033 9.93986 14.7759 9.08563 14.4343L8.43149 14.1726C7.44975 13.7799 6.8739 12.7566 7.04773 11.7136L7.05477 11.6714C7.10117 11.393 7.19956 11.1257 7.3448 10.8837L7.43421 10.7347C7.92343 9.91928 8.87241 9.49948 9.80483 9.68597L10.9827 9.92153C11.5574 10.0365 12.124 9.69096 12.285 9.12744L12.4935 8.39774C12.6422 7.87721 12.3991 7.32456 11.9149 7.08245L11.25 6.75L11.159 6.84099C10.7371 7.26295 10.1648 7.5 9.56802 7.5H9.38709C9.13924 7.5 8.90095 7.59905 8.7257 7.7743C8.44222 8.05778 8.00814 8.12907 7.64958 7.94979C7.16433 7.70716 6.98833 7.10278 7.26746 6.63757L8.67936 4.2844C8.82024 4.04961 8.91649 3.79207 8.96453 3.52474M20.8929 13.3929C20.9634 12.9389 21 12.4737 21 12C21 7.02944 16.9706 3 12 3C10.9348 3 9.91287 3.18504 8.96453 3.52474M20.8929 13.3929C20.2234 17.702 16.4968 21 12 21C7.02944 21 3 16.9706 3 12C3 8.09461 5.48749 4.77021 8.96453 3.52474\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"c5pGC":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.75 3.03081V3.59808C12.75 3.93196 12.8983 4.24858 13.1548 4.46233L14.2234 5.35284C14.6651 5.7209 14.7582 6.36275 14.4393 6.84112L13.9282 7.60766C13.6507 8.02398 13.2423 8.3359 12.7676 8.49413L12.6254 8.54154C11.9327 8.77243 11.6492 9.59877 12.0542 10.2063C12.4237 10.7605 12.2238 11.5131 11.6281 11.811L9 13.125L9.42339 14.1835C9.608 14.645 9.40803 15.171 8.96343 15.3933C8.5503 15.5999 8.04855 15.4814 7.77142 15.1119L7.09217 14.2062C6.59039 13.5372 5.55995 13.6301 5.18594 14.3781L4.5 15.75L3.88804 15.903M12.75 3.03081C12.5027 3.0104 12.2526 3 12 3C7.02944 3 3 7.02944 3 12C3 13.3984 3.31894 14.7223 3.88804 15.903M12.75 3.03081C17.3696 3.41192 21 7.282 21 12C21 13.8792 20.4241 15.6239 19.4391 17.0672M19.4391 17.0672L19.2628 16.5385C18.9566 15.6197 18.0968 15 17.1283 15H16.5L16.1756 14.6756C15.9031 14.4031 15.5335 14.25 15.1481 14.25C14.5977 14.25 14.0945 14.561 13.8484 15.0533L13.8119 15.1263C13.6131 15.5237 13.2567 15.8195 12.8295 15.9416L11.8408 16.2241C11.2906 16.3813 10.9461 16.9263 11.0401 17.4907L11.1131 17.9285C11.1921 18.4026 11.6022 18.75 12.0828 18.75C12.9291 18.75 13.6805 19.2916 13.9482 20.0945L14.1628 20.7384M19.4391 17.0672C18.2095 18.8688 16.3425 20.2007 14.1628 20.7384M14.1628 20.7384C13.47 20.9093 12.7456 21 12 21C8.42785 21 5.34177 18.9189 3.88804 15.903M15.7498 9C15.7498 9.89602 15.3569 10.7003 14.7341 11.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"931wA":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.05 4.575C10.05 3.70515 9.34486 3 8.47501 3C7.60516 3 6.90001 3.70515 6.90001 4.575L6.9 7.575M10.05 4.575L10.05 3.075C10.05 2.20515 10.7552 1.5 11.625 1.5C12.4949 1.5 13.2 2.20515 13.2 3.075L13.2 4.575M10.05 4.575L10.125 10.5M13.2 11.25V4.575M13.2 4.575C13.2 3.70515 13.9052 3 14.775 3C15.6449 3 16.35 3.70515 16.35 4.575V15M6.9 7.575C6.9 6.70515 6.19485 6 5.325 6C4.45515 6 3.75 6.70515 3.75 7.575V15.75C3.75 19.4779 6.77208 22.5 10.5 22.5H12.5179C13.9103 22.5 15.2456 21.9469 16.2302 20.9623L17.9623 19.2302C18.9469 18.2456 19.5 16.9103 19.5 15.5179L19.5031 13.494C19.5046 13.3209 19.5701 13.1533 19.7007 13.0227C20.3158 12.4076 20.3158 11.4104 19.7007 10.7953C19.0857 10.1802 18.0884 10.1802 17.4733 10.7953C16.7315 11.5371 16.3578 12.5111 16.3531 13.4815M6.9 7.575V12M13.17 16.318C13.5599 15.9281 14.0035 15.6248 14.477 15.4079C15.0701 15.1362 15.71 15.0003 16.35 15M16.3519 15H16.35\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"i5F8P":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.49809 15.25H4.37227C3.34564 15.25 2.4267 14.556 2.31801 13.5351C2.27306 13.1129 2.25 12.6841 2.25 12.25C2.25 9.40238 3.24188 6.78642 4.899 4.72878C5.2866 4.24749 5.88581 4 6.50377 4L10.5198 4C11.0034 4 11.4839 4.07798 11.9428 4.23093L15.0572 5.26908C15.5161 5.42203 15.9966 5.5 16.4803 5.5L17.7745 5.5M7.49809 15.25C8.11638 15.25 8.48896 15.974 8.22337 16.5323C7.75956 17.5074 7.5 18.5984 7.5 19.75C7.5 20.9926 8.50736 22 9.75 22C10.1642 22 10.5 21.6642 10.5 21.25V20.6166C10.5 20.0441 10.6092 19.4769 10.8219 18.9454C11.1257 18.1857 11.7523 17.6144 12.4745 17.2298C13.5883 16.6366 14.5627 15.8162 15.3359 14.8303C15.8335 14.1958 16.5611 13.75 17.3674 13.75H17.7511M7.49809 15.25H9.7M17.7745 5.5C17.7851 5.55001 17.802 5.59962 17.8258 5.6478C18.4175 6.84708 18.75 8.19721 18.75 9.625C18.75 11.1117 18.3895 12.5143 17.7511 13.75M17.7745 5.5C17.6975 5.13534 17.9575 4.75 18.3493 4.75H19.2571C20.1458 4.75 20.9701 5.26802 21.2294 6.11804C21.5679 7.22737 21.75 8.40492 21.75 9.625C21.75 11.1775 21.4552 12.6611 20.9185 14.0229C20.6135 14.797 19.8327 15.25 19.0006 15.25H17.9479C17.476 15.25 17.2027 14.6941 17.4477 14.2907C17.5548 14.1144 17.6561 13.934 17.7511 13.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dwDsP":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.63257 10.25C7.43892 10.25 8.16648 9.80416 8.6641 9.16967C9.43726 8.18384 10.4117 7.3634 11.5255 6.77021C12.2477 6.38563 12.8743 5.81428 13.1781 5.05464C13.3908 4.5231 13.5 3.95587 13.5 3.38338V2.75C13.5 2.33579 13.8358 2 14.25 2C15.4926 2 16.5 3.00736 16.5 4.25C16.5 5.40163 16.2404 6.49263 15.7766 7.46771C15.511 8.02604 15.8836 8.75 16.5019 8.75M16.5019 8.75H19.6277C20.6544 8.75 21.5733 9.44399 21.682 10.4649C21.7269 10.8871 21.75 11.3158 21.75 11.75C21.75 14.5976 20.7581 17.2136 19.101 19.2712C18.7134 19.7525 18.1142 20 17.4962 20H13.4802C12.9966 20 12.5161 19.922 12.0572 19.7691L8.94278 18.7309C8.48393 18.578 8.00342 18.5 7.51975 18.5H5.90421M16.5019 8.75H14.25M5.90421 18.5C5.98702 18.7046 6.07713 18.9054 6.17423 19.1022C6.37137 19.5017 6.0962 20 5.65067 20H4.74289C3.85418 20 3.02991 19.482 2.77056 18.632C2.43208 17.5226 2.25 16.3451 2.25 15.125C2.25 13.5725 2.54481 12.0889 3.08149 10.7271C3.38655 9.95303 4.16733 9.5 4.99936 9.5H6.05212C6.52404 9.5 6.7973 10.0559 6.5523 10.4593C5.72588 11.8198 5.25 13.4168 5.25 15.125C5.25 16.3185 5.48232 17.4578 5.90421 18.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"axa9o":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.25 8.25H20.25M3.75 15.75H18.75M16.95 2.25L13.05 21.75M10.9503 2.25L7.05029 21.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"l3NCU":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"freGQ":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 9H18.75M15 12H18.75M15 15H18.75M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5ZM10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375ZM11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hxyyx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 13.5H6.10942C6.96166 13.5 7.74075 13.9815 8.12188 14.7438L8.37812 15.2562C8.75925 16.0185 9.53834 16.5 10.3906 16.5H13.6094C14.4617 16.5 15.2408 16.0185 15.6219 15.2562L15.8781 14.7438C16.2592 13.9815 17.0383 13.5 17.8906 13.5H21.75M2.25 13.8383V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V13.8383C21.75 13.614 21.7165 13.391 21.6505 13.1766L19.2387 5.33831C18.9482 4.39423 18.076 3.75 17.0882 3.75H6.91179C5.92403 3.75 5.05178 4.39423 4.76129 5.33831L2.3495 13.1766C2.28354 13.391 2.25 13.614 2.25 13.8383Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"lB6If":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 3.75H6.91179C5.92403 3.75 5.05178 4.39423 4.76129 5.33831L2.3495 13.1766C2.28354 13.391 2.25 13.614 2.25 13.8383V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V13.8383C21.75 13.614 21.7165 13.391 21.6505 13.1766L19.2387 5.33831C18.9482 4.39423 18.076 3.75 17.0882 3.75H15M2.25 13.5H6.10942C6.96166 13.5 7.74075 13.9815 8.12188 14.7438L8.37812 15.2562C8.75925 16.0185 9.53834 16.5 10.3906 16.5H13.6094C14.4617 16.5 15.2408 16.0185 15.6219 15.2562L15.8781 14.7438C16.2592 13.9815 17.0383 13.5 17.8906 13.5H21.75M12 3V11.25M12 11.25L9 8.25M12 11.25L15 8.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eCq7W":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.875 14.25L9.08906 16.1925C9.50022 16.8504 10.2213 17.25 10.9971 17.25H13.0029C13.7787 17.25 14.4998 16.8504 14.9109 16.1925L16.125 14.25M2.40961 9H7.04584C7.79813 9 8.50065 9.37598 8.91795 10.0019L9.08205 10.2481C9.49935 10.874 10.2019 11.25 10.9542 11.25H13.0458C13.7981 11.25 14.5007 10.874 14.9179 10.2481L15.0821 10.0019C15.4993 9.37598 16.2019 9 16.9542 9H21.5904M2.40961 9C2.30498 9.2628 2.25 9.54503 2.25 9.83233V12C2.25 13.2426 3.25736 14.25 4.5 14.25H19.5C20.7426 14.25 21.75 13.2426 21.75 12V9.83233C21.75 9.54503 21.695 9.2628 21.5904 9M2.40961 9C2.50059 8.77151 2.62911 8.55771 2.79167 8.36805L6.07653 4.53572C6.50399 4.03702 7.12802 3.75 7.78485 3.75H16.2151C16.872 3.75 17.496 4.03702 17.9235 4.53572L21.2083 8.36805C21.3709 8.55771 21.4994 8.77151 21.5904 9M4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V15.375C21.75 14.7537 21.2463 14.25 20.625 14.25H3.375C2.75368 14.25 2.25 14.7537 2.25 15.375V18C2.25 19.2426 3.25736 20.25 4.5 20.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"6ss1a":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.75 5.25C17.4069 5.25 18.75 6.59315 18.75 8.25M21.75 8.25C21.75 11.5637 19.0637 14.25 15.75 14.25C15.3993 14.25 15.0555 14.2199 14.7213 14.1622C14.1583 14.0649 13.562 14.188 13.158 14.592L10.5 17.25H8.25V19.5H6V21.75H2.25V18.932C2.25 18.3352 2.48705 17.7629 2.90901 17.341L9.408 10.842C9.81202 10.438 9.93512 9.84172 9.83785 9.2787C9.7801 8.94446 9.75 8.60074 9.75 8.25C9.75 4.93629 12.4363 2.25 15.75 2.25C19.0637 2.25 21.75 4.93629 21.75 8.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dZi5m":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.5 21L15.75 9.75L21 21M12 18H19.5M3 5.62136C4.96557 5.37626 6.96804 5.25 9 5.25M9 5.25C10.1208 5.25 11.2326 5.28841 12.3343 5.364M9 5.25V3M12.3343 5.364C11.1763 10.6578 7.68868 15.0801 3 17.5023M12.3343 5.364C13.2298 5.42545 14.1186 5.51146 15 5.62136M10.4113 14.1162C8.78554 12.4619 7.47704 10.4949 6.58432 8.31366\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bMK7v":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 18V12.75M12 12.75C12.5179 12.75 13.0206 12.6844 13.5 12.561M12 12.75C11.4821 12.75 10.9794 12.6844 10.5 12.561M14.25 20.0394C13.5212 20.1777 12.769 20.25 12 20.25C11.231 20.25 10.4788 20.1777 9.75 20.0394M13.5 22.422C13.007 22.4736 12.5066 22.5 12 22.5C11.4934 22.5 10.993 22.4736 10.5 22.422M14.25 18V17.8083C14.25 16.8254 14.9083 15.985 15.7585 15.4917C17.9955 14.1938 19.5 11.7726 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 11.7726 6.00446 14.1938 8.24155 15.4917C9.09173 15.985 9.75 16.8254 9.75 17.8083V18\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"isIgL":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.1903 8.68842C13.6393 8.90291 14.0601 9.19611 14.432 9.56802C16.1893 11.3254 16.1893 14.1746 14.432 15.932L9.93198 20.432C8.17462 22.1893 5.32538 22.1893 3.56802 20.432C1.81066 18.6746 1.81066 15.8254 3.56802 14.068L5.32499 12.311M18.675 11.689L20.432 9.93198C22.1893 8.17462 22.1893 5.32538 20.432 3.56802C18.6746 1.81066 15.8254 1.81066 14.068 3.56802L9.56802 8.06802C7.81066 9.82538 7.81066 12.6746 9.56802 14.432C9.93992 14.8039 10.3607 15.0971 10.8097 15.3116\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"j3iAc":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.25 6.75H20.25M8.25 12H20.25M8.25 17.25H20.25M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75ZM3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12ZM3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"lQ9s6":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"e8GV5":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.5 10.5V6.75C13.5 4.26472 15.5147 2.25 18 2.25C20.4853 2.25 22.5 4.26472 22.5 6.75V10.5M3.75 21.75H14.25C15.4926 21.75 16.5 20.7426 16.5 19.5V12.75C16.5 11.5074 15.4926 10.5 14.25 10.5H3.75C2.50736 10.5 1.5 11.5074 1.5 12.75V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"7AReM":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM13.5 10.5H7.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"k4yNb":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM10.5 7.5V13.5M13.5 10.5H7.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"5cZvL":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"l1Gm3":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"idhSu":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 6.75002V15M15 9.00002V17.25M15.5031 20.7485L20.3781 18.311C20.7592 18.1204 21 17.7309 21 17.3047V4.82031C21 3.98401 20.1199 3.44007 19.3719 3.81408L15.5031 5.74847C15.1864 5.90683 14.8136 5.90683 14.4969 5.74847L9.50312 3.25158C9.1864 3.09322 8.8136 3.09322 8.49688 3.25158L3.62188 5.68908C3.24075 5.87965 3 6.26919 3 6.69531V19.1797C3 20.016 3.8801 20.56 4.62811 20.186L8.49688 18.2516C8.8136 18.0932 9.1864 18.0932 9.50312 18.2516L14.4969 20.7485C14.8136 20.9068 15.1864 20.9068 15.5031 20.7485Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4776E":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.3404 15.8398C9.65153 15.7803 8.95431 15.75 8.25 15.75H7.5C5.01472 15.75 3 13.7353 3 11.25C3 8.76472 5.01472 6.75 7.5 6.75H8.25C8.95431 6.75 9.65153 6.71966 10.3404 6.66022M10.3404 15.8398C10.5933 16.8015 10.9237 17.7317 11.3246 18.6234C11.5721 19.1738 11.3842 19.8328 10.8616 20.1345L10.2053 20.5134C9.6539 20.8318 8.9456 20.6306 8.67841 20.0527C8.0518 18.6973 7.56541 17.2639 7.23786 15.771M10.3404 15.8398C9.95517 14.3745 9.75 12.8362 9.75 11.25C9.75 9.66379 9.95518 8.1255 10.3404 6.66022M10.3404 15.8398C13.5 16.1124 16.4845 16.9972 19.1747 18.3749M10.3404 6.66022C13.5 6.3876 16.4845 5.50283 19.1747 4.12509M19.1747 4.12509C19.057 3.74595 18.9302 3.37083 18.7944 3M19.1747 4.12509C19.7097 5.84827 20.0557 7.65462 20.1886 9.51991M19.1747 18.3749C19.057 18.7541 18.9302 19.1292 18.7944 19.5M19.1747 18.3749C19.7097 16.6517 20.0557 14.8454 20.1886 12.9801M20.1886 9.51991C20.6844 9.93264 21 10.5545 21 11.25C21 11.9455 20.6844 12.5674 20.1886 12.9801M20.1886 9.51991C20.2293 10.0913 20.25 10.6682 20.25 11.25C20.25 11.8318 20.2293 12.4087 20.1886 12.9801\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"kTVle":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"301q0":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21.7519 15.0021C20.597 15.484 19.3296 15.7501 18 15.7501C12.6152 15.7501 8.25 11.3849 8.25 6.00011C8.25 4.67052 8.51614 3.40308 8.99806 2.24817C5.47566 3.71798 3 7.19493 3 11.2501C3 16.6349 7.36522 21.0001 12.75 21.0001C16.8052 21.0001 20.2821 18.5245 21.7519 15.0021Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"c1wDk":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 7.5H13.5M12 10.5H13.5M6 13.5H13.5M6 16.5H13.5M16.5 7.5H19.875C20.4963 7.5 21 8.00368 21 8.625V18C21 19.2426 19.9926 20.25 18.75 20.25M16.5 7.5V18C16.5 19.2426 17.5074 20.25 18.75 20.25M16.5 7.5V4.875C16.5 4.25368 15.9963 3.75 15.375 3.75H4.125C3.50368 3.75 3 4.25368 3 4.875V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75M6 7.5H9V10.5H6V7.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"7AC0t":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"dMc4J":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.99972 12L3.2688 3.12451C9.88393 5.04617 16.0276 8.07601 21.4855 11.9997C16.0276 15.9235 9.884 18.9535 3.26889 20.8752L5.99972 12ZM5.99972 12L13.5 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9aFwu":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.375 12.739L10.682 20.432C8.92462 22.1893 6.07538 22.1893 4.31802 20.432C2.56066 18.6746 2.56066 15.8254 4.31802 14.068L15.2573 3.12868C16.4289 1.95711 18.3283 1.95711 19.4999 3.12868C20.6715 4.30025 20.6715 6.19975 19.4999 7.37132L8.55158 18.3197M8.56066 18.3107C8.55764 18.3137 8.55462 18.3167 8.55158 18.3197M14.2498 8.37865L6.43934 16.1893C5.85355 16.7751 5.85355 17.7249 6.43934 18.3107C7.02211 18.8934 7.9651 18.8964 8.55158 18.3197\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"cRH1U":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8ut5b":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9Zx5v":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.25 6.75C2.25 15.0343 8.96573 21.75 17.25 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V18.1284C21.75 17.6121 21.3987 17.1622 20.8979 17.037L16.4747 15.9312C16.0355 15.8214 15.5734 15.9855 15.3018 16.3476L14.3316 17.6412C14.05 18.0166 13.563 18.1827 13.1223 18.0212C9.81539 16.8098 7.19015 14.1846 5.97876 10.8777C5.81734 10.437 5.98336 9.94998 6.3588 9.6684L7.65242 8.69818C8.01453 8.4266 8.17861 7.96445 8.06883 7.52533L6.96304 3.10215C6.83783 2.60133 6.38785 2.25 5.87163 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V6.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"eXlPH":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.25 9.75V5.25M14.25 9.75L18.75 9.75M14.25 9.75L20.25 3.75M17.25 21.75C8.96573 21.75 2.25 15.0343 2.25 6.75V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H5.87163C6.38785 2.25 6.83783 2.60133 6.96304 3.10215L8.06883 7.52533C8.17861 7.96445 8.01453 8.4266 7.65242 8.69818L6.3588 9.6684C5.98336 9.94998 5.81734 10.437 5.97876 10.8777C7.19015 14.1846 9.81539 16.8098 13.1223 18.0212C13.563 18.1827 14.05 18.0166 14.3316 17.6412L15.3018 16.3476C15.5734 15.9855 16.0355 15.8214 16.4747 15.9312L20.8979 17.037C21.3987 17.1622 21.75 17.6121 21.75 18.1284V19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H17.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"l3WYE":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.25 3.75V8.25M20.25 3.75H15.75M20.25 3.75L14.25 9.75M17.25 21.75C8.96573 21.75 2.25 15.0343 2.25 6.75V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H5.87163C6.38785 2.25 6.83783 2.60133 6.96304 3.10215L8.06883 7.52533C8.17861 7.96445 8.01453 8.4266 7.65242 8.69818L6.3588 9.6684C5.98336 9.94998 5.81734 10.437 5.97876 10.8777C7.19015 14.1846 9.81539 16.8098 13.1223 18.0212C13.563 18.1827 14.05 18.0166 14.3316 17.6412L15.3018 16.3476C15.5734 15.9855 16.0355 15.8214 16.4747 15.9312L20.8979 17.037C21.3987 17.1622 21.75 17.6121 21.75 18.1284V19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H17.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"liadF":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 4.5V19.5M19.5 12L4.5 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9Mlei":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"65Z0p":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 12H19\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2Z4AB":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"7zzGl":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.75 12H20.25M3.75 15.75H20.25M3.75 19.5H20.25M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hDZyi":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 4.5V19.5M15 4.5V19.5M4.125 19.5H19.875C20.4963 19.5 21 18.9963 21 18.375V5.625C21 5.00368 20.4963 4.5 19.875 4.5H4.125C3.50368 4.5 3 5.00368 3 5.625V18.375C3 18.9963 3.50368 19.5 4.125 19.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"8Tbgz":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.87891 7.51884C11.0505 6.49372 12.95 6.49372 14.1215 7.51884C15.2931 8.54397 15.2931 10.206 14.1215 11.2312C13.9176 11.4096 13.6917 11.5569 13.4513 11.6733C12.7056 12.0341 12.0002 12.6716 12.0002 13.5V14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 17.25H12.0075V17.2575H12V17.25Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"hYs18":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.5904 14.3696C15.6948 14.8128 15.75 15.275 15.75 15.75C15.75 19.0637 13.0637 21.75 9.75 21.75V16.9503M15.5904 14.3696C19.3244 11.6411 21.75 7.22874 21.75 2.25C16.7715 2.25021 12.3595 4.67586 9.63122 8.40975M15.5904 14.3696C13.8819 15.6181 11.8994 16.514 9.75 16.9503M9.63122 8.40975C9.18777 8.30528 8.72534 8.25 8.25 8.25C4.93629 8.25 2.25 10.9363 2.25 14.25H7.05072M9.63122 8.40975C8.38285 10.1183 7.48701 12.1007 7.05072 14.25M9.75 16.9503C9.64659 16.9713 9.54279 16.9912 9.43862 17.0101C8.53171 16.291 7.70991 15.4692 6.99079 14.5623C7.00969 14.4578 7.02967 14.3537 7.05072 14.25M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881M16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"amZek":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 3V20.25M12 20.25C10.528 20.25 9.1179 20.515 7.81483 21M12 20.25C13.472 20.25 14.8821 20.515 16.1852 21M18.75 4.97089C16.5446 4.66051 14.291 4.5 12 4.5C9.70897 4.5 7.45542 4.66051 5.25 4.97089M18.75 4.97089C19.7604 5.1131 20.7608 5.28677 21.75 5.49087M18.75 4.97089L21.3704 15.6961C21.4922 16.1948 21.2642 16.7237 20.7811 16.8975C20.1468 17.1257 19.4629 17.25 18.75 17.25C18.0371 17.25 17.3532 17.1257 16.7189 16.8975C16.2358 16.7237 16.0078 16.1948 16.1296 15.6961L18.75 4.97089ZM2.25 5.49087C3.23922 5.28677 4.23956 5.1131 5.25 4.97089M5.25 4.97089L7.87036 15.6961C7.9922 16.1948 7.76419 16.7237 7.28114 16.8975C6.6468 17.1257 5.96292 17.25 5.25 17.25C4.53708 17.25 3.8532 17.1257 3.21886 16.8975C2.73581 16.7237 2.5078 16.1948 2.62964 15.6961L5.25 4.97089Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"4TUiK":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"9N1yE":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6 18L18 6M6 6L18 18\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"6IMvY":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.21721 10.9071C6.83295 10.2169 6.096 9.75 5.25 9.75C4.00736 9.75 3 10.7574 3 12C3 13.2426 4.00736 14.25 5.25 14.25C6.096 14.25 6.83295 13.7831 7.21721 13.0929M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071M16.7828 18.4071C16.6026 18.7307 16.5 19.1034 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.904 17.25 17.1671 17.7169 16.7828 18.4071ZM16.7828 5.5929C17.1671 6.28309 17.904 6.75 18.75 6.75C19.9926 6.75 21 5.74264 21 4.5C21 3.25736 19.9926 2.25 18.75 2.25C17.5074 2.25 16.5 3.25736 16.5 4.5C16.5 4.89664 16.6026 5.26931 16.7828 5.5929Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"gFpsN":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.114 5.63597C22.6287 9.15069 22.6287 14.8492 19.114 18.3639M16.4626 8.28771C18.5129 10.338 18.5129 13.6621 16.4626 15.7123M6.75 8.24999L11.4697 3.53032C11.9421 3.05784 12.75 3.39247 12.75 4.06065V19.9393C12.75 20.6075 11.9421 20.9421 11.4697 20.4697L6.75 15.75H4.50905C3.62971 15.75 2.8059 15.2435 2.57237 14.3957C2.36224 13.6329 2.25 12.8296 2.25 12C2.25 11.1704 2.36224 10.367 2.57237 9.60423C2.8059 8.75646 3.62971 8.24999 4.50905 8.24999H6.75Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"jOgmx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"bF4PR":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 8.68867C3 7.82487 3.93317 7.28334 4.68316 7.7119L11.7906 11.7733C12.5464 12.2052 12.5464 13.295 11.7906 13.7269L4.68316 17.7883C3.93317 18.2169 3 17.6753 3 16.8115V8.68867Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M12.75 8.68867C12.75 7.82487 13.6832 7.28334 14.4332 7.7119L21.5406 11.7733C22.2964 12.2052 22.2964 13.295 21.5406 13.7269L14.4332 17.7883C13.6832 18.2169 12.75 17.6753 12.75 16.8115V8.68867Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"2sWCx":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21 16.8115C21 17.6753 20.0668 18.2169 19.3169 17.7883L12.2094 13.7269C11.4536 13.295 11.4536 12.2052 12.2094 11.7733L19.3169 7.7119C20.0668 7.28334 21 7.82487 21 8.68867V16.8115Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M11.25 16.8115C11.25 17.6753 10.3168 18.2169 9.56685 17.7883L2.45936 13.7269C1.70357 13.295 1.70357 12.2052 2.45936 11.7733L9.56685 7.7119C10.3168 7.28334 11.25 7.82487 11.25 8.68867L11.25 16.8115Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"lrDzh":[function(require,module,exports) {
module.exports = "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.0228 9.34841H21.0154V9.34663M2.98413 19.6444V14.6517M2.98413 14.6517L7.97677 14.6517M2.98413 14.6517L6.16502 17.8347C7.15555 18.8271 8.41261 19.58 9.86436 19.969C14.2654 21.1483 18.7892 18.5364 19.9685 14.1353M4.03073 9.86484C5.21 5.46374 9.73377 2.85194 14.1349 4.03121C15.5866 4.4202 16.8437 5.17312 17.8342 6.1655L21.0154 9.34663M21.0154 4.3558V9.34663\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n";

},{}],"UhlEf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Id", ()=>Id);
function makeId(characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", length = 5) {
    let result = "";
    let actualLength = length;
    const char = characters;
    for(let i = 0; i < actualLength; i++)result += char.charAt(Math.floor(Math.random() * characters.length));
    return result;
}
const Id = {
    Generate: {
        int: (length)=>{
            const characters = "0123456789";
            return makeId(characters, length);
        },
        hex: (length)=>{
            const characters = "0123456789abcdef";
            return makeId(characters, length);
        },
        alphanumeric: (length)=>{
            const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return makeId(characters, length);
        },
        random: (length)=>{
            const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
            return makeId(characters, Math.floor(Math.random() * length));
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hamB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "String", ()=>String);
const String = {
    snakeToCamel: function snakeToCamel(str) {
        return str.replace(/_([a-z])/g, (match, letter)=>letter.toUpperCase());
    },
    toHtml: (string)=>{
        // Replace spaces and special characters with hyphens
        const slug = string.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return slug;
    },
    toCamelCase: (string)=>{
        const words = string.split(/[\s-]+/);
        const camelCaseString = words.map((word, index)=>{
            if (index === 0) return word.toLowerCase(); // Keep the first word in lowercase
            else return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join("");
        return camelCaseString;
    },
    removeWhitespace: function removeWhitespace(string) {
        return string.replace(/\s+/g, "");
    },
    trimWhitespace: function trimWhitespace(string) {
        return string.replace(/^\s+|\s+$/g, "");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dAm7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Copy", ()=>Copy);
const Copy = {
    /**
   * @name toElement
   * @param elementId
   * @returns
   * @description
   * this function copies
   */ toElement: (trigger = "click", button = '[copy-element="trigger"]', targetAreaId = '[copy-element="target"]', fromAreaSelector = '[copy-element="origin"]')=>{
        const targetArea = document.querySelector(targetAreaId);
        const copyButton = document.querySelector(button);
        const fromArea = document.querySelector(fromAreaSelector);
        if (copyButton) copyButton.addEventListener(trigger, (event)=>{
            // Prevent default form submission behavior if trigger is "submit"
            if (trigger === "submit") event.preventDefault();
            if (!targetArea) {
                console.error(`Target area with ID '${targetAreaId}' not found.`);
                return;
            }
            const fromArea = document.querySelector(fromAreaSelector);
            if (!fromArea) {
                console.error(`Source area with selector '${fromAreaSelector}' not found.`);
                return;
            }
            targetArea.innerHTML = fromArea.innerHTML; // Use .value to get input value
            console.log("Content copied to target area.");
        });
        else console.error("Copy button not found.");
    },
    /**
   * @name toClipboard
   * @param targetElement
   * @description
   * This function copies the content of an element to the clipboard when the element is clicked.
   * @example
   * <div data-copy-area="copy-me">Copy me</div>
   * <button data-copy-trigger="copy-me">Copy</button>
   */ toClipboard: (trigger = "click", triggerAttribute = "copy-clipboard=trigger", targetElementAttribute = "copy-clipboard=target")=>{
        // Define the copy function separately
        const copyToClipboard = ()=>{
            // Select the element to be copied
            const copyElement = document.querySelector(`[${targetElementAttribute}]`);
            if (!copyElement) return; // Abort if element not found
            // Create a range to select the element's content
            const range = document.createRange();
            range.selectNode(copyElement);
            // Clear any existing selection and select the element's content
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            // Copy the selected content to the clipboard
            document.execCommand("copy");
            // Clean up by deselecting the content
            window.getSelection().removeAllRanges();
        };
        // Listen for clicks on elements with data-copy-trigger attribute
        document.addEventListener(trigger, (event)=>{
            const clickedElement = event.target;
            console.log("Clicked element:", clickedElement, "Trigger attribute:", triggerAttribute);
            if (clickedElement.hasAttribute(`${triggerAttribute}`)) {
                console.log("Copy button clicked");
                copyToClipboard(); // Call the copy function
                console.log("Copied to clipboard");
            } else console.log("No copy button clicked");
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8K745":[function(require,module,exports) {
/**
 * @name runAudio()
 * @version 1.0
 * @author luca mack
 * @description provides an API to insert an audioplayer element on a website by just adding HTML attributes to elements
 * @link https://github.com/LucaIsMyName/audioplayer.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audioAPI", ()=>audioAPI);
function audioAPI() {
    function initializeAudioPlayer(player) {
        // Container Elements for Controls and Playlist
        const controls = player.querySelector("[audio-controls]");
        const playlist = player.querySelector("[audio-playlist]");
        // Elements where the current Track Infos are renderd in
        const currentTrackImage = player.querySelector('[audio-current="cover"]');
        const currentTrackTitle = player.querySelector('[audio-current="title"]');
        const currentArtistTitle = player.querySelector('[audio-current="artist"]');
        // Controls
        const playPauseButton = controls.querySelector('[audio-control="play-pause"]');
        const prevButton = controls.querySelector('[audio-control="prev"]');
        const nextButton = controls.querySelector('[audio-control="next"]');
        const repeatPlaylistButton = controls.querySelector('[audio-control="repeat-playlist"]');
        const repeatTrackButton = controls.querySelector('[audio-control="repeat-track"]');
        const volumeInput = controls.querySelector('[audio-control="volume"]');
        const muteUnmuteButton = controls.querySelector('[audio-control="mute-unmute"]');
        const progressBar = controls.querySelector('[audio-control="progress-bar"]');
        const trackItems = Array.from(playlist.querySelectorAll("[audio-track][audio-track-url]"));
        let currentTrackIndex = 0;
        let audio = new Audio();
        function initializeControl(selector, action) {
            const control = controls.querySelector(selector);
            if (control) action(control);
        }
        /**
     * @name loadTrackDetails
     * @param {number} index
     */ function loadTrackDetails(index) {
            const trackItem = trackItems[index];
            if (!trackItem) {
                console.error("Track item is undefined. Index:", index);
                return;
            }
            const trackURL = trackItem.getAttribute("audio-track-url");
            if (!trackURL) {
                console.error("Track URL is missing for index:", index);
                return;
            }
            audio.src = trackURL;
            const trackImage = trackItem.querySelector('[audio-track="cover"]');
            const trackTitle = trackItem.querySelector('[audio-track="title"]');
            const artistTitle = trackItem.querySelector('[audio-track="artist"]');
            if (currentTrackImage && trackImage) currentTrackImage.src = trackImage.src;
            else console.log("Track image not found for index:", index);
            if (trackTitle) currentTrackTitle.textContent = trackTitle.textContent;
            else console.log("Track title not found for index:", index);
            if (artistTitle) currentArtistTitle.textContent = artistTitle.textContent;
            else console.log("Artist title not found for index:", index);
            playPauseButton.setAttribute("audio-current-state", "pause");
        }
        trackItems.forEach((trackItem, index)=>{
            trackItem.addEventListener("click", ()=>{
                currentTrackIndex = index;
                loadTrackDetails(index);
                playPauseButton.setAttribute("audio-current-state", "play");
                audio.play();
            });
        });
        function loadAndPlayTrack(index) {
            currentTrackIndex = index;
            loadTrackDetails(index);
            audio.play().then(()=>{
                playPauseButton.setAttribute("audio-current-state", "play");
            }).catch((error)=>{});
        }
        initializeControl('[audio-control="play-pause"]', (control)=>{
            control.addEventListener("click", ()=>{
                if (audio.paused) {
                    audio.play();
                    control.setAttribute("audio-current-state", "play");
                } else {
                    audio.pause();
                    control.setAttribute("audio-current-state", "pause");
                }
            });
        });
        initializeControl('[audio-control="prev"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentTrackIndex = (currentTrackIndex - 1 + trackItems.length) % trackItems.length;
                loadAndPlayTrack(currentTrackIndex);
            });
        });
        initializeControl('[audio-control="next"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
                loadAndPlayTrack(currentTrackIndex);
            });
        });
        // Function to toggle repeat playlist
        function toggleRepeatPlaylist() {
            audio.loop = false; // Disable track looping
            repeatPlaylistButton.classList.toggle("active");
            // Logic to repeat the playlist
            audio.onended = ()=>{
                if (repeatPlaylistButton.classList.contains("active")) {
                    currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
                    loadAndPlayTrack(currentTrackIndex);
                }
            };
        }
        // Function to toggle repeat track
        function toggleRepeatTrack() {
            repeatTrackButton.setAttribute("audio-repeat-track", "true");
            audio.loop = repeatTrackButton.getAttribute("audio-repeat-track").contains("active");
        }
        // Function to update volume
        function updateVolume() {
            audio.volume = volumeInput.value / 100;
        }
        // Function to toggle mute/unmute
        function toggleMuteUnmute() {
            audio.muted = !audio.muted;
            if (!audio.muted) muteUnmuteButton.setAttribute("audio-muted", "false");
            else muteUnmuteButton.setAttribute("audio-muted", "true");
        }
        progressBar.value = 0;
        function updateProgressBar() {
            const duration = audio.duration;
            if (duration > 0) progressBar.value = audio.currentTime / duration * 100;
        }
        // Attach timeupdate event listener to audio element
        audio.addEventListener("timeupdate", updateProgressBar);
        function seekTrack(event) {
            const progressBarRect = progressBar.getBoundingClientRect();
            const seekTime = (event.clientX - progressBarRect.left) / progressBarRect.width * audio.duration;
            audio.currentTime = seekTime;
        }
        if (trackItems.length > 0) loadTrackDetails(currentTrackIndex);
        // Check if the mathcing attribute is available in the DOM and Add event listeners
        initializeControl('[audio-control="repeat-playlist"]', (control)=>{
            control.addEventListener("click", toggleRepeatPlaylist);
        });
        initializeControl('[audio-control="repeat-track"]', (control)=>{
            control.addEventListener("click", toggleRepeatTrack);
        });
        initializeControl('[audio-control="volume"]', (control)=>{
            control.addEventListener("click", updateVolume);
        });
        initializeControl('[audio-control="mute-unmute"]', (control)=>{
            control.addEventListener("click", toggleMuteUnmute);
        });
        initializeControl('[audio-control="progress-bar"]', (control)=>{
            control.addEventListener("click", seekTrack);
        });
        initializeControl('[audio-control="progress-bar"]', (control)=>{
            control.addEventListener("input", (event)=>{
                const duration = audio.duration;
                if (duration > 0) {
                    const value = event.target.value;
                    audio.currentTime = value / 100 * duration;
                }
            });
        });
        initializeControl('[audio-control="prev"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentTrackIndex = (currentTrackIndex + trackItems.length) % trackItems.length;
                loadAndPlayTrack(currentTrackIndex);
            });
        });
        initializeControl('[audio-control="next"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentTrackIndex = currentTrackIndex % trackItems.length;
                loadAndPlayTrack(currentTrackIndex);
            });
        });
        // Initialize the player with the first track
        loadAndPlayTrack(currentTrackIndex);
    }
    // Initialize all audio players on the page
    const audioPlayers = document.querySelectorAll("[audio]");
    audioPlayers.forEach((player)=>{
        initializeAudioPlayer(player);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmuKk":[function(require,module,exports) {
/**
 * @name runVideo()
 * @version 1.0
 * @description provides an API to insert a video player element on a website by just adding HTML attributes to elements
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "videoAPI", ()=>videoAPI);
function videoAPI() {
    function initializeVideoPlayer(player) {
        // Container Elements for Controls and Playlist
        const controls = player.querySelector("[video-controls]");
        // Elements where the current Video Infos are rendered in
        const currentVideoTitle = player.querySelector("[video-current='title']");
        const currentVideoPoster = player.querySelector("[video-current='poster']");
        const currentVideoUrl = player.querySelector("[video-current='url']");
        const currentVideoArtist = player.querySelector("[video-current='artist']");
        // Controls
        const playPauseButton = controls.querySelector('[video-control="play-pause"]');
        const prevButton = controls.querySelector('[video-control="prev"]');
        const nextButton = controls.querySelector('[video-control="next"]');
        const volumeInput = controls.querySelector('[video-control="volume"]');
        const muteUnmuteButton = controls.querySelector('[video-control="mute-unmute"]');
        const progressBar = controls.querySelector('[video-control="progress-bar"]');
        const playlist = player.querySelector("[video-playlist]");
        const videoItems = Array.from(playlist.querySelectorAll("[video-playlist-item][video-playlist-item-url]"));
        let currentVideoIndex = 0;
        let video = player.querySelector("video");
        function initializeControl(selector, action) {
            const control = controls.querySelector(selector);
            if (control) action(control);
        }
        function loadVideoDetails(index) {
            const videoItem = videoItems[index];
            if (!videoItem) {
                console.error("Video item is undefined. Index:", index);
                return;
            }
            const videoURL = videoItem.getAttribute("video-playlist-item-url");
            if (!videoURL) {
                console.error("Video URL is missing for index:", index);
                return;
            }
            video.src = videoURL;
            /**
       * @name loadVideoDetails
       * @param {number} index
       * @description
       * Load the video details from the playlist
       */ const videoTitle = videoItem.querySelector('[video-playlist-item="title"]');
            const videoArtist = videoItem.querySelector('[video-playlist-item="artist"]');
            const videoPoster = videoItem.querySelector('[video-playlist-item="poster"]');
            const videoUrl = videoItem.querySelector('[video-playlist-item="url"]');
            if (videoTitle) currentVideoTitle.textContent = videoTitle.textContent;
            else console.log("Video title not found for index:", index);
            if (videoArtist) currentVideoArtist.textContent = videoArtist.textContent;
            else console.log("Video artist not found for index:", index);
            if (videoPoster) currentVideoPoster.textContent = videoPoster.textContent;
            else console.log("Video poster not found for index:", index);
            if (videoUrl) currentVideoUrl.src = videoUrl.textContent;
            else console.log("Video poster not found for index:", index);
            playPauseButton.setAttribute("video-current-state", "pause");
        }
        videoItems.forEach((videoItem, index)=>{
            videoItem.addEventListener("click", ()=>{
                currentVideoIndex = index;
                loadVideoDetails(index);
                playPauseButton.setAttribute("video-current-state", "play");
                video.play();
            });
        });
        function loadAndPlayVideo(index) {
            currentVideoIndex = index;
            loadVideoDetails(index);
            video.play().then(()=>{
                playPauseButton.setAttribute("video-current-state", "play");
            }).catch((error)=>{});
        }
        initializeControl('[video-control="play-pause"]', (control)=>{
            control.addEventListener("click", ()=>{
                if (video.paused) {
                    video.play();
                    control.setAttribute("video-current-state", "play");
                } else {
                    video.pause();
                    control.setAttribute("video-current-state", "pause");
                }
            });
        });
        initializeControl('[video-control="prev"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentVideoIndex = (currentVideoIndex - 1 + videoItems.length) % videoItems.length;
                loadAndPlayVideo(currentVideoIndex);
            });
        });
        initializeControl('[video-control="next"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentVideoIndex = (currentVideoIndex + 1) % videoItems.length;
                loadAndPlayVideo(currentVideoIndex);
            });
        });
        // Function to update volume
        function updateVolume() {
            video.volume = volumeInput.value / 100;
        }
        // Function to toggle mute/unmute
        function toggleMuteUnmute() {
            video.muted = !video.muted;
            if (!video.muted) muteUnmuteButton.setAttribute("video-muted", "false");
            else muteUnmuteButton.setAttribute("video-muted", "true");
        }
        progressBar.value = 0;
        function updateProgressBar() {
            const duration = video.duration;
            if (duration > 0) progressBar.value = video.currentTime / duration * 100;
        }
        // Attach timeupdate event listener to video element
        video.addEventListener("timeupdate", updateProgressBar);
        function seekVideo(event) {
            const progressBarRect = progressBar.getBoundingClientRect();
            const seekTime = (event.clientX - progressBarRect.left) / progressBarRect.width * video.duration;
            video.currentTime = seekTime;
        }
        // Add event listeners
        initializeControl('[video-control="volume"]', (control)=>{
            control.addEventListener("click", updateVolume);
        });
        initializeControl('[video-control="mute-unmute"]', (control)=>{
            control.addEventListener("click", toggleMuteUnmute);
        });
        initializeControl('[video-control="progress-bar"]', (control)=>{
            control.addEventListener("click", seekVideo);
        });
        initializeControl('[video-control="progress-bar"]', (control)=>{
            control.addEventListener("input", (event)=>{
                const duration = video.duration;
                if (duration > 0) {
                    const value = event.target.value;
                    video.currentTime = value / 100 * duration;
                }
            });
        });
        initializeControl('[video-control="prev"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentVideoIndex = (currentVideoIndex + videoItems.length) % videoItems.length;
                loadAndPlayVideo(currentVideoIndex);
            });
        });
        initializeControl('[video-control="next"]', (control)=>{
            control.addEventListener("click", ()=>{
                currentVideoIndex = currentVideoIndex % videoItems.length;
                loadAndPlayVideo(currentVideoIndex);
            });
        });
        // Initialize the player with the first video
        loadAndPlayVideo(currentVideoIndex);
    }
    // Initialize all video players on the page
    const videoPlayers = document.querySelectorAll("[video]");
    videoPlayers.forEach((player)=>{
        initializeVideoPlayer(player);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bshMI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Object", ()=>Object);
const Object = {
    /**
   * @name create
   * @param elementType
   * @returns {HTMLElement}
   * @description Create a new element
   * @example
   * const newElement = Object.create("div");
   */ create: (elementType = "div")=>{
        return document.createElement(elementType);
    },
    /**
   * @name insert
   * @param element
   * @param parent
   * @description Insert an element into the DOM
   * @example
   * Object.insert(newElement, parentElement);
   */ insert: (element, parent = document.querySelector("body"))=>{
        parent.appendChild(element);
    },
    /**
   * @name remove
   * @param element
   * @param parent
   * @description Remove an element from the DOM
   * @example
   * Object.remove(newElement, parentElement);
   */ remove: (element, parent)=>{
        if (parent) parent.removeChild(element);
        else element.remove();
    },
    Add: {
        /**
     * @name attribute
     * @param element 
     * @param attribute 
     * @param value 
     * @description Add an attribute to an element
     * @example
     * Object.Add.attribute(newElement, "id", "new-id");
     */ attribute: (element, attribute, value)=>{
            element.setAttribute(attribute, value);
        },
        /**
     * @name id
     * @param element 
     * @param id
     * @description Add an id to an element
     * @example
     * Object.Add.id(newElement, "new-id"); 
     */ id: (element, id)=>{
            element.id = id;
        },
        /**
     * @name class
     * @param element 
     * @param className 
     * @description Add a class to an element
     * @example
     * Object.Add.class(newElement, "new-class");
     */ class: (element, className)=>{
            element.classList.add(className);
        }
    },
    Delete: {
        /**
     * @name attribute
     * @param element 
     * @param attribute 
     * @description Remove an attribute from an element
     * @example
     * Object.Delete.attribute(newElement, "id");
     */ attribute: (element, attribute)=>{
            element.removeAttribute(attribute);
        },
        /**
     * @name id
     * @param element 
     * @description Remove an id from an element
     * @example
     * Object.Delete.id(newElement);
     */ id: (element)=>{
            element.id = "";
        },
        /**
     * @name class
     * @param element 
     * @param className
     * @description Remove a class from an element
     * @example
     * Object.Delete.class(newElement, "new-class"); 
     */ class: (element, className)=>{
            element.classList.remove(className);
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVDc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AccordionGroup", ()=>(0, _accordionGroup.CpxAccordionGroup));
parcelHelpers.export(exports, "AccordionItem", ()=>(0, _accordionItem.CpxAccordionItem));
var _accordionGroup = require("./AccordionGroup");
var _accordionItem = require("./AccordionItem");

},{"./AccordionGroup":"cE22T","./AccordionItem":"9BBKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cE22T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxAccordionGroup
 * @extends CpxElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 * @property {any} storage - A reference to the Storage class. This is used to store data in the browser's local storage.
 * @property {any} state - A reference to the State class. This is used to store the state of the component.
 */ parcelHelpers.export(exports, "CpxAccordionGroup", ()=>CpxAccordionGroup);
var _element = require("../../element");
var _id = require("../../utils/id");
class CpxAccordionGroup extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("accordion-group:class") || "";
    }
    connectedCallback() {
        this.render();
        this.animateAccordionContent();
    }
    animateAccordionContent() {
        /**
     * If any <summary> is clicked, expland the correspong details element and close ALL other that are open  inside the same <accorion-group> element, leave all other <accordion-group> element untouched
     */ this.addEventListener("click", (e)=>{
            if (e.target.tagName === "SUMMARY") {
                const accordionGroup = e.target.closest("accordion-group");
                const details = e.target.closest("details");
                const allDetails = accordionGroup.querySelectorAll("details");
                allDetails.forEach((detail)=>{
                    if (detail !== details) detail.removeAttribute("open");
                });
                this.render();
            }
        });
    }
    render() {
        this.innerHTML = `
    <section accordion-group:id="${(0, _id.Id).Generate.hex(12)}" class="display:block ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
    }
}
customElements.define(`accordion-group`, CpxAccordionGroup);

},{"../../element":"7TddR","../../utils/id":"UhlEf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BBKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxAccordionItem", ()=>CpxAccordionItem);
var _element = require("../../element");
var _id = require("../../utils/id");
var _icons = require("../../utils/icons");
class CpxAccordionItem extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("accordion-item:class") || "";
        this.title = this.getAttribute("accordion-item:title") || "Accordion Item Title";
        this.titleType = this.getAttribute("accordion-item:title:type") || "h3";
    }
    render() {
        this.innerHTML = `
    <details accordion-item:id="${(0, _id.Id).Generate.hex(6)}" class="${this.classNames} mb:4 border-b-width:1 border-color:gray-400 py:2 mt:4">
        <summary class="cursor:pointer display:flex items:center  ">
            <div class="">${this.title}</div>
            <div class="w:6 h:6">
              ${this.querySelector("details")?.hasAttribute("open") === true ? `${(0, _icons.Icon).chevronUp}` : ``}
              ${this.querySelector("details")?.hasAttribute("open") === false ? `${(0, _icons.Icon).chevronDown}` : ``}
            </div>
        </summary>
        <div class="py:4">
          <text-element>${this.initialContent}</text-element>
        </div>
    </details>
        `;
    }
}
customElements.define(`accordion-item`, CpxAccordionItem);

},{"../../element":"7TddR","../../utils/id":"UhlEf","../../utils/icons":"bLiR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4F7iZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AudioPlayer", ()=>(0, _audioPlayer.CpxAudioPlayer));
parcelHelpers.export(exports, "AudioCurrent", ()=>(0, _audioCurrent.CpxAudioCurrent));
parcelHelpers.export(exports, "AudioPlaylist", ()=>(0, _audioPlaylist.CpxAudioPlaylist));
parcelHelpers.export(exports, "AudioPlaylistItem", ()=>(0, _audioPlaylistItem.CpxAudioPlaylistItem));
parcelHelpers.export(exports, "AudioControls", ()=>(0, _audioControls.CpxAudioControls));
parcelHelpers.export(exports, "AudioControl", ()=>(0, _audioControl.CpxAudioControl));
var _audioPlayer = require("./AudioPlayer");
var _audioCurrent = require("./AudioCurrent");
var _audioPlaylist = require("./AudioPlaylist");
var _audioPlaylistItem = require("./AudioPlaylistItem");
var _audioControls = require("./AudioControls");
var _audioControl = require("./AudioControl");

},{"./AudioPlayer":"c5wpY","./AudioCurrent":"6ezGA","./AudioPlaylist":"8Yy21","./AudioPlaylistItem":"gcaDD","./AudioControls":"fJL4o","./AudioControl":"kxtUx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c5wpY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxAudioPlayer
 * @description
 * AudioPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="AudioPlayer Title" audio-player:artist="AudioPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */ parcelHelpers.export(exports, "CpxAudioPlayer", ()=>CpxAudioPlayer);
var _element = require("../../element");
var _audio = require("../../utils/audio");
class CpxAudioPlayer extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("audio-player:class") || "";
        this.title = this.getAttribute("audio-player:title") || "AudioPlayer Title";
        this.artist = this.getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
        this.album = this.getAttribute("audio-player:album") || "AudioPlayer Album Title";
        this.hasPlaylist = this.getAttribute("audio-player:has-playlist") || true;
        this.hasControls = this.getAttribute("audio-player:has-controls") || true;
        this.hasTitle = this.getAttribute("audio-player:has-title") || true;
        this.hasArtist = this.getAttribute("audio-player:has-artist") || true;
        this.hasCover = this.getAttribute("audio-player:has-cover") || true;
        this.hasCurrent = this.getAttribute("audio-player:has-current") || true;
        this.playlist = [
            {
                title: "Song 1",
                artist: "Artist 1",
                album: "Album 1",
                cover: "https://placehold.co/600",
                url: "../dist/song-1.mp3"
            },
            {
                title: "Song 2",
                artist: "Artist 2",
                album: "Album 2",
                cover: "https://placehold.co/601",
                url: "../dist/song-2.mp3"
            }
        ];
    }
    returnPlaylist() {
        return this.playlist;
    }
    connectedCallback() {
        this.render();
        (0, _audio.audioAPI)();
    }
    render() {
        let evalHasPlaylist = eval(this.hasPlaylist);
        let evalHasControls = eval(this.hasControls);
        let evalHasTitle = eval(this.hasTitle);
        let evalHasArtist = eval(this.hasArtist);
        let evalHasCover = eval(this.hasCover);
        let evalHasCurrent = eval(this.hasCurrent);
        this.innerHTML = `
    <section class="{sm}display:flex p:4 gap:8 items:center radius:sm bg:gray-200 border-width:1 border-color:gray-400 ${this.classNames}" audio>
    ${this.initialContent !== "" ? `${this.initialContent}` : `
        ${evalHasCurrent === true || evalHasControls === true ? `
            <div class="w:full max-w:xs">
              ${evalHasCurrent === true ? `<audio-current class="" audio-current:has-title="${evalHasTitle}" audio-current:has-artist="${evalHasArtist}" audio-current:has-cover="${evalHasCover}"></audio-current>` : ``}
              ${evalHasControls === true ? `<audio-controls class=""></audio-controls>` : ``}
            </div>` : ``}
        ${evalHasPlaylist === true ? `<audio-playlist class="w:full shrink:1 "></audio-playlist>` : ``}
        `}
    </section>
    `;
    }
}
customElements.define(`audio-player`, CpxAudioPlayer);

},{"../../element":"7TddR","../../utils/audio":"8K745","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ezGA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element audio-current
 * @class CpxAudioCurrent
 * @description
 * AudioCurrent Component
 * @example
 * <audio-current audio-current:style="default" audio-current:title="AudioPlayer Title" audio-current:artist="AudioPlayer Artist Title" audio-current:album="AudioPlayer Album Title">
 */ parcelHelpers.export(exports, "CpxAudioCurrent", ()=>CpxAudioCurrent);
var _element = require("../../element");
class CpxAudioCurrent extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.appearance = this.getAttribute("audio-current:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
        this.classNames = this.getAttribute("audio-current:class") || "";
        this.title = this.getAttribute("audio-current:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
        this.artist = this.getAttribute("audio-current:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
        this.album = this.getAttribute("audio-current:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
        this.hasTitle = this.getAttribute("audio-current:has-title") || document.querySelector("audio-player").getAttribute("audio-player:has-title") || true;
        this.hasArtist = this.getAttribute("audio-current:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
        this.hasCover = this.getAttribute("audio-current:has-cover") || document.querySelector("audio-player").getAttribute("audio-player:has-cover") || true;
    }
    render() {
        let evalTitle = eval(this.hasTitle);
        let evalArtist = eval(this.hasArtist);
        let evalCover = eval(this.hasCover);
        this.innerHTML = `
        <div class=" ${this.classNames}">
            ${this.initialContent !== "" ? this.initialContent : `
                ${evalCover === true ? `
                      <img class="mb:4 max-w:xxs" audio-current="cover">` : ``}
                ${evalTitle === true || evalArtist === true ? `
                    <div class="">
                      ${evalTitle === true ? `<p class="align:center size:lg" audio-current="title">${this.title}</p>` : ``}
                      ${evalArtist === true ? `<p class="size:md align:center" audio-current="artist">${this.artist}</p>` : ``}
                    </div>
                    ` : ``}
                
                `}
        </div>
        `;
    }
}
customElements.define(`audio-current`, CpxAudioCurrent);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Yy21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxAudioPlaylist
 * @description
 * AudioPlaylist Component
 * @example
 * <audio-playlist audio-player:style="default" audio-player:title="AudioPlayer Title" audio-player:artist="AudioPlayer Artist Title" audio-player:album="AudioPlayer Album Title" audio-player:has-artist="true" audio-player:has-album="true">
 * </audio-playlist>
 *
 */ parcelHelpers.export(exports, "CpxAudioPlaylist", ()=>CpxAudioPlaylist);
var _element = require("../../element");
class CpxAudioPlaylist extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("audio-player:class") || "";
        this.title = this.getAttribute("audio-player:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
        this.artist = this.getAttribute("audio-player:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
        this.album = this.getAttribute("audio-player:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
        this.hasArtist = this.getAttribute("audio-playlist:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
        this.hasAlbum = this.getAttribute("audio-playlist:has-album") || document.querySelector("audio-player").getAttribute("audio-player:has-album") || true;
        this.playlist = [
            {
                title: "Song 1",
                artist: "Artist 1",
                album: "Album 1",
                cover: "https://placehold.co/600",
                url: "../dist/song-1.mp3"
            },
            {
                title: "Song 2",
                artist: "Artist 2",
                album: "Album 2",
                cover: "https://placehold.co/601",
                url: "../dist/song-2.mp3"
            }
        ];
    }
    render() {
        let evalArtist = eval(this.hasArtist);
        let evalAlbum = eval(this.hasAlbum);
        this.innerHTML = `
        <div audio-playlist class="flex:full shrink:1 display:flex direction:col justify-content:center ${this.classNames}">
          ${this.initialContent !== "" ? `${this.initialContent}` : `
              ${this.playlist.map((track, index)=>{
            return `
                    <audio-playlist-item
                      audio-playlist-item:title="${track.title}"
                      audio-playlist-item:artist="${track.artist}"
                      audio-playlist-item:album="${track.album}"
                      audio-playlist-item:url="${track.url}"
                      audio-playlist-item:cover="${track.cover}"
                      audio-playlist-item:has-artist="${evalArtist}"
                      audio-playlist-item:has-album="${evalAlbum}"
                      ></audio-playlist-item>
                    `;
        }).join("")}
              `}
            
        </div>
        `;
    }
}
customElements.define(`audio-playlist`, CpxAudioPlaylist);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcaDD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxAudioPlaylistItem
 *
 */ parcelHelpers.export(exports, "CpxAudioPlaylistItem", ()=>CpxAudioPlaylistItem);
var _element = require("../../element");
class CpxAudioPlaylistItem extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("audio-playlist-item:class") || "";
        this.title = this.getAttribute("audio-playlist-item:title") || document.querySelector("audio-playlist").getAttribute("audio-playlist:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlaylistItem ITitle";
        this.artist = this.getAttribute("audio-playlist-item:artist") || document.querySelector("audio-playlist").getAttribute("audio-playlist:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlaylistItem Artist Title";
        this.album = this.getAttribute("audio-playlist-item:album") || document.querySelector("audio-playlist").getAttribute("audio-playlist:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlaylistItem Album Title";
        this.hasTitle = this.getAttribute("audio-playlist-item:has-title") || document.querySelector("audio-player").getAttribute("audio-player:has-title") || true;
        this.hasArtist = this.getAttribute("audio-playlist-item:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
        this.hasAlbum = this.getAttribute("audio-playlist-item:has-album") || document.querySelector("audio-player").getAttribute("audio-player:has-album") || true;
        this.url = this.getAttribute("audio-playlist-item:url") || "http://localhost/1234";
    }
    render() {
        let evalTitle = eval(this.hasTitle);
        let evalArtist = eval(this.hasArtist);
        let evalAlbum = eval(this.hasAlbum);
        this.innerHTML = `
        <button class="w:full p:2 mb:2 display:flex radius:sm items:center justify-content:between gap:4 border-width:1 border-color:gray-400 mb ${this.classNames}" audio-track audio-track-url="${this.url}>
          ${this.initialContent !== "" ? `${this.initialContent}` : `
              ${evalTitle === true ? `
                    <p class="" audio-track="title">${this.title}</p>
                  ` : ``}
              <section class="display:flex items:center gap:4">
                  ${evalArtist === true ? `<p class="size:xs line-height:0" audio-track="artist">${this.artist}</p>` : ``}
                  ${evalAlbum === true ? `<p class="size:xs line-height:0" audio-track="album">${this.album}</p>` : ``}
              </section>
            `}
        </button>
    `;
    }
}
customElements.define(`audio-playlist-item`, CpxAudioPlaylistItem);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJL4o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxAudioControls
 * @description
 * AudioControls Component
 * @example
 * <audio-controls audio-controls:style="default" audio-controls:title="AudioPlayer Title" audio-controls:artist="AudioPlayer Artist Title" audio-controls:album="AudioPlayer Album Title">
 */ parcelHelpers.export(exports, "CpxAudioControls", ()=>CpxAudioControls);
var _element = require("../../element");
var _index = require("../../index");
class CpxAudioControls extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("audio-controls:class") || "";
        this.color = this.getAttribute("audio-controls:color") || "gray-dark-200";
        this.hasPlayPause = this.getAttribute("audio-controls:has-play-pause") || document.querySelector("audio-player").getAttribute("audio-player:has-play-pause") || true;
        this.hasPrev = this.getAttribute("audio-controls:has-prev") || document.querySelector("audio-player").getAttribute("audio-player:has-prev") || true;
        this.hasNext = this.getAttribute("audio-controls:has-next") || document.querySelector("audio-player").getAttribute("audio-player:has-next") || true;
        this.hasProgress = this.getAttribute("audio-controls:has-progress") || document.querySelector("audio-player").getAttribute("audio-player:has-progress") || true;
        this.hasVolume = this.getAttribute("audio-controls:has-volume") || document.querySelector("audio-player").getAttribute("audio-player:has-volume") || true;
        this.iconPlay = (0, _index.Cpx).Icon.play;
        this.iconPause = (0, _index.Cpx).Icon.pause;
        this.iconPrev = (0, _index.Cpx).Icon.backward;
        this.iconNext = (0, _index.Cpx).Icon.forward;
        this.iconMute = (0, _index.Cpx).Icon.speakerWave;
        this.iconUnmute = (0, _index.Cpx).Icon.speakerWave;
    }
    render() {
        let evalPlayPause = eval(this.hasPlayPause);
        let evalPrev = eval(this.hasPrev);
        let evalNext = eval(this.hasNext);
        let evalProgress = eval(this.hasProgress);
        let evalVolume = eval(this.hasVolume);
        this.innerHTML = `  
            <div class="display:flex direction:col gap:3 text-align:center items:center ${this.classNames}" audio-controls>
                ${this.initialContent !== "" ? this.initialContent : ` 
                        ${evalProgress === true ? `
                            <div class="w:auto">
                                <audio-control audio-control:class="display:block w:full" audio-control:type="progress-bar" audio-control:color=${this.color}></audio-control>
                            </div>` : ``}
                        
                        <div class="display:flex gap:3 justify-content:center">
                            ${evalPrev === true ? `
                                <audio-control class="" audio-control:color="${this.color} audio-control="prev">
                                    ${this.iconPrev}
                                </audio-control>
                                    ` : ``}
                            ${evalPlayPause === true ? `
                                <audio-control class="" audio-control:color="${this.color} audio-control="play-pause">
                                    ${this.iconPlay}
                                </audio-control>
                                ` : ``}
                            ${evalNext === true ? `
                                  <audio-control class="" audio-control:color="${this.color} audio-control="next">
                                      ${this.iconNext}
                                  </audio-control>
                                        ` : ``}
                        </div>
                        ${evalVolume === true ? `
                              <div class="w:auto">
                                  <audio-control audio-control:class="display:block w:full max-w:16" class="w:auto" audio-control:type="volume"></audio-control>
                              </div>` : ``}`}  
            </div>
        `;
    }
}
customElements.define(`audio-controls`, CpxAudioControls);

},{"../../element":"7TddR","../../index":"dMUol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxtUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxAudioControl", ()=>CpxAudioControl);
var _element = require("../../element");
var _icons = require("../../utils/icons");
class CpxAudioControl extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("audio-control:class") || "";
        this.type = this.getAttribute("audio-control:type") || "play-pause";
        this.icon = this.getAttribute("audio-control:icon") || "play";
        this.size = this.getAttribute("audio-control:size") || "16";
        this.color = this.getAttribute("audio-control:color") || "gray-dark-700";
        this.hasIcon = this.getAttribute("audio-control:has-icon") || true;
        this.hasText = this.getAttribute("audio-control:has-text") || true;
    }
    render() {
        let evalIcon = eval(this.hasIcon);
        let evalText = eval(this.hasText);
        this.innerHTML = `  
            ${this.type === "progress-bar" || this.type === "volume" ? `<input type="range" class="color:${this.color} ${this.classNames}" audio-control="${this.type}">` : `
                <button 
                class="color:${this.color} size:${this.size} h:${this.size} ${this.classNames}"
                audio-control="${this.type}">
                ${this.initialContent !== "" ? this.initialContent : `
                    <section class="">
                        ${evalIcon ? `
                                <div class="w:${this.size} h:${this.size}">
                                    ${(0, _icons.Icon)[this.icon]}
                                </div>
                                    ` : ""}
                        ${evalText ? `
                                <div class="size:sm">
                                    ${this.type}
                                </div>
                                ` : ""}
                    </section>
                    `}  
                </button>
                `}
            
        `;
    }
}
customElements.define(`audio-control`, CpxAudioControl);

},{"../../element":"7TddR","../../utils/icons":"bLiR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lAy8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BadgeElement", ()=>(0, _badgeElement.CpxBadgeElement));
var _badgeElement = require("./BadgeElement");

},{"./BadgeElement":"5ybq4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ybq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element badge-element
 * @description A badge-element component that can be used to display content when hovered over.
 * @example
 * <badge-element badge-element:title="DropDown Title" badge-element:content="DropDown Content">
 * </badge-element>
 */ parcelHelpers.export(exports, "CpxBadgeElement", ()=>CpxBadgeElement);
var _element = require("../../element");
class CpxBadgeElement extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("badge-element:class") || "";
        this.size = this.getAttribute("badge-element:size") || "xs";
        this.color = this.getAttribute("badge-element:color") || "gray-700";
        this.bgColor = this.getAttribute("badge-element:bg") || "gray-200";
        this.borderColor = this.getAttribute("badge-element:border-color") || "gray-600";
        this.fontFamily = this.getAttribute("badge-element:font-family") || "sans";
        this.fontWeight = this.getAttribute("badge-element:weight") || "normal";
        this.letterSpacing = this.getAttribute("badge-element:tracking") || "sm";
        this.textTransform = this.getAttribute("badge-element:transform") || "none";
        this.borderRadius = this.getAttribute("badge-element:radius") || "pill";
        this.padding = this.getAttribute("badge-element:padding") || "2";
        this.action = eval(this.getAttribute("badge-element:action")) || false;
    }
    render() {
        this.innerHTML = `
        <button 
        ${this.action !== false ? `
              onclick="${this.action}"
              ` : `tabindex="-1"`}
        class="size:${this.size} color:${this.color} bg:${this.bgColor} border-width:1 border-color:${this.borderColor} font-family:${this.fontFamily} weight:${this.fontWeight} tracking:${this.letterSpacing} transform:${this.textTransform} radius:${this.borderRadius} px:${eval(this.padding) * 2} py:${eval(this.padding) * 1} ${this.classNames}">
            <span>${this.initialContent}</span>
        </button>
        `;
    }
}
customElements.define(`badge-element`, CpxBadgeElement);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lX5Z0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CodeBlock", ()=>(0, _codeBlock.CpxCodeBlock));
var _codeBlock = require("./CodeBlock");

},{"./CodeBlock":"4Tz5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Tz5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxCodeBlock", ()=>CpxCodeBlock);
var _element = require("../../element");
var _index = require("../../index");
var _copy = require("../../utils/copy");
var _icons = require("../../utils/icons");
var _core = require("highlight.js/lib/core"); // Import the core module
var _coreDefault = parcelHelpers.interopDefault(_core);
var _defaultCss = require("highlight.js/styles/default.css"); // Import the default highlight.js stylesheet
// Import specific language modules as needed
var _javascript = require("highlight.js/lib/languages/javascript");
var _javascriptDefault = parcelHelpers.interopDefault(_javascript);
var _php = require("highlight.js/lib/languages/php");
var _phpDefault = parcelHelpers.interopDefault(_php);
var _bash = require("highlight.js/lib/languages/bash");
var _bashDefault = parcelHelpers.interopDefault(_bash);
(0, _coreDefault.default).registerLanguage("javascript", (0, _javascriptDefault.default)); // Register JavaScript language
(0, _coreDefault.default).registerLanguage("php", (0, _phpDefault.default)); // Register PHP language
(0, _coreDefault.default).registerLanguage("bash", (0, _bashDefault.default)); // Register Bash language
(0, _coreDefault.default).registerLanguage("shell", (0, _bashDefault.default)); // Register Shell language
class CpxCodeBlock extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.ID = this.getAttribute("id") || (0, _index.Cpx).Id.Generate.hex(6).replace(" ", "");
        this.classNames = this.getAttribute("code-block:class") || "";
        this.appearance = this.getAttribute("code-block:appearance") || "default";
        this.title = this.getAttribute("code-block:title") || "Code";
        this.lang = this.getAttribute("code-block:lang") || "js";
        this.hasCopyButton = eval(this.getAttribute("code-block:has-copy-button")) || true;
        this.hasHeader = eval(this.getAttribute("code-block:has-header")) || true;
        this.theme = this.getAttribute("code-block:theme") || "light";
    }
    connectedCallback() {
        super.connectedCallback();
        this.highlightSyntax(); // Highlight syntax when the element is connected to the DOM
        (0, _copy.Copy).toClipboard(); // Enable copy functionality
        // Insert the copied text message
        this.insertCopiedText();
    }
    highlightSyntax() {
        if (this.lang) {
            const codeElement = this.querySelector("[hljs-area]");
            if (codeElement) (0, _coreDefault.default).highlightElement(codeElement); // Highlight the code block
        }
    }
    insertCopiedText() {
        const copyButton = this.querySelector("[copy-clipboard=trigger]");
        if (copyButton) copyButton.addEventListener("click", ()=>{
            const copiedText = document.createElement("p");
            copiedText.textContent = "Copied";
            copiedText.classList.add("");
            copyButton.appendChild(copiedText).classList.add("");
            setTimeout(()=>{
                copiedText.remove();
            }, 2000);
        });
        else console.error("Copy button not found.");
    }
    getHeader() {
        return `
    ${this.hasHeader === true && this.hasCopyButton === true ? `
        <header class="p:4 w:full display:flex gap:4 content:between items:center border-b-width:1 border-color:gray-400">
            ${this.hasHeader === true ? `
                  <div class="display:flex gap:4 color:black items:center">
                      <section class="size:md weigth:semibold">${this.title}</section>
                      <badge-element
                      badge-element:border-radius="xs"
                      badge-element:padding="sm"
                      badge-element:font-family="mono"
                      badge-element:color="${this.theme}"
                      class="">.${this.lang}</badge-element>
                  </div>
                  ` : ``}
            ${this.hasCopyButton === true ? `
                  <section class="">
                      <button class="w:6 h:6" copy-clipboard="trigger">
                        ${(0, _icons.Icon).clipboard}
                      </button>
                  </section>
                  ` : ``}
        </header>` : ``}
    `;
    }
    render() {
        this.innerHTML = `  
            <section class="bg:gray-300 color:gray-900 border-radius:md radius:md overflow:hidden ${this.classNames}">
                ${this.getHeader()}
                <pre class="p:4"><code class="font-family:mono language-${this.lang}" copy-clipboard="target" hljs-area>${(0, _index.Cpx).String.trimWhitespace(this.initialContent)}</code></pre>
            </section>
        `;
    }
}
customElements.define(`code-block`, CpxCodeBlock);

},{"../../element":"7TddR","../../index":"dMUol","../../utils/copy":"1dAm7","../../utils/icons":"bLiR6","highlight.js/lib/core":"gPJXT","highlight.js/styles/default.css":"7qfup","highlight.js/lib/languages/javascript":"hqLug","highlight.js/lib/languages/php":"8wSB8","highlight.js/lib/languages/bash":"iGKR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPJXT":[function(require,module,exports) {
/* eslint-disable no-multi-assign */ function deepFreeze(obj) {
    if (obj instanceof Map) obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
    };
    else if (obj instanceof Set) obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
    };
    // Freeze self
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name)=>{
        const prop = obj[name];
        const type = typeof prop;
        // Freeze prop if it is an object or function and also not already frozen
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) deepFreeze(prop);
    });
    return obj;
}
/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */ /** @typedef {import('highlight.js').CompiledMode} CompiledMode */ /** @implements CallbackResponse */ class Response {
    /**
   * @param {CompiledMode} mode
   */ constructor(mode){
        // eslint-disable-next-line no-undefined
        if (mode.data === undefined) mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
    }
    ignoreMatch() {
        this.isMatchIgnored = true;
    }
}
/**
 * @param {string} value
 * @returns {string}
 */ function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */ function inherit$1(original, ...objects) {
    /** @type Record<string,any> */ const result = Object.create(null);
    for(const key in original)result[key] = original[key];
    objects.forEach(function(obj) {
        for(const key in obj)result[key] = obj[key];
    });
    return /** @type {T} */ result;
}
/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */ /** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */ /** @typedef {{walk: (r: Renderer) => void}} Tree */ /** */ const SPAN_CLOSE = "</span>";
/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */ const emitsWrappingTags = (node)=>{
    // rarely we can have a sublanguage where language is undefined
    // TODO: track down why
    return !!node.scope;
};
/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */ const scopeToCSSClass = (name, { prefix })=>{
    // sub-language
    if (name.startsWith("language:")) return name.replace("language:", "language-");
    // tiered scope: comment.line
    if (name.includes(".")) {
        const pieces = name.split(".");
        return [
            `${prefix}${pieces.shift()}`,
            ...pieces.map((x, i)=>`${x}${"_".repeat(i + 1)}`)
        ].join(" ");
    }
    // simple scope
    return `${prefix}${name}`;
};
/** @type {Renderer} */ class HTMLRenderer {
    /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */ constructor(parseTree, options){
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
    }
    /**
   * Adds texts to the output stream
   *
   * @param {string} text */ addText(text) {
        this.buffer += escapeHTML(text);
    }
    /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */ openNode(node) {
        if (!emitsWrappingTags(node)) return;
        const className = scopeToCSSClass(node.scope, {
            prefix: this.classPrefix
        });
        this.span(className);
    }
    /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */ closeNode(node) {
        if (!emitsWrappingTags(node)) return;
        this.buffer += SPAN_CLOSE;
    }
    /**
   * returns the accumulated buffer
  */ value() {
        return this.buffer;
    }
    // helpers
    /**
   * Builds a span element
   *
   * @param {string} className */ span(className) {
        this.buffer += `<span class="${className}">`;
    }
}
/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */ /** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */ /** @typedef {import('highlight.js').Emitter} Emitter */ /**  */ /** @returns {DataNode} */ const newNode = (opts = {})=>{
    /** @type DataNode */ const result = {
        children: []
    };
    Object.assign(result, opts);
    return result;
};
class TokenTree {
    constructor(){
        /** @type DataNode */ this.rootNode = newNode();
        this.stack = [
            this.rootNode
        ];
    }
    get top() {
        return this.stack[this.stack.length - 1];
    }
    get root() {
        return this.rootNode;
    }
    /** @param {Node} node */ add(node) {
        this.top.children.push(node);
    }
    /** @param {string} scope */ openNode(scope) {
        /** @type Node */ const node = newNode({
            scope
        });
        this.add(node);
        this.stack.push(node);
    }
    closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
        // eslint-disable-next-line no-undefined
        return undefined;
    }
    closeAllNodes() {
        while(this.closeNode());
    }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
    }
    /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */ walk(builder) {
        // this does not
        return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
    }
    /**
   * @param {Renderer} builder
   * @param {Node} node
   */ static _walk(builder, node) {
        if (typeof node === "string") builder.addText(node);
        else if (node.children) {
            builder.openNode(node);
            node.children.forEach((child)=>this._walk(builder, child));
            builder.closeNode(node);
        }
        return builder;
    }
    /**
   * @param {Node} node
   */ static _collapse(node) {
        if (typeof node === "string") return;
        if (!node.children) return;
        if (node.children.every((el)=>typeof el === "string")) // node.text = node.children.join("");
        // delete node.children;
        node.children = [
            node.children.join("")
        ];
        else node.children.forEach((child)=>{
            TokenTree._collapse(child);
        });
    }
}
/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

*/ /**
 * @implements {Emitter}
 */ class TokenTreeEmitter extends TokenTree {
    /**
   * @param {*} options
   */ constructor(options){
        super();
        this.options = options;
    }
    /**
   * @param {string} text
   */ addText(text) {
        if (text === "") return;
        this.add(text);
    }
    /** @param {string} scope */ startScope(scope) {
        this.openNode(scope);
    }
    endScope() {
        this.closeNode();
    }
    /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */ __addSublanguage(emitter, name) {
        /** @type DataNode */ const node = emitter.root;
        if (name) node.scope = `language:${name}`;
        this.add(node);
    }
    toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
    }
    finalize() {
        this.closeAllNodes();
        return true;
    }
}
/**
 * @param {string} value
 * @returns {RegExp}
 * */ /**
 * @param {RegExp | string } re
 * @returns {string}
 */ function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function lookahead(re) {
    return concat("(?=", re, ")");
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function optional(re) {
    return concat("(?:", re, ")?");
}
/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */ function concat(...args) {
    const joined = args.map((x)=>source(x)).join("");
    return joined;
}
/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */ function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
    } else return {};
}
/** @typedef { {capture?: boolean} } RegexEitherOptions */ /**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */ function either(...args) {
    /** @type { object & {capture?: boolean} }  */ const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x)=>source(x)).join("|") + ")";
    return joined;
}
/**
 * @param {RegExp | string} re
 * @returns {number}
 */ function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
}
/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */ function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
}
// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */ function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex)=>{
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out = "";
        while(re.length > 0){
            const match = BACKREF_RE.exec(re);
            if (!match) {
                out += re;
                break;
            }
            out += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);
            if (match[0][0] === "\\" && match[1]) // Adjust the backreference.
            out += "\\" + String(Number(match[1]) + offset);
            else {
                out += match[0];
                if (match[0] === "(") numCaptures++;
            }
        }
        return out;
    }).map((re)=>`(${re})`).join(joinWith);
}
/** @typedef {import('highlight.js').Mode} Mode */ /** @typedef {import('highlight.js').ModeCallback} ModeCallback */ // Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = "\\b(0b[01]+)"; // 0b...
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/ const SHEBANG = (opts = {})=>{
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
    return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */ "on:begin": (m, resp)=>{
            if (m.index !== 0) resp.ignoreMatch();
        }
    }, opts);
};
// Common modes
const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
};
const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [
        BACKSLASH_ESCAPE
    ]
};
const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [
        BACKSLASH_ESCAPE
    ]
};
const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */ const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1({
        scope: "comment",
        begin,
        end,
        contains: []
    }, modeOptions);
    mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
    });
    const ENGLISH_WORD = either(// list of common 1 and 2 letter words in English
    "I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
    );
    // looking like plain text, more likely to be a comment
    mode.contains.push({
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}") // look for 3 words in a row
    });
    return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
};
const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
};
const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
};
const REGEXP_MODE = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
        BACKSLASH_ESCAPE,
        {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [
                BACKSLASH_ESCAPE
            ]
        }
    ]
};
const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
};
const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
};
/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */ const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(mode, {
        /** @type {ModeCallback} */ "on:begin": (m, resp)=>{
            resp.data._beginMatch = m[1];
        },
        /** @type {ModeCallback} */ "on:end": (m, resp)=>{
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
    });
};
var MODES = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: APOS_STRING_MODE,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    COMMENT: COMMENT,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    C_NUMBER_RE: C_NUMBER_RE,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    IDENT_RE: IDENT_RE,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    METHOD_GUARD: METHOD_GUARD,
    NUMBER_MODE: NUMBER_MODE,
    NUMBER_RE: NUMBER_RE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    REGEXP_MODE: REGEXP_MODE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE
});
/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/ // Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833
// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.
// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.
// ------
// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */ function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") response.ignoreMatch();
}
/**
 *
 * @type {CompilerExt}
 */ function scopeClassName(mode, _parent) {
    // eslint-disable-next-line no-undefined
    if (mode.className !== undefined) {
        mode.scope = mode.className;
        delete mode.className;
    }
}
/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */ function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    // for languages with keywords that include non-word characters checking for
    // a word boundary is not sufficient, so instead we check for a word boundary
    // or whitespace - this does no harm in any case since our keyword engine
    // doesn't allow spaces in keywords anyways and we still check for the boundary
    // first
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    // prevents double relevance, the keywords themselves provide
    // relevance, the mode doesn't need to double it
    // eslint-disable-next-line no-undefined
    if (mode.relevance === undefined) mode.relevance = 0;
}
/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */ function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
}
/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */ function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
}
/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */ function compileRelevance(mode, _parent) {
    // eslint-disable-next-line no-undefined
    if (mode.relevance === undefined) mode.relevance = 1;
}
// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent)=>{
    if (!mode.beforeMatch) return;
    // starts conflicts with endsParent which we need to make sure the child
    // rule is not matched multiple times
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key)=>{
        delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
        relevance: 0,
        contains: [
            Object.assign(originalMode, {
                endsParent: true
            })
        ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
};
// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value" // common variable name
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */ function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    /** @type {import("highlight.js/private").KeywordDict} */ const compiledKeywords = Object.create(null);
    // input can be a string of keywords, an array of keywords, or a object with
    // named keys representing scopeName (which can then point to a string or array)
    if (typeof rawKeywords === "string") compileList(scopeName, rawKeywords.split(" "));
    else if (Array.isArray(rawKeywords)) compileList(scopeName, rawKeywords);
    else Object.keys(rawKeywords).forEach(function(scopeName) {
        // collapse all our objects back into the parent object
        Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));
    });
    return compiledKeywords;
    // ---
    /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */ function compileList(scopeName, keywordList) {
        if (caseInsensitive) keywordList = keywordList.map((x)=>x.toLowerCase());
        keywordList.forEach(function(keyword) {
            const pair = keyword.split("|");
            compiledKeywords[pair[0]] = [
                scopeName,
                scoreForKeyword(pair[0], pair[1])
            ];
        });
    }
}
/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */ function scoreForKeyword(keyword, providedScore) {
    // manual scores always win over common keywords
    // so you can force a score of 1 if you really insist
    if (providedScore) return Number(providedScore);
    return commonKeyword(keyword) ? 0 : 1;
}
/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */ function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/ /**
 * @type {Record<string, boolean>}
 */ const seenDeprecations = {};
/**
 * @param {string} message
 */ const error = (message)=>{
    console.error(message);
};
/**
 * @param {string} message
 * @param {any} args
 */ const warn = (message, ...args)=>{
    console.log(`WARN: ${message}`, ...args);
};
/**
 * @param {string} version
 * @param {string} message
 */ const deprecated = (version, message)=>{
    if (seenDeprecations[`${version}/${message}`]) return;
    console.log(`Deprecated as of ${version}. ${message}`);
    seenDeprecations[`${version}/${message}`] = true;
};
/* eslint-disable no-throw-literal */ /**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/ const MultiClassError = new Error();
/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */ function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    /** @type Record<number,boolean> */ const emit = {};
    /** @type Record<number,string> */ const positions = {};
    for(let i = 1; i <= regexes.length; i++){
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
    }
    // we use _emit to keep track of which match groups are "top-level" to avoid double
    // output from inside match groups
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
}
/**
 * @param {CompiledMode} mode
 */ function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, {
        key: "beginScope"
    });
    mode.begin = _rewriteBackreferences(mode.begin, {
        joinWith: ""
    });
}
/**
 * @param {CompiledMode} mode
 */ function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, {
        key: "endScope"
    });
    mode.end = _rewriteBackreferences(mode.end, {
        joinWith: ""
    });
}
/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */ function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
    }
}
/**
 * @param {CompiledMode} mode
 */ function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") mode.beginScope = {
        _wrap: mode.beginScope
    };
    if (typeof mode.endScope === "string") mode.endScope = {
        _wrap: mode.endScope
    };
    beginMultiClass(mode);
    endMultiClass(mode);
}
/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/ // compilation
/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */ function compileLanguage(language) {
    /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */ function langRe(value, global) {
        return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : ""));
    }
    /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */ class MultiRegex {
        constructor(){
            this.matchIndexes = {};
            // @ts-ignore
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
            opts.position = this.position++;
            // @ts-ignore
            this.matchIndexes[this.matchAt] = opts;
            this.regexes.push([
                opts,
                re
            ]);
            this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
            if (this.regexes.length === 0) // avoids the need to check length every time exec is called
            // @ts-ignore
            this.exec = ()=>null;
            const terminators = this.regexes.map((el)=>el[1]);
            this.matcherRe = langRe(_rewriteBackreferences(terminators, {
                joinWith: "|"
            }), true);
            this.lastIndex = 0;
        }
        /** @param {string} s */ exec(s) {
            this.matcherRe.lastIndex = this.lastIndex;
            const match = this.matcherRe.exec(s);
            if (!match) return null;
            // eslint-disable-next-line no-undefined
            const i = match.findIndex((el, i)=>i > 0 && el !== undefined);
            // @ts-ignore
            const matchData = this.matchIndexes[i];
            // trim off any earlier non-relevant match groups (ie, the other regex
            // match groups that make up the multi-matcher)
            match.splice(0, i);
            return Object.assign(match, matchData);
        }
    }
    /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */ class ResumableMultiRegex {
        constructor(){
            // @ts-ignore
            this.rules = [];
            // @ts-ignore
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
            if (this.multiRegexes[index]) return this.multiRegexes[index];
            const matcher = new MultiRegex();
            this.rules.slice(index).forEach(([re, opts])=>matcher.addRule(re, opts));
            matcher.compile();
            this.multiRegexes[index] = matcher;
            return matcher;
        }
        resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
            this.rules.push([
                re,
                opts
            ]);
            if (opts.type === "begin") this.count++;
        }
        /** @param {string} s */ exec(s) {
            const m = this.getMatcher(this.regexIndex);
            m.lastIndex = this.lastIndex;
            let result = m.exec(s);
            // The following is because we have no easy way to say "resume scanning at the
            // existing position but also skip the current rule ONLY". What happens is
            // all prior rules are also skipped which can result in matching the wrong
            // thing. Example of matching "booger":
            // our matcher is [string, "booger", number]
            //
            // ....booger....
            // if "booger" is ignored then we'd really need a regex to scan from the
            // SAME position for only: [string, number] but ignoring "booger" (if it
            // was the first match), a simple resume would scan ahead who knows how
            // far looking only for "number", ignoring potential string matches (or
            // future "booger" matches that might be valid.)
            // So what we do: We execute two matchers, one resuming at the same
            // position, but the second full matcher starting at the position after:
            //     /--- resume first regex match here (for [number])
            //     |/---- full match here for [string, "booger", number]
            //     vv
            // ....booger....
            // Which ever results in a match first is then used. So this 3-4 step
            // process essentially allows us to say "match at this position, excluding
            // a prior rule that was ignored".
            //
            // 1. Match "booger" first, ignore. Also proves that [string] does non match.
            // 2. Resume matching for [number]
            // 3. Match at index + 1 for [string, "booger", number]
            // 4. If #2 and #3 result in matches, which came first?
            if (this.resumingScanAtSamePosition()) {
                if (result && result.index === this.lastIndex) ;
                else {
                    const m2 = this.getMatcher(0);
                    m2.lastIndex = this.lastIndex + 1;
                    result = m2.exec(s);
                }
            }
            if (result) {
                this.regexIndex += result.position + 1;
                if (this.regexIndex === this.count) // wrap-around to considering all matches again
                this.considerAll();
            }
            return result;
        }
    }
    /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */ function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term)=>mm.addRule(term.begin, {
                rule: term,
                type: "begin"
            }));
        if (mode.terminatorEnd) mm.addRule(mode.terminatorEnd, {
            type: "end"
        });
        if (mode.illegal) mm.addRule(mode.illegal, {
            type: "illegal"
        });
        return mm;
    }
    /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */ /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */ function compileMode(mode, parent) {
        const cmode = /** @type CompiledMode */ mode;
        if (mode.isCompiled) return cmode;
        [
            scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch,
            MultiClass,
            beforeMatchExt
        ].forEach((ext)=>ext(mode, parent));
        language.compilerExtensions.forEach((ext)=>ext(mode, parent));
        // __beforeBegin is considered private API, internal use only
        mode.__beforeBegin = null;
        [
            beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance
        ].forEach((ext)=>ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
            // we need a copy because keywords might be compiled multiple times
            // so we can't go deleting $pattern from the original on the first
            // pass
            mode.keywords = Object.assign({}, mode.keywords);
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
            if (!mode.begin) mode.begin = /\B|\b/;
            cmode.beginRe = langRe(cmode.begin);
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) cmode.endRe = langRe(cmode.end);
            cmode.terminatorEnd = source(cmode.end) || "";
            if (mode.endsWithParent && parent.terminatorEnd) cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
        if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ mode.illegal);
        if (!mode.contains) mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
            return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
            compileMode(/** @type Mode */ c, cmode);
        });
        if (mode.starts) compileMode(mode.starts, parent);
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    // self is not valid at the top-level
    if (language.contains && language.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    // we need a null object, which inherit will guarantee
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(/** @type Mode */ language);
}
/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */ function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
}
/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */ function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, {
            variants: null
        }, variant);
    });
    // EXPAND
    // if we have variants then essentially "replace" the mode with the variants
    // this happens in compileMode, where this function is called from
    if (mode.cachedVariants) return mode.cachedVariants;
    // CLONE
    // if we have dependencies on parents then we need a unique
    // instance of ourselves, so we can be reused with many
    // different parents without issue
    if (dependencyOnParent(mode)) return inherit$1(mode, {
        starts: mode.starts ? inherit$1(mode.starts) : null
    });
    if (Object.isFrozen(mode)) return inherit$1(mode);
    // no special dependency issues, just return ourselves
    return mode;
}
var version = "11.9.0";
class HTMLInjectionError extends Error {
    constructor(reason, html){
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
    }
}
/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/ /**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/ const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */ const HLJS = function(hljs) {
    // Global internal variables used within the highlight.js library.
    /** @type {Record<string, Language>} */ const languages = Object.create(null);
    /** @type {Record<string, string>} */ const aliases = Object.create(null);
    /** @type {HLJSPlugin[]} */ const plugins = [];
    // safe/production mode - swallows more errors, tries to keep running
    // even if a single syntax or parse hits a fatal error
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    /** @type {Language} */ const PLAINTEXT_LANGUAGE = {
        disableAutodetect: true,
        name: "Plain text",
        contains: []
    };
    // Global options used when within external APIs. This is modified when
    // calling the `hljs.configure` function.
    /** @type HLJSOptions */ let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
    };
    /* Utility functions */ /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */ function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
    }
    /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */ function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        // language-* takes precedence over non-prefixed class names.
        const match = options.languageDetectRe.exec(classes);
        if (match) {
            const language = getLanguage(match[1]);
            if (!language) {
                warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
                warn("Falling back to no-highlight mode for this block.", block);
            }
            return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class)=>shouldNotHighlight(_class) || getLanguage(_class));
    }
    /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */ function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
            code = codeOrLanguageName;
            ignoreIllegals = optionsOrCode.ignoreIllegals;
            languageName = optionsOrCode.language;
        } else {
            // old API
            deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
            deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
            languageName = codeOrLanguageName;
            code = optionsOrCode;
        }
        // https://github.com/highlightjs/highlight.js/issues/3149
        // eslint-disable-next-line no-undefined
        if (ignoreIllegals === undefined) ignoreIllegals = true;
        /** @type {BeforeHighlightContext} */ const context = {
            code,
            language: languageName
        };
        // the plugin can change the desired language or the code to be highlighted
        // just be changing the object it was passed
        fire("before:highlight", context);
        // a before plugin can usurp the result completely by providing it's own
        // in which case we don't even need to call highlight
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        // the plugin can change anything in result to suite it
        fire("after:highlight", result);
        return result;
    }
    /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */ function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = Object.create(null);
        /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */ function keywordData(mode, matchText) {
            return mode.keywords[matchText];
        }
        function processKeywords() {
            if (!top.keywords) {
                emitter.addText(modeBuffer);
                return;
            }
            let lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            let match = top.keywordPatternRe.exec(modeBuffer);
            let buf = "";
            while(match){
                buf += modeBuffer.substring(lastIndex, match.index);
                const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
                const data = keywordData(top, word);
                if (data) {
                    const [kind, keywordRelevance] = data;
                    emitter.addText(buf);
                    buf = "";
                    keywordHits[word] = (keywordHits[word] || 0) + 1;
                    if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                    if (kind.startsWith("_")) // _ implied for relevance only, do not highlight
                    // by applying a class name
                    buf += match[0];
                    else {
                        const cssClass = language.classNameAliases[kind] || kind;
                        emitKeyword(match[0], cssClass);
                    }
                } else buf += match[0];
                lastIndex = top.keywordPatternRe.lastIndex;
                match = top.keywordPatternRe.exec(modeBuffer);
            }
            buf += modeBuffer.substring(lastIndex);
            emitter.addText(buf);
        }
        function processSubLanguage() {
            if (modeBuffer === "") return;
            /** @type HighlightResult */ let result = null;
            if (typeof top.subLanguage === "string") {
                if (!languages[top.subLanguage]) {
                    emitter.addText(modeBuffer);
                    return;
                }
                result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
                continuations[top.subLanguage] = /** @type {CompiledMode} */ result._top;
            } else result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            // Counting embedded language score towards the host language may be disabled
            // with zeroing the containing mode relevance. Use case in point is Markdown that
            // allows XML everywhere and makes every XML snippet to have a much larger Markdown
            // score.
            if (top.relevance > 0) relevance += result.relevance;
            emitter.__addSublanguage(result._emitter, result.language);
        }
        function processBuffer() {
            if (top.subLanguage != null) processSubLanguage();
            else processKeywords();
            modeBuffer = "";
        }
        /**
     * @param {string} text
     * @param {string} scope
     */ function emitKeyword(keyword, scope) {
            if (keyword === "") return;
            emitter.startScope(scope);
            emitter.addText(keyword);
            emitter.endScope();
        }
        /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */ function emitMultiClass(scope, match) {
            let i = 1;
            const max = match.length - 1;
            while(i <= max){
                if (!scope._emit[i]) {
                    i++;
                    continue;
                }
                const klass = language.classNameAliases[scope[i]] || scope[i];
                const text = match[i];
                if (klass) emitKeyword(text, klass);
                else {
                    modeBuffer = text;
                    processKeywords();
                    modeBuffer = "";
                }
                i++;
            }
        }
        /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */ function startNewMode(mode, match) {
            if (mode.scope && typeof mode.scope === "string") emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
            if (mode.beginScope) {
                // beginScope just wraps the begin match itself in a scope
                if (mode.beginScope._wrap) {
                    emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                    modeBuffer = "";
                } else if (mode.beginScope._multi) {
                    // at this point modeBuffer should just be the match
                    emitMultiClass(mode.beginScope, match);
                    modeBuffer = "";
                }
            }
            top = Object.create(mode, {
                parent: {
                    value: top
                }
            });
            return top;
        }
        /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */ function endOfMode(mode, match, matchPlusRemainder) {
            let matched = startsWith(mode.endRe, matchPlusRemainder);
            if (matched) {
                if (mode["on:end"]) {
                    const resp = new Response(mode);
                    mode["on:end"](match, resp);
                    if (resp.isMatchIgnored) matched = false;
                }
                if (matched) {
                    while(mode.endsParent && mode.parent)mode = mode.parent;
                    return mode;
                }
            }
            // even if on:end fires an `ignore` it's still possible
            // that we might trigger the end node because of a parent mode
            if (mode.endsWithParent) return endOfMode(mode.parent, match, matchPlusRemainder);
        }
        /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */ function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
                // no more regexes to potentially match here, so we move the cursor forward one
                // space
                modeBuffer += lexeme[0];
                return 1;
            } else {
                // no need to move the cursor, we still have additional regexes to try and
                // match at this very spot
                resumeScanAtSamePosition = true;
                return 0;
            }
        }
        /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */ function doBeginMatch(match) {
            const lexeme = match[0];
            const newMode = match.rule;
            const resp = new Response(newMode);
            // first internal before callbacks, then the public ones
            const beforeCallbacks = [
                newMode.__beforeBegin,
                newMode["on:begin"]
            ];
            for (const cb of beforeCallbacks){
                if (!cb) continue;
                cb(match, resp);
                if (resp.isMatchIgnored) return doIgnore(lexeme);
            }
            if (newMode.skip) modeBuffer += lexeme;
            else {
                if (newMode.excludeBegin) modeBuffer += lexeme;
                processBuffer();
                if (!newMode.returnBegin && !newMode.excludeBegin) modeBuffer = lexeme;
            }
            startNewMode(newMode, match);
            return newMode.returnBegin ? 0 : lexeme.length;
        }
        /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */ function doEndMatch(match) {
            const lexeme = match[0];
            const matchPlusRemainder = codeToHighlight.substring(match.index);
            const endMode = endOfMode(top, match, matchPlusRemainder);
            if (!endMode) return NO_MATCH;
            const origin = top;
            if (top.endScope && top.endScope._wrap) {
                processBuffer();
                emitKeyword(lexeme, top.endScope._wrap);
            } else if (top.endScope && top.endScope._multi) {
                processBuffer();
                emitMultiClass(top.endScope, match);
            } else if (origin.skip) modeBuffer += lexeme;
            else {
                if (!(origin.returnEnd || origin.excludeEnd)) modeBuffer += lexeme;
                processBuffer();
                if (origin.excludeEnd) modeBuffer = lexeme;
            }
            do {
                if (top.scope) emitter.closeNode();
                if (!top.skip && !top.subLanguage) relevance += top.relevance;
                top = top.parent;
            }while (top !== endMode.parent);
            if (endMode.starts) startNewMode(endMode.starts, match);
            return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
            const list = [];
            for(let current = top; current !== language; current = current.parent)if (current.scope) list.unshift(current.scope);
            list.forEach((item)=>emitter.openNode(item));
        }
        /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */ let lastMatch = {};
        /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */ function processLexeme(textBeforeMatch, match) {
            const lexeme = match && match[0];
            // add non-matched text to the current mode buffer
            modeBuffer += textBeforeMatch;
            if (lexeme == null) {
                processBuffer();
                return 0;
            }
            // we've found a 0 width match and we're stuck, so we need to advance
            // this happens when we have badly behaved rules that have optional matchers to the degree that
            // sometimes they can end up matching nothing at all
            // Ref: https://github.com/highlightjs/highlight.js/issues/2140
            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
                // spit the "skipped" character that our regex choked on back into the output sequence
                modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
                if (!SAFE_MODE) {
                    /** @type {AnnotatedError} */ const err = new Error(`0 width match regex (${languageName})`);
                    err.languageName = languageName;
                    err.badRule = lastMatch.rule;
                    throw err;
                }
                return 1;
            }
            lastMatch = match;
            if (match.type === "begin") return doBeginMatch(match);
            else if (match.type === "illegal" && !ignoreIllegals) {
                // illegal match, we do not continue processing
                /** @type {AnnotatedError} */ const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
                err.mode = top;
                throw err;
            } else if (match.type === "end") {
                const processed = doEndMatch(match);
                if (processed !== NO_MATCH) return processed;
            }
            // edge case for when illegal matches $ (end of line) which is technically
            // a 0 width match but not a begin/end match so it's not caught by the
            // first handler (when ignoreIllegals is true)
            if (match.type === "illegal" && lexeme === "") // advance so we aren't stuck in an infinite loop
            return 1;
            // infinite loops are BAD, this is a last ditch catch all. if we have a
            // decent number of iterations yet our index (cursor position in our
            // parsing) still 3x behind our index then something is very wrong
            // so we bail
            if (iterations > 100000 && iterations > match.index * 3) {
                const err = new Error("potential infinite loop, way more iterations than matches");
                throw err;
            }
            /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */ modeBuffer += lexeme;
            return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
            error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        /** @type {CompiledMode} */ let top = continuation || md;
        /** @type Record<string,CompiledMode> */ const continuations = {}; // keep continuations for sub-languages
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
            if (!language.__emitTokens) {
                top.matcher.considerAll();
                for(;;){
                    iterations++;
                    if (resumeScanAtSamePosition) // only regexes not matched previously will now be
                    // considered for a potential match
                    resumeScanAtSamePosition = false;
                    else top.matcher.considerAll();
                    top.matcher.lastIndex = index;
                    const match = top.matcher.exec(codeToHighlight);
                    // console.log("match", match[0], match.rule && match.rule.begin)
                    if (!match) break;
                    const beforeMatch = codeToHighlight.substring(index, match.index);
                    const processedCount = processLexeme(beforeMatch, match);
                    index = match.index + processedCount;
                }
                processLexeme(codeToHighlight.substring(index));
            } else language.__emitTokens(codeToHighlight, emitter);
            emitter.finalize();
            result = emitter.toHTML();
            return {
                language: languageName,
                value: result,
                relevance,
                illegal: false,
                _emitter: emitter,
                _top: top
            };
        } catch (err) {
            if (err.message && err.message.includes("Illegal")) return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: true,
                relevance: 0,
                _illegalBy: {
                    message: err.message,
                    index,
                    context: codeToHighlight.slice(index - 100, index + 100),
                    mode: err.mode,
                    resultSoFar: result
                },
                _emitter: emitter
            };
            else if (SAFE_MODE) return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: false,
                relevance: 0,
                errorRaised: err,
                _emitter: emitter,
                _top: top
            };
            else throw err;
        }
    }
    /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */ function justTextHighlightResult(code) {
        const result = {
            value: escape(code),
            illegal: false,
            relevance: 0,
            _top: PLAINTEXT_LANGUAGE,
            _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
    }
    /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */ function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name)=>_highlight(name, code, false));
        results.unshift(plaintext); // plaintext is always an option
        const sorted = results.sort((a, b)=>{
            // sort base on relevance
            if (a.relevance !== b.relevance) return b.relevance - a.relevance;
            // always award the tie to the base language
            // ie if C++ and Arduino are tied, it's more likely to be C++
            if (a.language && b.language) {
                if (getLanguage(a.language).supersetOf === b.language) return 1;
                else if (getLanguage(b.language).supersetOf === a.language) return -1;
            }
            // otherwise say they are equal, which has the effect of sorting on
            // relevance while preserving the original ordering - which is how ties
            // have historically been settled, ie the language that comes first always
            // wins in the case of a tie
            return 0;
        });
        const [best, secondBest] = sorted;
        /** @type {AutoHighlightResult} */ const result = best;
        result.secondBest = secondBest;
        return result;
    }
    /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */ function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
    }
    /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */ function highlightElement(element) {
        /** @type HTMLElement */ let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language)) return;
        fire("before:highlightElement", {
            el: element,
            language
        });
        if (element.dataset.highlighted) {
            console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
            return;
        }
        // we should be all text, no child nodes (unescaped HTML) - this is possibly
        // an HTML injection attack - it's likely too late if this is already in
        // production (the code has likely already done its damage by the time
        // we're seeing it)... but we yell loudly about this so that hopefully it's
        // more likely to be caught in development before making it to production
        if (element.children.length > 0) {
            if (!options.ignoreUnescapedHTML) {
                console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
                console.warn("The element with unescaped HTML:");
                console.warn(element);
            }
            if (options.throwUnescapedHTML) {
                const err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
                throw err;
            }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight(text, {
            language,
            ignoreIllegals: true
        }) : highlightAuto(text);
        element.innerHTML = result.value;
        element.dataset.highlighted = "yes";
        updateClassName(element, language, result.language);
        element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relevance: result.relevance
        };
        if (result.secondBest) element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
        };
        fire("after:highlightElement", {
            el: element,
            result,
            text
        });
    }
    /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */ function configure(userOptions) {
        options = inherit(options, userOptions);
    }
    // TODO: remove v12, deprecated
    const initHighlighting = ()=>{
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    // TODO: remove v12, deprecated
    function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    /**
   * auto-highlights all pre>code elements on the page
   */ function highlightAll() {
        // if we are called too early in the loading process
        if (document.readyState === "loading") {
            wantsHighlight = true;
            return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
    }
    function boot() {
        // if a highlight was requested before DOM was loaded, do now
        if (wantsHighlight) highlightAll();
    }
    // make sure we are in the browser environment
    if (typeof window !== "undefined" && window.addEventListener) window.addEventListener("DOMContentLoaded", boot, false);
    /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */ function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
            lang = languageDefinition(hljs);
        } catch (error$1) {
            error("Language definition for '{}' could not be registered.".replace("{}", languageName));
            // hard or soft error
            if (!SAFE_MODE) throw error$1;
            else error(error$1);
            // languages that have serious errors are replaced with essentially a
            // "plaintext" stand-in so that the code blocks will still get normal
            // css classes applied to them - and one bad language won't break the
            // entire highlighter
            lang = PLAINTEXT_LANGUAGE;
        }
        // give it a temporary name if it doesn't have one in the meta-data
        if (!lang.name) lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) registerAliases(lang.aliases, {
            languageName
        });
    }
    /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */ function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases))if (aliases[alias] === languageName) delete aliases[alias];
    }
    /**
   * @returns {string[]} List of language internal names
   */ function listLanguages() {
        return Object.keys(languages);
    }
    /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */ function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
    }
    /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */ function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") aliasList = [
            aliasList
        ];
        aliasList.forEach((alias)=>{
            aliases[alias.toLowerCase()] = languageName;
        });
    }
    /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */ function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
    }
    /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */ function upgradePluginAPI(plugin) {
        // TODO: remove with v12
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) plugin["before:highlightElement"] = (data)=>{
            plugin["before:highlightBlock"](Object.assign({
                block: data.el
            }, data));
        };
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) plugin["after:highlightElement"] = (data)=>{
            plugin["after:highlightBlock"](Object.assign({
                block: data.el
            }, data));
        };
    }
    /**
   * @param {HLJSPlugin} plugin
   */ function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
    }
    /**
   * @param {HLJSPlugin} plugin
   */ function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) plugins.splice(index, 1);
    }
    /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */ function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
            if (plugin[cb]) plugin[cb](args);
        });
    }
    /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */ function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
    }
    /* Interface definition */ Object.assign(hljs, {
        highlight,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
    });
    hljs.debugMode = function() {
        SAFE_MODE = false;
    };
    hljs.safeMode = function() {
        SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
        concat: concat,
        lookahead: lookahead,
        either: either,
        optional: optional,
        anyNumberOfTimes: anyNumberOfTimes
    };
    for(const key in MODES)// @ts-ignore
    if (typeof MODES[key] === "object") // @ts-ignore
    deepFreeze(MODES[key]);
    // merge all the modes/regexes into our main object
    Object.assign(hljs, MODES);
    return hljs;
};
// Other names for the variable may break build script
const highlight = HLJS({});
// returns a new instance of the highlighter to be used for extensions
// check https://github.com/wooorm/lowlight/issues/47
highlight.newInstance = ()=>HLJS({});
module.exports = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;

},{}],"7qfup":[function() {},{}],"hqLug":[function(require,module,exports) {
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
];
const LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
];
const ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
];
const BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
];
const BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global" // Node.js
];
const BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/ /** @type LanguageFn */ function javascript(hljs) {
    const regex = hljs.regex;
    /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */ const hasClosingTag = (match, { after })=>{
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
    };
    const IDENT_RE$1 = IDENT_RE;
    const FRAGMENT = {
        begin: "<>",
        end: "</>"
    };
    // to avoid some special cases inside isTrulyOpeningTag
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */ isTrulyOpeningTag: (match, response)=>{
            const afterMatchIndex = match[0].length + match.index;
            const nextChar = match.input[afterMatchIndex];
            if (// HTML should not include another raw `<` inside a tag
            // nested type?
            // `<Array<Array<number>>`, etc.
            nextChar === "<" || // the , gives away that this is not HTML
            // `<T, A extends keyof T, V>`
            nextChar === ",") {
                response.ignoreMatch();
                return;
            }
            // `<something>`
            // Quite possibly a tag, lets look for a matching closing tag...
            if (nextChar === ">") // if we cannot find a matching closing tag, then we
            // will ignore it
            {
                if (!hasClosingTag(match, {
                    after: afterMatchIndex
                })) response.ignoreMatch();
            }
            // `<blah />` (self-closing)
            // handled by simpleSelfClosing rule
            let m;
            const afterMatch = match.input.substring(afterMatchIndex);
            // some more template typing stuff
            //  <T = any>(key?: string) => Modify<
            if (m = afterMatch.match(/^\s*=/)) {
                response.ignoreMatch();
                return;
            }
            // `<From extends string>`
            // technically this could be HTML, but it smells like a type
            // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
            if (m = afterMatch.match(/^\s+extends\s+/)) {
                if (m.index === 0) {
                    response.ignoreMatch();
                    // eslint-disable-next-line no-useless-return
                    return;
                }
            }
        }
    };
    const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS,
        "variable.language": BUILT_IN_VARIABLES
    };
    // https://tc39.es/ecma262/#sec-literals-numeric-literals
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
    // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
        className: "number",
        variants: [
            // DecimalLiteral
            {
                begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})\\b`
            },
            {
                begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b`
            },
            // DecimalBigIntegerLiteral
            {
                begin: `\\b(0|[1-9](_?[0-9])*)n\\b`
            },
            // NonDecimalIntegerLiteral
            {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            },
            {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            },
            {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            },
            // LegacyOctalIntegerLiteral (does not include underscore separators)
            // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
            {
                begin: "\\b0[0-7]+n?\\b"
            }
        ],
        relevance: 0
    };
    const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: [] // defined later
    };
    const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "xml"
        }
    };
    const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "css"
        }
    };
    const GRAPHQL_TEMPLATE = {
        begin: "gql`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "graphql"
        }
    };
    const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
        ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [
            {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    },
                    {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: true,
                        excludeBegin: true,
                        relevance: 0
                    },
                    {
                        className: "variable",
                        begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                        endsParent: true,
                        relevance: 0
                    },
                    // eat spaces (not newlines) so we can find
                    // types or variables
                    {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    }
                ]
            }
        ]
    });
    const COMMENT = {
        className: "comment",
        variants: [
            JSDOC_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE
        ]
    };
    const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        // Skip numbers when they are part of a variable name
        {
            match: /\$\d+/
        },
        NUMBER
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
        // we need to pair up {} inside our subst to prevent
        // it from ending too early by matching another }
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
            "self"
        ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        // eat recursive parens in sub expressions
        {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS$1,
            contains: [
                "self"
            ].concat(SUBST_AND_COMMENTS)
        }
    ]);
    const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
    };
    // ES6 classes
    const CLASS_OR_EXTENDS = {
        variants: [
            // class Car extends vehicle
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1,
                    /\s+/,
                    /extends/,
                    /\s+/,
                    regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            },
            // class Car
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1
                ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ]
    };
    const CLASS_REFERENCE = {
        relevance: 0,
        match: regex.either(// Hard coded exceptions
        /\bJSON/, // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
            _: [
                // se we still get relevance credit for JS library classes
                ...TYPES,
                ...ERROR_TYPES
            ]
        }
    };
    const USE_STRICT = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
        variants: [
            {
                match: [
                    /function/,
                    /\s+/,
                    IDENT_RE$1,
                    /(?=\s*\()/
                ]
            },
            // anonymous function
            {
                match: [
                    /function/,
                    /\s*(?=\()/
                ]
            }
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        label: "func.def",
        contains: [
            PARAMS
        ],
        illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
    };
    function noneOf(list) {
        return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
        match: regex.concat(/\b/, noneOf([
            ...BUILT_IN_GLOBALS,
            "super",
            "import"
        ]), IDENT_RE$1, regex.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
    };
    const PROPERTY_ACCESS = {
        begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
        end: IDENT_RE$1,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
    };
    const GETTER_OR_SETTER = {
        match: [
            /get|set/,
            /\s+/,
            IDENT_RE$1,
            /(?=\()/
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            {
                begin: /\(\)/
            },
            PARAMS
        ]
    };
    const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
        match: [
            /const|var|let/,
            /\s+/,
            IDENT_RE$1,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            regex.lookahead(FUNC_LEAD_IN_RE)
        ],
        keywords: "async",
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            PARAMS
        ]
    };
    return {
        name: "JavaScript",
        aliases: [
            "js",
            "jsx",
            "mjs",
            "cjs"
        ],
        keywords: KEYWORDS$1,
        // this will be extended by TypeScript
        exports: {
            PARAMS_CONTAINS,
            CLASS_REFERENCE
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            hljs.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }),
            USE_STRICT,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            GRAPHQL_TEMPLATE,
            TEMPLATE_STRING,
            COMMENT,
            // Skip numbers when they are part of a variable name
            {
                match: /\$\d+/
            },
            NUMBER,
            CLASS_REFERENCE,
            {
                className: "attr",
                begin: IDENT_RE$1 + regex.lookahead(":"),
                relevance: 0
            },
            FUNCTION_VARIABLE,
            {
                begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    COMMENT,
                    hljs.REGEXP_MODE,
                    {
                        className: "function",
                        // we have to count the parens to make sure we actually have the
                        // correct bounding ( ) before the =>.  There could be any number of
                        // sub-expressions inside also surrounded by parens.
                        begin: FUNC_LEAD_IN_RE,
                        returnBegin: true,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: hljs.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: true
                                    },
                                    {
                                        begin: /\(/,
                                        end: /\)/,
                                        excludeBegin: true,
                                        excludeEnd: true,
                                        keywords: KEYWORDS$1,
                                        contains: PARAMS_CONTAINS
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: /,/,
                        relevance: 0
                    },
                    {
                        match: /\s+/,
                        relevance: 0
                    },
                    {
                        variants: [
                            {
                                begin: FRAGMENT.begin,
                                end: FRAGMENT.end
                            },
                            {
                                match: XML_SELF_CLOSING
                            },
                            {
                                begin: XML_TAG.begin,
                                // we carefully check the opening tag to see if it truly
                                // is a tag and not a false positive
                                "on:begin": XML_TAG.isTrulyOpeningTag,
                                end: XML_TAG.end
                            }
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: XML_TAG.begin,
                                end: XML_TAG.end,
                                skip: true,
                                contains: [
                                    "self"
                                ]
                            }
                        ]
                    }
                ]
            },
            FUNCTION_DEFINITION,
            {
                // prevent this from getting swallowed up by function
                // since they appear "function like"
                beginKeywords: "while if switch catch for"
            },
            {
                // we have to count the parens to make sure we actually have the correct
                // bounding ( ).  There could be any number of sub-expressions inside
                // also surrounded by parens.
                begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\(" + // first parens
                "[^()]*(\\(" + "[^()]*(\\(" + "[^()]*" + "\\)[^()]*)*" + "\\)[^()]*)*" + "\\)\\s*\\{",
                returnBegin: true,
                label: "func.def",
                contains: [
                    PARAMS,
                    hljs.inherit(hljs.TITLE_MODE, {
                        begin: IDENT_RE$1,
                        className: "title.function"
                    })
                ]
            },
            // catch ... so it won't trigger the property rule below
            {
                match: /\.\.\./,
                relevance: 0
            },
            PROPERTY_ACCESS,
            // hack: prevents detection of keywords in some circumstances
            // .keyword()
            // $keyword = x
            {
                match: "\\$" + IDENT_RE$1,
                relevance: 0
            },
            {
                match: [
                    /\bconstructor(?=\s*\()/
                ],
                className: {
                    1: "title.function"
                },
                contains: [
                    PARAMS
                ]
            },
            FUNCTION_CALL,
            UPPER_CASE_CONSTANT,
            CLASS_OR_EXTENDS,
            GETTER_OR_SETTER,
            {
                match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            }
        ]
    };
}
module.exports = javascript;

},{}],"8wSB8":[function(require,module,exports) {
/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://www.php.net
Category: common
*/ /**
 * @param {HLJSApi} hljs
 * @returns {LanguageDetail}
 * */ function php(hljs) {
    const regex = hljs.regex;
    // negative look-ahead tries to avoid matching patterns that are not
    // Perl at all like $ident$, @ident@, etc.
    const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
    const IDENT_RE = regex.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, NOT_PERL_ETC);
    // Will not detect camelCase classes
    const PASCAL_CASE_CLASS_NAME_RE = regex.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, NOT_PERL_ETC);
    const VARIABLE = {
        scope: "variable",
        match: "\\$+" + IDENT_RE
    };
    const PREPROCESSOR = {
        scope: "meta",
        variants: [
            {
                begin: /<\?php/,
                relevance: 10
            },
            {
                begin: /<\?=/
            },
            // less relevant per PSR-1 which says not to use short-tags
            {
                begin: /<\?/,
                relevance: 0.1
            },
            {
                begin: /\?>/
            } // end php tag
        ]
    };
    const SUBST = {
        scope: "subst",
        variants: [
            {
                begin: /\$\w+/
            },
            {
                begin: /\{\$/,
                end: /\}/
            }
        ]
    };
    const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null
    });
    const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
    });
    const HEREDOC = {
        begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
        end: /[ \t]*(\w+)\b/,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
        "on:begin": (m, resp)=>{
            resp.data._beginMatch = m[1] || m[2];
        },
        "on:end": (m, resp)=>{
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
    };
    const NOWDOC = hljs.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*'(\w+)'\n/,
        end: /[ \t]*(\w+)\b/
    });
    // list of valid whitespaces because non-breaking space might be part of a IDENT_RE
    const WHITESPACE = "[ 	\n]";
    const STRING = {
        scope: "string",
        variants: [
            DOUBLE_QUOTED,
            SINGLE_QUOTED,
            HEREDOC,
            NOWDOC
        ]
    };
    const NUMBER = {
        scope: "number",
        variants: [
            {
                begin: `\\b0[bB][01]+(?:_[01]+)*\\b`
            },
            {
                begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b`
            },
            {
                begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b`
            },
            // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
            {
                begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?`
            }
        ],
        relevance: 0
    };
    const LITERALS = [
        "false",
        "null",
        "true"
    ];
    const KWS = [
        // Magic constants:
        // <https://www.php.net/manual/en/language.constants.predefined.php>
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        // Function that look like language construct or language construct that look like function:
        // List of keywords that may not require parenthesis
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
        // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
        // Other keywords:
        // <https://www.php.net/manual/en/reserved.php>
        // <https://www.php.net/manual/en/language.types.type-juggling.php>
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield"
    ];
    const BUILT_INS = [
        // Standard PHP library:
        // <https://www.php.net/manual/en/book.spl.php>
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        // Reserved interfaces:
        // <https://www.php.net/manual/en/reserved.interfaces.php>
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        // Reserved classes:
        // <https://www.php.net/manual/en/reserved.classes.php>
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass"
    ];
    /** Dual-case keywords
   *
   * ["then","FILE"] =>
   *     ["then", "THEN", "FILE", "file"]
   *
   * @param {string[]} items */ const dualCase = (items)=>{
        /** @type string[] */ const result = [];
        items.forEach((item)=>{
            result.push(item);
            if (item.toLowerCase() === item) result.push(item.toUpperCase());
            else result.push(item.toLowerCase());
        });
        return result;
    };
    const KEYWORDS = {
        keyword: KWS,
        literal: dualCase(LITERALS),
        built_in: BUILT_INS
    };
    /**
   * @param {string[]} items */ const normalizeKeywords = (items)=>{
        return items.map((item)=>{
            return item.replace(/\|\d+$/, "");
        });
    };
    const CONSTRUCTOR_CALL = {
        variants: [
            {
                match: [
                    /new/,
                    regex.concat(WHITESPACE, "+"),
                    // to prevent built ins from being confused as the class constructor call
                    regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
                    PASCAL_CASE_CLASS_NAME_RE
                ],
                scope: {
                    1: "keyword",
                    4: "title.class"
                }
            }
        ]
    };
    const CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
    const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = {
        variants: [
            {
                match: [
                    regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
                    CONSTANT_REFERENCE
                ],
                scope: {
                    2: "variable.constant"
                }
            },
            {
                match: [
                    /::/,
                    /class/
                ],
                scope: {
                    2: "variable.language"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
                    CONSTANT_REFERENCE
                ],
                scope: {
                    1: "title.class",
                    3: "variable.constant"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    regex.concat("::", regex.lookahead(/(?!class\b)/))
                ],
                scope: {
                    1: "title.class"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    /::/,
                    /class/
                ],
                scope: {
                    1: "title.class",
                    3: "variable.language"
                }
            }
        ]
    };
    const NAMED_ARGUMENT = {
        scope: "attr",
        match: regex.concat(IDENT_RE, regex.lookahead(":"), regex.lookahead(/(?!::)/))
    };
    const PARAMS_MODE = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
            NAMED_ARGUMENT,
            VARIABLE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            hljs.C_BLOCK_COMMENT_MODE,
            STRING,
            NUMBER,
            CONSTRUCTOR_CALL
        ]
    };
    const FUNCTION_INVOKE = {
        relevance: 0,
        match: [
            /\b/,
            // to prevent keywords from being confused as the function title
            regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
            IDENT_RE,
            regex.concat(WHITESPACE, "*"),
            regex.lookahead(/(?=\()/)
        ],
        scope: {
            3: "title.function.invoke"
        },
        contains: [
            PARAMS_MODE
        ]
    };
    PARAMS_MODE.contains.push(FUNCTION_INVOKE);
    const ATTRIBUTE_CONTAINS = [
        NAMED_ARGUMENT,
        LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING,
        NUMBER,
        CONSTRUCTOR_CALL
    ];
    const ATTRIBUTES = {
        begin: regex.concat(/#\[\s*/, PASCAL_CASE_CLASS_NAME_RE),
        beginScope: "meta",
        end: /]/,
        endScope: "meta",
        keywords: {
            literal: LITERALS,
            keyword: [
                "new",
                "array"
            ]
        },
        contains: [
            {
                begin: /\[/,
                end: /]/,
                keywords: {
                    literal: LITERALS,
                    keyword: [
                        "new",
                        "array"
                    ]
                },
                contains: [
                    "self",
                    ...ATTRIBUTE_CONTAINS
                ]
            },
            ...ATTRIBUTE_CONTAINS,
            {
                scope: "meta",
                match: PASCAL_CASE_CLASS_NAME_RE
            }
        ]
    };
    return {
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
            ATTRIBUTES,
            hljs.HASH_COMMENT_MODE,
            hljs.COMMENT("//", "$"),
            hljs.COMMENT("/\\*", "\\*/", {
                contains: [
                    {
                        scope: "doctag",
                        match: "@[A-Za-z]+"
                    }
                ]
            }),
            {
                match: /__halt_compiler\(\);/,
                keywords: "__halt_compiler",
                starts: {
                    scope: "comment",
                    end: hljs.MATCH_NOTHING_RE,
                    contains: [
                        {
                            match: /\?>/,
                            scope: "meta",
                            endsParent: true
                        }
                    ]
                }
            },
            PREPROCESSOR,
            {
                scope: "variable.language",
                match: /\$this\b/
            },
            VARIABLE,
            FUNCTION_INVOKE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            {
                match: [
                    /const/,
                    /\s/,
                    IDENT_RE
                ],
                scope: {
                    1: "keyword",
                    3: "variable.constant"
                }
            },
            CONSTRUCTOR_CALL,
            {
                scope: "function",
                relevance: 0,
                beginKeywords: "fn function",
                end: /[;{]/,
                excludeEnd: true,
                illegal: "[$%\\[]",
                contains: [
                    {
                        beginKeywords: "use"
                    },
                    hljs.UNDERSCORE_TITLE_MODE,
                    {
                        begin: "=>",
                        endsParent: true
                    },
                    {
                        scope: "params",
                        begin: "\\(",
                        end: "\\)",
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        contains: [
                            "self",
                            VARIABLE,
                            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
                            hljs.C_BLOCK_COMMENT_MODE,
                            STRING,
                            NUMBER
                        ]
                    }
                ]
            },
            {
                scope: "class",
                variants: [
                    {
                        beginKeywords: "enum",
                        illegal: /[($"]/
                    },
                    {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: true,
                contains: [
                    {
                        beginKeywords: "extends implements"
                    },
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            // both use and namespace still use "old style" rules (vs multi-match)
            // because the namespace name can include `\` and we still want each
            // element to be treated as its own *individual* title
            {
                beginKeywords: "namespace",
                relevance: 0,
                end: ";",
                illegal: /[.']/,
                contains: [
                    hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
                        scope: "title.class"
                    })
                ]
            },
            {
                beginKeywords: "use",
                relevance: 0,
                end: ";",
                contains: [
                    // TODO: title.function vs title.class
                    {
                        match: /\b(as|const|function)\b/,
                        scope: "keyword"
                    },
                    // TODO: could be title.class or title.function
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            STRING,
            NUMBER
        ]
    };
}
module.exports = php;

},{}],"iGKR6":[function(require,module,exports) {
/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/ /** @type LanguageFn */ function bash(hljs) {
    const regex = hljs.regex;
    const VAR = {};
    const BRACED_VAR = {
        begin: /\$\{/,
        end: /\}/,
        contains: [
            "self",
            {
                begin: /:-/,
                contains: [
                    VAR
                ]
            } // default values
        ]
    };
    Object.assign(VAR, {
        className: "variable",
        variants: [
            {
                begin: regex.concat(/\$[\w\d#@][\w\d_]*/, // negative look-ahead tries to avoid matching patterns that are not
                // Perl at all like $ident$, @ident@, etc.
                `(?![\\w\\d])(?![$])`)
            },
            BRACED_VAR
        ]
    });
    const SUBST = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [
            hljs.BACKSLASH_ESCAPE
        ]
    };
    const HERE_DOC = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
            contains: [
                hljs.END_SAME_AS_BEGIN({
                    begin: /(\w+)/,
                    end: /(\w+)/,
                    className: "string"
                })
            ]
        }
    };
    const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
            hljs.BACKSLASH_ESCAPE,
            VAR,
            SUBST
        ]
    };
    SUBST.contains.push(QUOTE_STRING);
    const ESCAPED_QUOTE = {
        match: /\\"/
    };
    const APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/
    };
    const ESCAPED_APOS = {
        match: /\\'/
    };
    const ARITHMETIC = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
            {
                begin: /\d+#[0-9a-f]+/,
                className: "number"
            },
            hljs.NUMBER_MODE,
            VAR
        ]
    };
    const SH_LIKE_SHELLS = [
        "fish",
        "bash",
        "zsh",
        "sh",
        "csh",
        "ksh",
        "tcsh",
        "dash",
        "scsh"
    ];
    const KNOWN_SHEBANG = hljs.SHEBANG({
        binary: `(${SH_LIKE_SHELLS.join("|")})`,
        relevance: 10
    });
    const FUNCTION = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [
            hljs.inherit(hljs.TITLE_MODE, {
                begin: /\w[\w\d_]*/
            })
        ],
        relevance: 0
    };
    const KEYWORDS = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "until",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function",
        "select"
    ];
    const LITERALS = [
        "true",
        "false"
    ];
    // to consume paths to prevent keyword matches inside them
    const PATH_MODE = {
        match: /(\/[a-z._-]+)+/
    };
    // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    const SHELL_BUILT_INS = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset"
    ];
    const BASH_BUILT_INS = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "type",
        "typeset",
        "ulimit",
        "unalias"
    ];
    const ZSH_BUILT_INS = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp"
    ];
    const GNU_CORE_UTILS = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        // "false", // keyword literal already
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        // "true", // keyword literal already
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes"
    ];
    return {
        name: "Bash",
        aliases: [
            "sh"
        ],
        keywords: {
            $pattern: /\b[a-z][a-z0-9._-]+\b/,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: [
                ...SHELL_BUILT_INS,
                ...BASH_BUILT_INS,
                // Shell modifiers
                "set",
                "shopt",
                ...ZSH_BUILT_INS,
                ...GNU_CORE_UTILS
            ]
        },
        contains: [
            KNOWN_SHEBANG,
            hljs.SHEBANG(),
            FUNCTION,
            ARITHMETIC,
            hljs.HASH_COMMENT_MODE,
            HERE_DOC,
            PATH_MODE,
            QUOTE_STRING,
            ESCAPED_QUOTE,
            APOS_STRING,
            ESCAPED_APOS,
            VAR
        ]
    };
}
module.exports = bash;

},{}],"8vhOB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DropDown", ()=>(0, _dropDown.CpxDropDown));
var _dropDown = require("./DropDown");

},{"./DropDown":"eKSuN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKSuN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */ parcelHelpers.export(exports, "CpxDropDown", ()=>CpxDropDown);
var _element = require("../../element");
class CpxDropDown extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("drop-down:class") || "";
        this.title = this.getAttribute("drop-down:title") || "DropDown Title";
        this.content = this.initialContent || this.getAttribute("drop-down:content") || "DropDown Content";
    }
    connectedCallback() {
        this.render();
        this.addMouseHandler();
    }
    addMouseHandler() {
        const dropDown = this.querySelector(`[drop-down="toggle"]`);
        const dropDownEvent = this.querySelector(`[drop-down]`)?.getAttribute("drop-down:event") || "mouseover";
        dropDown.addEventListener(dropDownEvent, ()=>{
            dropDown.querySelector(`[drop-down="toggle"]`).style.display = `block`;
        });
        dropDown.addEventListener(dropDownEvent === "mouseover" ? "mouseout" : "DOMContentLoaded", ()=>{
            dropDown.querySelector(`[drop-down="toggle"]`).style.display = `none`;
        });
    }
    render() {
        this.innerHTML = `
       <div class="drop-down ${this.classNames}">
          <section class="drop-down__toggle" drop-down="toggle">
              ${this.title}
          </section>
        </div>
        <section class="drop-down__content" drop-down="content">
          ${this.content}
        </section>
        `;
    }
}
customElements.define(`drop-down`, CpxDropDown);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lta5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SliderContainer", ()=>(0, _sliderContainer.CpxSliderContainer));
parcelHelpers.export(exports, "SliderItem", ()=>(0, _sliderItem.CpxSliderItem));
parcelHelpers.export(exports, "runSlider", ()=>(0, _runSlider.runSlider));
var _sliderContainer = require("./SliderContainer");
var _sliderItem = require("./SliderItem");
var _runSlider = require("./runSlider");

},{"./SliderContainer":"eZxKV","./SliderItem":"lVH9V","./runSlider":"55GrW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZxKV":[function(require,module,exports) {
// import Swiper from "swiper";
// import styles bundle
// import "swiper/css/bundle";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */ parcelHelpers.export(exports, "CpxSliderContainer", ()=>CpxSliderContainer);
var _element = require("../../element");
var _runSlider = require("./runSlider");
class CpxSliderContainer extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("slider-container:class") || "";
        this.slider = (0, _runSlider.runSlider);
    }
    render() {
        this.innerHTML = `
        <section class="slider-container ${this.classNames}">
            <div class="slider-container__wrapper swiper-wrapper">
                ${this.initialContent !== "" ? `${this.initialContent}` : ``}
            </div>
        </section>
        `;
    }
}
customElements.define(`slider-container`, CpxSliderContainer);

},{"../../element":"7TddR","./runSlider":"55GrW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55GrW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "runSlider", ()=>runSlider);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
function runSlider() {
    const slider = (direction = "vertical", loop = true)=>{
        new (0, _swiperDefault.default)(".slider-container", {
            direction,
            loop,
            pagination: {
                el: "slider-pagination"
            },
            navigation: {
                nextEl: "slider-button[next]",
                prevEl: "slider-button[prev]"
            },
            scrollbar: {
                el: "slider-scrollbar"
            }
        });
    };
}

},{"swiper":"iM6UL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iM6UL":[function(require,module,exports) {
/**
 * Swiper 11.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 27, 2024
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMjs.S));
var _swiperCoreMjs = require("./shared/swiper-core.mjs");

},{"./shared/swiper-core.mjs":"c1Vcv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1Vcv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
var _utilsMjs = require("./utils.mjs");
let support;
function calcSupport() {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const document1 = (0, _ssrWindowEsmMjs.g)();
    return {
        smoothScroll: document1.documentElement && document1.documentElement.style && "scrollBehavior" in document1.documentElement.style,
        touch: !!("ontouchstart" in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch)
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}
let deviceCached;
function calcDevice(_temp) {
    let { userAgent } = _temp === void 0 ? {} : _temp;
    const support = getSupport();
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const platform = window1.navigator.platform;
    const ua = userAgent || window1.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window1.screen.width;
    const screenHeight = window1.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    }
    // Export object
    return device;
}
function getDevice(overrides) {
    if (overrides === void 0) overrides = {};
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}
let browser;
function calcBrowser() {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window1.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
        const ua = String(window1.navigator.userAgent);
        if (ua.includes("Version/")) {
            const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
        isSafari: needPerspectiveFix || isSafariBrowser,
        needPerspectiveFix,
        need3dFix,
        isWebView
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}
function Resize(_ref) {
    let { swiper, on, emit } = _ref;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window1.requestAnimationFrame(()=>{
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize, contentRect, target } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window1.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window1.addEventListener("resize", resizeHandler);
        window1.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window1.removeEventListener("resize", resizeHandler);
        window1.removeEventListener("orientationchange", orientationChangeHandler);
    });
}
function Observer(_ref) {
    let { swiper, extendParams, on, emit } = _ref;
    const observers = [];
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const attach = function(target, options) {
        if (options === void 0) options = {};
        const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window1.requestAnimationFrame) window1.requestAnimationFrame(observerUpdate);
            else window1.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, _utilsMjs.a)(swiper.hostEl);
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}
/* eslint-disable no-underscore-dangle */ var eventsEmitter = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = el.clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = el.clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
    // Subtract paddings
    width = width - parseInt((0, _utilsMjs.o)(el, "padding-left") || 0, 10) - parseInt((0, _utilsMjs.o)(el, "padding-right") || 0, 10);
    height = height - parseInt((0, _utilsMjs.o)(el, "padding-top") || 0, 10) - parseInt((0, _utilsMjs.o)(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, _utilsMjs.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    swiper.virtualSize = -spaceBetween;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) slideEl.style.marginLeft = "";
        else slideEl.style.marginRight = "";
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slides);
    else if (swiper.grid) swiper.grid.unsetSlides();
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
        if (slides[i] && (0, _utilsMjs.o)(slide, "display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) slide.style.transform = "none";
            if (currentWebKitTransform) slide.style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, _utilsMjs.f)(slide, "width", true) : (0, _utilsMjs.f)(slide, "height", true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide.style.transform = currentTransform;
            if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1)snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
    }
}
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    // Visible Slides
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides[i].classList.add(params.slideVisibleClass);
        }
        if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd, progressLoop } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, slidesEl, activeIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector)=>{
        return (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    } else if (gridEnabled) {
        activeSlide = slides.filter((slideEl)=>slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl)=>slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl)=>slideEl.column === activeIndex - 1)[0];
    } else activeSlide = slides[activeIndex];
    if (activeSlide) {
        // Active classes
        activeSlide.classList.add(params.slideActiveClass);
        if (gridEnabled) {
            if (nextSlide) nextSlide.classList.add(params.slideNextClass);
            if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
        } else {
            // Next Slide
            nextSlide = (0, _utilsMjs.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) nextSlide = slides[0];
            if (nextSlide) nextSlide.classList.add(params.slideNextClass);
            // Prev Slide
            prevSlide = (0, _utilsMjs.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            params.loop;
            if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
        }
    }
    swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) {
            if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            else // init later
            requestAnimationFrame(()=>{
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (lazyEl) lazyEl.remove();
                }
            });
        }
        if (lazyEl) lazyEl.remove();
    }
};
const unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [
            activeColumn - amount
        ];
        preloadColumns.push(...Array.from({
            length: amount
        }).map((_, i)=>{
            return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i)=>{
            if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) for(let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1){
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
    else {
        for(let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
    }
};
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };
    if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
    else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.filter((slideEl)=>slideEl.column === activeIndex)[0];
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
        if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
        if (slideIndex) realIndex = parseInt(slideIndex, 10);
        else realIndex = activeIndex;
    } else realIndex = activeIndex;
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    if (swiper.initialized) preload(swiper);
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
        swiper.emit("slideChange");
    }
}
function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [
        ...path.slice(path.indexOf(el) + 1, path.length)
    ].forEach((pathEl)=>{
        if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
    });
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsMjs.j)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.r)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
};
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
    let { swiper, runCallbacks, direction, step } = _ref;
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}
function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}
var transition = {
    setTransition,
    transitionStart,
    transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                });
            } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._immediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.r)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
        else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const { centeredSlides } = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
            else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === "next" ? swiper.realIndex : undefined
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
            } else newIndex = swiper.getSlideIndexByData(newIndex);
        }
    }
    requestAnimationFrame(()=>{
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
}
/* eslint no-unused-vars: "off" */ function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { enabled, params, animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "next"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame(()=>{
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "prev"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame(()=>{
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    if (swiper.destroyed) return;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    if (swiper.destroyed) return;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const { params, slidesEl } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                (0, _utilsMjs.n)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, _utilsMjs.n)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
};
function loopCreate(slideRealIndex) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = ()=>{
        const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index)=>{
            el.setAttribute("data-swiper-slide-index", index);
        });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides)=>{
        for(let i = 0; i < amountOfSlides; i += 1){
            const slideEl = swiper.isElement ? (0, _utilsMjs.c)("swiper-slide", [
                params.slideBlankClass
            ]) : (0, _utilsMjs.c)("div", [
                params.slideClass,
                params.slideBlankClass
            ]);
            swiper.slidesEl.append(slideEl);
        }
    };
    if (shouldFillGroup) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        initSlides();
    } else if (shouldFillGrid) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        initSlides();
    } else initSlides();
    swiper.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? undefined : "next"
    });
}
function loopFix(_temp) {
    let { slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
    const { centeredSlides } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
            if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit("loopFix");
        return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
    else {
        slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    else if (gridEnabled && params.grid.fill === "row") (0, _utilsMjs.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el)=>el.classList.contains(params.slideActiveClass))[0]);
    else activeIndex = activeSlideIndex;
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                const colIndexToPrepend = cols - index - 1;
                for(let i = slides.length - 1; i >= 0; i -= 1)if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
            // slides.forEach((slide, slideIndex) => {
            //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
            // });
            } else prependSlidesIndexes.push(cols - index - 1);
        }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
        slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) slides.forEach((slide, slideIndex)=>{
                if (slide.column === index) appendSlidesIndexes.push(slideIndex);
            });
            else appendSlidesIndexes.push(index);
        }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
    if (isPrev) prependSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    if (isNext) appendSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") swiper.updateSlides();
    else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach((slide, slideIndex)=>{
        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else if (setTranslate) {
                const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex,
            direction,
            setTranslate,
            activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c)=>{
            if (!c.destroyed && c.params.loop) c.loopFix({
                ...loopParams,
                slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        });
        else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
            ...loopParams,
            slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
    }
    swiper.emit("loopFix");
}
function loopDestroy() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
    loopCreate,
    loopFix,
    loopDestroy
};
function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
};
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindowEsmMjs.g)() || el === (0, _ssrWindowEsmMjs.a)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const { params } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") {
            event.preventDefault();
            return true;
        }
        return false;
    }
    return true;
}
function onTouchStart(event) {
    const swiper = this;
    const document1 = (0, _ssrWindowEsmMjs.g)();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
        if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
        data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
    if (e.type === "touchstart") {
        // don't proceed touch event
        preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
        return;
    }
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
        if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    if (!preventEdgeSwipe(swiper, e, startX)) return;
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsMjs.d)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === "SELECT") data.isTouched = false;
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== targetEl) document1.activeElement.blur();
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit("touchStart", e);
}
function onTouchMove(event) {
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
        if (data.touchId !== null) return; // return from pointer if we use touch
        const id = e.pointerId;
        if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
        targetTouch = [
            ...e.changedTouches
        ].filter((t)=>t.identifier === data.touchId)[0];
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else targetTouch = e;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsMjs.d)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (document1.activeElement) {
        if (e.target === document1.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
        if (isLoop && allowLoopFix) swiper.loopFix({
            direction: swiper.swipeDirection
        });
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent("transitionend", {
                bubbles: true,
                cancelable: true
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    new Date().getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
        Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
            startTranslate: data.currentTranslate
        });
        data.loopSwapReset = true;
        data.startTranslate = data.currentTranslate;
        return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
            direction: "prev",
            setTranslate: true,
            activeSlideIndex: 0
        });
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
    } else if (diff < 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
            direction: "next",
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
        if (data.touchId !== null) return; // return from pointer if we use touch
        if (e.pointerId !== data.pointerId) return;
        targetTouch = e;
    } else {
        targetTouch = [
            ...e.changedTouches
        ].filter((t)=>t.identifier === data.touchId)[0];
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(e.type)) {
        const proceed = [
            "pointercancel",
            "contextmenu"
        ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) return;
    }
    data.pointerId = null;
    data.touchId = null;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
    // Time diff
    const touchEndTime = (0, _utilsMjs.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsMjs.d)();
    (0, _utilsMjs.n)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    }
    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (swipeToLast || currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
    swiper.update();
}
function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
}
const events = (swiper, method)=>{
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const { params, el, wrapperEl, device } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    // Touch Events
    document1[domMethod]("touchstart", swiper.onDocumentTouchStart, {
        passive: false,
        capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
        passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
        passive: false
    });
    document1[domMethod]("touchmove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document1[domMethod]("pointermove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document1[domMethod]("touchend", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointerup", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointercancel", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("touchcancel", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointerout", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("pointerleave", swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]("contextmenu", swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
    // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    else swiper[swiperMethod]("observerUpdate", onResize, true);
    // Images loader
    el[domMethod]("load", swiper.onLoad, {
        capture: true
    });
};
function attachEvents() {
    const swiper = this;
    const { params } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
var events$1 = {
    attachEvents,
    detachEvents
};
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex, initialized, params, el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    // Toggle navigation, pagination, scrollbar
    [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((prop)=>{
        if (typeof breakpointParams[prop] === "undefined") return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsMjs.u)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
        if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) swiper.loopDestroy();
    }
    swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) base = "window";
    if (!breakpoints || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const currentHeight = base === "window" ? window1.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === "window") {
            if (window1.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}
var breakpoints = {
    setBreakpoint,
    getBreakpoint
};
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, el, device } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        },
        {
            "watch-progress": params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
function removeClasses() {
    const swiper = this;
    const { el, classNames } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
var classes = {
    addClasses,
    removeClasses
};
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow
};
var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {};
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsMjs.u)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
        if ([
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsMjs.u)(allModulesParams, obj);
            return;
        }
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsMjs.u)(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
};
const extendedDefaults = {};
class Swiper {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsMjs.u)({}, params);
        if (el && !params.el) params.el = el;
        const document1 = (0, _ssrWindowEsmMjs.g)();
        if (params.el && typeof params.el === "string" && document1.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document1.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, _utilsMjs.u)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, _utilsMjs.u)({}, defaults, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, _utilsMjs.u)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsMjs.u)({}, swiper.params);
        swiper.passedParams = (0, _utilsMjs.u)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                pointerId: null,
                touchId: null
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper");
        // Init
        if (swiper.params.init) swiper.init();
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getDirectionLabel(property) {
        if (this.isHorizontal()) return property;
        // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    getSlideIndex(slideEl) {
        const { slidesEl, params } = this;
        const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, _utilsMjs.h)(slides[0]);
        return (0, _utilsMjs.h)(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl, params } = swiper;
        swiper.slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = "current";
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (typeof params.slidesPerView === "number") return params.slidesPerView;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += Math.ceil(slides[i].swiperSlideSize);
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper;
        // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
            setTranslate();
            if (params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "rtl";
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "ltr";
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === "string") el = document.querySelector(el);
        if (!el) return false;
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, _utilsMjs.e)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, _utilsMjs.c)("div", swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, _utilsMjs.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
            hostEl: swiper.isElement ? el.parentNode.host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.o)(el, "direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.o)(el, "direction") === "rtl"),
            wrongRTL: (0, _utilsMjs.o)(wrapperEl, "display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit");
        // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        // Create loop
        if (swiper.params.loop) swiper.loopCreate();
        // Attach events
        swiper.attachEvents();
        const lazyElements = [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ];
        if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        lazyElements.forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
            else imageEl.addEventListener("load", (e)=>{
                processLazyPreloader(swiper, e.target);
            });
        });
        preload(swiper);
        // Init Flag
        swiper.initialized = true;
        preload(swiper);
        // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params, el, wrapperEl, slides } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy");
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) swiper.loopDestroy();
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            el.removeAttribute("style");
            wrapperEl.removeAttribute("style");
            if (slides && slides.length) slides.forEach((slideEl)=>{
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                slideEl.removeAttribute("style");
                slideEl.removeAttribute("data-swiper-slide-index");
            });
        }
        swiper.emit("destroy");
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.el.swiper = null;
            (0, _utilsMjs.v)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsMjs.u)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.mjs":"th8PY","./utils.mjs":"9mU7V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"th8PY":[function(require,module,exports) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
    if (target === void 0) target = {};
    if (src === void 0) src = {};
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mU7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "h", ()=>elementIndex);
parcelHelpers.export(exports, "i", ()=>classesToTokens);
parcelHelpers.export(exports, "j", ()=>getTranslate);
parcelHelpers.export(exports, "k", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "l", ()=>isObject);
parcelHelpers.export(exports, "m", ()=>makeElementsArray);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>elementStyle);
parcelHelpers.export(exports, "p", ()=>elementNextAll);
parcelHelpers.export(exports, "q", ()=>elementPrevAll);
parcelHelpers.export(exports, "r", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
parcelHelpers.export(exports, "t", ()=>showWarning);
parcelHelpers.export(exports, "u", ()=>extend);
parcelHelpers.export(exports, "v", ()=>deleteProps);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
function classesToTokens(classes) {
    if (classes === void 0) classes = "";
    return classes.trim().split(" ").filter((c)=>!!c.trim());
}
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
        // something got wrong
        }
    });
}
function nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis) {
    if (axis === void 0) axis = "x";
    const window1 = (0, _ssrWindowEsmMjs.a)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
    let { swiper, targetPosition, side } = _ref;
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}
function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
    if (selector === void 0) selector = "";
    return [
        ...element.children
    ].filter((el)=>el.matches(selector));
}
function showWarning(text) {
    try {
        console.warn(text);
        return;
    } catch (err) {
    // err
    }
}
function createElement(tag, classes) {
    if (classes === void 0) classes = [];
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
    return el;
}
function elementOffset(el) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    const document1 = (0, _ssrWindowEsmMjs.g)();
    const box = el.getBoundingClientRect();
    const body = document1.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
    const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    return window1.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
    const window1 = (0, _ssrWindowEsmMjs.a)();
    if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    return el.offsetWidth;
}
function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [
        el
    ]).filter((e)=>!!e);
}

},{"./ssr-window.esm.mjs":"th8PY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVH9V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */ parcelHelpers.export(exports, "CpxSliderItem", ()=>CpxSliderItem);
// import styles bundle
// import "swiper/css/bundle";
var _element = require("../../element");
class CpxSliderItem extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("slider-item:class") || "";
        this.url = this.getAttribute("slider-item:url") || "";
        this.title = this.getAttribute("slider-item:title") || "Slider Item Image";
    }
    render() {
        this.innerHTML = `
        <section class="swiper-slide ${this.classNames}">
            ${this.initialContent !== "" ? `${this.initialContent}` : `<picture-element 
                      picture-element:url="${this.url}"
                      picture-element:alt="${this.title}"
                      ></picture-element>`}
        </section>
        `;
    }
}
customElements.define(`slider-item`, CpxSliderItem);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CUIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParseMarkdown", ()=>(0, _parseMarkdown.CpxParseMarkdown));
var _parseMarkdown = require("./ParseMarkdown");

},{"./ParseMarkdown":"bOLIv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOLIv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Log the behavior of marked
parcelHelpers.export(exports, "CpxParseMarkdown", ()=>CpxParseMarkdown);
var _element = require("../../element");
var _marked = require("marked");
class CpxParseMarkdown extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("parse-markdown:class") || "";
        this.sourceUrl = this.getAttribute("parse-markdown:url") || "";
        this.hasBaseStyles = this.getAttribute("parse-markdown:styles") || false;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const evalBaseStyles = eval(this.hasBaseStyles);
        if (this.initialContent !== "") fetch(this.initialContent).then((response)=>response.text()).then((markdownContent)=>{
            // Parse the Markdown content using marked
            this.innerHTML = `
          <div class="parse-markdown parse-markdown--styles-${evalBaseStyles.toString()} ${this.classNames}">
            ${_marked.parse(markdownContent)}
          </div>
        `;
        }).catch((error)=>{
            console.error("Error fetching Markdown Initial Content:", error);
        });
        // Check if sourceUrl is provided
        if (!this.sourceUrl) {
            console.error("No source URL provided for Markdown content.");
            return;
        }
        // Fetch the Markdown content from the source URL
        fetch(this.sourceUrl).then((response)=>response.text()).then((markdownContent)=>{
            // Parse the Markdown content using marked
            this.innerHTML = `
          <div class="parse-markdown parse-markdown--styles-${evalBaseStyles.toString()} ${this.classNames}">
            ${_marked.parse(markdownContent)}
          </div>
        `;
        }).catch((error)=>{
            console.error("Error fetching Markdown content:", error);
        });
    }
}
customElements.define(`parse-markdown`, CpxParseMarkdown);

},{"../../element":"7TddR","marked":"4duqf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4duqf":[function(require,module,exports) {
/**
 * marked v12.0.1 - a markdown parser
 * Copyright (c) 2011-2024, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    /**
     * Gets the original marked default options.
     */ function _getDefaults() {
        return {
            async: false,
            breaks: false,
            extensions: null,
            gfm: true,
            hooks: null,
            pedantic: false,
            renderer: null,
            silent: false,
            tokenizer: null,
            walkTokens: null
        };
    }
    exports1.defaults = _getDefaults();
    function changeDefaults(newDefaults) {
        exports1.defaults = newDefaults;
    }
    /**
     * Helpers
     */ const escapeTest = /[&<>"']/;
    const escapeReplace = new RegExp(escapeTest.source, "g");
    const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
    const escapeReplacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    const getEscapeReplacement = (ch)=>escapeReplacements[ch];
    function escape$1(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) return html.replace(escapeReplace, getEscapeReplacement);
        } else {
            if (escapeTestNoEncode.test(html)) return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
        return html;
    }
    const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, (_, n)=>{
            n = n.toLowerCase();
            if (n === "colon") return ":";
            if (n.charAt(0) === "#") return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            return "";
        });
    }
    const caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
        let source = typeof regex === "string" ? regex : regex.source;
        opt = opt || "";
        const obj = {
            replace: (name, val)=>{
                let valSource = typeof val === "string" ? val : val.source;
                valSource = valSource.replace(caret, "$1");
                source = source.replace(name, valSource);
                return obj;
            },
            getRegex: ()=>{
                return new RegExp(source, opt);
            }
        };
        return obj;
    }
    function cleanUrl(href) {
        try {
            href = encodeURI(href).replace(/%25/g, "%");
        } catch (e) {
            return null;
        }
        return href;
    }
    const noopTest = {
        exec: ()=>null
    };
    function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        const row = tableRow.replace(/\|/g, (match, offset, str)=>{
            let escaped = false;
            let curr = offset;
            while(--curr >= 0 && str[curr] === "\\")escaped = !escaped;
            if (escaped) // odd number of slashes means | is escaped
            // so we leave it alone
            return "|";
            else // add space before unescaped |
            return " |";
        }), cells = row.split(/ \|/);
        let i = 0;
        // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) cells.shift();
        if (cells.length > 0 && !cells[cells.length - 1].trim()) cells.pop();
        if (count) {
            if (cells.length > count) cells.splice(count);
            else while(cells.length < count)cells.push("");
        }
        for(; i < cells.length; i++)// leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, "|");
        return cells;
    }
    /**
     * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
     * /c*$/ is vulnerable to REDOS.
     *
     * @param str
     * @param c
     * @param invert Remove suffix of non-c chars instead. Default falsey.
     */ function rtrim(str, c, invert) {
        const l = str.length;
        if (l === 0) return "";
        // Length of suffix matching the invert condition.
        let suffLen = 0;
        // Step left until we fail to match the invert condition.
        while(suffLen < l){
            const currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) suffLen++;
            else if (currChar !== c && invert) suffLen++;
            else break;
        }
        return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
        if (str.indexOf(b[1]) === -1) return -1;
        let level = 0;
        for(let i = 0; i < str.length; i++){
            if (str[i] === "\\") i++;
            else if (str[i] === b[0]) level++;
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) return i;
            }
        }
        return -1;
    }
    function outputLink(cap, link, raw, lexer) {
        const href = link.href;
        const title = link.title ? escape$1(link.title) : null;
        const text = cap[1].replace(/\\([\[\]])/g, "$1");
        if (cap[0].charAt(0) !== "!") {
            lexer.state.inLink = true;
            const token = {
                type: "link",
                raw,
                href,
                title,
                text,
                tokens: lexer.inlineTokens(text)
            };
            lexer.state.inLink = false;
            return token;
        }
        return {
            type: "image",
            raw,
            href,
            title,
            text: escape$1(text)
        };
    }
    function indentCodeCompensation(raw, text) {
        const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) return text;
        const indentToCode = matchIndentToCode[1];
        return text.split("\n").map((node)=>{
            const matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) return node;
            const [indentInNode] = matchIndentInNode;
            if (indentInNode.length >= indentToCode.length) return node.slice(indentToCode.length);
            return node;
        }).join("\n");
    }
    /**
     * Tokenizer
     */ class _Tokenizer {
        options;
        rules;
        lexer;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        space(src) {
            const cap = this.rules.block.newline.exec(src);
            if (cap && cap[0].length > 0) return {
                type: "space",
                raw: cap[0]
            };
        }
        code(src) {
            const cap = this.rules.block.code.exec(src);
            if (cap) {
                const text = cap[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: cap[0],
                    codeBlockStyle: "indented",
                    text: !this.options.pedantic ? rtrim(text, "\n") : text
                };
            }
        }
        fences(src) {
            const cap = this.rules.block.fences.exec(src);
            if (cap) {
                const raw = cap[0];
                const text = indentCodeCompensation(raw, cap[3] || "");
                return {
                    type: "code",
                    raw,
                    lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
                    text
                };
            }
        }
        heading(src) {
            const cap = this.rules.block.heading.exec(src);
            if (cap) {
                let text = cap[2].trim();
                // remove trailing #s
                if (/#$/.test(text)) {
                    const trimmed = rtrim(text, "#");
                    if (this.options.pedantic) text = trimmed.trim();
                    else if (!trimmed || / $/.test(trimmed)) // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
                return {
                    type: "heading",
                    raw: cap[0],
                    depth: cap[1].length,
                    text,
                    tokens: this.lexer.inline(text)
                };
            }
        }
        hr(src) {
            const cap = this.rules.block.hr.exec(src);
            if (cap) return {
                type: "hr",
                raw: cap[0]
            };
        }
        blockquote(src) {
            const cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ""), "\n");
                const top = this.lexer.state.top;
                this.lexer.state.top = true;
                const tokens = this.lexer.blockTokens(text);
                this.lexer.state.top = top;
                return {
                    type: "blockquote",
                    raw: cap[0],
                    tokens,
                    text
                };
            }
        }
        list(src) {
            let cap = this.rules.block.list.exec(src);
            if (cap) {
                let bull = cap[1].trim();
                const isordered = bull.length > 1;
                const list = {
                    type: "list",
                    raw: "",
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : "",
                    loose: false,
                    items: []
                };
                bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
                if (this.options.pedantic) bull = isordered ? bull : "[*+-]";
                // Get next list item
                const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                let raw = "";
                let itemContents = "";
                let endsWithBlankLine = false;
                // Check if current bullet point can start a new List Item
                while(src){
                    let endEarly = false;
                    if (!(cap = itemRegex.exec(src))) break;
                    if (this.rules.block.hr.test(src)) break;
                    raw = cap[0];
                    src = src.substring(raw.length);
                    let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t)=>" ".repeat(3 * t.length));
                    let nextLine = src.split("\n", 1)[0];
                    let indent = 0;
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = line.trimStart();
                    } else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                        itemContents = line.slice(indent);
                        indent += cap[1].length;
                    }
                    let blankLine = false;
                    if (!line && /^ *$/.test(nextLine)) {
                        raw += nextLine + "\n";
                        src = src.substring(nextLine.length + 1);
                        endEarly = true;
                    }
                    if (!endEarly) {
                        const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
                        const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
                        const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
                        const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
                        // Check if following lines should be included in List Item
                        while(src){
                            const rawLine = src.split("\n", 1)[0];
                            nextLine = rawLine;
                            // Re-align to follow commonmark nesting rules
                            if (this.options.pedantic) nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                            // End list item if found code fences
                            if (fencesBeginRegex.test(nextLine)) break;
                            // End list item if found start of new heading
                            if (headingBeginRegex.test(nextLine)) break;
                            // End list item if found start of new bullet
                            if (nextBulletRegex.test(nextLine)) break;
                            // Horizontal rule found
                            if (hrRegex.test(src)) break;
                            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) itemContents += "\n" + nextLine.slice(indent);
                            else {
                                // not enough indentation
                                if (blankLine) break;
                                // paragraph continuation unless last line was a different block level element
                                if (line.search(/[^ ]/) >= 4) break;
                                if (fencesBeginRegex.test(line)) break;
                                if (headingBeginRegex.test(line)) break;
                                if (hrRegex.test(line)) break;
                                itemContents += "\n" + nextLine;
                            }
                            if (!blankLine && !nextLine.trim()) blankLine = true;
                            raw += rawLine + "\n";
                            src = src.substring(rawLine.length + 1);
                            line = nextLine.slice(indent);
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) list.loose = true;
                        else if (/\n *\n *$/.test(raw)) endsWithBlankLine = true;
                    }
                    let istask = null;
                    let ischecked;
                    // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== "[ ] ";
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
                        }
                    }
                    list.items.push({
                        type: "list_item",
                        raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents,
                        tokens: []
                    });
                    list.raw += raw;
                }
                // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = raw.trimEnd();
                list.items[list.items.length - 1].text = itemContents.trimEnd();
                list.raw = list.raw.trimEnd();
                // Item child tokens handled here at end because we needed to have the final item to trim it first
                for(let i = 0; i < list.items.length; i++){
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    if (!list.loose) {
                        // Check if list should be loose
                        const spacers = list.items[i].tokens.filter((t)=>t.type === "space");
                        const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t)=>/\n.*\n/.test(t.raw));
                        list.loose = hasMultipleLineBreaks;
                    }
                }
                // Set all items to loose if list is loose
                if (list.loose) for(let i = 0; i < list.items.length; i++)list.items[i].loose = true;
                return list;
            }
        }
        html(src) {
            const cap = this.rules.block.html.exec(src);
            if (cap) {
                const token = {
                    type: "html",
                    block: true,
                    raw: cap[0],
                    pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
                    text: cap[0]
                };
                return token;
            }
        }
        def(src) {
            const cap = this.rules.block.def.exec(src);
            if (cap) {
                const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
                const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
                const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
                return {
                    type: "def",
                    tag,
                    raw: cap[0],
                    href,
                    title
                };
            }
        }
        table(src) {
            const cap = this.rules.block.table.exec(src);
            if (!cap) return;
            if (!/[:|]/.test(cap[2])) // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
            return;
            const headers = splitCells(cap[1]);
            const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
            const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
            const item = {
                type: "table",
                raw: cap[0],
                header: [],
                align: [],
                rows: []
            };
            if (headers.length !== aligns.length) // header and align columns must be equal, rows can be different.
            return;
            for (const align of aligns){
                if (/^ *-+: *$/.test(align)) item.align.push("right");
                else if (/^ *:-+: *$/.test(align)) item.align.push("center");
                else if (/^ *:-+ *$/.test(align)) item.align.push("left");
                else item.align.push(null);
            }
            for (const header of headers)item.header.push({
                text: header,
                tokens: this.lexer.inline(header)
            });
            for (const row of rows)item.rows.push(splitCells(row, item.header.length).map((cell)=>{
                return {
                    text: cell,
                    tokens: this.lexer.inline(cell)
                };
            }));
            return item;
        }
        lheading(src) {
            const cap = this.rules.block.lheading.exec(src);
            if (cap) return {
                type: "heading",
                raw: cap[0],
                depth: cap[2].charAt(0) === "=" ? 1 : 2,
                text: cap[1],
                tokens: this.lexer.inline(cap[1])
            };
        }
        paragraph(src) {
            const cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
                return {
                    type: "paragraph",
                    raw: cap[0],
                    text,
                    tokens: this.lexer.inline(text)
                };
            }
        }
        text(src) {
            const cap = this.rules.block.text.exec(src);
            if (cap) return {
                type: "text",
                raw: cap[0],
                text: cap[0],
                tokens: this.lexer.inline(cap[0])
            };
        }
        escape(src) {
            const cap = this.rules.inline.escape.exec(src);
            if (cap) return {
                type: "escape",
                raw: cap[0],
                text: escape$1(cap[1])
            };
        }
        tag(src) {
            const cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) this.lexer.state.inLink = true;
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) this.lexer.state.inLink = false;
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = true;
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = false;
                return {
                    type: "html",
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: false,
                    text: cap[0]
                };
            }
        }
        link(src) {
            const cap = this.rules.inline.link.exec(src);
            if (cap) {
                const trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!/>$/.test(trimmedUrl)) return;
                    // ending angle bracket cannot be escaped
                    const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) return;
                } else {
                    // find closing parenthesis
                    const lastParenIndex = findClosingBracket(cap[2], "()");
                    if (lastParenIndex > -1) {
                        const start = cap[0].indexOf("!") === 0 ? 5 : 4;
                        const linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = "";
                    }
                }
                let href = cap[2];
                let title = "";
                if (this.options.pedantic) {
                    // split pedantic href and title
                    const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                } else title = cap[3] ? cap[3].slice(1, -1) : "";
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !/>$/.test(trimmedUrl)) // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                    else href = href.slice(1, -1);
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
                    title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
                }, cap[0], this.lexer);
            }
        }
        reflink(src, links) {
            let cap;
            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
                const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
                const link = links[linkString.toLowerCase()];
                if (!link) {
                    const text = cap[0].charAt(0);
                    return {
                        type: "text",
                        raw: text,
                        text
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        }
        emStrong(src, maskedSrc, prevChar = "") {
            let match = this.rules.inline.emStrongLDelim.exec(src);
            if (!match) return;
            // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
            const nextChar = match[1] || match[2] || "";
            if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
                // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
                const lLength = [
                    ...match[0]
                ].length - 1;
                let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                endReg.lastIndex = 0;
                // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while((match = endReg.exec(maskedSrc)) != null){
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim) continue; // skip single * in __abc*abc__
                    rLength = [
                        ...rDelim
                    ].length;
                    if (match[3] || match[4]) {
                        delimTotal += rLength;
                        continue;
                    } else if (match[5] || match[6]) {
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0) continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                    // char length can be >1 for unicode characters;
                    const lastCharLength = [
                        ...match[0]
                    ][0].length;
                    const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
                    // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        const text = raw.slice(1, -1);
                        return {
                            type: "em",
                            raw,
                            text,
                            tokens: this.lexer.inlineTokens(text)
                        };
                    }
                    // Create 'strong' if smallest delimiter has even char count. **a***
                    const text = raw.slice(2, -2);
                    return {
                        type: "strong",
                        raw,
                        text,
                        tokens: this.lexer.inlineTokens(text)
                    };
                }
            }
        }
        codespan(src) {
            const cap = this.rules.inline.code.exec(src);
            if (cap) {
                let text = cap[2].replace(/\n/g, " ");
                const hasNonSpaceChars = /[^ ]/.test(text);
                const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) text = text.substring(1, text.length - 1);
                text = escape$1(text, true);
                return {
                    type: "codespan",
                    raw: cap[0],
                    text
                };
            }
        }
        br(src) {
            const cap = this.rules.inline.br.exec(src);
            if (cap) return {
                type: "br",
                raw: cap[0]
            };
        }
        del(src) {
            const cap = this.rules.inline.del.exec(src);
            if (cap) return {
                type: "del",
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2])
            };
        }
        autolink(src) {
            const cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                let text, href;
                if (cap[2] === "@") {
                    text = escape$1(cap[1]);
                    href = "mailto:" + text;
                } else {
                    text = escape$1(cap[1]);
                    href = text;
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text
                        }
                    ]
                };
            }
        }
        url(src) {
            let cap;
            if (cap = this.rules.inline.url.exec(src)) {
                let text, href;
                if (cap[2] === "@") {
                    text = escape$1(cap[0]);
                    href = "mailto:" + text;
                } else {
                    // do extended autolink path validation
                    let prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
                    }while (prevCapZero !== cap[0]);
                    text = escape$1(cap[0]);
                    if (cap[1] === "www.") href = "http://" + cap[0];
                    else href = cap[0];
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text
                        }
                    ]
                };
            }
        }
        inlineText(src) {
            const cap = this.rules.inline.text.exec(src);
            if (cap) {
                let text;
                if (this.lexer.state.inRawBlock) text = cap[0];
                else text = escape$1(cap[0]);
                return {
                    type: "text",
                    raw: cap[0],
                    text
                };
            }
        }
    }
    /**
     * Block-Level Grammar
     */ const newline = /^(?: *(?:\n|$))+/;
    const blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
    const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
    const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
    const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
    const bullet = /(?:[*+-]|\d{1,9}[.)])/;
    const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet) // lists can interrupt
    .replace(/blockCode/g, / {4}/) // indented code blocks can interrupt
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/) // fenced code blocks can interrupt
    .replace(/blockquote/g, / {0,3}>/) // blockquote can interrupt
    .replace(/heading/g, / {0,3}#{1,6}/) // ATX heading can interrupt
    .replace(/html/g, / {0,3}<[^\n>]+>\n/) // block html can interrupt
    .getRegex();
    const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
    const blockText = /^[^\n]+/;
    const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    const def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
    const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
    const _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
    const html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    const paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
    .replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
    /**
     * Normal Block Grammar
     */ const blockNormal = {
        blockquote,
        code: blockCode,
        def,
        fences,
        heading,
        hr,
        html,
        lheading,
        list,
        newline,
        paragraph,
        table: noopTest,
        text: blockText
    };
    /**
     * GFM Block Grammar
     */ const gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)") // Cells
    .replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    const blockGfm = {
        ...blockNormal,
        table: gfmTable,
        paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
        .replace("table", gfmTable) // interrupt paragraphs with table
        .replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag) // pars can be interrupted by type (6) html blocks
        .getRegex()
    };
    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */ const blockPedantic = {
        ...blockNormal,
        html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    };
    /**
     * Inline-Level Grammar
     */ const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
    const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
    const br = /^( {2,}|\\)\n(?!\s*$)/;
    const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
    // list of unicode punctuation marks, plus any missing characters from CommonMark spec
    const _punctuation = "\\p{P}\\p{S}";
    const punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
    // sequences em should skip over [title](link), `code`, <html>
    const blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
    const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
    const emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu") // (6) a***a can be either Left or Right Delimiter
    .replace(/punct/g, _punctuation).getRegex();
    // (6) Not allowed for _
    const emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu") // (5) #___# can be either Left or Right Delimiter
    .replace(/punct/g, _punctuation).getRegex();
    const anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
    const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
    const _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
    const tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>") // CDATA section
    .replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
    const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
    const reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
    const nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
    const reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
    /**
     * Normal Inline Grammar
     */ const inlineNormal = {
        _backpedal: noopTest,
        anyPunctuation,
        autolink,
        blockSkip,
        br,
        code: inlineCode,
        del: noopTest,
        emStrongLDelim,
        emStrongRDelimAst,
        emStrongRDelimUnd,
        escape,
        link,
        nolink,
        punctuation,
        reflink,
        reflinkSearch,
        tag,
        text: inlineText,
        url: noopTest
    };
    /**
     * Pedantic Inline Grammar
     */ const inlinePedantic = {
        ...inlineNormal,
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
    };
    /**
     * GFM Inline Grammar
     */ const inlineGfm = {
        ...inlineNormal,
        escape: edit(escape).replace("])", "~|])").getRegex(),
        url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    };
    /**
     * GFM + Line Breaks Inline Grammar
     */ const inlineBreaks = {
        ...inlineGfm,
        br: edit(br).replace("{2,}", "*").getRegex(),
        text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    };
    /**
     * exports
     */ const block = {
        normal: blockNormal,
        gfm: blockGfm,
        pedantic: blockPedantic
    };
    const inline = {
        normal: inlineNormal,
        gfm: inlineGfm,
        breaks: inlineBreaks,
        pedantic: inlinePedantic
    };
    /**
     * Block Lexer
     */ class _Lexer {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(options){
            // TokenList cannot be created in one go
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || exports1.defaults;
            this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            const rules = {
                block: block.normal,
                inline: inline.normal
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            } else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) rules.inline = inline.breaks;
                else rules.inline = inline.gfm;
            }
            this.tokenizer.rules = rules;
        }
        /**
         * Expose Rules
         */ static get rules() {
            return {
                block,
                inline
            };
        }
        /**
         * Static Lex Method
         */ static lex(src, options) {
            const lexer = new _Lexer(options);
            return lexer.lex(src);
        }
        /**
         * Static Lex Inline Method
         */ static lexInline(src, options) {
            const lexer = new _Lexer(options);
            return lexer.inlineTokens(src);
        }
        /**
         * Preprocessing
         */ lex(src) {
            src = src.replace(/\r\n|\r/g, "\n");
            this.blockTokens(src, this.tokens);
            for(let i = 0; i < this.inlineQueue.length; i++){
                const next = this.inlineQueue[i];
                this.inlineTokens(next.src, next.tokens);
            }
            this.inlineQueue = [];
            return this.tokens;
        }
        blockTokens(src, tokens = []) {
            if (this.options.pedantic) src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
            else src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs)=>{
                return leading + "    ".repeat(tabs.length);
            });
            let token;
            let lastToken;
            let cutSrc;
            let lastParagraphClipped;
            while(src){
                if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer)=>{
                    if (token = extTokenizer.call({
                        lexer: this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                // newline
                if (token = this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.length === 1 && tokens.length > 0) // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unnecessary paragraph tags
                    tokens[tokens.length - 1].raw += "\n";
                    else tokens.push(token);
                    continue;
                }
                // code
                if (token = this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                // fences
                if (token = this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // heading
                if (token = this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // hr
                if (token = this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // blockquote
                if (token = this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // list
                if (token = this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // html
                if (token = this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // def
                if (token = this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.raw;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else if (!this.tokens.links[token.tag]) this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                    continue;
                }
                // table (gfm)
                if (token = this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // lheading
                if (token = this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startBlock) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startBlock.forEach((getStartIndex)=>{
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken.type === "paragraph") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    lastParagraphClipped = cutSrc.length !== src.length;
                    src = src.substring(token.raw.length);
                    continue;
                }
                // text
                if (token = this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            this.state.top = true;
            return tokens;
        }
        inline(src, tokens = []) {
            this.inlineQueue.push({
                src,
                tokens
            });
            return tokens;
        }
        /**
         * Lexing/Compiling
         */ inlineTokens(src, tokens = []) {
            let token, lastToken, cutSrc;
            // String with links masked to avoid interference with em and strong
            let maskedSrc = src;
            let match;
            let keepPrevChar, prevChar;
            // Mask out reflinks
            if (this.tokens.links) {
                const links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
            }
            // Mask out other blocks
            while((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            // Mask out escaped characters
            while((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            while(src){
                if (!keepPrevChar) prevChar = "";
                keepPrevChar = false;
                // extensions
                if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer)=>{
                    if (token = extTokenizer.call({
                        lexer: this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                // escape
                if (token = this.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // tag
                if (token = this.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                // link
                if (token = this.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // reflink, nolink
                if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                // em & strong
                if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // code
                if (token = this.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // br
                if (token = this.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // del (gfm)
                if (token = this.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // autolink
                if (token = this.tokenizer.autolink(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // url (gfm)
                if (!this.state.inLink && (token = this.tokenizer.url(src))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startInline) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startInline.forEach((getStartIndex)=>{
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (token = this.tokenizer.inlineText(cutSrc)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== "_") prevChar = token.raw.slice(-1);
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            return tokens;
        }
    }
    /**
     * Renderer
     */ class _Renderer {
        options;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        code(code, infostring, escaped) {
            const lang = (infostring || "").match(/^\S*/)?.[0];
            code = code.replace(/\n$/, "") + "\n";
            if (!lang) return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
            return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
        }
        blockquote(quote) {
            return `<blockquote>\n${quote}</blockquote>\n`;
        }
        html(html, block) {
            return html;
        }
        heading(text, level, raw) {
            // ignore IDs
            return `<h${level}>${text}</h${level}>\n`;
        }
        hr() {
            return "<hr>\n";
        }
        list(body, ordered, start) {
            const type = ordered ? "ol" : "ul";
            const startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
            return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
        }
        listitem(text, task, checked) {
            return `<li>${text}</li>\n`;
        }
        checkbox(checked) {
            return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
        }
        paragraph(text) {
            return `<p>${text}</p>\n`;
        }
        table(header, body) {
            if (body) body = `<tbody>${body}</tbody>`;
            return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
        }
        tablerow(content) {
            return `<tr>\n${content}</tr>\n`;
        }
        tablecell(content, flags) {
            const type = flags.header ? "th" : "td";
            const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
            return tag + content + `</${type}>\n`;
        }
        /**
         * span level renderer
         */ strong(text) {
            return `<strong>${text}</strong>`;
        }
        em(text) {
            return `<em>${text}</em>`;
        }
        codespan(text) {
            return `<code>${text}</code>`;
        }
        br() {
            return "<br>";
        }
        del(text) {
            return `<del>${text}</del>`;
        }
        link(href, title, text) {
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) return text;
            href = cleanHref;
            let out = '<a href="' + href + '"';
            if (title) out += ' title="' + title + '"';
            out += ">" + text + "</a>";
            return out;
        }
        image(href, title, text) {
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) return text;
            href = cleanHref;
            let out = `<img src="${href}" alt="${text}"`;
            if (title) out += ` title="${title}"`;
            out += ">";
            return out;
        }
        text(text) {
            return text;
        }
    }
    /**
     * TextRenderer
     * returns only the textual part of the token
     */ class _TextRenderer {
        // no need for block level renderers
        strong(text) {
            return text;
        }
        em(text) {
            return text;
        }
        codespan(text) {
            return text;
        }
        del(text) {
            return text;
        }
        html(text) {
            return text;
        }
        text(text) {
            return text;
        }
        link(href, title, text) {
            return "" + text;
        }
        image(href, title, text) {
            return "" + text;
        }
        br() {
            return "";
        }
    }
    /**
     * Parsing & Compiling
     */ class _Parser {
        options;
        renderer;
        textRenderer;
        constructor(options){
            this.options = options || exports1.defaults;
            this.options.renderer = this.options.renderer || new _Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new _TextRenderer();
        }
        /**
         * Static Parse Method
         */ static parse(tokens, options) {
            const parser = new _Parser(options);
            return parser.parse(tokens);
        }
        /**
         * Static Parse Inline Method
         */ static parseInline(tokens, options) {
            const parser = new _Parser(options);
            return parser.parseInline(tokens);
        }
        /**
         * Parse Loop
         */ parse(tokens, top = true) {
            let out = "";
            for(let i = 0; i < tokens.length; i++){
                const token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    const genericToken = token;
                    const ret = this.options.extensions.renderers[genericToken.type].call({
                        parser: this
                    }, genericToken);
                    if (ret !== false || ![
                        "space",
                        "hr",
                        "heading",
                        "code",
                        "table",
                        "blockquote",
                        "list",
                        "html",
                        "paragraph",
                        "text"
                    ].includes(genericToken.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "space":
                        continue;
                    case "hr":
                        out += this.renderer.hr();
                        continue;
                    case "heading":
                        {
                            const headingToken = token;
                            out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
                            continue;
                        }
                    case "code":
                        {
                            const codeToken = token;
                            out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
                            continue;
                        }
                    case "table":
                        {
                            const tableToken = token;
                            let header = "";
                            // header
                            let cell = "";
                            for(let j = 0; j < tableToken.header.length; j++)cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                                header: true,
                                align: tableToken.align[j]
                            });
                            header += this.renderer.tablerow(cell);
                            let body = "";
                            for(let j = 0; j < tableToken.rows.length; j++){
                                const row = tableToken.rows[j];
                                cell = "";
                                for(let k = 0; k < row.length; k++)cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                                    header: false,
                                    align: tableToken.align[k]
                                });
                                body += this.renderer.tablerow(cell);
                            }
                            out += this.renderer.table(header, body);
                            continue;
                        }
                    case "blockquote":
                        {
                            const blockquoteToken = token;
                            const body = this.parse(blockquoteToken.tokens);
                            out += this.renderer.blockquote(body);
                            continue;
                        }
                    case "list":
                        {
                            const listToken = token;
                            const ordered = listToken.ordered;
                            const start = listToken.start;
                            const loose = listToken.loose;
                            let body = "";
                            for(let j = 0; j < listToken.items.length; j++){
                                const item = listToken.items[j];
                                const checked = item.checked;
                                const task = item.task;
                                let itemBody = "";
                                if (item.task) {
                                    const checkbox = this.renderer.checkbox(!!checked);
                                    if (loose) {
                                        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                                            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                                            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                                        } else item.tokens.unshift({
                                            type: "text",
                                            text: checkbox + " "
                                        });
                                    } else itemBody += checkbox + " ";
                                }
                                itemBody += this.parse(item.tokens, loose);
                                body += this.renderer.listitem(itemBody, task, !!checked);
                            }
                            out += this.renderer.list(body, ordered, start);
                            continue;
                        }
                    case "html":
                        {
                            const htmlToken = token;
                            out += this.renderer.html(htmlToken.text, htmlToken.block);
                            continue;
                        }
                    case "paragraph":
                        {
                            const paragraphToken = token;
                            out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
                            continue;
                        }
                    case "text":
                        {
                            let textToken = token;
                            let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
                            while(i + 1 < tokens.length && tokens[i + 1].type === "text"){
                                textToken = tokens[++i];
                                body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
                            }
                            out += top ? this.renderer.paragraph(body) : body;
                            continue;
                        }
                    default:
                        {
                            const errMsg = 'Token with "' + token.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(errMsg);
                                return "";
                            } else throw new Error(errMsg);
                        }
                }
            }
            return out;
        }
        /**
         * Parse Inline Tokens
         */ parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            let out = "";
            for(let i = 0; i < tokens.length; i++){
                const token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    const ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        "escape",
                        "html",
                        "link",
                        "image",
                        "strong",
                        "em",
                        "codespan",
                        "br",
                        "del",
                        "text"
                    ].includes(token.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "escape":
                        {
                            const escapeToken = token;
                            out += renderer.text(escapeToken.text);
                            break;
                        }
                    case "html":
                        {
                            const tagToken = token;
                            out += renderer.html(tagToken.text);
                            break;
                        }
                    case "link":
                        {
                            const linkToken = token;
                            out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
                            break;
                        }
                    case "image":
                        {
                            const imageToken = token;
                            out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
                            break;
                        }
                    case "strong":
                        {
                            const strongToken = token;
                            out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
                            break;
                        }
                    case "em":
                        {
                            const emToken = token;
                            out += renderer.em(this.parseInline(emToken.tokens, renderer));
                            break;
                        }
                    case "codespan":
                        {
                            const codespanToken = token;
                            out += renderer.codespan(codespanToken.text);
                            break;
                        }
                    case "br":
                        out += renderer.br();
                        break;
                    case "del":
                        {
                            const delToken = token;
                            out += renderer.del(this.parseInline(delToken.tokens, renderer));
                            break;
                        }
                    case "text":
                        {
                            const textToken = token;
                            out += renderer.text(textToken.text);
                            break;
                        }
                    default:
                        {
                            const errMsg = 'Token with "' + token.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(errMsg);
                                return "";
                            } else throw new Error(errMsg);
                        }
                }
            }
            return out;
        }
    }
    class _Hooks {
        options;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        static passThroughHooks = new Set([
            "preprocess",
            "postprocess",
            "processAllTokens"
        ]);
        /**
         * Process markdown before marked
         */ preprocess(markdown) {
            return markdown;
        }
        /**
         * Process HTML after marked is finished
         */ postprocess(html) {
            return html;
        }
        /**
         * Process all tokens before walk tokens
         */ processAllTokens(tokens) {
            return tokens;
        }
    }
    class Marked {
        defaults = _getDefaults();
        options = this.setOptions;
        parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
        parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
        Parser = _Parser;
        Renderer = _Renderer;
        TextRenderer = _TextRenderer;
        Lexer = _Lexer;
        Tokenizer = _Tokenizer;
        Hooks = _Hooks;
        constructor(...args){
            this.use(...args);
        }
        /**
         * Run callback for every token
         */ walkTokens(tokens, callback) {
            let values = [];
            for (const token of tokens){
                values = values.concat(callback.call(this, token));
                switch(token.type){
                    case "table":
                        {
                            const tableToken = token;
                            for (const cell of tableToken.header)values = values.concat(this.walkTokens(cell.tokens, callback));
                            for (const row of tableToken.rows)for (const cell of row)values = values.concat(this.walkTokens(cell.tokens, callback));
                            break;
                        }
                    case "list":
                        {
                            const listToken = token;
                            values = values.concat(this.walkTokens(listToken.items, callback));
                            break;
                        }
                    default:
                        {
                            const genericToken = token;
                            if (this.defaults.extensions?.childTokens?.[genericToken.type]) this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens)=>{
                                const tokens = genericToken[childTokens].flat(Infinity);
                                values = values.concat(this.walkTokens(tokens, callback));
                            });
                            else if (genericToken.tokens) values = values.concat(this.walkTokens(genericToken.tokens, callback));
                        }
                }
            }
            return values;
        }
        use(...args) {
            const extensions = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            args.forEach((pack)=>{
                // copy options to new object
                const opts = {
                    ...pack
                };
                // set async to true if it was set to true before
                opts.async = this.defaults.async || opts.async || false;
                // ==-- Parse "addon" extensions --== //
                if (pack.extensions) {
                    pack.extensions.forEach((ext)=>{
                        if (!ext.name) throw new Error("extension name required");
                        if ("renderer" in ext) {
                            const prevRenderer = extensions.renderers[ext.name];
                            if (prevRenderer) // Replace extension with func to run new extension but fall back if false
                            extensions.renderers[ext.name] = function(...args) {
                                let ret = ext.renderer.apply(this, args);
                                if (ret === false) ret = prevRenderer.apply(this, args);
                                return ret;
                            };
                            else extensions.renderers[ext.name] = ext.renderer;
                        }
                        if ("tokenizer" in ext) {
                            if (!ext.level || ext.level !== "block" && ext.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                            const extLevel = extensions[ext.level];
                            if (extLevel) extLevel.unshift(ext.tokenizer);
                            else extensions[ext.level] = [
                                ext.tokenizer
                            ];
                            if (ext.start) {
                                if (ext.level === "block") {
                                    if (extensions.startBlock) extensions.startBlock.push(ext.start);
                                    else extensions.startBlock = [
                                        ext.start
                                    ];
                                } else if (ext.level === "inline") {
                                    if (extensions.startInline) extensions.startInline.push(ext.start);
                                    else extensions.startInline = [
                                        ext.start
                                    ];
                                }
                            }
                        }
                        if ("childTokens" in ext && ext.childTokens) extensions.childTokens[ext.name] = ext.childTokens;
                    });
                    opts.extensions = extensions;
                }
                // ==-- Parse "overwrite" extensions --== //
                if (pack.renderer) {
                    const renderer = this.defaults.renderer || new _Renderer(this.defaults);
                    for(const prop in pack.renderer){
                        if (!(prop in renderer)) throw new Error(`renderer '${prop}' does not exist`);
                        if (prop === "options") continue;
                        const rendererProp = prop;
                        const rendererFunc = pack.renderer[rendererProp];
                        const prevRenderer = renderer[rendererProp];
                        // Replace renderer with func to run extension, but fall back if false
                        renderer[rendererProp] = (...args)=>{
                            let ret = rendererFunc.apply(renderer, args);
                            if (ret === false) ret = prevRenderer.apply(renderer, args);
                            return ret || "";
                        };
                    }
                    opts.renderer = renderer;
                }
                if (pack.tokenizer) {
                    const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                    for(const prop in pack.tokenizer){
                        if (!(prop in tokenizer)) throw new Error(`tokenizer '${prop}' does not exist`);
                        if ([
                            "options",
                            "rules",
                            "lexer"
                        ].includes(prop)) continue;
                        const tokenizerProp = prop;
                        const tokenizerFunc = pack.tokenizer[tokenizerProp];
                        const prevTokenizer = tokenizer[tokenizerProp];
                        // Replace tokenizer with func to run extension, but fall back if false
                        // @ts-expect-error cannot type tokenizer function dynamically
                        tokenizer[tokenizerProp] = (...args)=>{
                            let ret = tokenizerFunc.apply(tokenizer, args);
                            if (ret === false) ret = prevTokenizer.apply(tokenizer, args);
                            return ret;
                        };
                    }
                    opts.tokenizer = tokenizer;
                }
                // ==-- Parse Hooks extensions --== //
                if (pack.hooks) {
                    const hooks = this.defaults.hooks || new _Hooks();
                    for(const prop in pack.hooks){
                        if (!(prop in hooks)) throw new Error(`hook '${prop}' does not exist`);
                        if (prop === "options") continue;
                        const hooksProp = prop;
                        const hooksFunc = pack.hooks[hooksProp];
                        const prevHook = hooks[hooksProp];
                        if (_Hooks.passThroughHooks.has(prop)) // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (arg)=>{
                            if (this.defaults.async) return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret)=>{
                                return prevHook.call(hooks, ret);
                            });
                            const ret = hooksFunc.call(hooks, arg);
                            return prevHook.call(hooks, ret);
                        };
                        else // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (...args)=>{
                            let ret = hooksFunc.apply(hooks, args);
                            if (ret === false) ret = prevHook.apply(hooks, args);
                            return ret;
                        };
                    }
                    opts.hooks = hooks;
                }
                // ==-- Parse WalkTokens extensions --== //
                if (pack.walkTokens) {
                    const walkTokens = this.defaults.walkTokens;
                    const packWalktokens = pack.walkTokens;
                    opts.walkTokens = function(token) {
                        let values = [];
                        values.push(packWalktokens.call(this, token));
                        if (walkTokens) values = values.concat(walkTokens.call(this, token));
                        return values;
                    };
                }
                this.defaults = {
                    ...this.defaults,
                    ...opts
                };
            });
            return this;
        }
        setOptions(opt) {
            this.defaults = {
                ...this.defaults,
                ...opt
            };
            return this;
        }
        lexer(src, options) {
            return _Lexer.lex(src, options ?? this.defaults);
        }
        parser(tokens, options) {
            return _Parser.parse(tokens, options ?? this.defaults);
        }
        #parseMarkdown(lexer, parser) {
            return (src, options)=>{
                const origOpt = {
                    ...options
                };
                const opt = {
                    ...this.defaults,
                    ...origOpt
                };
                // Show warning if an extension set async to true but the parse was called with async: false
                if (this.defaults.async === true && origOpt.async === false) {
                    if (!opt.silent) console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
                    opt.async = true;
                }
                const throwError = this.#onError(!!opt.silent, !!opt.async);
                // throw error in case of non string input
                if (typeof src === "undefined" || src === null) return throwError(new Error("marked(): input parameter is undefined or null"));
                if (typeof src !== "string") return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
                if (opt.hooks) opt.hooks.options = opt;
                if (opt.async) return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src)=>lexer(src, opt)).then((tokens)=>opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens)=>opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(()=>tokens) : tokens).then((tokens)=>parser(tokens, opt)).then((html)=>opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
                try {
                    if (opt.hooks) src = opt.hooks.preprocess(src);
                    let tokens = lexer(src, opt);
                    if (opt.hooks) tokens = opt.hooks.processAllTokens(tokens);
                    if (opt.walkTokens) this.walkTokens(tokens, opt.walkTokens);
                    let html = parser(tokens, opt);
                    if (opt.hooks) html = opt.hooks.postprocess(html);
                    return html;
                } catch (e) {
                    return throwError(e);
                }
            };
        }
        #onError(silent, async) {
            return (e)=>{
                e.message += "\nPlease report this to https://github.com/markedjs/marked.";
                if (silent) {
                    const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
                    if (async) return Promise.resolve(msg);
                    return msg;
                }
                if (async) return Promise.reject(e);
                throw e;
            };
        }
    }
    const markedInstance = new Marked();
    function marked(src, opt) {
        return markedInstance.parse(src, opt);
    }
    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */ marked.options = marked.setOptions = function(options) {
        markedInstance.setOptions(options);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
     * Gets the original marked default options.
     */ marked.getDefaults = _getDefaults;
    marked.defaults = exports1.defaults;
    /**
     * Use Extension
     */ marked.use = function(...args) {
        markedInstance.use(...args);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
     * Run callback for every token
     */ marked.walkTokens = function(tokens, callback) {
        return markedInstance.walkTokens(tokens, callback);
    };
    /**
     * Compiles markdown to HTML without enclosing `p` tag.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @return String of compiled HTML
     */ marked.parseInline = markedInstance.parseInline;
    /**
     * Expose
     */ marked.Parser = _Parser;
    marked.parser = _Parser.parse;
    marked.Renderer = _Renderer;
    marked.TextRenderer = _TextRenderer;
    marked.Lexer = _Lexer;
    marked.lexer = _Lexer.lex;
    marked.Tokenizer = _Tokenizer;
    marked.Hooks = _Hooks;
    marked.parse = marked;
    const options = marked.options;
    const setOptions = marked.setOptions;
    const use = marked.use;
    const walkTokens = marked.walkTokens;
    const parseInline = marked.parseInline;
    const parse = marked;
    const parser = _Parser.parse;
    const lexer = _Lexer.lex;
    exports1.Hooks = _Hooks;
    exports1.Lexer = _Lexer;
    exports1.Marked = Marked;
    exports1.Parser = _Parser;
    exports1.Renderer = _Renderer;
    exports1.TextRenderer = _TextRenderer;
    exports1.Tokenizer = _Tokenizer;
    exports1.getDefaults = _getDefaults;
    exports1.lexer = lexer;
    exports1.marked = marked;
    exports1.options = options;
    exports1.parse = parse;
    exports1.parseInline = parseInline;
    exports1.parser = parser;
    exports1.setOptions = setOptions;
    exports1.use = use;
    exports1.walkTokens = walkTokens;
});

},{}],"gOZMd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PictureElement", ()=>(0, _pictureElement.CpxPictureElement));
var _pictureElement = require("./PictureElement");

},{"./PictureElement":"11clR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11clR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Picture Element
 * @description
 * The Picture Element is a custom element that allows you to display an image with multiple sources and sizes.
 * @example
 * <picture-element picture:url="https://via.placeholder.com/150" picture:url:xl="https://via.placeholder.com/1080" picture:url:md="https://via.placeholder.com/720" picture:breakpoint:xl="1240px" picture:breakpoint:md="720px" alt="Flowers">
 */ parcelHelpers.export(exports, "CpxPictureElement", ()=>CpxPictureElement);
var _element = require("../../element");
class CpxPictureElement extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("picture-element:class") || "";
        this.width = this.getAttribute("picture-element:width") || "600";
        this.height = this.getAttribute("picture-element:height") || "600";
        this.aspectRatio = this.getAttribute("picture-element:aspect-ratio") || "1/1";
        this.alt = this.getAttribute("picture-element:alt") || "";
        this.url = this.getAttribute("picture-element:url") || "https://via.placeholder.com/150";
        this.urlImgBig = this.getAttribute("picture-element:screen:xl:url") || false;
        this.urlImgMedium = this.getAttribute("picture-element:screen:md:url") || false;
        this.screenBig = this.getAttribute("picture-element:screen:xl") || "1240px";
        this.screenMedium = this.getAttribute("picture-element:screen:md") || "720px";
        this.loading = this.getAttribute("picture-element:loading") || "lazy";
    }
    render() {
        this.innerHTML = `  
        <figure title="${this.alt}" style="--aspect-ratio:${this.aspectRatio}" class="picture-element ${this.classNames}">
        <suspense-all>
            <picture> 
              ${this.urlImgBig !== false ? `<source media="(min-width:${this.screenBig})" srcset="${this.urlImgBig}?as=webp?width=${this.screenBig}">` : ``}
              ${this.urlImgMedium !== false ? `<source media="(min-width:${this.screenMedium})" srcset="${this.urlImgMedium}?as=webp?width=${this.screenMedium}">` : ``}
                <img loading="${this.loading}" class="picture-element__img" src="${this.url}" alt="${this.alt}">
            </picture>
            ${this.initialContent !== "" ? `<figcaption class="picture-element__caption">${this.initialContent}</figcaption>` : ``}
            </suspense-all>
          </figure>
        `;
    }
}
customElements.define(`picture-element`, CpxPictureElement);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLJ9V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SuspenseAll", ()=>(0, _suspenseAll.CpxSuspenseAll));
var _suspenseAll = require("./SuspenseAll");

},{"./SuspenseAll":"4Xqtf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xqtf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxSuspenseAll", ()=>CpxSuspenseAll);
var _element = require("../../element");
var _icons = require("../../utils/icons");
class CpxSuspenseAll extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("suspense-all:class") || "";
        this.bounceDuration = eval(this.getAttribute("suspense-all:bounce-duration")) || 500; // Default bounce duration
        this.debounceTimeout = null;
        this.hasIcon = eval(this.getAttribute("suspense-all:has-icon")) || true;
    }
    connectedCallback() {
        this.render();
        // Wait for the entire document to be loaded
        document.addEventListener("DOMContentLoaded", ()=>{
            // Show the content after everything is loaded
            this.showContent();
        });
    }
    // Debounce function
    debounce(func, delay) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(()=>func(), delay);
    }
    showContent() {
        // Display the actual content with debounce effect
        this.debounce(()=>{
            const content = this.initialContent || "";
            this.innerHTML = `
        <div class=" ${this.classNames}">
          ${content}
        </div>
      `;
        }, eval(this.bounceDuration)); // Adjust the delay as needed (e.g., 300ms)
    }
    render() {
        // Display loading screen initially
        this.innerHTML = `
    <section class="h:available display:grid place-content:cneter${this.classNames}">
      ${this.hasIcon === true ? `
            <div class="w:9 h:9 bg:gray-500">${(0, _icons.Icon).arrowPath}</div>
          ` : ``}
    </section>`;
    }
}
customElements.define(`suspense-all`, CpxSuspenseAll);

},{"../../element":"7TddR","../../utils/icons":"bLiR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hvL3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkeletonElement", ()=>(0, _skeletonElement.CpxSkeletonElement));
var _skeletonElement = require("./SkeletonElement");

},{"./SkeletonElement":"1N0Ef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1N0Ef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Picture Element
 * @description
 * The Picture Element is a custom element that allows you to display an image with multiple sources and sizes.
 * @example
 * <picture-element picture:url="https://via.placeholder.com/150" picture:url:xl="https://via.placeholder.com/1080" picture:url:md="https://via.placeholder.com/720" picture:breakpoint:xl="1240px" picture:breakpoint:md="720px" alt="Flowers">
 */ parcelHelpers.export(exports, "CpxSkeletonElement", ()=>CpxSkeletonElement);
var _element = require("../../element");
class CpxSkeletonElement extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("skeleton-element:class") || "";
        this.display = this.getAttribute("skeleton-element:display") || "inline-block";
        this.color = this.getAttribute("skeleton-element:color") || "gray-300";
        this.borderRadius = this.getAttribute("skeleton-element:border-radius") || "sm";
        this.width = this.getAttribute("skeleton-element:width") || "lg";
        this.height = this.getAttribute("skeleton-element:height") || "5";
    }
    render() {
        this.innerHTML = `  
        <div class="h:${this.height} w:full max-w:${this.width} display:${this.display}  radius:${this.borderRadius} bg:${this.color} ${this.classNames}">
        </div>
        `;
    }
}
customElements.define(`skeleton-element`, CpxSkeletonElement);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6N7g9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextElement", ()=>(0, _textElement.CpxTextElement));
var _textElement = require("./TextElement");

},{"./TextElement":"Ygver","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Ygver":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @element text-element
 * @class CpxTextElement
 * @description
 * TextElement Component
 * @example
 * <text-element text-element:type="p" text-element:class="text-element--example" text-element:align="center" text-element:font-family="serif" text-element:font-weight="bold" text-element:font-style="italic" text-element:font-size="lg" text-element:line-height="sm" text-element:letter-spacing="sm">
 */ parcelHelpers.export(exports, "CpxTextElement", ()=>CpxTextElement);
var _element = require("../../element");
class CpxTextElement extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.type = this.getAttribute("text-element:type") || "p";
        this.classNames = this.getAttribute("text-element:class") || "";
        this.align = this.getAttribute("text-element:align") || "start";
        this.fontFamily = this.getAttribute("text-element:font-family") || "sans";
        this.fontWeight = this.getAttribute("text-element:font-weight") || "normal";
        this.fontStyle = this.getAttribute("text-element:font-style") || "normal";
        this.fontSize = this.getAttribute("text-element:size") || "sm";
        this.lineHeight = this.getAttribute("text-element:line-height") || "1";
        this.letterSpacing = this.getAttribute("text-element:tracking") || "sm";
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <${this.type} class="
    align:${this.align}
    size:${this.fontSize}
    weight:${this.fontWeight}
    font-style:${this.fontStyle}
    font-family:${this.fontFamily}
    line-height:${this.lineHeight}
    tracking:${this.letterSpacing}
    ${this.classNames}">
        ${this.initialContent}
    </${this.type}>
        `;
    }
}
customElements.define(`text-element`, CpxTextElement);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwDpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabContainer", ()=>(0, _tabContainer.CpxTabContainer));
parcelHelpers.export(exports, "TabHeader", ()=>(0, _tabHeader.CpxTabHeader));
parcelHelpers.export(exports, "TabContent", ()=>(0, _tabContent.CpxTabContent));
parcelHelpers.export(exports, "TabToggle", ()=>(0, _tabToggle.CpxTabToggle));
var _tabContainer = require("./TabContainer");
var _tabHeader = require("./TabHeader");
var _tabContent = require("./TabContent");
var _tabToggle = require("./TabToggle");

},{"./TabContainer":"9bR2q","./TabHeader":"4D8G5","./TabContent":"dBlXm","./TabToggle":"ircPr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bR2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxTabContainer
 * @description
 * TabContainer Component
 * @example
 * <tab-container tab-container:id="tab-container-id">
 */ parcelHelpers.export(exports, "CpxTabContainer", ()=>CpxTabContainer);
var _element = require("../../element");
var _id = require("../../utils/id");
class CpxTabContainer extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("tab-container:class") || "";
        this.tabContainerId = this.getAttribute("tab-container:id") || (0, _id.Id).Generate.hex(12);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <section
      tab-container:id="${this.tabContainerId}"
      class="tab-container ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
    }
}
customElements.define(`tab-container`, CpxTabContainer);

},{"../../element":"7TddR","../../utils/id":"UhlEf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4D8G5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxTabHeader", ()=>CpxTabHeader);
var _element = require("../../element");
class CpxTabHeader extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.tabHeaderId = this.getAttribute("tab-header:id");
        this.classNames = this.getAttribute("tab-header:class") || "";
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <section 
      tab-header:id="${this.tabHeaderId} " 
      class="tab-header ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
    }
}
customElements.define(`tab-header`, CpxTabHeader);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBlXm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxTabContent", ()=>CpxTabContent);
var _element = require("../../element");
class CpxTabContent extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("tab-content:class") || "";
        this.tabContentId = this.getAttribute("tab-content:id");
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <section 
      tab-content:id
      tab-content:is-active
      class="tab-content ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
    }
}
customElements.define(`tab-content`, CpxTabContent);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ircPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxTabToggle", ()=>CpxTabToggle);
var _element = require("../../element");
var _id = require("../../utils/id");
class CpxTabToggle extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.tabToggleId = this.getAttribute("toggle:id") || (0, _id.Id).Generate.int(4);
        this.classNames = this.getAttribute("toggle:class") || "";
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <button
      class="tab-toggle ${this.classNames}"
      tab-toggle:id="${this.tabToggleId}">
        ${this.initialContent}
    </button>
        `;
    }
}
customElements.define(`tab-toggle`, CpxTabToggle);

},{"../../element":"7TddR","../../utils/id":"UhlEf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bg3EL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoPlayer", ()=>(0, _videoPlayer.CpxVideoPlayer));
parcelHelpers.export(exports, "VideoControls", ()=>(0, _videoControls.CpxVideoControls));
parcelHelpers.export(exports, "VideoControl", ()=>(0, _videoControl.CpxVideoControl));
parcelHelpers.export(exports, "VideoPlaylist", ()=>(0, _videoPlaylist.CpxVideoPlaylist));
parcelHelpers.export(exports, "VideoPlaylistItem", ()=>(0, _videoPlaylistItem.CpxVideoPlaylistItem));
var _videoPlayer = require("./VideoPlayer");
var _videoControls = require("./VideoControls");
var _videoControl = require("./VideoControl");
var _videoPlaylist = require("./VideoPlaylist");
var _videoPlaylistItem = require("./VideoPlaylistItem");

},{"./VideoPlayer":"23QjX","./VideoControls":"aolqF","./VideoControl":"ccmNe","./VideoPlaylist":"bdhwF","./VideoPlaylistItem":"cFIQP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23QjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxVideoPlayer
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */ parcelHelpers.export(exports, "CpxVideoPlayer", ()=>CpxVideoPlayer);
var _element = require("../../element");
var _video = require("../../utils/video");
class CpxVideoPlayer extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("video-player:class") || "";
        this.poster = this.getAttribute(`video-player:poster`) || `https://placehold.co/1600x900`;
        this.title = this.getAttribute(`video-player:title`) || `videoPlayer Title`;
        this.artist = this.getAttribute(`video-player:artist`) || `videoPlayer Artist Title`;
        this.controlsPosition = this.getAttribute(`video-player:controls-position`) || `bottom-inside`;
        this.hasTitle = eval(this.getAttribute(`video-player:has-title`)) || true;
        this.hasArtist = eval(this.getAttribute(`video-player:has-artist`)) || false;
        this.hasControls = eval(this.getAttribute(`video-player:has-controls`)) || true;
        this.hasPlaylist = eval(this.getAttribute(`video-player:has-playlist`)) || true;
    }
    connectedCallback() {
        this.render();
        (0, _video.videoAPI)();
    }
    render() {
        this.innerHTML = `
    <div class=" ${this.classNames}" video>
    ${this.initialContent !== "" ? `${this.initialContent}` : `
        <div class="">
            <section class="position:relative">
                <video 
                    class="w:full bg:gray-300"
                    video-current>
                </video>
                ${this.hasControls === true ? `<video-controls
                    video-controls:position="${this.controlsPosition}"></video-controls>` : ``}
            </section>
            <div class=" my-4">
                ${this.hasTitle === true ? `<h2 class="my:3 size:lg" video-current="title">${this.title}</h2>` : ``}
                ${this.hasArtist === true ? `<p class="" video-current="artist">${this.artist}</p>` : ``}
            </div>
        </div>
        ${this.hasPlaylist === true ? `<video-playlist
                  class=""
                  video-playlist:appearance="${this.appearance}"></video-playlist>` : ``}
       `}
    </div>
    `;
    }
}
customElements.define(`video-player`, CpxVideoPlayer);

},{"../../element":"7TddR","../../utils/video":"dmuKk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aolqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxVideoControls
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */ parcelHelpers.export(exports, "CpxVideoControls", ()=>CpxVideoControls);
var _element = require("../../element");
var _icons = require("../../utils/icons");
class CpxVideoControls extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("video-controls:class") || "";
        this.position = this.getAttribute("video-controls:position") || "bottom-inside";
        this.hasPlayPause = eval(this.getAttribute("video-controls:has-play-pause")) || true;
        this.hasPrev = eval(this.getAttribute("video-controls:has-prev")) || true;
        this.hasNext = eval(this.getAttribute("video-controls:has-next")) || true;
        this.hasMuteUnmute = eval(this.getAttribute("video-controls:has-mute-unmute")) || true;
        this.hasVolume = eval(this.getAttribute("video-controls:has-volume")) || true;
        this.hasProgress = eval(this.getAttribute("video-controls:has-progress")) || true;
    }
    render() {
        this.innerHTML = `
    <div video-controls class="
    ${this.position === "bottom-inside" ? `position:absolute bottom:0 left:0 right:0 p:4` : ``}
    ${this.position === "bottom-outside" ? `position:relative` : ``}
    ${this.classNames}">
    ${this.initialContent !== "" ? this.initialContent : `
        ${this.hasProgress === true ? `
              <div class="mb:2">
                <video-control video-control:class="w:full" video-control:type="progress-bar"></video-control>
              </div>
              ` : ``}
        
        <section class="display:flex items:center gap:4">
          ${this.hasPrev === true ? `
              <video-control class="" video-control:type="prev">
                ${(0, _icons.Icon).backward}
              </video-control>
                ` : ``}
          ${this.hasPlayPause === true ? `
              <video-control class="" video-control:type="play-pause">
                ${(0, _icons.Icon).play}
              </video-control>
                ` : ``}
          ${this.hasNext === true ? `
              <video-control class="" video-control:type="next">
                ${(0, _icons.Icon).forward}
              </video-control>
                ` : ``}

          ${this.hasMuteUnmute === true ? `
              <video-control class="" video-control:type="mute-unmute">
                ${(0, _icons.Icon).speakerWave}
              </video-control>
                ` : ``}
          ${this.hasVolume === true ? `
              <div class="h:full display:flex items:center">
                  <video-control class="h:full display:flex items:center" video-control:type="volume"></video-control>
              </div>
                ` : ``}
        </section>
        `}
    </div>
    `;
    }
}
customElements.define(`video-controls`, CpxVideoControls);

},{"../../element":"7TddR","../../utils/icons":"bLiR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccmNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CpxVideoControl", ()=>CpxVideoControl);
var _element = require("../../element");
var _icons = require("../../utils/icons");
class CpxVideoControl extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("video-control:class") || "";
        this.type = this.getAttribute("video-control:type") || "play-pause";
        this.icon = this.getAttribute("video-control:icon") || "play";
        this.size = this.getAttribute("video-control:size") || "9";
        this.hasIcon = eval(this.getAttribute("video-control:has-icon")) || true;
        this.hasText = eval(this.getAttribute("video-control:has-text")) || false;
    }
    connectedCallback() {
        this.render();
        this.addClickHandler();
        this.addDeleteOnClick();
    }
    render() {
        this.innerHTML = `  
            ${this.type === "progress-bar" || this.type === "volume" ? `<input type="range" class="${this.classNames}" video-control="${this.type}">` : `
                <button 
                click:delete
                class="size:${this.size} w:${this.size} h:${this.size} ${this.classNames}"
                video-control="${this.type}">
                ${this.initialContent !== "" ? this.initialContent : `
                    <section class="">
                        ${this.hasIcon ? `${this.type === "play-pause" ? `   <div  class="">
                                            ${this.querySelector("button").getAttribute("video-current-state") === "play" ? (0, _icons.Icon).pause : (0, _icons.Icon).play}
                                        </div>` : ``}
                                <div class="">
                                    ${(0, _icons.Icon)[this.icon]}
                                </div>
                                    ` : ""}
                        ${this.hasText ? `
                                <div class="">
                                    ${this.type}
                                </div>
                                ` : ""}
                    </section>
                    `}  
                </button>
                `}
            
        `;
    }
}
customElements.define(`video-control`, CpxVideoControl);

},{"../../element":"7TddR","../../utils/icons":"bLiR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdhwF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxVideoPlaylist
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */ parcelHelpers.export(exports, "CpxVideoPlaylist", ()=>CpxVideoPlaylist);
var _element = require("../../element");
class CpxVideoPlaylist extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("video-playlist:class") || "";
        this.baseUrl = this.getAttribute("video-playlist:url") || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:url") : "https://api.coverr.co/videos/");
        this.apiKey = this.getAttribute("video-playlist:api-key") || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:api-key") : "45e2e6d3f93979c3e38af50d42150752");
        this.poster = this.getAttribute(`video-playlist:poster`) || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:poster") : "https://placehold.co/100");
        this.getVideo = (identifier = "1")=>{
            return `${this.baseUrl}/${identifier}?api_key=${this.apiKey}`;
        };
        this.playlist = [
            {
                title: "Video 1",
                id: "1",
                artist: "Artist 1",
                cover: "https://placehold.co/16x9",
                url: `${this.getVideo("curvy-mountain-road-zcxbgh2l")}`
            },
            {
                title: "Video 2",
                id: "2",
                artist: "Artist 2",
                cover: "https://placehold.co/16x9",
                url: `${this.getVideo("curvy-mountain-road-zcxbgh2l")}`
            }
        ];
        console.log(this.playlist);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div video-playlist class="${this.classNames}">
            ${this.initialContent !== "" ? `${this.initialContent}` : `
                ${this.playlist.map((video, index)=>{
            return `
                  <video-playlist-item
                    class=""
                    video-playlist-item:title="${video.title}"
                    video-playlist-item:artist="${video.artist}"
                    video-playlist-item:url="${video.url}"></video-playlist-item>`;
        }).join("")}
                `}      
        </div>
    `;
    }
}
customElements.define(`video-playlist`, CpxVideoPlaylist);

},{"../../element":"7TddR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFIQP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class CpxVideoPlaylistItem
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */ parcelHelpers.export(exports, "CpxVideoPlaylistItem", ()=>CpxVideoPlaylistItem);
var _element = require("../../element");
var _index = require("../../index");
class CpxVideoPlaylistItem extends (0, _element.CpxElement) {
    constructor(){
        super();
        this.classNames = this.getAttribute("video-playlist-item:class") || "";
        this.videoPoster = this.getAttribute("video-playlist-item:poster") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:poster") : "https://placehold.co/100");
        this.videoUrl = this.getAttribute("video-playlist-item:url") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:url") : "https://api.coverr.co/videos/");
        this.apiKey = this.getAttribute("video-playlist-item:api-key") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:api-key") : "45e2e6d3f93979c3e38af50d42150752");
        this.videoTitle = this.getAttribute("video-playlist-item:title") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:title") : "Video Title");
        this.videoArtist = this.getAttribute("video-playlist-item:artist") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:artist") : "Artist");
        this.videoId = this.getAttribute("video-playlist-item:id");
    }
    render() {
        this.innerHTML = `
        <button click:storage:local:set(currentvideo,${(0, _index.Cpx).String.toHtml(this.videoTitle)}) class="w:full p:3 border-width:1 border-color:gray-300 radius:sm mb:2 ${this.classNames}" video-playlist-item video-playlist-item-url="${this.videoUrl}">
          ${this.initialContent !== "" ? this.initialContent : `<section class="display:flex">
                        <div class="display:flex">
                            <img video-playlist-item="cover" src="${this.videoPoster}" alt="${this.videoTitle}" />
                            <p video-playlist-item="title">${this.videoTitle}</p>
                        </div>
                        <p class="" video-playlist-item="artist">${this.videoArtist}</p>
                   </section>
                    `}
        </button>
    `;
    }
}
customElements.define(`video-playlist-item`, CpxVideoPlaylistItem);

},{"../../element":"7TddR","../../index":"dMUol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjCHj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DB", ()=>DB);
var _procucts = require("./tables/procucts");
var _categories = require("./tables/categories");
var _users = require("./tables/users");
var _navigations = require("./tables/navigations");
var _routes = require("./tables/routes");
var _posts = require("./tables/posts");
const AVATAR_URL = "https://www.gravatar.com/avatar/";
const IMG_URL = "https://source.unsplash.com/random/";
const DB = {
    AVATAR_URL,
    IMG_URL,
    ROUTES: (0, _routes.routes),
    NAVIGATIONS: (0, _navigations.navigations),
    USERS: (0, _users.users),
    PRODUCTS: (0, _procucts.products),
    CATEGORIES: (0, _categories.categories),
    POSTS: (0, _posts.posts),
    query: // DB actions
    (0, _posts.query),
    action: (0, _posts.action)
};

},{"./tables/procucts":"2Rymg","./tables/categories":"jxRAv","./tables/users":"v5sXa","./tables/navigations":"hrwNx","./tables/routes":"8HJgP","./tables/posts":"hvuQ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Rymg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products);
var _users = require("./users");
var _categories = require("./categories");
const IMG_URL = "https://source.unsplash.com/random/";
const products = [
    {
        id: 0,
        title: "Panhandle",
        description: "A panhandle is a small handle on the side of a pan. It is used to move the pan around and to hold it while cooking. It is also called a side handle or helper handle.",
        price: "45",
        currency: "EUR",
        seller: (0, _users.users)[0],
        buyer: null,
        isSold: false,
        onlineSince: "2021-01-01",
        onlineUntil: "2021-12-31",
        images: [
            `${IMG_URL}${0}`,
            `${IMG_URL}${1}`,
            `${IMG_URL}${2}`
        ],
        filters: {
            category: (0, _categories.categories)[0],
            keywords: [
                "Home",
                "Kitchen",
                "Cooking"
            ]
        }
    },
    {
        id: 1,
        title: "MacMini 2020",
        description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
        price: "560",
        currency: "EUR",
        seller: (0, _users.users)[1],
        buyer: null,
        isSold: false,
        onlineSince: "2021-01-01",
        onlineUntil: "2021-12-31",
        images: [
            `${IMG_URL}${0}`,
            `${IMG_URL}${1}`,
            `${IMG_URL}${2}`
        ],
        filters: {
            category: (0, _categories.categories)[3],
            keywords: [
                "Computer",
                "Mac",
                "Apple"
            ]
        }
    },
    {
        id: 2,
        title: "Product 3",
        description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
        price: "250",
        currency: "EUR",
        seller: (0, _users.users)[0],
        buyer: null,
        isSold: false,
        onlineSince: "2021-03-02",
        onlineUntil: "2021-12-31",
        images: [
            `${IMG_URL}${0}`,
            `${IMG_URL}${1}`,
            `${IMG_URL}${2}`
        ],
        filters: {
            category: (0, _categories.categories)[2],
            keywords: [
                "Computer",
                "Mac",
                "Apple"
            ]
        }
    },
    {
        id: 3,
        title: "Product 4",
        description: "Mac Mini M1 2020, used but in good condition. Comes with original box and power cable.",
        price: "560",
        currency: "EUR",
        seller: (0, _users.users)[1],
        buyer: null,
        isSold: false,
        onlineSince: "2021-01-01",
        onlineUntil: "2021-12-31",
        images: [
            `${IMG_URL}${0}`,
            `${IMG_URL}${1}`,
            `${IMG_URL}${2}`
        ],
        filters: {
            category: (0, _categories.categories)[2],
            keywords: [
                "Computer",
                "Mac",
                "Apple"
            ]
        }
    }
];

},{"./users":"v5sXa","./categories":"jxRAv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"v5sXa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "users", ()=>users);
const AVATAR_URL = "https://www.gravatar.com/avatar/";
const IMG_URL = "https://source.unsplash.com/random/";
const users = [
    {
        id: 0,
        name: "Luca Mack",
        email: "l.mack@diakonie.at",
        telephone: "+43 123 456 789",
        shoppingCart: [],
        address: {
            city: "Vienna",
            street: "Mariahilferstra\xdfe 1",
            zip: "1060",
            top: "1",
            floor: "2"
        },
        profile: {
            isPublic: false,
            avatar: `${AVATAR_URL}${0}?d=identicon`,
            titleImg: `${IMG_URL}${0}`,
            urls: {
                website: "https://www.diakonie.at",
                facebook: "https://www.facebook.com/diakonie.at",
                twitter: "https://twitter.com/diakonie_at",
                linkedin: "https://www.linkedin.com/company/diakonie-austria",
                instagram: false
            }
        },
        account: {
            isPremium: false,
            isCustomer: true,
            isBusiness: false
        },
        payment: {
            paypal: {
                email: "luca.mack@diakonie.at"
            },
            creditCard: {
                number: "1234 56789012 3456",
                expiration: "12/24",
                cvc: "123"
            },
            bankTransfer: false
        }
    },
    {
        id: 1,
        name: "Jane Doe",
        email: "jd@mailiyo.xyz",
        telephone: "+43 123444489",
        shoppingCart: [],
        address: {
            city: "New York",
            street: "Brooklyn Street 1",
            zip: "12334211",
            top: "1",
            floor: "2"
        },
        profile: {
            isPublic: false,
            avatar: `${AVATAR_URL}${1}?d=identicon`,
            titleImg: `${IMG_URL}${1}`,
            urls: {
                website: "https://www.wiyu.xyz",
                facebook: "https://www.facebook.com/wiyu.xyz",
                twitter: "https://twitter.com/wiyu_xyz",
                linkedin: "https://www.linkedin.com/company/wiyu-xyz",
                instagram: false
            }
        },
        account: {
            isPremium: true,
            isCustomer: true,
            isBusiness: true
        },
        payment: {
            paypal: {
                email: "js@wiyu.xyz"
            },
            creditCard: false,
            bankTransfer: {
                iban: "AT123456789012345678",
                bic: "BKAUATWW"
            }
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxRAv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "categories", ()=>categories);
var _app = require("../../app/app");
const categories = [
    {
        id: 0,
        title: "Home",
        description: "Products for a cozy Home",
        icon: (0, _app.Cpx).Icon.home
    },
    {
        id: 1,
        title: "Garden",
        description: "Utilities for the Gardebn and outside activities",
        icon: (0, _app.Cpx).Icon.home
    },
    {
        id: 2,
        title: "Fashion",
        description: "Clothes and Accessories",
        icon: (0, _app.Cpx).Icon.home
    },
    {
        id: 3,
        title: "Electronics",
        description: "Electronic Devices and Accessories",
        icon: (0, _app.Cpx).Icon.home
    }
];

},{"../../app/app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrwNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigations", ()=>navigations);
var _routes = require("./routes");
const navigations = {
    main: [
        (0, _routes.routes).home,
        (0, _routes.routes).about
    ],
    legal: [
        (0, _routes.routes).imprint,
        (0, _routes.routes).privacy
    ]
};

},{"./routes":"8HJgP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HJgP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "routes", ()=>routes);
var _app = require("../../app/app");
const routes = {
    home: {
        type: "page",
        page: "home",
        title: "Home",
        description: "Home Page",
        icon: (0, _app.Cpx).Icon.home
    },
    about: {
        type: "page",
        page: "about",
        title: "About",
        description: "About Page",
        icon: (0, _app.Cpx).Icon.informationCircle
    },
    contact: {
        type: "page",
        page: "contact",
        title: "Contact",
        description: "Contact Page",
        icon: (0, _app.Cpx).Icon.envelope
    },
    imprint: {
        page: "imprint",
        type: "page",
        title: "Imprint",
        description: "Imprint Page",
        icon: (0, _app.Cpx).Icon.scale
    },
    privacy: {
        type: "page",
        page: "privacy",
        title: "Privacy",
        description: "Privacy Page",
        icon: (0, _app.Cpx).Icon.scale
    }
};

},{"../../app/app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvuQ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "posts", ()=>posts);
parcelHelpers.export(exports, "query", ()=>query);
parcelHelpers.export(exports, "action", ()=>action);
const posts = [
    {
        id: 0,
        title: "Post 1",
        description: "Post 1 Description",
        content: "Post 1 Content"
    },
    {
        id: 1,
        title: "Post 2",
        description: "Post 2 Description",
        content: "Post 2 Content"
    }
];
function id(id) {
    return posts.find((post)=>post.id === id);
}
function create(post) {
    posts.push(post);
}
function update(post) {
    const index = posts.findIndex((p)=>p.id === post.id);
    posts[index] = post;
}
function deleteById(id) {
    const index = posts.findIndex((p)=>p.id === id);
    posts.splice(index, 1);
}
function all() {
    return posts;
}
function title(title) {
    return posts.filter((post)=>post.title === title);
}
function description(description) {
    return posts.filter((post)=>post.description === description);
}
function content(content) {
    return posts.filter((post)=>post.content === content);
}
const query = {
    id,
    all,
    title,
    description,
    content
};
const action = {
    create,
    update,
    deleteById
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFDNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class ComponentRoot
 * @description
 * This is the root component for the application.
 * It contains all the core functionality of the root component.
 * @example
 * <app-root></app-root>
 */ parcelHelpers.export(exports, "ComponentRoot", ()=>ComponentRoot);
var _app = require("../../app");
class ComponentRoot extends (0, _app.Cpx).Element {
    constructor(){
        super();
        this.title = this.getAttribute("root:title") || "Root Title";
        this.description = this.getAttribute("root:description") || "Root Description";
        this.storage = (0, _app.Cpx).Storage;
        this.state = (0, _app.Cpx).State;
    }
    connectedCallback() {
        this.setInitialState();
        this.render();
        this.addClickHandler();
    }
    // async fetchData() {
    //   Cpx.Http.fetch("https://jsonplaceholder.typicode.com/posts");
    //   this.render()
    // }
    render() {
        this.innerHTML = `
        <section style="" class="">
            <header class="position:sticky top:0 p:4 w:full bg:gray-200 display:flex gap:4 content:between">
            <app-nav class=""></app-nav>
            </header>
            <main class="">
                ${this.state.has("page") ? `<app-page-${this.state.get("page")} class=""></app-page-${this.state.get("page")}>` : `<app-page-home></app-page-home>`}
            </main>
        </section>
        `;
    }
}
customElements.define(`${(0, _app.Config).prefix}-root`, ComponentRoot);

},{"../../app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13T9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class ComponentNav
 * @description
 * This is the navigation component for the application.
 * It contains all the core functionality of the navigation component.
 * @example
 * <app-nav></app-nav>
 */ parcelHelpers.export(exports, "ComponentNav", ()=>ComponentNav);
var _app = require("../../app");
class ComponentNav extends (0, _app.Cpx).Element {
    constructor(){
        super();
        this.nav = this.getAttribute("nav:type") || "main"; // DB Hook in DB.NAVIGATION[nav]
    }
    connectedCallback() {
        this.setInitialState();
        this.render();
        this.addClickHandler();
    }
    getNav() {
        return (0, _app.DB).NAVIGATIONS[this.nav].map((item)=>{
            // console.log(item);
            return `
          <li class="">
            <button class="button--primary" click:state:set(${item.type},${item.page})>${item.title}</button>
          </li>`;
        }).join("");
    }
    render() {
        this.innerHTML = `
        <nav class="">
            <ul class="display:flex gap:4 list:none">
                ${this.getNav()}
            </ul>
        </nav>

        `;
    }
}
customElements.define(`${(0, _app.Config).prefix}-nav`, ComponentNav);

},{"../../app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jILT7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class PageHome
 * @description
 * This is the home page for the application.
 * It contains all the core functionality of the home page.
 * @example
 * <app-page-home></app-page-home>
 */ parcelHelpers.export(exports, "PageHome", ()=>PageHome);
var _app = require("../app");
class PageHome extends (0, _app.Cpx).Element {
    constructor(){
        super();
        this.state = (0, _app.Cpx).State;
    }
    connectedCallback() {
        this.render();
        this.addClickHandler();
    }
    render() {
        this.innerHTML = `
            <div style="text-align:center">
                <text-element text-element:type="h1">Home</text-element>
            </div>
        `;
    }
}
customElements.define(`${(0, _app.Config).prefix}-page-home`, PageHome);

},{"../app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"faVIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class PageAbout
 * @description
 * This is the home page for the application.
 * It contains all the core functionality of the home page.
 * @example
 * <app-page-home></app-page-home>
 */ parcelHelpers.export(exports, "PageAbout", ()=>PageAbout);
var _app = require("../app");
class PageAbout extends (0, _app.Cpx).Element {
    constructor(){
        super();
        this.state = (0, _app.Cpx).State;
        this.state = (0, _app.Cpx).State;
        this.copyToElement = (0, _app.Cpx).Functions.copyAPI.toElement;
    }
    connectedCallback() {
        this.render();
        this.addClickHandler();
        this.copyToElement();
    }
    addCopyClickHandler() {
    // Add click event listener to the copy button
    }
    render() {
        this.innerHTML = `
            <div style="text-align:center;max-width:768px;margin-inline:auto">
              <accordion-group>
                <accordion-item accordion-item:title="Accordion 1" accordion-item:open=true>
                  <text-element text-element:type="p">Accordion 1 Content</text-element>
                </accordion-item>
                <accordion-item accordion-item:title="Accordion 2">
                  <text-element text-element:type="p">Accordion 2 Content</text-element>
                </accordion-item>
                <accordion-item accordion-item:title="Accordion 3">
                  <text-element text-element:type="p">Accordion 3 Content</text-element>
                </accordion-item>
              </accordion-group>

            <skeleton-element 
              skeleton-element:display="block"
              skeleton-element:color="gray-400"></skeleton-element>
            <skeleton-element 
              skeleton-element:display="block"
              skeleton-element:color="gray-700"
              skeleton-element:width="md"
              skeleton-element:height="10"></skeleton-element>
            <code-block code-block:lang="js">
            console.log('test')</code-block>
              <section copy-element="trigger">CopyButton</section>
              <section copy-element="target">Target Area
              </section>
              <section copy-element="origin">
                <text-element text-element:type=h1 text-element:font-size=xl>Origin Area</text-element>
              </section>  
                  
            <div>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="green-500">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="red">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="yellow">My Badge</badge-element>
              </div>
              <audio-player audio-player:has-album=true></audio-player>
              <video-player></video-player>
              <div>
                  <badge-element
                    badge-element:color="purple-500"
                    badge-element:size=md
                    >My Badge</badge-element>
                  <badge-element
                    badge-element:color="black-500"
                    badge-element:size=xxs
                    badge-element:padding=2
                    badge-element:action="console.log('test')"
                    >Sky Badge</badge-element>
                  <badge-element
                    badge-element:color="pink"
                    badge-element:size=md
                    >My Badge</badge-element>
              </div>
                <code-block 
                  code-block:has-header="false" 
                  code-block:has-copy-button="false" 
                  code-block:title="myFiles" 
                  code-block:lang="js" 
                  >
                  
console.log('test');
const myVar = 'test';
export function myFunction(param = true, { myVar }) {
    return { myVar, param };
}
</code-block>
            </div>
        `;
    }
}
customElements.define(`${(0, _app.Config).prefix}-page-about`, PageAbout);

},{"../app":"bXLqa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["25TcJ","bXLqa"], "bXLqa", "parcelRequirebbe6")

//# sourceMappingURL=index.92783f78.js.map
