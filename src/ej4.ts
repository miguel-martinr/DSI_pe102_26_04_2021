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
          process.exit(-1);
        } else {

          // Takes command from argv
          let cmdName = 'ls';
          let args: string[] = [];
          if (process.argv[3]) {
            cmdName = process.argv[3];
            args = process.argv.slice(4, process.argv.length);
          }
          process.argv[3] ? process.argv[3] : 'ls';
          const cmd = spawn(cmdName, [filename, ...args]);
          
          // Handle possible cmd error
          cmd.on('error', (err) => {
            console.log(`There has been an error when executing command [${cmdName}]: ${err.toString()}`);
            process.exit(-1);
          });
    
          let output = '';
          cmd.stdout.on('data', (chunk) => (output += chunk));
    
          cmd.on('close', () => {
            
            const parts = output.split(/\s+/);
            console.log(output);
          });
        }
      });
    }
  });
}

