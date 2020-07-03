const mix = require('laravel-mix');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

class CKEditorComponent {
  webpackConfig(cfg) {
    // We need to force CKEditor svg files to run through raw-loader
        // Exclude node_modules from svg loaders
        // Add a loader that does node_modules & tests for ckeditor files
    // We need to allow CKEditor js files to be parsed (they're in node_modules)
        // Add a loader that does node_modules that checks for ckeditor files

    function getRuleLoaders(rule) {
      let l = []
      if (rule.loaders) l.concat(rule.loaders)
      if (rule.loader) l.push(rule.loader)
      if (rule.use) l.push(rule.use)
      return l
    }

    function getRulesByLoader(loader) {
      return cfg.module.rules.filter(r => {
        return getRuleLoaders(r).some(l => {
          if (typeof l == 'string') return loader == l
          if (l.loader) return loader == l.loader
        })
      })
    }

    function getRulesThatLoadSvg() {
      return cfg.module.rules.filter(r => {
        return r.test.toString().includes('.svg')
      })
    }

    // function getOptionsOfRules(rules) {
    //   return rules.map(rule => {
    //     let options = [ rule.options ]
    //     if (rule.loaders) options.concat(rule.loaders.map(loader => loader.options))
    //     if (rule.use) options.concat(rule.use.map(loader => loader.options))
    //   }).filter(option => option)
    // }

    let svgRules = getRulesThatLoadSvg()
    svgRules.forEach(rule => rule.exclude = /node_modules/)

    cfg.module.rules.push({
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
      loader: 'raw-loader'
    })

    cfg.module.rules.push({
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      use: [
        // {
        //   loader: 'style-loader',
        //   options: {
        //     injectType: 'singletonStyleTag',
        //     attributes: {
        //       'data-cke': true
        //     }
        //   }
        // },
        {
          loader: 'postcss-loader',
          options: styles.getPostCssConfig({
            themeImporter: {
              themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
            },
            // minify: true
          })
        },
      ]
    })

    getRulesByLoader('babel-loader').forEach(rule => {
      delete rule.exclude // = /node_modules\/(?!(@ckeditor))/
    })

    cfg.plugins.push(new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'en'
    }))
  }
}

mix.extend('ckeditor', new CKEditorComponent()) 

mix.ckeditor()