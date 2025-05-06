---
 
# 🐳 Practical: Create Docker Container Environment

This guide walks you through setting up Docker, running your first container, and managing containers on a Linux system.

---

## 🛠️ Step-by-Step Commands

### 1. Install Docker

```bash
sudo apt install docker.io
```

Installs Docker Engine from Ubuntu’s package repository.

---

### 2. Check Docker Version

```bash
docker --version
```

Displays the installed Docker version to confirm the installation.

---

### 3. Check Docker Service Status

```bash
sudo systemctl status docker
```

Shows if the Docker service is active, inactive, or failed.

---

### 4. Start Docker Service

```bash
sudo systemctl start docker
```

Starts the Docker service if it’s not already running.

---

### 5. Run a Test Container

```bash
sudo docker run hello-world
```

Downloads and runs a test container to verify Docker is working.

---

### 6. List All Containers

```bash
sudo docker ps -a
```

Lists all containers (running + stopped) on your system.

---

### 7. Remove a Container

```bash
sudo docker rm <container_id>
```

Deletes a container. Replace `<container_id>` with the actual ID from the previous command.

---

### 8. Stop Docker Service

```bash
sudo systemctl stop docker
```

Stops the Docker service to save system resources.

---

## ✅ DONE
