import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface DataType {
  RevDate: string;
  memo: string;
  name: string;
  patDob: string;
  phone: string;
  userid: number;
}
export interface ImgType {
  adid?: number;
  imageLink: string;
  title: string;
}
export interface StateType {
  [users: string]: DataType[];
}
export interface ImgTypes {
  [ads: string]: ImgType[];
}
export const getUsers = createAsyncThunk(
  "getUserList",
  async (date: string) => {
    return await fetch(`http://34.22.82.239:8080/getUserList?date=${date}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
export const getImgs = createAsyncThunk("getImgsList", async () => {
  return await fetch(`http://34.22.82.239:8080/getAdList`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export interface UserState {
  users?: StateType | null;
  loading: boolean;
  imgs?: ImgTypes | null;
  error: string;
}

export const initialState: UserState = {
  users: null,
  imgs: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = true;
        state.error = "";
      })
      .addCase(getImgs.fulfilled, (state, action) => {
        state.imgs = action.payload;
        state.loading = true;
        state.error = "";
      }),
});

export default userSlice.reducer;
