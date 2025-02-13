# 🌍 AF-DEV Landing Page  

## 👋 Hello, AF-DEV Community!  

I'm sharing the **landing page** for the **AF-DEV** organization website.  

---

## 🎯 Why This Project?  

I noticed that you initially posted some code using **Vue.js**, but that's not really my thing...  
So, I built this version using **JavaScript (ES Modules)**, based on a **custom design** I created.  

This project aims to provide a **clean, responsive, and multilingual** experience for the community.  

---

## ✨ Features  

✅ **Multi-language support** (🇫🇷 French / 🇬🇧 English)  
✅ **Automatic language detection** 🌍  
✅ **SVG animations & smooth transitions** 🎨  
✅ **Modular JavaScript architecture** 🛠️  
✅ **Responsive design** 📱  
✅ **Mock data for blog posts** 📰  

---

## 🛠️ TODOs & Improvements  

🚧 **Planned Fixes & Features** 🚧  

- [ ] **Contact Page:** Needs functional form handling 📩  
- [ ] **Favicon:** Completely forgot to add it 😅  
- [ ] **Logo Discussion:** We need to finalize the design 🖌️  
- [ ] **Blog API:** Currently using fake data (need proper integration) 🗂️  
- [ ] **Bug Fixes:** If you find any... **good luck fixing them!** 😂  
- [ ] **Language Toggle Button:**  
  - Currently, the code **automatically detects the language** 🌍  
  - In the future, we might add a **manual switch button** 🔄  

---

## 🚀 How to Run Locally  

⚠️ **Important:** This project uses **ES Modules**, so you must run it via a local server.  

### 🔥 Recommended: Start with Express.js  

To make sure everything runs smoothly, **use an Express.js server** instead of relying on browser security exceptions.  

1. **Install dependencies** (if not installed)  
   ```bash
   npm init -y
   npm install express
   ```

2. **Create and run the Express.js server**  

   In the project root, create a file called `server.js` and add this:  

   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();
   app.use(express.json());

   // Serve static files from the 'afdev' folder
   app.use('/', express.static(path.join(__dirname, 'afdev')));

   app.listen(3000, () => {
     console.log(`Server running on http://localhost:3000`);
   });
   ```

3. **Start the server**  
   ```bash
   node server.js
   ```

4. **Open your browser** and go to:  `http://localhost:3000`


---

## ❓ Why I use ES Modules?  

I chose **ES Modules (ESM)** instead of **CommonJS** because:  

1. **Modern JavaScript standard** (future-proof 🚀)  
2. **Better tree-shaking & optimization** 📦  
3. **Native support in browsers** 🖥️  

---

## 🌍 Language Testing  

I just changed my preferences at **chrome://settings/languages** to simulate different languages! 😆  

👉 Just move your preferred language to the top, refresh, and BOOM 💥—the site adapts automagically!

---

### 🔮 Future Improvement:  
Right now, the code **auto-detects** the language.  
Maybe a **manual language switcher button** 🔄 could be a nice addition in the future? What do you think?


---

## 🛠️ Tech Stack  

🚀 **Built With:**  

- **HTML/CSS** 🎨 (for structure & styling)  
- **JavaScript (ES Modules)** ⚙️ (for logic & interactivity)  
- **Mock Data** 📄 (temporary blog content)  
- **SVG & Animations** 🎥 (for visual effects)  
- **Express.js** 🚀 (for local server, no need in prod mode :-)

---

## 📢 Contributing  

🛠️ **Want to improve this project?** Feel free to fork it, suggest fixes, or optimize the existing code!  

---

## 📝 Final Notes  

This is a **work in progress**, so expect some rough edges. If you find issues, **open a PR or report them**.  

Enjoy exploring the project! 🚀🔥  
