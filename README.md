
# 🌌 NASA APOD Viewer – React Project

This is a React application that displays the **Astronomy Picture of the Day (APOD)** using NASA's open API. It allows users to view images or videos of space along with their explanations, and select any date to explore different celestial content.

## 🚀 Features

- 📅 Select a specific date to fetch the APOD
- 📷 Displays high-resolution image or video from NASA
- 📝 View detailed explanation for the media
- 🔄 Handles loading states and errors gracefully
- 🎨 Modern, responsive UI built with React

## 🌐 Live Demo

[🔗 View Live on GitHub Pages](https://abhishekissei.github.io/APOD-PROJECT/)  
*(or deploy it yourself using Netlify, Vercel, etc.)*

## 🛠️ Tech Stack

- **Frontend**: React.js (with Hooks)
- **Styling**: CSS (vanilla)
- **API**: [NASA Astronomy Picture of the Day API](https://api.nasa.gov/)

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/AbhishekIssei/APOD-PROJECT.git
cd APOD-PROJECT
````

### 2. Install dependencies

```bash
npm install
```

### 3. Get your NASA API key

* Visit [api.nasa.gov](https://api.nasa.gov/)
* Sign up and generate a free API key

### 4. Add your API key

Create a `.env` file in the root of the project:

```env
REACT_APP_NASA_API_KEY=your_api_key_here
```

### 5. Start the development server

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## 🗂️ Project Structure

```
APOD-PROJECT/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ApodCard.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

## ✨ Screenshots

*(Add a `screenshot.png` in the root to display below)*

![screenshot](./screenshot.png)

## 📤 Deployment

To deploy to GitHub Pages:

```bash
npm run build
npm run deploy
```

(Ensure `homepage` is correctly set in `package.json`.)

## 🙌 Credits

* Data provided by [NASA APOD API](https://api.nasa.gov/)
* Developed by [Abhishek Kotian](https://github.com/AbhishekIssei)

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

🪐 *Explore the universe, one image at a time.*

```

-
