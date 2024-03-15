import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../Redux/CounterSlice';

const  store = configureStore({

reducer: {
    counter:counterSlice,
}

});

export default store