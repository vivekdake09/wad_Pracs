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
