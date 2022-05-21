import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface Tweet {
  UserName: string;
  Profile: {
    MainProfile: string;
    SubProfile: string;
  };
  BackGroundImage: string;
  UserIcon: string;
  Contents: [
    {
      Id: number;
      MainContent: {
        Date: string;
        Body: string;
        LikeCount: number;
      };
      ReplyCount: string;
      Reply: [
        {
          UserName: string;
          UserIcon: string;
          Body: string;
        }
      ];
    }
  ];
}

export interface TweetState {
  status: string;
  content: Tweet | undefined;
}

const initialState: TweetState = {
  status: 'pending',
  content: undefined,
};

export const getTweets = createAsyncThunk(
  'tweets/get',
  async (): Promise<TweetState> => {
    const response = await fetch('http://localhost:5000/contents', {
      method: 'GET',
    });
    const json: Tweet = await response.json();
    return {
      status: 'complete',
      content: json,
    };
  }
);

export const tweetSlice = createSlice({
  name: 'tweetContents',
  initialState,
  reducers: {
    increment: (state) => {
      state.status = 'complete';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTweets.fulfilled,
      (state, action: PayloadAction<TweetState>) => {
        state.content = action.payload.content;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { increment } = tweetSlice.actions;

export default tweetSlice.reducer;
