module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/css/utilities/_colors.scss";
          @import "src/css/utilities/_mixins.scss";
          @import "src/css/utilities/_mq-settings.scss";
          @import "src/css/utilities/_reset.scss";
          @import "src/css/utilities/_typography.scss";
        `,
      },
    },
  },
};
