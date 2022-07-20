
import { recibos } from "@/data/dummy";
import {CreatedVoucherAdapter}  from '@/adapters/voucher.adapter';
import { IVoucherSummary } from "@/models";

export const GetAll = () : IVoucherSummary[]  => {    
    return recibos.map(v => CreatedVoucherAdapter(v));    
}

export const GetById = (id: number) : IVoucherSummary=>{
    const recibo = recibos.find(x=> x.id ==  id);
    return CreatedVoucherAdapter(recibo);
}