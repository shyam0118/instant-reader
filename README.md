# 🔊 Instant Reader - Built with Next.js

**Instant Reader** is a modern text-to-speech and translation tool built using **Next.js**. It allows users to **read aloud any selected text on a website**, **translate it**, or **input custom text**, all with support for **multiple languages**.

---

## 🚀 Features

- ✅ **Read Selected Text on Any Website**  
  Highlight and read aloud any text directly from the web using the extension interface.

- 🌍 **Translate and Read**  
  Automatically translate selected or inputted text into your chosen language before reading.

- 📝 **Input Text Reader**  
  Enter custom text into the interface and listen to it aloud instantly.

- 🌐 **Multi-Language Support**  
  Supports dozens of languages for both translation and speech synthesis.

---

## ⚙️ Tech Stack

- **Next.js** (React Framework)
- **TypeScript** *(optional but recommended)*
- **Tailwind CSS** *(for styling)*
- **Web Speech API** *(for speech synthesis)*
- **Google Translate API** *(or similar service)*
- **Chrome Extension APIs** *(if bundled as a browser extension)*

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shyam0118/instant-reader.git
cd instant-reader
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action.

---

## 🧩 Using as a Chrome Extension

If you're bundling this Next.js app into a Chrome Extension:

1. Export your Next.js app:
   ```bash
   npm run build && npm run export
   ```

2. Copy the output from the `out/` directory.

3. Go to `chrome://extensions/` in your browser.

4. Enable **Developer Mode** and click **Load unpacked**.

5. Select the `out/` folder or your extension folder.

---

## 📸 Screenshots

_Add screenshots or demo GIFs here._

---

## 🙌 Contributing

Contributions, feedback, and ideas are welcome!

1. Fork the repo  
2. Create a branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add your feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request  

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.

---

## 👨‍💻 Author

**Shyamalendu Nayak**  
📫 [LinkedIn](https://linkedin.com/in/yourprofile) • [GitHub](https://github.com/your-username)

---

> Built with ❤️ using Next.js to improve web accessibility and multilingual support
