import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoTrendingDownSharp } from "react-icons/io5";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import { GetById } from "@/services/VouchersServices";
import { IVoucherSummary } from "@/models";
import AvatarTextComponent from "@/components/AvatarTextComponent";
import FieldVoucherComponent from "@/components/FieldVoucherComponent";

const Voucher = () => {
  let params = useParams();
  let { id } = params;
  const { activeMenu, themeState } = useThemeContext();
  const [voucher, setVoucher] = useState<IVoucherSummary>();

  useEffect(() => {
    if (!id) return;
    const data = GetById(parseInt(id));
    setVoucher(data);
  }, []);

  return (
    <div className="w-full mt-16">
      <nav className="bg-gray-50 border-gray-200 mx-1 sm:px-2 py-2.5  dark:bg-gray-700  ">
        <div
          className={
            activeMenu
              ? " flex flex-wrap justify-between  navbar w-full z-10 "
              : " flex flex-wrap justify-between  md:w-[100%] w-full  navbar  z-10 "
          }
        >
          <div className="flex items-center cursor-pointer">
            {voucher && (
              <>
                <AvatarTextComponent name={voucher.client} />
                <div className="flex flex-col">
                  <span className="dark:text-gray-400 font-bold">
                    {voucher.client}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-200 ">
                    {voucher.description}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="fixed top-12 xs:top-0 overflow-x-auto xs:relative shadow-md sm:rounded-lg rounded flex xs:flex-row flex-col  dark:bg-slate-600 xs:w-full w-[98%] md:w-auto md:mt-0 mt-2">
            <div className="flex flex-col   text-center  px-5 py-2 dark:text-gray-100 text-black w-full">
              <div className="font-roboto border-b border-gray-100">Débito</div>
              <div className="flex md:justify-between justify-end items-center">
                <IoTrendingUpOutline size={30} color="#FC4B6C" />{" "}
                <span className="ml-2">$10.174.500.00</span>
              </div>
            </div>
            <div className="flex flex-col  text-center  px-5 py-2 dark:text-gray-100  text-black  w-full">
              <div className="font-roboto border-b border-gray-100 ">
                Crédito
              </div>
              <div className="flex md:justify-between justify-end items-end w-full">
                <IoTrendingDownSharp size={30} color="#1E88E5" />{" "}
                <span className="ml-2">$10.174.500.00</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {themeState.voucherField && <FieldVoucherComponent />}
      <Outlet />
    </div>
  );
};

export default Voucher;
