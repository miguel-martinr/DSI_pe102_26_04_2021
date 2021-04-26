import * as fs from 'fs';
import { spawn } from 'child_process';

const filename = process.argv[2];
if (!filename) {
  console.log('A file to watch must be specified!');
} else {
  // Checks for file existence (async) before watching
  fs.stat(filename, (err, stats) => {
    if (err) {
      console.log(`File ${filename} does not exist!`);
    } else {
      console.log(`Watching...`);
      fs.watch(filename, (event) => {
        
        // Checks if file is renamed (or deleted)
        if (event === 'rename') {
          console.log(`File ${filename} has been deleted`);
        } else {

          // Takes command from argv
          const cmdName = process.argv[3] ? process.argv[3] : 'ls';
          const cmd = spawn(cmdName, [filename]);
          
          // Handle possible cmd error
          cmd.on('error', () => {
            console.log(`There has been an error when executing command [${cmdName}]`);
            process.exit(-1);
          });
    
          let output = '';
          cmd.stdout.on('data', (chunk) => (output += chunk));
    
          cmd.on('close', () => {
            // const pattern = /​​\s​​+/; ??
            // const parts = output.split(' ');
            console.log(output);
          });
        }
      });
    }
  });
}

