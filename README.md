# vue-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve / npm run dev / npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## element-ui

### 按需加载
```textmate
npm install babel-plugin-component -D
```
```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

See [element-ui](https://element.eleme.cn/#/zh-CN)
