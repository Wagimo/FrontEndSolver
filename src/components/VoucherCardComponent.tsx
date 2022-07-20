import { IVoucherSummary } from "@/models";
import { FormatDateMMMD, FormatearCantidad } from "@/utilities";
import VoucherStatus from "@/components/VoucherStatus";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
  voucher: IVoucherSummary;
}

const VoucherCardComponent = ({ voucher }: Props) => {
  const { currentColor } = useThemeContext();

  return (
    <div className="p-6 max-w-sm xs:w-xs bg-white  rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-500 mb-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 flex justify-between align-middle">
          {voucher.client}
          <VoucherStatus status={voucher.status} />
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {voucher.description}
      </p>
      <div className="flex items-center mt-2.5 mb-5 justify-between flex-col xs:flex-row">
        <span className="font-bold uppercase dark:text-white">
          {FormatDateMMMD(voucher.createdDate!)}
        </span>

        <span
          className="bg-blue-100
         text-blue-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
        >
          {FormatearCantidad(voucher.ammount!)}
        </span>
      </div>
      <Link
        style={{ backgroundColor: currentColor }}
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-md   focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        to={`/voucher/${voucher.id}`}
      >
        Ver Detalles {""}
        <IoChevronForward fontWeight={700} />
      </Link>
    </div>
  );
};

export default VoucherCardComponent;
