// eslint-disable-next-line @typescript-eslint/no-var-requires
const exec = require('child_process').exec;

// example: npm run pull "master"
const branch = process.argv[3];
// console.log("argv",process.argv);

exec(`git pull origin ${branch}`, (error, stdout, stderr) => {
    if (stderr) return console.log("stderr: " + stderr);
    if (error) return console.log("exec error: " + error);
    console.log("stdout: " + stdout);
});