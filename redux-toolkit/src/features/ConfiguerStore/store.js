import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slicer/CounterSlicer";

export const store = configureStore({
    reducer: { counter : reducer }
})