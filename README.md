# 🚀 LP II Practicals

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

## 🛠️ Practical : Angular User Authentication App

### 🔧 Steps:

1. Install Angular CLI globally

```bash
sudo npm install -g @angular/cli
```

2. Verify installation

```bash
ng version
```

3. Create a new Angular project

```bash
ng new user-auth-app
```

> Answer the prompts:
> ❌ No | ✅ CSS | ❌ No

4. Navigate to the project folder

```bash
cd user-auth-app
```

5. Run the Angular App

```bash
ng serve
```

6. You should see the default Angular page at `http://localhost:4200`

7. Make sure Node.js is installed. If not, download from the official site or search `download node for ubuntu`.

8. Generate components and service

```bash
ng generate component components/register
ng generate component components/login
ng generate component components/profile
ng generate service services/auth
```

---

### 📄 Required Files:

#### 🔹 `src/index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>UserAuthApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

---

#### 🔹 `src/main.ts`

```ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
```

---

#### 🔹 `src/environments/environment.ts`

```ts
export const environment = {
  production: false
};
```

---

#### 🔹 `src/app/app.component.html`

```html
<div style="text-align:center;">
  <h1>
    Welcome to the User Authentication App!
  </h1>
  <nav>
    <a routerLink="/login">Login</a> |
    <a routerLink="/register">Register</a> |
    <a routerLink="/profile">Profile</a>
  </nav>
  <router-outlet></router-outlet>
</div>
```

---

#### 🔹 `src/app/app.component.ts`

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-auth-app';
}
```

---

#### 🔹 `src/app/app.config.ts`

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
```

---

#### 🔹 `src/app/app.module.ts`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

#### 🔹 `src/app/app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];
```

---

#### 🔹 `src/app/app-routing.module.ts`

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

---

#### 🔹 `src/app/services/auth.service.ts`

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'registeredUsers';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() {}

  private loadUsers(): Map<string, string> {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? new Map(JSON.parse(usersJson)) : new Map();
  }

  private saveUsers(users: Map<string, string>) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(Array.from(users.entries())));
  }

  register(username: string, password: string): boolean {
    const users = this.loadUsers();
    if (users.has(username)) {
      return false;
    }
    users.set(username, password);
    this.saveUsers(users);
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.loadUsers();
    const storedPassword = users.get(username);
    if (storedPassword === password) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  getUser() {
    const userJson = localStorage.getItem(this.CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
}
```

---

#### 🔹 `src/app/components/login/login.component.ts`

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.message = 'Login successful';
    } else {
      this.message = 'Invalid credentials';
    }
  }
}
```

---

#### 🔹 `src/app/components/login/login.component.html`

```html
<div>
  <h2>Login</h2>
  <form (ngSubmit)="login()">
    <label for="username">Username:</label>
    <input type="text" id="username" [(ngModel)]="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" [(ngModel)]="password" name="password" required>

    <button type="submit">Login</button>
  </form>

  <p>{{ message }}</p>
</div>
```

---

#### 🔹 `src/app/components/profile/profile.component.ts`

```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

interface User {
  username: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
```

---

#### 🔹 `src/app/components/profile/profile.component.html`

```html
<div *ngIf="user">
  <h2>Welcome, {{ user.username }}</h2>
  <p>This is your profile page.</p>
</div>

<div *ngIf="!user">
  <p>No user logged in.</p>
</div>
```

---

#### 🔹 `src/app/components/register/register.component.ts`

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password === this.confirmPassword) {
      if (this.authService.register(this.username, this.password)) {
        this.message = 'Registration successful';
      } else {
        this.message = 'Username already exists';
      }
    } else {
      this.message = 'Passwords do not match';
    }
  }
}
```

---

#### 🔹 `src/app/components/register/register.component.html`

```html
<div>
  <h2>Register</h2>
  <form (ngSubmit)="register()">
    <label for="username">Username:</label>
    <input type="text" id="username" [(ngModel)]="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" [(ngModel)]="password" name="password" required>

    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" [(ngModel)]="confirmPassword" name="confirmPassword" required>

    <button type="submit">Register</button>
  </form>

  <p>{{ message }}</p>
</div>
```

---

✅ Done!

The ui is very basic I suggest you to make some changes in the ui by your own.

---
## 🔚 Final Note

You're smart enough to figure things out — just run things manually and read the comments.
**Don't panic. Just practice. Everything works! ✅**
