(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["WEBSITE_VERSION"] = "${WEBSITE_VERSION}";
    window["env"]["WEBSITE_URL_APPLICATION"] = "${WEBSITE_URL_APPLICATION}";
    window["env"]["WEBSITE_URL_GITHUB"] = "${WEBSITE_URL_GITHUB}";
    window["env"]["WEBSITE_URL_YOUTUBE"] = "${WEBSITE_URL_YOUTUBE}";
    window["env"]["WEBSITE_URL_LINKEDIN"] = "${WEBSITE_URL_LINKEDIN}";
  })(this);