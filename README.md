<!--


Question 13=> Basic Git Commands: Explain the steps and Git commands to initialize a repository, make a commit, and push the code to GitHub.
Ans=>
1: git init
2: git add .
3: git commit -m "Initial commit"
4: git remote add origin https://github.com/your-username/repository-name.git
5: git push -u origin master




Question 14=> Branching Strategy: Describe a common branching strategy (such as GitFlow or feature branching) used in software development teams and how you would implement it for a new feature.
Ans=>
1:git checkout -b feature/new-feature
2: git add .
   git commit -m "Implemented new feature"
3:git push -u origin feature/new-feature
4:git branch -d feature/new-feature



Question 15=>Merging and Resolving Conflicts: Write a step-by-step guide to resolve a merge conflict when merging a feature branch into the main branch.
Ans=>
1:git checkout main
2:git pull origin main
3:git pull origin main
4:git add conflicted-file.js
5:git commit -m "Resolved merge conflicts"
6:git push origin main



Question==>16CI/CD Integration: Explain how to set up a basic CI/CD pipeline using GitHub Actions to automatically test and deploy a Node.js application when changes are pushed to the repository. 
Ans=>
name: Node.js CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    # Checkout the code
    - name: Checkout code
      uses: actions/checkout@v3

    # Set up Node.js environment
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14'

    # Install dependencies
    - name: Install dependencies
      run: npm install

    # Run tests
    - name: Run tests
      run: npm test

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    # Checkout the code
    - name: Checkout code
      uses: actions/checkout@v3

    # Set up Node.js environment
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14'

    # Install dependencies
    - name: Install dependencies
      run: npm install

    # Deploy the app (for example, to a server or platform like Heroku)
    - name: Deploy to server
      run: |
        echo "Deploying application..."
        # Add your deployment command here, e.g., Heroku, SSH, etc.

-->


