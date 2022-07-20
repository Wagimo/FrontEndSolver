import { createSlice } from "@reduxjs/toolkit";
import { VoucherInitialState } from "@/models";

export const voucherSlice = createSlice({
  name: "voucher",
  initialState: VoucherInitialState,
  reducers: {
    setVoucher: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload,
    }),
  },
});

export const { setVoucher } = voucherSlice.actions;

export default voucherSlice.reducer;
