## Write a JavaScript Program to get the user registration data and push to array/local storage with AJAX POST method and data list in new page.



## 🚀 Features

- Register users using a form
- Store data in the browser's localStorage
- View all registered users on a separate page

---

## ⚠️ Problem on Ubuntu (or other Linux systems)

If you **open the HTML files directly using `file://`**, the `localStorage` might **not work correctly** due to browser security policies — especially in **Firefox** or **private mode**.

### ✅ Solution

Use a **local server** to host the files. This ensures the pages share the same domain and `localStorage` works properly.

---

## 🛠️ How to Run

### Option 1: Using Python (Recommended)

1. Open terminal in your project directory (where `register.html` and `data.html` are saved).
2. Run the following command:
   ```bash
   python3 -m http.server 8000
````

3. Open your browser and visit:

   * [http://localhost:8000/register.html](http://localhost:8000/index.html)
   * [http://localhost:8000/data.html](http://localhost:8000/data.html)

```

## 📂 File Structure

```
.
├── index.html      # User registration form
├── data.html          # Page to view registered users
└── README.md          # Project documentation
```

---

## 📌 Notes

* Ensure both HTML files are served from the **same domain and port**.
* Avoid using `file://` protocol to access the pages — always use a **local server**.

---

## ✅ Demo Functionality

1. Go to `index.html` and fill in the form.
2. Click "Register" — the data will be saved in the browser.
3. Click the link to `data.html` to see the list of all registered users.

---
