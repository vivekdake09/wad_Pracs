# ⚙️ WAD Practicals

All practicals are easy af! Just try each one manually — the rest, you’re smart enough to handle! 😎
💻 Practical Environment: Ubuntu

---

## 📂 Practicals

Each practical has a folder with:

* 🔹 A brief description
* 🔹 Required setup (if any)
* 🔹 Commands or files to run

> Just open terminal in the respective folder and follow the instructions!

---

## 🐳 Practical: Create Docker Container Environment

### 🔧 Prerequisites:

* 👉 [install-docker.sh](./docker/install-docker.sh)
  Run this to install Docker:

  ```bash
  ./docker/install-docker.sh
  ```

  >  After successfull installation you'll be prompted ✅ Docker installation complete

* 👉 [install-node.sh](./docker/install-node.sh)
  Run this to install Node.js:

  ```bash
  ./docker/install-node.sh
  ```

> ✅ After installation, check with: `node -v`

> You don't need this for practical it's just for installation

---

### 📁 Steps:

1. Create a folder named docker → then create file named:

   * `app.js` with

     ```js
     console.log("Hello from Docker!");
     ```
   * `package.json`:

     ```json
     {
       "name": "docker-app",
       "version": "1.0.0",
       "main": "app.js",
       "scripts": { "start": "node app.js" }
     }
     ```
   * `Dockerfile` (without any extension):

     ```Dockerfile
     FROM node:18
     WORKDIR /app
     COPY . .
     RUN npm install
     CMD ["npm", "start"]
     ```

2. **Build Docker image**:

   ```bash
   docker build -t my-node-app .
   ```

3. **Run Docker container**:

   ```bash
   docker run my-node-app
   ```

4. **View/Remove containers**:

   ```bash
   docker ps -a
   ```
   
   ```bash
   docker rm <container_id>
    ```

✅ Done!

---

## 📱 Practical : Mobile Website using jQuery Mobile

### 🔧 Steps:

1. Download jQuery Mobile zip from
   🔗 [jquerymobile.com/download](https://jquerymobile.com/download)
   → Get `jquery.mobile-1.4.5.zip` and extract it.

2. Copy the following files:

   * `jquery.mobile-1.4.5.min.js`
   * `jquery-1.11.3.min.js`
   * `jquery.mobile-1.4.5.min.css`

3. Folder structure:

   ```
   jQuery/
   ├── index.html
   ├── js/
   │   └── *.js files
   └── css/
       └── *.css files
   ```

4. Create `index.html` in the root folder with the following:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Offline jQuery Mobile Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css">
</head>
<body>

  <script src="js/jquery-1.11.3.min.js"></script>
  <script src="js/jquery.mobile-1.4.5.min.js"></script>

  <div data-role="page" id="home">
    <div data-role="header"><h1>Home</h1></div>
    <div data-role="content">
      <p>This is a fully offline jQuery Mobile website.</p>
      <a href="#about" data-role="button">Go to About Page</a>
    </div>
    <div data-role="footer"><h4>© 2025 My App</h4></div>
  </div>

  <div data-role="page" id="about">
    <div data-role="header"><h1>About</h1></div>
    <div data-role="content">
      <p>This app runs offline using jQuery Mobile assets.</p>
      <a href="#home" data-role="button">Back to Home</a>
    </div>
    <div data-role="footer"><h4>Offline Mode</h4></div>
  </div>

</body>
</html>
```

5. Open `index.html` in a browser → You’ll see a clean, responsive mobile UI 🎉

👉 **Add some dummy data in html file** to test more!

✅ Done!

---
## 🔚 Final Note

You're smart enough to figure things out — just run things manually and read the comments.
**Don't panic. Just practice. Everything works! ✅**
