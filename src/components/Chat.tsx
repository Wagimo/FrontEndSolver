import { useThemeContext } from "../context/themeContext/ThemeProvider";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { chatData } from "../data/dummy";

type Props = {};

const Chat = (props: Props) => {
  const { currentColor } = useThemeContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 z-10">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Messages</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            iconClicked="chat"
            isOpen={false}
          />
        </div>

        <div className="mt-5 ">
          {chatData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
            >
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10"
                  src={item.image}
                  alt={item.message}
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentColor}
              text="See all messages"
              borderRadius="10px"
              width="full"
              iconClicked="chat"
              isOpen={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
