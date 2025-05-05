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
   * `Dockerfile`:

     ```Dockerfile (without any extension)
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
---

## 🔚 Final Note

You're smart enough to figure things out — just run things manually and read the comments.
**Don't panic. Just practice. Everything works! ✅**

---
