# Question 7: Git Tags and Annotated Tags

## 🔖 What Are Git Tags?

Git tags are used to **mark specific points in history** — often used to label versions/releases.

### 📌 Use Case:

- Marking a commit as `v1.0.0` release.
- Easily reference a stable version in the repo.

---

## 🏷️ Two Types of Tags

| Tag Type        | Description                                                |
| --------------- | ---------------------------------------------------------- |
| **Lightweight** | A simple pointer to a commit (like a branch, but fixed).   |
| **Annotated**   | Stores extra metadata (tagger, date, message, GPG signed). |

---

## 🧪 Example: Create a Tag

### Lightweight Tag

```bash
git tag v1.0.0
```

### Annotated Tag

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

### 🚀 Tagging a Past Commit

- Find the commit hash using git log, then:

```bash
git tag -a v1.0.0 <commit-hash> -m "Initial release"
```

## ⬆️ Push Tags to Remote

```bash
git push origin v1.0.0
```

To push all tags:

```bash
git push origin --tags
```

## 🔍 View Tags

```bash
git tag
```

## 🔄 Checkout a Tag

```bash
git checkout v1.0.0
```

- ⚠️ This puts you in “detached HEAD” mode.

### 📘 Summary

- Tags are great for marking release points (e.g., v1.0.0, v2.1.3).

- Annotated tags are preferred for public releases.

- They help teams and CI/CD pipelines identify stable versions.

📚 Resources
Git Tag Docs
[GitTagDocs][(https://git-scm.com/book/en/v2/Git-Basics-Tagging)]

Semantic Versioning
[([Link](https://semver.org/))]
"""
