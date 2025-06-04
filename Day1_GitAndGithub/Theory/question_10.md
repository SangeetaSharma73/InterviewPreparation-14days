# Question10: Pull Request Workflows on GitHub

## 🔄 What is a Pull Request (PR)?

A Pull Request is a **proposed change to a repository**, typically from a feature branch into the main branch.  
It allows collaborators to review, discuss, and approve code before merging.

---

## 👥 Code Reviews

- **Reviewers** examine the proposed changes.
- Provide feedback via comments.
- Request changes or approve the PR.
- Helps ensure code quality, consistency, and catches bugs.

---

## ✅ Checks and Continuous Integration (CI)

- Automated tests and tools run when a PR is created or updated.
- Checks might include:
  - Unit tests
  - Linting/formatting
  - Security scans
- Passing checks are often required before merging.

---

## 🔀 Merge Strategies

### 1. **Merge Commit (default)**

- Combines all commits with a merge commit.
- Preserves complete history.
- History shows exactly when the branch was merged.

### 2. **Squash and Merge**

- Combines all feature branch commits into **one commit**.
- Keeps history linear and clean.
- Good for small or incremental changes.

### 3. **Rebase and Merge**

- Reapplies feature branch commits onto the base branch.
- No merge commit.
- Creates a linear history.
- Useful for maintaining clean commit history.

---

## 🛠️ Typical Workflow

1. Create a feature branch.
2. Push changes to GitHub.
3. Open a Pull Request.
4. Automated checks run.
5. Team reviews and discusses.
6. Address feedback with additional commits.
7. When approved and checks pass, merge using preferred strategy.
8. Delete feature branch after merging.

---

## 📚 Resources

- [GitHub Pull Requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
- [Merge strategies](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-merge-methods-on-github)
- [Code review best practices](https://opensource.com/article/18/3/code-review-best-practices)
