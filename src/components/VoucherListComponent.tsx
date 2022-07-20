import { IoChevronForward } from "react-icons/io5";
import VoucherStatus from "./VoucherStatus";
import { Link } from "react-router-dom";
import AvatarTextComponent from "./AvatarTextComponent";

interface Props {
  voucher: any;
}

const VoucherListComponent = ({ voucher }: Props) => {
  return (
    <div className="w-full bg-white dark:bg-gray-700 rounded-md shadow-lg mb-0.5  ">
      <ul className="divide-y-1 divide-gray-500">
        <li className="flex items-center justify-between px-3 py-5 hover:bg-gray-50 hover:rounded-md dark:hover:bg-gray-600 ">
          <Link to={`/voucher/${voucher.id}`} className="flex flex-grow">
            <div className="flex items-center cursor-pointer">
              {<AvatarTextComponent name={voucher.client} />}
              <div className="flex flex-col">
                <span className="dark:text-gray-400 font-bold">
                  {voucher.client}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-200 ">
                  {voucher.description}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex xs:flex-row flex-col items-center ">
            <span className="  text-white dark:bg-transparent dark:text-black xs:mr-10 mb-1">
              <VoucherStatus status={voucher.status} />
            </span>

            <span className="bg-sky-600 rounded-md px-2 py-2 dark:bg-gray-900 dark:text-gray-200">
              <IoChevronForward />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VoucherListComponent;
