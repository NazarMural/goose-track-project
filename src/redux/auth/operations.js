import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signUpOperation = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => { })
const signInOperation = createAsyncThunk('auth/signin', async (credentials, thunkAPI) => { })
const logOutOperation = createAsyncThunk('auth/logout', async (_, thunkAPI) => { })
const refreshUserOperation = createAsyncThunk('auth/refresh', async (_, thunkAPI) => { })
const updateUserDataOperation = createAsyncThunk('auth/update', async (updateUserData, thunkAPI) => { })