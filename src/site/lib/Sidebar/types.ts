export interface Tree {
	header: string;
	child: {
		name: string;
		link: string;
		tokenized?: true;
	}[];
	tree?: Tree[];
}
