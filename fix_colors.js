const fs = require('fs');
const path = require('path');

function traverse(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf-8');
  // Avoid replacing if it's already inside a dark: variant or already replaced
  let newContent = content.replace(/(?<!dark:)(bg|text|border|ring|shadow|hover:bg|hover:text|hover:border|group-hover:border|focus:ring|focus:border)-\[#9fe870\](\/[0-9]+)?/g, (match, prefix, opacity) => {
    let op = opacity || '';
    return `${prefix}-[#054d28]${op} dark:${prefix}-[#9fe870]${op}`;
  });
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf-8');
    console.log('Updated ' + file);
  }
}

['./components', './app'].forEach(dir => traverse(dir, processFile));
