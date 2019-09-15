const fs = require("fs");
const childproc = require("child_process");

// true at build-time, false at CF staging time
if (fs.existsSync("../package.json")) {
  childproc.execSync("npm install  && npm run build", {
    cwd: "..",
    shell: true,
    stdio: "inherit"
  });
}
