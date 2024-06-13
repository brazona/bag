(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["APP_ENVIRONMENT"] = "${APP_ENVIRONMENT}";
    window["env"]["APP_VERSION"] = "${APP_VERSION}";
    window["env"]["LINK_GITHUB"] = "${LINK_GITHUB}";
    window["env"]["LINK_YOUTUBE"] = "${LINK_YOUTUBE}";
    window["env"]["LINK_LINKEDIN"] = "${LINK_LINKEDIN}";
  })(this);