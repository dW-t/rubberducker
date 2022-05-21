import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment';

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
      ReplyCount: number;
      Reply:
        | [
            {
              UserName: string;
              UserIcon: string;
              Body: string;
            }
          ]
        | null;
    }
  ];
}

export interface TweetState {
  status: string;
  content: Tweet | null;
}

const initialState: TweetState = {
  status: 'pending',
  content: null,
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
    addTweet: (state, action: PayloadAction<string>) => {
      const now = moment().format('yyyy/MM/DD');
      const id = state.content !== null ? state.content.Contents.length + 1 : 0;
      state.content?.Contents.unshift({
        Id: id,
        MainContent: {
          Date: now,
          Body: action.payload,
          LikeCount: 0,
        },
        ReplyCount: 0,
        Reply: null,
      });
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
export const { addTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
