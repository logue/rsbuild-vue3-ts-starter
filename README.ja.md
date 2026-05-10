# 🦀 Vue 3 + TypeScript + Rsbuild スターター

[![GitHub stars](https://img.shields.io/github/stars/logue/rsbuild-vue3-ts-starter.svg)](https://github.com/logue/rsbuild-vue3-ts-starter)
[![GitHub license](https://img.shields.io/github/license/logue/rsbuild-vue3-ts-starter.svg)](https://github.com/logue/rsbuild-vue3-ts-starter/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%5E24-brightgreen.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11-pink.svg)](https://pnpm.io/)
[![Rsbuild](https://img.shields.io/badge/rsbuild-2-orange.svg)](https://rsbuild.rs/)
[![X Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://x.com/logue256)

[English](./README.md)

このテンプレートは、Rsbuild スタック上で Vue 3 と TypeScript の開発をすぐに始めるためのものです。テンプレートでは Vue 3 の `<script setup>` SFC を使用しています。詳細は [script setup ドキュメント](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) を参照してください。

_Vite から `src` をそのままコピーするだけ！_

[vue-router](https://router.vuejs.org/) と [Pinia](https://pinia.vuejs.org/) を含みます。

Lint/Format は [Rslint](https://rslint.rs/)、[Prettier](https://prettier.io/)、[Biome](https://biomejs.dev/) を使った統合 `pnpm lint` パイプラインで実行されます。

## コマンド

コマンドはシンプルで CI フレンドリーな構成です。

| コマンド    | 説明                                                    |
| ----------- | ------------------------------------------------------- |
| dev         | 開発サーバーを起動します。                              |
| lint        | すべての lint/format ステップ（`lint:*`）を実行します。 |
| test        | Rstest でテストを実行します。                           |
| test:watch  | Rstest でウォッチモードのテストを実行します。           |
| build       | 本番ビルドを実行します。                                |
| build:clean | 本番ビルド成果物を削除します。                          |
| preview     | 本番ビルド成果物をローカルで確認します。                |
| build-only  | チェックなしで本番ビルドを実行します（デプロイ向け）。  |
| type-check  | Vue マークアップの型チェックを実行します。              |

## チェックリスト

このテンプレートを使うときは、次の項目を確認してください。

- [ ] `LICENSE` の作者名を変更する
- [ ] `public` 内のファビコンを差し替える
- [ ] 資金提供情報が含まれる `.github` フォルダを削除する
- [ ] README を整理し、不要なルートを削除する

## 関連プロジェクト

- Vue 3 向け
  - [vite-vue3-ts-startar](https://github.com/logue/vite-vue3-ts-starter)
  - [vite-vuetify-ts-starter](https://github.com/logue/vite-vuetify-ts-starter) - Vuetify 3 対応
    - [tauri-vuetify-starter](https://github.com/logue/tauri-vuetify-starter) - 多言語クロスプラットフォーム・デスクトップアプリ向け
