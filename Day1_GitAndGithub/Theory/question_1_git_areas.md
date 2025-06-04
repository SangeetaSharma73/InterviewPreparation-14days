# Question 1: Git Areas - Working Directory, Staging Area, Repository

## 🔹 Three Key Areas in Git

| Area                        | Purpose                                                               |
| --------------------------- | --------------------------------------------------------------------- |
| **Working Directory**       | Where you make changes to files (your actual project folder).         |
| **Staging Area**            | A place to prepare and review changes before saving them permanently. |
| **Repository (Local Repo)** | Where committed versions of the project are saved permanently.        |

## 🔄 File Transition Flow

```
Working Directory → Staging Area → Repository
     (edit)            (git add)         (git commit)
```

## ✅ Example

1. **Edit File:** Modify `index.html` in working directory.
2. **Stage File:** `git add index.html` - move to staging area.
3. **Commit File:** `git commit -m "Updated title"` - move to repository.

## 🧱 Diagram

```txt
+-------------------+       git add       +--------------------+      git commit      +------------------------+
| Working Directory |  ───────────────▶   |   Staging Area     |  ───────────────▶   | Local Git Repository   |
+-------------------+                    +--------------------+                    +------------------------+
```

## 📚 Resources

- [Learn Git Branching](https://learngitbranching.js.org)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
