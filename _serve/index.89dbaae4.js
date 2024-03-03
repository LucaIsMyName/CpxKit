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
})({"ljorS":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9261666589dbaae4";
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

},{}],"9XOu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>(0, _configJs.Config));
parcelHelpers.export(exports, "Cpx", ()=>// Functions and Utilities
    // Base Element
    (0, _cpx.Cpx));
parcelHelpers.export(exports, "ComponentRoot", ()=>// Components
    (0, _rootJs.ComponentRoot));
parcelHelpers.export(exports, "ComponentHeader", ()=>(0, _headerJs.ComponentHeader));
parcelHelpers.export(exports, "ComponentFooter", ()=>(0, _footerJs.ComponentFooter));
parcelHelpers.export(exports, "ComponentModal", ()=>(0, _modalJs.ComponentModal));
parcelHelpers.export(exports, "PageHome", ()=>// Pages
    (0, _homeJs.PageHome));
parcelHelpers.export(exports, "PageAbout", ()=>(0, _aboutJs.PageAbout));
var _configJs = require("./config.js");
var _cpx = require("./cpx");
var _rootJs = require("./components/Root/Root.js");
var _headerJs = require("./components/Header/Header.js");
var _footerJs = require("./components/Footer/Footer.js");
var _modalJs = require("./components/Modal/Modal.js");
var _homeJs = require("./pages/home.js");
var _aboutJs = require("./pages/about.js");

},{"./config.js":"4CNUu","./components/Root/Root.js":"4sCOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/home.js":"e6FQt","./pages/about.js":"2qfwW","./components/Header/Header.js":"fjTFX","./components/Footer/Footer.js":"3t2FK","./components/Modal/Modal.js":"3Y7HB","./cpx":"dMUol"}],"4CNUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
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

},{}],"4sCOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComponentRoot", ()=>ComponentRoot);
var _appJs = require("../../app.js");
class ComponentRoot extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
        this.initialContent = this.innerHTML;
        this.title = this.getAttribute("root:title") || "Root Title";
        this.description = this.getAttribute("root:description") || "Root Description";
        this.storage = (0, _appJs.Cpx).Storage;
        this.state = (0, _appJs.Cpx).State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }
    render() {
        this.innerHTML = `
        <section class="root">
            <app-header class="root__header"></app-header>

            <main class="root__main">
                ${this.state.has("page") ? `<app-page-${this.state.get("page")} class="root__page"></app-page-${this.state.get("page")}>` : `<app-page-home></app-page-home>`}
            </main>

            <app-footer class="root__footer"></app-footer>

            <app-modal
                class="
                    root__modal 
                    ${eval(this.state.get("modalIsActive")) === true ? "root__modal--is-active" : ""}
                "
                modal:is-active="${this.state.get("modalIsActive")}">

                ${this.state.get("modalIsActive") === "true" ? `<app-page-${this.state.get("modalContent")} class="root__modal-content"></app-page-${this.state.get("modalContent")}>` : ``}

            </app-modal>
        </section>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-root`, ComponentRoot);

},{"../../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6FQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageHome", ()=>PageHome);
var _appJs = require("../app.js");
class PageHome extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div>Home Page</div>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-page-home`, PageHome);

},{"../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qfwW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageAbout", ()=>PageAbout);
var _appJs = require("../app.js");
class PageAbout extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div>about Page</div>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-page-about`, PageAbout);

},{"../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjTFX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComponentHeader", ()=>ComponentHeader);
var _appJs = require("../../app.js");
class ComponentHeader extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
        this.title = this.getAttribute("header:title") || "Header Title";
        this.description = this.getAttribute("header:description") || "Header Description";
        this.storage = (0, _appJs.Cpx).Storage;
        this.state = (0, _appJs.Cpx).State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }
    render() {
        this.innerHTML = `
        <header class="header">
            Header!
        </header>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-header`, ComponentHeader);

},{"../../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3t2FK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComponentFooter", ()=>ComponentFooter);
var _appJs = require("../../app.js");
class ComponentFooter extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
        this.title = this.getAttribute("footer:title") || "footer Title";
        this.description = this.getAttribute("footer:description") || "footer Description";
        this.storage = (0, _appJs.Cpx).Storage;
        this.state = (0, _appJs.Cpx).State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }
    render() {
        this.innerHTML = `
        <footer class="footer">
            Footer!
        </footer>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-footer`, ComponentFooter);

},{"../../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Y7HB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComponentModal", ()=>ComponentModal);
var _appJs = require("../../app.js");
class ComponentModal extends (0, _appJs.Cpx).Element {
    constructor(){
        super();
        this.title = this.getAttribute("modal:title") || "modal Title";
        this.description = this.getAttribute("modal:description") || "modal Description";
        this.storage = (0, _appJs.Cpx).Storage;
        this.state = (0, _appJs.Cpx).State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }
    render() {
        this.innerHTML = `
        <section class="modal">
            modal!
        </section>
        `;
    }
}
customElements.define(`${(0, _appJs.Config).prefix}-modal`, ComponentModal);

},{"../../app.js":"9XOu0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMUol":[function(require,module,exports) {
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
const Cpx = {
    Element: (0, _element.Element),
    define: (0, _element1.define),
    Config: (0, _config.Config),
    State: // PlugIns & Utilities
    (0, _state.State),
    Storage: (0, _storage.Storage),
    Http: (0, _http.Http)
};

},{"./element":"7TddR","./utils/element":"hxwwf","./config":"74IoG","./utils/storage":"hcLcL","./utils/state":"eqXTg","./utils/http":"g2z9M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TddR":[function(require,module,exports) {
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
parcelHelpers.export(exports, "Element", ()=>Element);
var _stateJs = require("./utils/state.js");
var _storageJs = require("./utils/storage.js");
class Element extends HTMLElement {
    constructor(){
        super();
        this.ID = this.id || `${this.setAttribute("id", Math.floor(Math.random() * 9999).toString())}`;
        this.initialContent = this.innerHTML;
        this.storage = (0, _storageJs.Storage);
        this.state = (0, _stateJs.State);
    }
    /**
   * Event listener for the element. This is called when the element is connected to the DOM.
   * Default is all `[data-set-state-key]` attributes and `click` event
   * @param {String} buttons
   * @param {String} trigger
   */ addEventListeners(elements = "[data-set-state-key]", event = "click", storage = "local") {
        const allDataSetKeyButtons = this.querySelectorAll(elements);
        allDataSetKeyButtons.forEach((button)=>{
            button.addEventListener(event, (e)=>{
                (0, _stateJs.State).set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
                switch(storage){
                    case "local":
                        (0, _storageJs.Storage).Local.set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
                        break;
                    case "session":
                        (0, _storageJs.Storage).Session.set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
                        break;
                    default:
                        return;
                }
                this.render();
            });
        });
    }
    connectedCallback() {
        this.setAttribute("id", this.ID);
        this.render();
        this.addEventListeners();
    }
    render() {
        this.innerHTML = this.initialContent;
    }
}

},{"./utils/state.js":"eqXTg","./utils/storage.js":"hcLcL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqXTg":[function(require,module,exports) {
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
        /**
         * 
         * @param {String} key 
         * @returns 
         */ get: (key)=>{
            return localStorage.getItem(key);
        },
        /**
         * 
         * @param {String} key 
         * @param {String} value 
         */ set: (key, value)=>{
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
        /**
         * 
         * @param {String} key 
         * @param {String} value 
         */ get: (key)=>{
            return sessionStorage.getItem(key);
        },
        /**
         * 
         * @param {String} key 
         * @param {String} value 
         */ set: (key, value)=>{
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
    version: "2.0"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2z9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Http", ()=>Http);
const Http = {
    fetch: async (url, options)=>{
        const response = await fetch(url, options);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ljorS","9XOu0"], "9XOu0", "parcelRequireb0f0")

//# sourceMappingURL=index.89dbaae4.js.map
