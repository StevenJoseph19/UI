const path = require("path");
const fs = require("fs");

const files = [".bash_profile", ".npmrc"];

files.forEach((file) => {
  console.log(process.env.HOME);
  const filePath = path.resolve(process.env.HOME, file);

  console.log(filePath);
  const data = fs.readFileSync(filePath);
  console.log("File data is", data);
});
