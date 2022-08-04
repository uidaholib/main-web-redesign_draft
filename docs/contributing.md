# How to Contribute

All library folks are invited to contribute to the web site project.
There are many different ways to contribute, including:

- email web team broken links, content errors, or other suggestions (always try to include a link to the page in your email)
- join Web Committee meetings to provide input and feedback
- collaborate with Web Team to develop new page or feature ideas
- edit content spreadsheets in Google Sheets (see "docs/site_data.md")
- edit Markdown or other content on GitHub

The sections below document some guidelines for contributing directly to the web project code.

## Making Updates in the Project

The main-web-redesign_draft project is fairly informal in Git workflow, however, following some guidelines will help keep things organized and avoid confusion. 

### "main" branch 

The "main" branch should be fully deployable code, ready to build and add to the live site--in general it should match what is actually deployed live.

When making or merging changes into the "main" branch, please always test to ensure it is able to build and does not introduce issues. 
Please don't do any updates that change navigation or global options directly in the "main" branch until those updates are ready to go live and are deployed.

### Minor Fixes and Updates

Minor fixes and updates can be done directly in the "main" branch, such as fixing a link, fixing a typo, or updating a CSV. 
These updates should be ready to immediately deploy.

If you are planning a larger set of minor fixes in some area, please create a branch to group them together--this makes it easier to understand the changes.

### Updates in Branches

For any more extensive set of updates, creating new features, reorganization, or changes to navigation please create a new feature branch in the project from "main".
Give your new branch a meaningful name, and when ready open a Pull Request on GitHub to alert the Web Team. 
This branch + PR method makes it easier to understand and track changes in the project, as the PR will show all the files changed as a group (rather than having to look through multiple commits) and has its own history and discussion on GitHub. 

Here are the steps:

- On the project's main page on github, click the branch dropdown where it says "main"
- In the branch dropdown, type a new branch name in the box. An option will appear to "Create branch" with the new name, click it.
- The new branch will now be displayed in the branch dropdown box. Do edits on GitHub web interface in this branch, or work locally on the new branch, creating commit as normal. Use the branch dropdown on GitHub to switch between branches.
- Once the new branch has new commits added, the branch's page on GitHub will display an alert saying it differs from "main" with a button for "Pull Request".
- Click "Pull Request" to start the new PR.
    - give your PR a meaningful title
    - write in the comment box saying what the PR does. E.g. "this PR creates a new section for the new Data Hub service"
    - click the green "create pull request" button
- Once the PR is open, Web Team will review it. You can email the Web Team with a link to the PR or tag them in the comments (i.e. @evanwill @owikle )
- Once reviewed, the Web Team will "Merge pull request" to add the commits to the "main" branch.
- Once merged, Web Team will build and deploy the site to the live server

## Deploying site

In general, the Web Team (Olivia and Evan) will deploy site to the live server.
In emergency / urgent situations when main Web Team is not available, fall backs are available to deploy with access to the server.
Try:

1. Olivia, Evan
2. Devin
3. Kevin, Klytie
