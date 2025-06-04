# Question 7: Internal Structure of a Git Commit Object

## 🔍 What is a Git Commit Object?

A Git commit object is a fundamental data structure in Git that represents a snapshot of your project at a given point in time.

---

## 🧱 What Information Does a Commit Object Store?

A commit object contains:

- **Tree:** The root snapshot of the directory (file structure and contents).
- **Parent(s):** Reference(s) to previous commit(s). (One for regular commits, multiple for merges)
- **Author:** Who created the commit and when.
- **Committer:** Who committed the changes and when (can differ from author).
- **Commit message:** Description of the changes.
- **Metadata:** Encoding, GPG signature (optional).

---

## 🆔 How Is a Commit Identified?

Each commit is uniquely identified by a **SHA-1 hash** (40 hexadecimal characters) computed over its contents (tree, parent, author, message, etc.).

This ensures:

- Integrity: Any change alters the hash.
- Uniqueness: The hash points to a unique snapshot.

---

## 📦 Visual Representation

---

## 📚 Additional Resources

- [Git Object Model](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
- [Understanding Git Commit Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_commit_objects)
