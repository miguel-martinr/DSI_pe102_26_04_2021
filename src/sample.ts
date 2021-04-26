import * as fs from 'fs';
import {spawn} from 'child_process';

const filename = process.argv[2];
if (!filename) {
  throw Error('A file to watch must be specified!');
}
console.log('Watching...');
fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);

  let output = '';
  ls.stdout.on('data', (chunk) => (output += chunk));

  ls.on('close', () => {
    // const pattern = /​​\s​​+/; ??
    const parts = output.split(' ');
    console.log(`Output: ${output}`);
    console.log([parts[0], parts[4], parts[8]]);
  });
});
