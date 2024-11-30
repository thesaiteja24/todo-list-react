# Todo List React

A sleek and intuitive Todo List application built with **React**. This app helps users manage their tasks efficiently by categorizing them into daily, weekly, or monthly views, complemented by a motivational quote of the day.

---

## 🚀 Features

- **Task Filtering**: View tasks for **Today**, **This Week**, or **This Month** with ease.
- **Motivational Quote**: Displays a daily motivational quote fetched from an external API.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Custom Styling**: Styled with **Tailwind CSS** for a modern and clean appearance.

---

## 📂 Project Structure

```plaintext
src/
├── assets/          # Static assets (if any)
├── components/
│   ├── Data.jsx           # Handles data change
│   ├── Main.jsx           # Main content
│   ├── QuoteFetcher.jsx   # Fetches and displays motivational quotes
│   ├── SideBar.jsx        # Provides buttons for add new todo and dispaly quote
│   ├── TaskCard.jsx       # Renders the list of tasks
│   └── ViewButtons.jsx    # Task filtering buttons
├── App.jsx          # Root React component
├── main.jsx         # Entry point for the React app
├── index.css        # Global styles
├── tailwind.config.js # Tailwind CSS configuration
└── ...
```

---

## 🛠️ Built With

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **API Integration**: Fetches quotes from a motivational quote API.

---

## 🚧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesaiteja24/todo-list-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## 🛠️ Usage

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🌟 Features Breakdown

- **Task Management**:
  - Add, edit, and delete tasks as needed.
  - Filter tasks by **Today**, **This Week**, or **This Month** using the intuitive buttons.
  
- **Daily Inspiration**:
  - Enjoy a new motivational quote every day, fetched from an external API.

---

## 🌐 API Integration

To enable the motivational quotes feature, replace the placeholder API key in `src/components/QuoteFetcher.jsx` with your actual API key from the provider. Example:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

You can obtain an API key from services like [API Ninjas](https://api-ninjas.com/).

---

## 🖥️ Demo

### Task View
<img src="./src/assets/task-view.png" alt="Task View" width="600" />

### Mobile View
<img src="./src/assets/mobile-view.png" alt="Mobile View" width="300" />

---

## 🧪 Build for Production

To create an optimized production build:
```bash
npm run build
```
or
```bash
yarn build
```

The build will be available in the `dist` folder.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## 💬 Feedback

Have feedback or suggestions? Feel free to reach out at [your.email@example.com](mailto:your.email@example.com) or create an issue in this repository.

---

## 📄 Acknowledgments

- **React** for providing a robust library.
- **Tailwind CSS** for the beautiful design framework.
- **API Ninjas** (or your chosen provider) for supplying motivational quotes.

---

Let me know if you'd like further customization or additional sections! 😊
