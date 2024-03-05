
/**
 * 
 * 
 */

interface SanitizeInterface {
    html: (str: string) => string;
    css: (str: string) => string;
    js: (str: string) => string;
}
/**
 * Sanitize
 * @description Sanitize strings for use in HTML, CSS, and JavaScript
 * @example
 * Sanitize.html('<script>alert("xss")</script>');
 * --> '&lt;script&gt;alert("xss")&lt;/script&gt;'
 */
export const Sanitize: SanitizeInterface = {
    html: function (str) {
        return str.replace(/[&<>"']/g, function (match) {
            const entities = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return entities[match];
        });
    },

    css: function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '\\$&');
    },

    js: function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '\\$&');
    }
};

interface UnsanitizeInterface {
    html: (str: string) => string;
    css: (str: string) => string;
    js: (str: string) => string;
}
/**
 * Unsanitize
 * @description Unsanitize strings for use in HTML, CSS, and JavaScript
 * @example
 * Unsanitize.html('&lt;script&gt;alert("xss")&lt;/script&gt;');
 * --> '<script>alert("xss")</script>'
 */
export const Unsanitize: UnsanitizeInterface = {

    html: function (str) {
        const entities = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'"
        };
        return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => entities[match]);
    },
  
    css: function (str) {
        return str.replace(/\\(.)/g, '$1');
    },
  
    js: function (str) {
        return str.replace(/\\(.)/g, '$1');
    }
}