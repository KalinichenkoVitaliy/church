import { createSlice } from '@reduxjs/toolkit';

import { TPages, TPagesState } from '../types';

export const cleanPages: TPages = {
  primary: false,
  about: false,
  sanctitys: false,
  clergy: false,
  schedule: false,
  life: false,
  adverts: false,
  contacts: false,
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pages: cleanPages,
  } as TPagesState,
  reducers: {
    pagesSetActive(state, action) {
      const newState: TPages = { ...cleanPages };
      const namePage = action.payload.namePage.replaceAll('/', '');
      newState[namePage as keyof TPages] = true;
      state.pages = newState;
    },
  },
});

export const { pagesSetActive } = pagesSlice.actions;
export default pagesSlice.reducer;
