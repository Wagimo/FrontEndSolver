import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BiCurrentLocation, BiUpload } from "react-icons/bi";
import HeaderPage from "../../components/HeaderPage";
import Box from "@mui/material/Box";
import { Button } from "@/components";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineSave } from "react-icons/md";

import { useThemeContext } from "@/context/themeContext/ThemeProvider";

type Props = {};

const UserEdit = (props: Props) => {
  const { currentColor } = useThemeContext();

  return (
    <Box className="md:mt-20 mt-20 p-2 ml-2 mr-2 md:p-10 mb-5 rounded ">
      <div className="flex justify-between  ">
        <div className="lg:px-10 py-5 invisible w-0 xl:visible lg:w-1/5 bg-gray-100">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-14 h-14 rounded-full mr-4"
            />
            <div className="flex  flex-col">
              <span className="font-semibold">Anna Becker</span>
              <span className="text-gray-600 from-neutral-100">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="mt-5 p-5">
            <span className="text-2xl text-gray-500 whitespace-nowrap">
              Account Details
            </span>
            <div className="flex items-center my-5 text-gray-500">
              <AiOutlineUser className="mr-3" />
              <span className="whitespace-nowrap text-gray-700">
                annabeck99
              </span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <AiOutlineCalendar className="mr-3" />
              <span className="whitespace-nowrap text-gray-700">
                10.12.1999
              </span>
            </div>
            <span className="text-2xl text-gray-500 whitespace-nowrap">
              Contact Details
            </span>
            <div className="flex items-center my-5 text-gray-500">
              <BsPhone className="mr-3" />
              <span className="whitespace-nowrap text-gray-700">
                +1 123 456 67
              </span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <AiOutlineMail className="mr-3" />
              <span className="whitespace-nowrap text-gray-700">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <BiCurrentLocation className="mr-3" />
              <span className="whitespace-nowrap text-gray-700">
                New York | USA
              </span>
            </div>
          </div>
        </div>
        <div className="py-5 xl:w-4/5 lg:pl-10 lg:pr-10  w-full bg-gray-200 ">
          <HeaderPage
            category=""
            title="Personal Information"
            textButton="New"
            eventHandler={() => {}}
            showButton={false}
          />
          <form className="flex justify-between pt-2">
            <div className=" w-full p-2  ">
              <div className="md:flex flex-row justify-between ">
                <div className="mb-6 flex-1 mx-1 ">
                  <label htmlFor="txtFirstName" className="block font-normal">
                    First Name
                  </label>
                  <input
                    id="txtFirstName"
                    type="text"
                    placeholder="Input First Name"
                    className="text-gray-500 border p-2 rounded-md mt-2 w-full placeholder-gray-300 focus:outline-none focus:border-gray-100 focus:ring-1 "
                  />
                </div>

                <div className="mb-6 flex-1 mx-1">
                  <label htmlFor="txtLastName" className="block font-normal">
                    Last Name
                  </label>
                  <input
                    id="txtLastName"
                    type="text"
                    placeholder="Input Last Name"
                    className="text-gray-500 border p-2 rounded-md mt-2 w-full placeholder-gray-300 focus:outline-none focus:border-gray-100 focus:ring-1 "
                  />
                </div>
              </div>
              <div className="md:flex flex-row justify-between">
                <div className="mb-6 flex-1 mx-1">
                  <label htmlFor="txtEmail" className="block font-normal">
                    Email
                  </label>
                  <input
                    id="txtEmail"
                    type="email"
                    placeholder="Email"
                    className="text-gray-500 border p-2 rounded-md mt-2 w-full placeholder-gray-300 focus:outline-none focus:border-gray-100 focus:ring-1 "
                  />
                </div>

                <div className="mb-6 flex-1 mx-1">
                  <label htmlFor="txtDate" className="block font-normal">
                    Date of Birth
                  </label>
                  <input
                    id="txtDate"
                    type="date"
                    placeholder="Date of Birth"
                    className="text-gray-500 border p-2 rounded-md mt-2 w-full placeholder-gray-300 focus:outline-none focus:border-gray-100 focus:ring-1 "
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="txtNotes" className="block font-normal">
                  Notes
                </label>
                <textarea
                  id="txtNotes"
                  placeholder="Notes"
                  rows={4}
                  className="text-gray-500 border p-2 rounded-md mt-2 w-full placeholder-gray-300 focus:outline-none focus:border-gray-100 focus:ring-1"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  icon={<MdOutlineSave />}
                  color="#fff"
                  bgHoverColor="bg-gray-500"
                  size="xl"
                  borderRadius="5%"
                  iconClicked=""
                  text="Save"
                  bgColor={currentColor}
                  width="w-32"
                  marginlr="ml-10"
                />

                <Button
                  icon={<MdOutlineCancel />}
                  color="#fff"
                  bgHoverColor="bg-gray-500"
                  size="xl"
                  borderRadius="5%"
                  iconClicked=""
                  text="Cancel"
                  bgColor={"#A3A3A3"}
                  width="w-32"
                  marginlr="ml-10"
                />
              </div>
            </div>
            {/* <div className="md:w-1/4 w-0 invisible md:visible">
              <div className="flex flex-col items-center gap-5  mt-10">
                <img
                  className="w-32 h-32 md:w-28 md:h-28 p-2 xl:h-48 xl:w-48  rounded-full"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <BiUpload className="text-4xl" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </Box>
  );
};

export default UserEdit;
