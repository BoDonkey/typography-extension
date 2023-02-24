module.exports = {
  extend: '@apostrophecms/rich-text-widget',
  options: {
    typographyConfig: {}
  },
  init(self) {
    self.enableBrowserData();
  },
  methods(self) {
    return {
      getBrowserData(req) {
        return {
          ttTypoConfig: self.options.typographyConfig
        };
      }
    };
  }
};
