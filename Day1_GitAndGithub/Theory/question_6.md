# Question 6: Git’s Three-Way Merge Algorithm & Conflict Resolution

## 🔁 What is a Three-Way Merge?

Git uses a **three-way merge** to combine changes from two branches.  
It compares:

1. The **common ancestor** (base)
2. The **current branch (HEAD)**
3. The **branch being merged**

### 📦 Files Compared:

base
/ \\
current other

### ➡️ Git compares:

- **What changed in your branch (HEAD)**
- **What changed in the other branch**
- Based on the **common ancestor**, it merges those differences.

---

## 🧠 Example Scenario

You and your teammate both edit `app.js`:

- `main` branch:

```js
console.log("Welcome");
```

- You create a feature branch and change it to:

```js
console.log("Welcome user!");
```

- Meanwhile, on main, someone else changes it to:

```js
console.log("Welcome to the app!");
```

When you run:

```bash
git merge main
```

Git does a three-way merge:

Compares your version

Compares main's version

Compares the original base

Since both changed the same line, Git cannot decide automatically.

⚠️ Merge Conflict
Git will mark the conflict like this in app.js:

```js
<<<<<<< HEAD
console.log("Welcome user!");
=======
console.log("Welcome to the app!");

> > > > > > > main
```

- You must edit the file to resolve it manually.

✅ Conflict Resolution Steps

1. Open the conflicted file.
2. Edit the code to resolve the conflict.
3. Stage the resolved file:

```bash
git add app.js
```

4. Complete the merge:

```bash
git commit
```

### 📚 Summary

```
|Step             | Description                                    |
-------------------------------------------------------------------|
Three-Way         | Merge Compares base, current, and other branch |
Conflict Happens  | When same lines are edited differently         |
Resolution Needed | You manually choose which change(s) to keep    |
```

📘 Resources
Git Merge Documentation
[GitMergeDocs](https://git-scm.com/docs/git-merge)

Understanding Conflicts
[Understanding Conflicts](https://git-scm.com/docs/git-merge)
