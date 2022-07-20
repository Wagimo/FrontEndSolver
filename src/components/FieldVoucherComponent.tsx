import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setVoucher } from "@/redux/states/voucher";

type Props = {};

const FieldVoucherComponent = (props: Props) => {
  const { currentColor, handleClick } = useThemeContext();
  const dispatch = useDispatch();

  const voucherState = useSelector((store: AppStore) => store.voucher.selected);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const field = {
      ...voucherState,
      account: data.account,
      accountType: data.accountType,
    };

    if (data.accountType === "debito") {
      field.debito = data.ammount;
    } else {
      field.credito = data.ammount;
    }
    field.key = field.keySelected;

    dispatch(setVoucher(field));
    handleClick("voucherField", false);
  };

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 z-10 ">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {voucherState.credito > 0 || voucherState.debito > 0
              ? "Editar Cuenta"
              : "Adicionar Valor"}
          </p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            iconClicked="voucherField"
            isOpen={false}
          />
        </div>

        <div className="mt-5 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="accountype" className="text-gray-400 uppercase">
                Seleccione Tipo de Cuenta
              </label>
              <select
                id="accountype"
                defaultValue={voucherState.accountType}
                className="block  mt-2 w-full bg-white border border-gray-200  px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
                {...register("accountType", { required: true })}
              >
                <option value="">Seleccione</option>
                <option value="credito">Crédito</option>
                <option value="debito">Débito</option>
              </select>
              {errors.accountType && (
                <span className="text-sm text-red-500 dark:text-yellow-500">
                  Campo requerido!
                </span>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="account" className="text-gray-400 uppercase">
                Ingrese el número de cuenta
              </label>
              <input
                id="account"
                type="number"
                defaultValue={voucherState.account}
                className="bg-white  mt-2 dark:bg-gray-100 dark:text-gray-500 border border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full  leading-normal"
                placeholder="Ingrese el Número de Cuenta"
                {...register("account", { required: true })}
              />
              {errors.account && (
                <span className="text-sm text-red-500 dark:text-yellow-500">
                  Campo requerido!
                </span>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="ammount" className="text-gray-400 uppercase">
                Ingrese el monto
              </label>
              <input
                id="ammount"
                defaultValue={
                  voucherState.credito
                    ? voucherState.credito
                    : voucherState.debito
                }
                type="number"
                className="bg-white mt-2 dark:bg-gray-100 dark:text-gray-500 border border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Ingrese el Monto"
                {...register("ammount", { required: true })}
              />
              {errors.ammount && (
                <span className="text-sm text-red-500 dark:text-yellow-500">
                  Campo requerido!
                </span>
              )}
            </div>

            <input
              style={{ background: currentColor }}
              className="mb-5 text-white uppercase dark:bg-gray-100  dark:text-gray-100 border-2 border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="submit"
              value={`Add ${voucherState.text}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FieldVoucherComponent;
