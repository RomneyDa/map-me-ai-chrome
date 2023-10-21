const manifest = {
    "manifest_version": 3,
    "name": "MapMe",
    "description": "Chrome extension that uses AI to generate a map from a website's source code",
    "version": "1.0",
    "action": {
        "default_popup": "popup/map_popup.html",
        "default_icon": {
            "16": "icons/16.png",
            "32": "icons/32.png",
            "24": "icons/24.png"
        },
        "default_title": "MapMe"
    },
    "background": {
        "service_worker": "service-worker.js"
    },
    "icons": {
        "16": "icons/16.png",
        "32": "icons/32.png",
        "48": "icons/48.png",
        "128": "icons/128.png"
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
    "permissions": [
        "tabGroups",
        "storage"
    ],
    "host_permissions": [
        "https://developer.chrome.com/*"
    ],
    // // Required
    // "manifest_version": 3,
    // "name": "My Extension",
    // "version": "1.0.1",

    // // Recommended
    // "action": {...},
    // "default_locale": "en",
    // "description": "A plain text description",
    // "icons": {...},

    // // Optional
    // "author": "developer@example.com",  

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
    // "host_permissions": [...],
    // "import": [{...}],
    // "incognito": "spanning, split, or not_allowed",
    // "input_components": [{...}],
    // "key": "publicKey",
    // "minimum_chrome_version": "107",
    // "oauth2": {...},
    // "omnibox": {...},
    // "optional_host_permissions": ["..."],
    // "optional_permissions": ["..."],

    // Options
    "options_page": "options/options.html",
    "options_ui": {
        "page": "options/options.html",
        "open_in_tab": false,
    },


    // "permissions": ["..."],
    // "requirements": {...},
    // "sandbox": {...},
    // "short_name": "Short Name",
    // "side_panel": {...},
    // "storage": {...},
    // "tts_engine": {...},
    // "update_url": "https://path/to/updateInfo.xml",
    // "version_name": "1.0 beta",
    // "web_accessible_resources": [...]
}

const out = JSON.stringify(manifest, null, 2);
const fs = require("fs");
fs.writeFile("dist/manifest.json", out, (err) => {
    if (err) console.log(err)
});