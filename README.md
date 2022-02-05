# bg-slideshow
This is a program to change desktop picture at a certain interval.

### Requirements
* macOS or Ubuntu 20.10
* Node.js
* npm
* [wallpaper](https://github.com/sindresorhus/macos-wallpaper) (if it's macOS)


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
start("/path/to/image/dir", 1000); //The interval to change desktop image is 1 second.
stop();
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License

