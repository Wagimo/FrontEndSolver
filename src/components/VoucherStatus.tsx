import { IoIosRadioButtonOn } from "react-icons/io";

interface Props {
  status: string;
}

const VoucherStatus = ({ status }: Props) => {
  let color;
  if (status == "Borrador") {
    color = "gray";
  } else if (status == "Pendiente") {
    color = "orange";
  } else if (status == "Anulado") {
    color = "red";
  } else {
    color = "green";
  }

  return <IoIosRadioButtonOn color={color} title={status} size={20} />;
};

export default VoucherStatus;
