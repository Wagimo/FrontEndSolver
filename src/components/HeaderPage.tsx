import { FiPlus } from "react-icons/fi";

type Props = {
  category: string;
  title: string;
  textButton: string;
  eventHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showButton: boolean;
};

const HeaderPage = ({
  category,
  title,
  textButton,
  eventHandler,
  showButton = false,
}: Props) => {
  return (
    <div className=" flex justify-between align-middle shadow-sm p-2">
      <div>
        <p className="text-lg text-gray-400">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
      <div>
        {showButton && (
          <button
            type="button"
            onClick={eventHandler}
            className="text-2xl text-white bg-red-500 p-3 rounded-md flex justify-around items-center "
          >
            <FiPlus />
            <p className={textButton == "" ? "" : "ml-2"}>{textButton}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderPage;
