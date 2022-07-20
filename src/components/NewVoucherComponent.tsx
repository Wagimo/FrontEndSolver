import { useThemeContext } from "../context/themeContext/ThemeProvider";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";

type Props = {};

const NewVoucherComponent = (props: Props) => {
  const { currentColor } = useThemeContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 z-10 ">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Nuevo recibo de caja</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            iconClicked="voucher"
            isOpen={false}
          />
        </div>

        <div className="mt-5 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <input
                className="bg-white dark:bg-gray-100 dark:text-gray-500 border-2 border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Nombre del cliente"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 dark:text-yellow-500">
                  Campo requerido!
                </span>
              )}
            </div>

            <div className="mb-5">
              <textarea
                placeholder="Observaciones"
                className="bg-white dark:bg-gray-100 dark:text-gray-500 border-2 border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-sm text-red-500 dark:text-yellow-500">
                  Campo requerido!
                </span>
              )}
            </div>

            <input
              style={{ background: currentColor }}
              className="mb-5 text-white uppercase dark:bg-gray-100  dark:text-gray-600 border-2 border-gray-200 dark:border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="submit"
              value={"Crear recibo de caja"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewVoucherComponent;
