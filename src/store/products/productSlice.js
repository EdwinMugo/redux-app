import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import statusCode from '../../utilities/statusCode';



const productSlice = createSlice({
    name: 'products',
    // initial state will hold data in an object becuase API calls return other status such as errors
    initialState:{
       data: [],
       status: statusCode.IDLE
    },
    reducers: {
        // fetchProducts(state, action){
        //     
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status= statusCode.LOADING;

        })
        .addCase(getProducts.fulfilled, (state, action)=> {
            state.data = action.payload;
            state.status = statusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = statusCode.ERROR;
        })
    }
});

export const {fetchProducts} = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const res = await api.json();
    return res;
})

// export function getProducts(){
//     return async function getproductsThunk (dispatch, getState){
//         const api = await fetch("https://fakestoreapi.com/products");
//         const res = await api.json();
//         dispatch(fetchProducts(res));

//     }
// }