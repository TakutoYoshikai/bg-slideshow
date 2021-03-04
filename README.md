# bg-slideshow
This is a program to change desktop picture at a certain interval.

### Requirements
* Ubuntu 20.10
* Node.js


### Usage
**install**
```bash
npm install --save TakutoYoshikai/bg-slideshow
# Run below if you use bg-slideshow command.
npm install -g TakutoYoshikai/bg-slideshow
```

**shell command**
```bash
bg-slideshow <IMAGE DIR> <INTERVAL MS>
```

**example**
```javascript
const { start, stop } = require("bg-slideshow");
start(1000); //The interval to change desktop image is 1 minite.
stop();
```

### License
MIT License

