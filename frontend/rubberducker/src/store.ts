import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  useDispatch as rawUseDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import counterReducer from './slices/cuonter';

export const store = configureStore({
  reducer: {
    // sliceの登録を行う
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => rawUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
