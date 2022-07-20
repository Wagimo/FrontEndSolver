import { IVoucher, IField } from "./voucher.model";

const voucherItems = (text: string, key: string): IField => ({
  account: "",
  debito: 0.0,
  credito: 0.0,
  accountType: "",
  text,
  key,
  isVisible: true,
});

export const VoucherInitialState: IVoucher = {
  selected: voucherItems("Selected", "selected"),
  cheque: voucherItems("Cheque Número", "cheque"),
  cpc: voucherItems("Cuentas por Cobrar", "cpc"),
  bancos: voucherItems("Bancos", "bancos"),
  certs: voucherItems("CERT´S", "certs"),
  reteiva: voucherItems("RETE IVA", "reteiva"),
  reteica: voucherItems("RETE ICA", "reteica"),
  retefuente: voucherItems("RETE FUENTE", "retefuente"),
  dcp: voucherItems("Diferencia en Cambio Perdida", "dcp"),
  dcg: voucherItems("Diferencia en Cambio Ganancia", "dcg"),
};
