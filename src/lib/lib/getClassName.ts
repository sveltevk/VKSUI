import { Platform, platform } from '../lib/platform';

export default function getClassName(base: string, osName: Platform = platform()): string {
	return `${base} ${base}--${osName}`;
}
