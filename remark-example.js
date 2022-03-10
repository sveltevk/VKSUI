import { visit, SKIP } from 'unist-util-visit';

const reScript = /<script.*?>(.*?)<\/script>/s;
// const reStyle = /<style.*?>.*?<\/style>/s;

export default function exampleCode() {
	return (tree) => {
		let isScript = false;
		let script = `import Showcase from '$site/lib/Showcase/Showcase.svelte'\n`;
		// TODO: Обрабатывать стили

		visit(tree, (node, index, parent) => {
			// TODO: находить уже существующий <script>
			if (
				!(
					node.type === 'code' &&
					node.lang === 'svelte' &&
					node.meta &&
					parent !== null &&
					typeof index === 'number'
				)
			) {
				return;
			}

			let thisCode = node.value;

			let skipCount = index;

			// SCRIPT
			let m = reScript.exec(thisCode);
			if (m !== null) {
				script += m[1].trim() + '\n';
				thisCode = thisCode.replace(reScript, '');
			}

			const scriptNode = {
				type: 'html',
				value: `<script>\n` + script + `</script>`
			};
			if (isScript) {
				parent.children[0] = scriptNode;
			} else {
				parent.children.splice(0, 0, scriptNode);
				isScript = true;
				skipCount++;
			}

			// CODE
			let code = [
				!isScript ? script : '',
				'<Showcase ' + node.meta + '>',
				thisCode.trim(),
				'</Showcase>'
			].join('\n');

			parent.children.splice(index + skipCount - index, 0, {
				type: 'html',
				value: code
			});
			skipCount++;

			// HEADER
			parent.children.splice(index + skipCount - index, 0, {
				type: 'heading',
				depth: 2,
				children: [{ type: 'text', value: 'Код' }]
			});
			skipCount++;

			return [SKIP, skipCount + 1];
		});
	};
}
