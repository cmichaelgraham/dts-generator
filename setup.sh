#!/usr/bin/env bash
PATH=node_modules/.bin:$PATH
if [ ! -d "node_modules" ]; then
	npm install
fi

# As long as we're using a pre-release typescript, we need to rebuild the
# compiler. Once we switch to a real release, the next 4 lines can be removed.
cd node_modules/typescript
npm install
./node_modules/.bin/jake LKG
cd ../..

tsd reinstall
tsd rebundle
rm -rf typings/typescript
ln -s ../node_modules/typescript/bin typings/typescript
tsc -m commonjs -t es5 bin/dts-generator.ts index.ts
