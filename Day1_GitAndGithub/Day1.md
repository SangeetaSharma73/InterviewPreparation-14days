**Theory (10 questions)**

1. **Explain the three key areas in Git (working directory, staging area, repository)**, and describe how files transition between them during a typical commit.
2. **What is the purpose of a `.gitignore` file?** Give examples of patterns you might include in a Node.js project and explain why.
3. **Define branches in Git**. How do feature branches improve collaboration in a team workflow?
4. **Compare `git merge` vs. `git rebase`.** Provide a scenario where rebasing a feature branch is preferable to merging.
5. **Explain Git remotes:** What is the difference between `origin`, `upstream`, and forks on GitHub?
6. **Describe Git’s three-way merge algorithm.** How does Git resolve conflicts when merging two branches?
7. **What are Git tags and annotated tags?** How would you use them to mark release points?
8. **Explain the internal structure of a Git commit object.** What information does it store, and how is it identified?
9. **How does Git’s `.git/config` file differ from global Git config?** When would you use each?
10. **Describe Pull Request workflows on GitHub.** How do code reviews, checks, and merge strategies (e.g., squash, rebase) fit in?

**Implementation (5 tasks)**

1. Initialize a new git repository locally, create two commits modifying an `index.html` file, and inspect the commit history with `git log`.
2. Create and switch between two branches (`feature/header`, `feature/footer`), make distinct changes in each, then merge one branch into `main`, resolving any conflicts.
3. Rebase your `feature/footer` branch onto the updated `main` branch and force-push the rebased branch to the remote repository.
4. Push your local `main` branch to GitHub, configure `origin`, track the remote, and verify using `git remote -v`.
5. Open a Pull Request on GitHub from your feature branch, add a review comment, request changes, and merge via the GitHub UI using the squash strategy.
