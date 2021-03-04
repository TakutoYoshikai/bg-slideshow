const execSync = require("child_process").execSync;
const toAbsPath = require("path").resolve;
const fs = require("fs");

function changeBgImage(absPath) {
  execSync("gsettings set org.gnome.desktop.background picture-uri 'file://" + absPath + "'");
}


function loadImages(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files.filter(file => {
        return file[0] !== ".";
      }).map(file => {
        return toAbsPath(dir + "/" + file);
      }));
    });
  });
}

async function start(dir, ms) {
  const images = await loadImages(dir);
  let index = 0;
  setInterval(() => {
    changeBgImage(images[index]);
    index++;
    if (index === images.length) {
      index = 0;
    }
  }, ms);
}

module.exports = start;

