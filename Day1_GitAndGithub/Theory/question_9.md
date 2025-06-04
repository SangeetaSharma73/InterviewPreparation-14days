# Question 9: Difference Between `.git/config` and Global Git Config

## 🔧 What is `.git/config`?

- This file is located **inside a Git repository**.
- Stores configuration **specific to that repository only**.
- Examples: repository-specific remotes, hooks, branch settings.

## 🌍 What is Global Git Config?

- Stored in your home directory, usually `~/.gitconfig` or `~/.config/git/config`.
- Applies **to all Git repositories** for your user.
- Examples: username, email, default editor.

---

## 🆚 Key Differences

| Aspect    | `.git/config` (Local)                         | Global Config                             |
| --------- | --------------------------------------------- | ----------------------------------------- |
| Scope     | Single repository                             | All repositories for user                 |
| Location  | `.git/config` inside repo                     | `~/.gitconfig` or similar                 |
| Use Cases | Repo-specific settings (e.g., remotes, hooks) | User-wide preferences (e.g., name, email) |

---

## 📅 When to Use Each?

- Use **local `.git/config`** for repo-specific overrides or settings.
- Use **global config** to set your identity and defaults across all repos.

---

## 🔍 Check Config Values

- View local config:
  ```bash
  git config --local --list
  ```
- View global config:

```bash
 git config --global --list

```

### 📚 Resources

- Git Config Documentation [Link](https://git-scm.com/docs/git-config)

- Git Basics - Configuration [Link](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
