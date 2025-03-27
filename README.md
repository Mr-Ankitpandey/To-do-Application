# Advanced Todo App with Weather Integration

## Project Overview
This project is a feature-rich Todo Application with user authentication and a weather display component. It allows users to add, delete, and prioritize tasks while ensuring data persistence using local storage. The weather component fetches real-time weather updates for Surat, India.

## Features
- **User Authentication** (Login/Logout functionality using Redux)
- **Task Management**
  - Add new tasks
  - Delete tasks
  - Set task priority (High, Medium, Low)
  - Persistent task storage using localStorage
- **Weather Display**
  - Fetches real-time weather data for Surat, India
  - Displays temperature using OpenWeather API
- **Styled with Bootstrap for Responsive UI**

---

## Folder Structure
```
📂 To-do Application
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 Auth.js  # Handles login/logout functionality
│   │   ├── 📄 TaskInput.js  # Component for adding new tasks
│   │   ├── 📄 TaskList.js  # Component for displaying tasks
│   │   ├── 📄 TodoApp.js  # Main todo application component
│   │   ├── 📄 Weather.js  # Fetches and displays weather information
│   ├── 📂 redux
│   │   ├── 📂 actions
│   │   │   ├── 📄 authActions.js  # Authentication action creators
│   │   ├── 📂 reducers
│   │   │   ├── 📄 authReducer.js  # Reducer for authentication state
│   │   │   ├── 📄 taskReducer.js  # Reducer for task management
│   │   ├── 📄 store.js  # Redux store configuration
│   ├── 📄 App.js  # Main application file
│   ├── 📄 index.js  # Root file rendering App component
│   ├── 📄 styles.css  # Application styles
├── 📄 package.json  # Project dependencies and scripts
├── 📄 README.md  # Documentation
```

---

## Setup Instructions
### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-AnkitPandey/To-do Application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd To-do Application
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage
1. Click on the **Login** button to authenticate.
2. Add a task by typing in the input box and selecting a priority.
3. Click **Add** to save the task.
4. Click **Delete** to remove a task.
5. Logout and log back in to see persisted tasks.
6. The weather section displays the current temperature in Surat.

---

## API Usage
This application uses the **OpenWeather API** to fetch real-time weather updates. Ensure your API key is set correctly in the `Weather.js` file.

```javascript
const response = await axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Surat,IN&appid=YOUR_API_KEY&units=metric"
);
```

---

## Technologies Used
- **React.js** (Frontend Framework)
- **Redux** (State Management)
- **Bootstrap** (UI Styling)
- **Axios** (HTTP Requests)
- **LocalStorage** (Data Persistence)

---

## Thank you