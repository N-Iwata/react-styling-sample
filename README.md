# React Styling Sample

## Inline Style

ホバーなどはステート管理で切り替える

## CSS Modules

sassを使う場合は`node-sass`をインストール

```
npm install --save node-sass
```

## Styled Conponents

```
npm install -save styled-components @types/styled-components
```

## Emotion React

```
npm install --save @emotion/react
```

使用するファイルの先頭に以下記述

```ts
/**@jsxRuntime classic */
/** @jsx jsx */
```

`tsconfig.json`の`compilerOptions`に以下追記

```json
"types": ["@emotion/react/types/css-prop"],
```

## Emotion Styled

```
npm install --save @emotion/styled
```