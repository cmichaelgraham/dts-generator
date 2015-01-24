/// <reference path="./typings/typescript/typescript.d.ts" />

// These are declarations that exist on the typescript object but aren't currently included in the typescript.d.ts. This
// file, and its reference in index.ts, may be removed if/when these functions are included in typescript.d.ts.

declare module 'typescript' {
	export function createEmitHostFromProgram(program: Program): any;
	export function emitFiles(resolver: EmitResolver, host: any, targetSourceFile?: SourceFile): EmitResult;
}
