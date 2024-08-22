import fs from 'node:fs';
import openapiTS, { astToString } from 'openapi-typescript';

const ast = await openapiTS(new URL('http://localhost:8000/api/schema'));
const contents = astToString(ast);

// (optional) write to file
fs.writeFileSync('./src/__generated__/schema.ts', contents);
