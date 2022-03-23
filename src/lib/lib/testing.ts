import { canUseDOM } from '@vkontakte/vkjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isTesting = Boolean(canUseDOM && (window as any).__isVkuiTesting);
