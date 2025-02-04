Create branch:
git checkout -b branchName

add, commit, push:
git push origin branchName

pull the branch before merging with MAIN:
git pull origin branchName

go to the MAIN branch:
git checkout MAIN

Pull the main branch: 
git pull origin main

MERGE the branch into the main branch:
git merge branchName

OR

PUSH the main code:
git push origin main


For pull request from MAIN branch:

1.git checkout branchName
2.git pull origin main
3.git commit -m "changes"
4.git push origin branchName
5.git pull origin main




///=======================================


FOR MERGING FROM YOUR BRANCH TO MAIN:

to see any changes in the code of the current branch:
git status

create a new branch:
git branch feature1

show all branches:
git branch -a

switch to your preffered branch:
git checkout feature1                   or  git checkout -b "feature1"

add everything:
git add .

commit:
git commit -m "added new feature1"


MERGING into the Master from the branch:
(be on the branch we are merging into)

git checkout main
git merge suparna-branch

git checkout master
git merge feature1

Push the code:
git push origin main


////=================================≠≠≠====

delete a branch:
git checkout master
git branch -D feature1

////=======================================


FOR GETTING THE UPDATED CODE FROM MAIN BRANCH:

fetch the latest changes:
git fetch origin

Pull the latest code:
git pull origin main



FOR RESOLVING CONFLICTS:

git status
git add gitCommands.md



[username, password] - user ------> register() -------> localStorage[username?????]  ---------> Login

                                                                                     ---------> Register

localStorage = {
    users:[
        {
            username: 'user1',
            password: a19283yw
        },
        {
            username: 'user2',
            password: 19283yw
        }
    ]
}