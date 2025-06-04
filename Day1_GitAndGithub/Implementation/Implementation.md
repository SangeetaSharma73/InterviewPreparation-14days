1. Initialize Git Repo, Create 2 Commits, Inspect History

# Initialize a new repo

git init my-project
cd my-project

# Create index.html and commit first version

echo "<!DOCTYPE html><html><body><h1>Hello</h1></body></html>" > index.html
git add index.html
git commit -m "Add initial index.html with Hello"

# Modify index.html and commit second version

echo "<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>" > index.html
git add index.html
git commit -m "Update index.html header text"

# View commit history

git log --oneline

2. Create & Switch Branches, Make Changes, Merge, Resolve Conflicts

# Create and switch to feature/header branch

git checkout -b feature/header

# Modify index.html for header feature

echo "<header>Site Header</header>" >> index.html
git add index.html
git commit -m "Add header section"

# Switch back to main

git checkout main

# Create and switch to feature/footer branch

git checkout -b feature/footer

# Modify index.html for footer feature

echo "<footer>Site Footer</footer>" >> index.html
git add index.html
git commit -m "Add footer section"

# Switch to main and merge feature/header branch

git checkout main
git merge feature/header

# If there is a conflict (e.g. in index.html), open index.html and manually to resolve.

# After resolving conflicts:

git add index.html
git commit

3. Rebase feature/footer on main & Force-Push

# Switch to feature/footer branch

git checkout feature/footer

# Rebase onto updated main branch

git rebase main

# If conflicts appear during rebase, resolve manually, then:

git add index.html
git rebase --continue

# Force-push the rebased branch to remote

git push origin feature/footer --force

4. Push main to GitHub, Configure origin, Track Remote, Verify

# Add remote origin (replace URL with your repo URL)

git remote add origin https://github.com/your-username/your-repo.git

# Push main branch and set upstream to track remote

git push -u origin main

# Verify remotes

git remote -v

5. Open PR, Add Review Comment, Request Changes, Merge (Squash)
   Go to your GitHub repository page.

You should see a prompt to create a Pull Request for your feature branch.

Click Compare & pull request.

Add title and description.

Create PR.

Use GitHub’s Review changes feature:

Add comments on code lines.

Select Request changes if needed.

After approvals and checks pass, use the Merge pull request button.

Select Squash and merge strategy.

Confirm merge.
