import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface IProject {
  githubUrl: string;
  image: string | null;
  sandboxUrl: string | null;
  title: string;
  description: string;
  stack: string[];
  translationKeyTitle?: string;
  translationKeyCaption?: string;
}

export interface IProjectState {
  items: IProject[];
}

const initialState: IProjectState = {
  items: [
    {
      githubUrl: "https://github.com/Sinsstranger/Nodejs-portfolio-api",
      image: "images/nodejsPortfolioApi.png",
      sandboxUrl: null,
      title: "API на NodeJS",
      description: "API на NodeJS",
      translationKeyTitle: "projects.list.api.title",
      translationKeyCaption: "projects.list.api.caption",
      stack: ["NodeJS", "ExpressJS", "Mongoose", "MongoDB"],
    },
    {
      githubUrl: "https://github.com/Sinsstranger/Tic-Tac-Toe_Game",
      image: "images/tic-tac-toe-game.png",
      sandboxUrl: "https://middle-js-coursework-1.vercel.app",
      title: "Игра Крестики-Нолики",
      description: "",
      translationKeyTitle: "projects.list.ticTacToe.title",
      translationKeyCaption: "projects.list.ticTacToe.caption",
      stack: ["Typescript"],
    },
    {
      githubUrl: "https://github.com/Sinsstranger/js-middle-react/",
      image: "images/incomes-expenses.jpg",
      sandboxUrl: "https://js-middle-react.vercel.app",
      title: "Книга учета доходов и расходов",
      description: "",
      translationKeyTitle: "projects.list.incomesExpensesBook.title",
      translationKeyCaption: "projects.list.incomesExpensesBook.caption",
      stack: ["Typescript", "React", "Redux"],
    },
    {
      githubUrl: "https://github.com/Sinsstranger/snake_game",
      image: "images/snake_game.png",
      sandboxUrl: "https://sinsstranger.github.io/snake_game/",
      title: 'Игра "Змейка"',
      description: "",
      translationKeyTitle: "projects.list.snakeGame.title",
      translationKeyCaption: "projects.list.snakeGame.caption",
      stack: ["JavaScript", "HTML5", "CSS3"],
    },
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  extraReducers<State>(builder: ActionReducerMapBuilder<State>): void {},
  reducerPath: undefined,
  reducers: {},
  selectors: undefined,
});

export default projectSlice.reducer;
