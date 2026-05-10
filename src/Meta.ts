import type { MetaInterface } from '@/interfaces/MetaInterface';

const meta: MetaInterface = {
  version: globalThis.__APP_VERSION__,
  date: globalThis.__BUILD_DATE__,
};

export default meta;
