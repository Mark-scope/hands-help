import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "light", //get value from localStorage, if it doesn't exists set light as default value

};

const themeSlice = createSlice({ //action to set theme
    name: "theme",
    initialState,
    reducers: {
        setTheme( state, action ){
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
        },
    },
});



export default themeSlice.reducer; //Export reducer

export function SetTheme(value){
    return (dispatch) => {
        dispatch(themeSlice.actions.setTheme(value))
    };
};