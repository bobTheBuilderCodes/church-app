import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { setupListeners } from '@reduxjs/toolkit/query';
import memberSlice from './memberSlice';
import { churchMembersAPI } from '../services/members';



// Combine the reducers
const rootReducer = combineReducers({
  members: memberSlice,
  [churchMembersAPI.reducerPath]: churchMembersAPI.reducer,
  
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(churchMembersAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
