import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
    name:"group",
    initialState:{
        groupArr: [],
        totalAmount: 0
    },
    reducers:{
        addHelper: (state, action)=>{
            state.groupArr.push(action.payload);
            state.totalAmount = state.totalAmount + action.payload.price;
        },
        removeHelper: (state, action)=>{

            console.log("Array before removal =", state.groupArr);

            // state.groupArr = state.groupArr.filter((arrItem)=>(
            //     arrItem.id != action.payload.id
            // ))

            const itemIndex = state.groupArr.findIndex((item)=>item.id===action.payload)        // -1 is returned when findIndex doesnt find the item

            if(itemIndex !== -1)                        
            {
                state.totalAmount -= state.groupArr[itemIndex].price;
                state.groupArr.splice(itemIndex, 1);
            }

            console.log("Array length after removal =", state.groupArr.length);

        }
    }
})

export const {addHelper, removeHelper} = groupSlice.actions;
export default groupSlice.reducer;