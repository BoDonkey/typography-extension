module.exports = {
  improve: '@apostrophecms/rich-text-widget',
  options: {
    typographyConfig: {}
  },
  init(self) {
    self.enableBrowserData();
  },
  extendMethods(self) {
    return {
      getBrowserData(_super, req) {
        const initialData = _super(req);
        const finalData = {
          ...initialData,
          ttTypoConfig: self.options.typographyConfig
        }
        return finalData;
      }
    }
  }
};
