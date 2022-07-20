export interface IVoucherSummary {
  id: number;
  status: string;
  client: string;
  description: string;
  ammount?: number;
  createdDate?: string;
}

export interface IVoucher {
  selected: IField;
  cheque: IField;
  cpc: IField;
  bancos: IField;
  certs: IField;
  reteiva: IField;
  reteica: IField;
  retefuente: IField;
  dcp: IField;
  dcg: IField;
}

export interface IField {
  account: string;
  debito: Number;
  credito: Number;
  isVisible: Boolean;
  text: string;
  accountType: string;
  key: string;
  keySelected?: string;
}
