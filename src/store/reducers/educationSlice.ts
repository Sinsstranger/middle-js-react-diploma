import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface IEducation {
  title: string;
  description: string;
  documentLink: string | null;
  image: string | null;
  linkTo: string | null;
  translationKey?: string;
}

export interface IEducationState {
  educations: IEducation[];
}

const initialState: IEducationState = {
  educations: [
    {
      title: "Geekbrains.ru",
      description:
        "Программа обучения основана на реальных проектах крупных ИТ-компаний и банков",
      documentLink: null,
      image: "https://gb.ru/android-chrome-192x192.png",
      linkTo: "https://gb.ru/",
      translationKey: "geekbrains",
    },
    {
      title: "Филимонов Карьера",
      description:
        "Программа обучения основана на реальных проектах крупных ИТ-компаний и банков",
      documentLink: null,
      image:
        "https://filimonov-career.ru/img/favicon/nextImageExportOptimizer/favicon-120x120-opt-96.WEBP",
      linkTo: "https://filimonov-career.ru/",
      translationKey: "filimonov",
    },
    {
      title: "Hexlet.io",
      description:
        "Лучшая школа программирования по версии пользователей Хабра",
      documentLink: null,
      image:
        "https://cdn2.hexlet.io/assets/main_landing_hero-a0ae296e0b9f2395c6c442b2104000ddc260fabd559bef2b779e5fa039619192.svg",
      linkTo: "https://www.hexlet.io/",
      translationKey: "hexlet",
    },
  ],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers<State>(builder: ActionReducerMapBuilder<State>): void {},
});

export default educationSlice.reducer;
