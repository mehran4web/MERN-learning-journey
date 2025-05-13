

## 🧩 How to Use This Starter for New Challenges

Follow these steps to create a new React + Tailwind + Vite project inside your existing monorepo using this starter.

### ✅ Step-by-Step Instructions

1. **Go to the root of the monorepo** (if you're not already there):

   ```bash
   cd /path/to/MERN-learning-journey
````

2. **Remove `node_modules` from the starter** (to avoid copying unnecessary files):

   ```bash
   rm -rf react-tailwind-starter/node_modules
   ```

3. **Copy the starter to a new challenge folder** (replace with your challenge name):

   ```bash
   cp -r react-tailwind-starter frontend-mentor-challenges/3-column-preview-card
   ```

4. **Navigate into the new folder**:

   ```bash
   cd frontend-mentor-challenges/3-column-preview-card
   ```

5. **Remove any `.git` folder (if present)** to prevent nested Git repos:

   ```bash
   rm -rf .git
   ```

6. **Install dependencies**:

   ```bash
   npm install
   ```

7. **Run the dev server**:

   ```bash
   npm run dev
   ```

---

### 🧠 Optional: Clean Up `package.json`

* Change the project name to match your challenge:

  ```json
  {
    "name": "3-column-preview-card",
    ...
  }
  ```

---

### 🚀 You're Ready!

Now you can start working on your challenge using the clean setup from the starter.

---

