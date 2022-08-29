import { configureStore } from '@reduxjs/toolkit';

import pagesReducer from './pagesSlice';

export default configureStore({
  reducer: {
    pagesState: pagesReducer,
  },
});
