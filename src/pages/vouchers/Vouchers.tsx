import { Button } from "@/components";

import VoucherListComponent from "@/components/VoucherListComponent";
import { recibos } from "@/data/dummy";
import { IoAddSharp } from "react-icons/io5";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import NewVoucherComponent from "@/components/NewVoucherComponent";

const Vouchers = () => {
  const { currentColor, themeState } = useThemeContext();

  return (
    <div className="h-screen w-full ">
      <div className="mx-3">
        <div className="mt-20 flex flex-row justify-between ">
          <div className=""></div>
          <div className="flex flex-end">
            <Button
              color="white"
              bgColor={currentColor}
              text="Nuevo Recibo"
              borderRadius="10px"
              width="full"
              iconClicked="voucher"
              bgHoverColor="bg-gray-200"
              isOpen={true}
              icon={<IoAddSharp fontWeight={700} size={25} />}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative md:w-1/3 w-full">
            <input
              type="text"
              id="floating_outlined"
              className=" block px-2.5 pb-2.5 pt-4 w-full text-sm
                       text-gray-900 bg-white rounded-lg border-1
                       border-gray-300 appearance-none dark:text-white
                       dark:border-gray-600 dark:focus:border-blue-500 
                       focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute 
              text-sm text-gray-500
              bg-white dark:text-gray-400 
              duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
              dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600
              peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Buscar
            </label>
          </div>
        </div>
        <div className="mt-10 mx-3 ">
          {recibos.map((voucher) => (
            <VoucherListComponent key={voucher.id} voucher={voucher} />
          ))}
        </div>
        {themeState.voucher && <NewVoucherComponent />}
      </div>
    </div>
  );
};

export default Vouchers;
