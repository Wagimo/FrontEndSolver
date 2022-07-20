import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setVoucher } from "@/redux/states/voucher";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";

const VoucherEdit = () => {
  const recibo = useSelector((store: AppStore) => store.voucher);

  const { handleClick } = useThemeContext();
  const dispatch = useDispatch();

  const linkHandleClick = (e: any) => {
    dispatch(setVoucher({ ...e, keySelected: e.key, key: "selected" }));
    handleClick("voucherField", true);
  };
  return (
    <div className="mx-2 my-1 min-w-min bg-white rounded-md shadow">
      <div className="p-2">
        <div className="md:flex flex-row justify-between md:items-center ">
          <div className="flex flex-row ">
            <div className="mr-5 flex md:flex-row flex-col justify-between">
              <label className="mr-5 whitespace-nowrap">
                Valor del Recibo:
              </label>
              <span className="font-bold">$10.174.500.00</span>
            </div>
            <div className="mr-5 flex md:flex-row flex-col  justify-between">
              <label className="mr-5 whitespace-nowrap">
                Valor en Dolares:
              </label>
              <span className="font-bold">$0.00</span>
            </div>
          </div>

          <div className=" rounded">
            <div className=" flex md:flex-row flex-col justify-between md:pt-0 pt-2 md:items-center">
              <label className="mr-5 whitespace-nowrap font-bold">
                Valor Inicial de la Factura:
              </label>
              <input
                defaultValue="$10.174.500.00"
                className="bg-white dark:bg-gray-50 rounded-md px-3 py-2 text-right text-lime-600 font-bold text-lg border border-gray-200"
                type={"text"}
              />
            </div>
          </div>
        </div>

        {/* header */}
        <div className="border border-gray-200 mt-3 p-5 shadow-sm">
          <div className="flex lg:flex-row flex-col">
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4">
                Banco Consignación:
              </label>
              <div className="font-bold ">
                <span>Colpatria</span>
              </div>
            </div>
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4 ">
                Tercero Banco:
              </label>
              <div className="font-bold ">
                <span>4301</span>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4">
                Cuenta Contable Banco:
              </label>
              <span className="font-bold">1499111100500902</span>
            </div>
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4">
                Cuenta Bancaria:
              </label>
              <span className="font-bold">4301-5552-66364-66 CTE</span>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4">
                Fecha Consignación:
              </label>
              <span className="font-bold">03-10-2021</span>
            </div>
            <div className="md:mr-5 flex lg:flex-row flex-col md:w-1/2 w-full">
              <label className="whitespace-nowrap md:w-3/5 lg:w-2/4">
                Lugar Consignacipn:
              </label>
              <span className="font-bold">
                Bogotá - Colpatria - Calle 55 # 45-285 of 201
              </span>
            </div>
          </div>
        </div>
        {/**BODY */}
        <div className="mt-3">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 text-sm">
            <thead className="text-black text-center">
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
              <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-2 ">ITEMS</th>
                <th className="p-2 ">ACCOINTING</th>
                <th className="p-2 bg-red-200">DEBITO</th>
                <th className="p-2 bg-sky-200">CREDITO</th>
                <th className="p-2 " style={{ width: 110 }}>
                  ACCIÓN
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.cpc.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate">
                  {recibo.cpc.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100 ">
                  ${recibo.cpc.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50 font-bold">
                  ${recibo.cpc.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.cpc)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.bancos.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate">
                  {recibo.bancos.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100 font-bold">
                  ${recibo.bancos.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.bancos.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.bancos)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.certs.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate h-9">
                  {recibo.certs.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.certs.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.certs.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.certs)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 ">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.reteiva.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate  h-9">
                  {recibo.reteiva.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.reteiva.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.reteiva.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.reteiva)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 ">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.reteica.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate  h-9">
                  {recibo.reteica.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.reteica.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.reteica.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.reteica)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 ">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase">
                  {recibo.retefuente.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate  h-9">
                  {recibo.retefuente.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.retefuente.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.retefuente.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.retefuente)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase truncate">
                  {recibo.dcp.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate  h-9">
                  {recibo.dcp.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.dcp.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.dcp.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.dcp)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-2 uppercase truncate">
                  {recibo.dcg.text}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate  h-9">
                  {recibo.dcg.account}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-pink-100">
                  ${recibo.dcg.debito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2 truncate text-right bg-sky-50">
                  ${recibo.dcg.credito}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-2  hover:font-medium cursor-pointer">
                  <a
                    href="#"
                    style={{ color: "#000", fontSize: 18 }}
                    onClick={() => linkHandleClick(recibo.dcg)}
                    className={`w-full hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
                  >
                    <IoAddSharp fontWeight={700} size={18} /> Agregar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VoucherEdit;
