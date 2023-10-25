// eslint-disable-next-line @typescript-eslint/no-var-requires
const exec = require('child_process').exec;


// example: npm run push "commit 1" "master"
const msg = process.argv[4];
const branch = process.argv[5];
// console.log("argv",process.argv);
console.log(`Pushed to ${branch}: `, msg);

exec(`git add . && git commit -m "${msg}"`, (error, stdout, stderr) => {
    if (stderr) console.log("stderr: " + stderr);
    if (error) return console.log("exec error: " + error);
    console.log("stdout: " + stdout);
    exec(`git push origin ${branch}`, (error, stdout, stderr) => {
        if (stderr) return console.log("stderr: " + stderr);
        if (error) return console.log("exec error: " + error);
        console.log("stdout: " + stdout);
    });
});