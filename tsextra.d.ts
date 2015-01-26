/// <reference path="./typings/typescript/typescript" />

// These are declarations that exist on the typescript object but aren't currently included in the typescript.d.ts. This
// file, and its reference in index.ts, may be removed if/when these functions are included in typescript.d.ts or
// typescript_internal.d.ts.

declare module 'typescript' {
	export function emitFiles(resolver: EmitResolver, host: any, targetSourceFile?: SourceFile): EmitResult;
}
