import { ItemMenu } from "./ItemMenu";

export interface InitialState {
  chat: Boolean;
  cart: Boolean;
  userProfile: Boolean;
  notification: Boolean;
  menuOptions: ItemMenu[];
  voucher: Boolean;
  voucherField: Boolean;
}
