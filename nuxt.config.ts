// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  /**
   * 源文件的位置
   */
  srcDir: 'src',

  /**
   * 模块
   */
  modules: ['@nuxt/ui'],

  /**
   * 暗色模式
   */
  colorMode: {
    classSuffix: '',
  },

  /**
   * 配置
   */
  runtimeConfig: {
    public: {
      appName: '罗小小',
    },

    // SurrealDB
    surreal: {
      rootUser: 'root',
      rootPass: '258369',
    },
  },
});
