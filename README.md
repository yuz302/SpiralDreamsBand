# SpiralDreamsBand

## Local development guide:

### Prerequisites:
- vscode is the recommended IDE

### Steps:

1) Pull the remote repo to your local machine. Create your own remote branch for easy collaboration.
```
git clone https://github.com/yuz302/SpiralDreamsBand.git
```

2) Build dependencies
```
npm install
```

3) Run this command to start a host locally. Service will be hosted on http://localhost:3000
```
npm start
```
Any local changes will be reflected in real time on this port with the hot-deploy feature of create-react-app.

4) [Make change] Make changes on your branch. Keep commit messages concise and explanatory.

 _Note: to make sure you don't check in the build folders, add these in your global gitignore file_
```
node_modules
build
```

 _Note: most data updates can be done in src/data_

5) [Pull request] Once you are finished with your commits, [create a pull request](https://homes.cs.washington.edu/~mernst/advice/github-pull-request.html) and get it approved by a team member.

5) [Deploy] Once the changes are approved, merge the pull request to origin/mainline and pull changes on mainline to your local. Then, deploy the changes to the website by executing the following command on mainline. This command will deploy mainline commits to origin/gh-pages branch
```
npm run deploy
```

7) Wait for a couple minutes for your changes to be propagated to the github website hosts.