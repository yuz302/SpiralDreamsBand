# SpiralDreamsBand

## Local development guide:

### Prerequisites:
- vscode is the recommended IDE

### Steps:

1) Pull remote repo to your local host
```
git clone https://github.com/yuz302/SpiralDreamsBand.git
```

2) Build dependencies
```
npm install
```

3) Start website locally. Host will be started on http://localhost:300
```
npm start
```
Changes will be reflected in real time on this port with the hot-deploy feature of create-react-app.

4) Make changes and commits on mainline

 _Note: to make sure you don't check in build, add these in your global gitignore file_
```
node_modules
build
```

 _Note: most data updates can be done in src/data_

5) Once you are finished with your commits, use gh-pages to deploy commits to origin/gh-pages branch
```
npm run deploy
```

6) Wait for a couple minutes before your changes are propagated to github website hosts.