# Question 4: Git Merge vs. Git Rebase

## 🔄 What is `git merge`?

`git merge` integrates changes from one branch into another, **preserving the history** of both branches.

### ✅ Example:
```bash
# On main branch
git merge feature/login
```

### 🔧 Result:
Creates a **merge commit**, keeping both histories:
```
A---B---C main
     \ 
      D---E feature
           \
            M (merge commit)
```

---

## 🔁 What is `git rebase`?

`git rebase` moves or re-applies your feature branch commits on top of another branch (like `main`).  
It creates a **linear history**, as if the work started from the latest main.

### ✅ Example:
```bash
# On feature branch
git rebase main
```

### 🔧 Result:
```
A---B---C main
             \
              D'---E' feature (new commits)
```

Commits `D` and `E` are reapplied as new commits `D'` and `E'`.

---

## 📊 Key Differences

| Feature         | `git merge`                    | `git rebase`                          |
|----------------|--------------------------------|---------------------------------------|
| History         | Keeps full history             | Rewrites history (linear)             |
| Merge Commit    | Yes                            | No                                    |
| Conflict Handling | Once during merge             | Possibly multiple times (per commit)  |
| Safe for Shared Branches | ✅ Yes                    | ⚠️ No (can break others' work)        |

---

## 💡 When to Use Rebase

Use rebase when:
- You want a **clean, linear history**.
- Your feature branch is **not yet pushed** or used by others.
- You want to make it easier to **review or squash** commits before merging.

---

## 🧪 Real Scenario: When Rebase is Preferable

### Scenario:
You’ve been working on a feature branch `feature/search-bar` for 3 days.  
Meanwhile, the `main` branch has received updates.

Before merging back, you want your work to appear as if it was based on the latest `main` directly.

### Steps:
```bash
git checkout feature/search-bar
git fetch origin
git rebase origin/main
```

Now your changes are re-applied cleanly on top of the latest main.

---

## 🧠 Summary

- **Merge** is safe and keeps history intact (ideal for shared branches).
- **Rebase** gives a clean, linear history (ideal for polishing personal branches before merging).

---

## 📚 Resources
- [Git Rebase Docs](https://git-scm.com/docs/git-rebase)
- [Git Merge vs. Rebase (Atlassian Guide)](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)