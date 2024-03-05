/**
 * User Agent Information
 */
export const User = {
    agent: () => navigator.userAgent,
    agentVersion: () => navigator.appVersion,
    time: () => new Date().getTime(),
    language: () => navigator.language,
    platform: () => navigator.platform,
    online: () => navigator.onLine,
    cookies: () => navigator.cookieEnabled,
    dnt: () => navigator.doNotTrack,
    resolution: () => screen.pixelDepth,
    devicePxRatio: () => window.devicePixelRatio,
    os: () => navigator.platform,
    vendor: () => navigator.vendor,
    product: () => navigator.product,
    plugins: () => navigator.plugins,
    mimeTypes: () => navigator.mimeTypes,
    hardwareConcurrency: () => navigator.hardwareConcurrency,
    mediaDevices: () => navigator.mediaDevices,
    permissions: () => navigator.permissions,
    serviceWorker: () => navigator.serviceWorker,
    storage: () => navigator.storage,
    appCodeName: () => navigator.appCodeName,
    appName: () => navigator.appName,
    Color: {
        scheme: function () {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return "dark"; // User prefers a dark color scheme
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return "light"; // User prefers a light color scheme
            } else {
                return "no-preference"; // No preference or not detectable -> assume light mode
            }
        },
        depth: () => screen.colorDepth,

    },
    Viewport: {
        width: () => window.innerWidth,
        height: () => window.innerHeight
    },
    Document: {
        width: () => document.documentElement.clientWidth,
        height: () => document.documentElement.clientHeight
    }
}

/**
 * Test these functions in the console:
 */