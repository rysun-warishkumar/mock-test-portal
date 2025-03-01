# React + Vite

🏆 Mock Test Portal
A React-based Mock Test Portal that allows users to take tests, view results, track progress, and access leaderboards. Built with React, Chakra UI, and React Router.

🚀 Getting Started
Follow these steps to configure and run the project on your local machine.

1️⃣ Clone the Repository
git clone https://github.com/your-username/mock-test-portal.git

2️⃣ Navigate to the Project Directory
cd mock-test-portal

3️⃣ Install Dependencies
Ensure you have Node.js (v16+) installed. Then run:
npm install

4️⃣ Start the Development Server
npm start

This will start the project at:
http://localhost:5173/

🛠 Project Structure
mock-test-portal
│── src/
│   ├── assets/              # Images, icons, and assets
│   ├── components/          # Reusable UI components (Navbar, Sidebar)
│   ├── pages/               # Application pages (Auth, Home, Profile, Tests, etc.)
│   ├── styles/              # CSS files for styling
│   ├── App.jsx              # Main app component
│   ├── theme.js             # Chakra UI theme config
│── public/                  # Public assets
│── .gitignore               # Git ignore file
│── package.json             # Project dependencies
│── vite.config.js           # Vite config file
│── README.md                # Project documentation

🎨 Technology Stack
React.js – Frontend framework
Chakra UI – UI components & styling
React Router – Navigation & routing
Vite – Fast development server

🏗 Available Scripts
___________________________________________________________
|Command         |   Description
|npm install     |   Install dependencies
|npm start	     |   Run the project in development mode
|npm run build	 |   Build the project for production
____________________________________________________________

⚡ Features
✅ User Authentication (Dummy Login/Register)
✅ Dashboard with Performance Stats
✅ Mock Tests & Test History
✅ Leaderboard Ranking
✅ Light & Dark Mode Support
✅ Responsive Design (Mobile & Desktop)

🛠 Customization
To update theme colors, modify: src/theme.js
To change sidebar layout, update: src/components/SidebarContent.jsx

❓ Troubleshooting
❌ Issue: npm start not working?
✔ Run: npm install

✔ If you see a missing vite.config.js error, make sure you cloned the correct branch.

🤝 Contributing
Want to improve this project? Follow these steps:

Fork the repository
Create a new branch: git checkout -b feature-newFeature
Make your changes & commit: git commit -m "Added new feature"
Push to your fork & submit a PR

📜 License
This project is open-source and available under the MIT License.

💡 Connect with Us
💬 Questions? Issues? Join the discussion here: GitHub Issues
📧 Contact: your-warish.kumar@rysun.com



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
