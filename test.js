module.exports = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "Galaxy S5",
      "width": 360,
      "height": 640
    },
    {
      "label": "Pixel 2",
      "width": 411,
      "height": 731
    },
    {
      "label": "Pixel 2 XL",
      "width": 411,
      "height": 823
    },
    {
      "label": "Iphone 5",
      "width": 320,
      "height": 568
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://github.com",
      "referenceUrl":
        "https://in-app-support.grofer.io/support?cart_id=23499053",
      "readyEvent": "",
      "readySelector": "",
      "delay": 3000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
