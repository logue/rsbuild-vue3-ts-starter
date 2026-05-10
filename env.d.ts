/// <reference types="@rsbuild/core/types" />

import type {} from 'vue';

declare const __DEMO_BUILD__: boolean;
declare global {
  var __APP_VERSION__: string;
  var __BUILD_DATE__: string;
}

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}
