import { createSlice } from '@reduxjs/toolkit';

import { TNotices, TNoticesState } from '../types';

export const cleanNotices: TNotices = {
  isReadedNews: false,
  isReadedShortNews: false,
  isReadedActiveAdverts: false,
  isReadedShortActiveAdverts: false,
  isReadedInactiveAdverts: false,
  news: [],
  shortNews: [],
  activeAdverts: [],
  shortActiveAdverts: [],
  inactiveAdverts: [],
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: cleanNotices,
  } as TNoticesState,
  reducers: {
    noticesSetIsReadedNews(state, action) {
      state.notices.isReadedNews = action.payload.isReadedNews;
    },
    noticesSetIsReadedShortNews(state, action) {
      state.notices.isReadedShortNews = action.payload.isReadedShortNews;
    },
    noticesSetIsReadedActiveAdverts(state, action) {
      state.notices.isReadedActiveAdverts = action.payload.isReadedActiveAdverts;
    },
    noticesSetIsReadedShortActiveAdverts(state, action) {
      state.notices.isReadedShortActiveAdverts = action.payload.isReadedShortActiveAdverts;
    },
    noticesSetIsReadedInactiveAdverts(state, action) {
      state.notices.isReadedInactiveAdverts = action.payload.isReadedInactiveAdverts;
    },
    noticesSetNews(state, action) {
      state.notices.news = action.payload.news;
    },
    noticesSetShortNews(state, action) {
      state.notices.shortNews = action.payload.shortNews;
    },
    noticesSetActiveAdverts(state, action) {
      state.notices.activeAdverts = action.payload.activeAdverts;
    },
    noticesSetShortActiveAdverts(state, action) {
      state.notices.shortActiveAdverts = action.payload.shortActiveAdverts;
    },
    noticesSetInactiveAdverts(state, action) {
      state.notices.inactiveAdverts = action.payload.inactiveAdverts;
    },
  },
});

export const {
  noticesSetIsReadedNews,
  noticesSetIsReadedShortNews,
  noticesSetIsReadedActiveAdverts,
  noticesSetIsReadedShortActiveAdverts,
  noticesSetIsReadedInactiveAdverts,
  noticesSetNews,
  noticesSetShortNews,
  noticesSetActiveAdverts,
  noticesSetShortActiveAdverts,
  noticesSetInactiveAdverts,
} = noticesSlice.actions;
export default noticesSlice.reducer;
