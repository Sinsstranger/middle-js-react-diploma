import { createSlice } from "@reduxjs/toolkit";

type Job = {
  title: string;
  position: string;
  description: string;
  fromYear: string;
  toYear: string;
  translationKey: string;
  linkTo?: string;
};
type Jobs = {
  jobs: Job[];
};

const initialState: Jobs = {
  jobs: [
    {
      title: "Prokma-Telecom LTD",
      position: "System Administrator",
      description:
        "Administration L2, L3 networks, Linux servers, includes Web",
      fromYear: "2014",
      toYear: "2017",
      translationKey: "prokma",
    },
    {
      title: "Techbox LTD",
      position: "Senior Web Developer",
      description: "Frontend Developer",
      fromYear: "2018",
      toYear: "2023",
      translationKey: "skobeeff",
      linkTo: "https://techbox.one/",
    },
    {
      title: "Seonik LTD",
      position: "Senior Web Developer",
      description: "Frontend Developer",
      fromYear: "2018",
      toYear: "2023",
      translationKey: "seonik",
      linkTo: "https://seonik.ru/",
    },
  ],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export default jobSlice.reducer;
