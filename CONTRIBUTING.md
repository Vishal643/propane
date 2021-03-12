If you want to contribute to the repo, it would be helpful if you first posted in Issues so we know what you'll be working on. Also be sure to check closed issues and
current pull requests, to make sure you are working on something new. After that, if you know you will be using the existing branches, run these commands:
```
git clone https://github.com/Vishal643/propane.git
npm install
git fetch
git checkout name-of-branch (check from branch list or make new)
```
If you know you will fork the repo, replace the url in git clone with your own.

For pushing the code to your branch after you're done, use:
```
git add .
git commit -m "description-of-commit"
git push origin name-of-branch (use this if you work from fork: git push --set-upstream origin name-of-branch
```
