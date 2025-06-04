# Question 2: Purpose of `.gitignore` File

## 🔹 What is `.gitignore`?

A file that tells Git which files/folders to ignore (not track). Useful for:
- Temporary or generated files
- Secrets or credentials
- System/IDE settings

## 🔧 Example `.gitignore` for Node.js

```
# Dependencies
node_modules/

# Logs
*.log

# Environment files
.env
.env.local

# Editor config
.vscode/

# Build folders
dist/
build/

# Coverage
coverage/
```

## 💬 Summary

> `.gitignore` helps keep the repo clean, secure, and lightweight.

## 📚 Resources
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [Git Docs on gitignore](https://git-scm.com/docs/gitignore)