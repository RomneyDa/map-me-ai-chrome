const manifest = {
    "manifest_version": 3,
    "name": "MapMe",
    "version": "1.0",
    // "version_name": "1.0 beta",
    "description": "Chrome extension that uses AI to generate a map from a website's source code",

    // TODO - flesh out action
    "action": {
        "default_popup": "popup/map_popup.html",
        "default_icon": {
            "16": "assets/icon-16.png",
            "32": "assets/icon-32.png",
            "24": "assets/icon-24.png"
        },
        "default_title": "MapMe"
    },
    "background": {
        "service_worker": "service-worker.js"
    },

    "options_page": "options/options.html",
    "options_ui": {
        "page": "options/options.html",
        "open_in_tab": false,
    },
    "icons": {
        "16": "assets/icon-16.png",
        "32": "assets/icon-32.png",
        "48": "assets/icon-48.png",
        "128": "assets/icon-128.png"
    },
    "content_scripts": [
        {
            "matches": [
                "<all_urls>"
            ],
            "js": [
                "scripts/content.js"
            ]
        }
    ],

    // TODO - check all permissions
    "permissions": [
        "tabGroups",
        "storage"
    ],
    "host_permissions": [
        "https://developer.chrome.com/*"
    ],
    // "optional_permissions": [],
    // "optional_host_permissions": [],
    // "web_accessible_resources": [...]

    // "default_locale": "en",
    "author": "dallinromney@gmail.com",

    // "background": {...},
    // "chrome_settings_overrides": {...},
    // "chrome_url_overrides": {...},
    // "commands": {...},
    // "content_scripts": [{...}],
    // "content_security_policy": {...},
    // "cross_origin_embedder_policy": {...},
    // "cross_origin_opener_policy": {...},
    // "declarative_net_request": {...},
    // "devtools_page": "devtools.html",
    // "event_rules": [{...}],
    // "export": {...},
    // "externally_connectable": {...},
    // "file_browser_handlers": [...],
    // "file_system_provider_capabilities": {...},
    // "homepage_url": "https://path/to/homepage",
    // "import": [{...}],
    // "incognito": "spanning, split, or not_allowed",
    // "input_components": [{...}],
    // "key": "publicKey",
    // "minimum_chrome_version": "107",
    // "oauth2": {...},
    // "omnibox": {...},
    // "requirements": {...},
    // "sandbox": {...},
    // "short_name": "Short Name",
    // "side_panel": {...},
    // "storage": {...},
    // "tts_engine": {...},
    // "update_url": "https://path/to/updateInfo.xml",   
}

const out = JSON.stringify(manifest, null, 2);
const fs = require("fs");
fs.writeFile("dist/manifest.json", out, (err) => {
    if (err) console.log(err)
});