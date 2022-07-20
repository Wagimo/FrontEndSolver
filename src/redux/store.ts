import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';
import {voucherSlice} from './states/voucher';


export interface AppStore{
  user:any;
  voucher:any;
}

export default configureStore<AppStore> ({
    reducer:{
      user: userSlice.reducer,
      voucher:voucherSlice.reducer
    }
});
 