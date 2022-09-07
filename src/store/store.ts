import { configureStore } from '@reduxjs/toolkit';

import noticesReducer from './noticesSlice';
import pagesReducer from './pagesSlice';

export default configureStore({
  reducer: {
    noticesState: noticesReducer,
    pagesState: pagesReducer,
  },
});
