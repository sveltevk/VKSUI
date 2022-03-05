export type FormStatusType = 'default' | 'error' | 'valid';

export type AlignType = 'left' | 'center' | 'right';

export interface Version {
	major: number;
	minor?: number;
	patch?: number;
}

export type AnyFunction = (...args: any[]) => any;
