# Quiz App

A responsive quiz application built with React and TailwindCSS that fetches questions from RapidAPI and stores results in localStorage.

## Features

- Fetch quiz questions from RapidAPI
- Multiple quiz categories
- Score tracking
- Result history stored in localStorage
- Responsive design with TailwindCSS
- Timer for each question
- Beautiful UI/UX

## Screenshots

![Quiz App Screenshot](https://via.placeholder.com/800x400)
![Results Page Screenshot](https://via.placeholder.com/800x400)

## Demo

[Live Demo](https://your-quiz-app-url.com)

## Technologies Used

- React
- TailwindCSS
- RapidAPI
- localStorage
- React Router
- React Hooks

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)
- Git
- VS Code (recommended)

## Installation and Setup

Follow these steps to get the Quiz App running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Create a RapidAPI account

- Go to [RapidAPI](https://rapidapi.com/) and create an account
- Subscribe to a Quiz API (e.g., "Trivia API", "QuizAPI", etc.)
- Get your API key from the dashboard

### 4. Create environment variables

Create a `.env` file in the root directory:

```
REACT_APP_RAPID_API_KEY=your_api_key_here
REACT_APP_RAPID_API_HOST=the_api_host_here
REACT_APP_RAPID_API_URL=the_api_url_here
```

### 5. Start the development server

```bash
npm start
# or
yarn start
```

The app should now be running on [http://localhost:3000](http://localhost:3000)

## VS Code Setup

For the best development experience in VS Code:

1. Open the project folder in VS Code
   ```bash
   code .
   ```

2. Install recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

3. Use the built-in terminal to run commands:
   - Open terminal: `Ctrl + ~` (or View > Terminal)
   - Run the development server: `npm run dev`

## Project Structure

```
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Quizshow/
│   │   └── ...
│   ├── contexts/
│   ├── Layout.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## Local Storage Implementation

The app stores quiz results and user preferences in localStorage:

- `quizHistory`: Array of previous quiz attempts and scores
- `userPreferences`: User settings like preferred categories
- `currentQuiz`: Current quiz state in case the user refreshes the page

## API Integration

The app uses RapidAPI to fetch quiz questions. Here's how it's implemented:

```javascript
const fetchQuestions = async (category, difficulty, amount) => {
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_RAPID_API_URL,
    params: { category, difficulty, limit: amount },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
```

## Customization

You can customize various aspects of the quiz:

- Edit `tailwind.config.js` to change theme colors
- Modify quiz parameters in the settings page
- Add new question categories in `src/utils/categories.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [RapidAPI](https://rapidapi.com/) for providing the quiz questions API
- [TailwindCSS](https://tailwindcss.com/) for the awesome styling framework
- [React](https://reactjs.org/) for the frontend library