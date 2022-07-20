
export const CreatedVoucherAdapter = (voucher: any) => ({
    id:voucher.id,
    status:voucher.status,
    client:voucher.client,
    description:voucher.description,
    ammount: voucher.ammount,
    createdDate:voucher.createdDate,
});