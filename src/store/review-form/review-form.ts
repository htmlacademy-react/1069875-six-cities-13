import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { ReviewFormT } from '../../types/state';
import { sendReviewAction } from '../api-action';
import { ReviewFormEmpty } from '../../const/others';

const initialState: ReviewFormT = {
  comment: ReviewFormEmpty.Comment,
  rating: ReviewFormEmpty.Rating,
  reviewError: false,
  isReviewSending: false,
};

export const reviewForm = createSlice({
  name: NameSpace.ReviewForm,
  initialState,
  reducers: {
    resetReviewData: (state) => {
      state.comment = ReviewFormEmpty.Comment;
      state.rating = ReviewFormEmpty.Rating;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSending = true;
        state.reviewError = false;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.isReviewSending = false;
        state.comment = ReviewFormEmpty.Comment;
        state.rating = ReviewFormEmpty.Rating;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSending = false;
        state.reviewError = true;
      });
  },
});

export const { resetReviewData, setComment, setRating } = reviewForm.actions;
