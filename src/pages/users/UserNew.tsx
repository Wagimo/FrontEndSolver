import { BiUpload } from "react-icons/bi";
import HeaderPage from "../../components/HeaderPage";
import Box from "@mui/material/Box";

type Props = {};

const UserNew = (props: Props) => {
  return (
    <Box className="md:mt-24 mt-24 p-2 ml-10 mr-10 md:p-10 mb-5 bg-white rounded-3xl">
      <HeaderPage
        category="Page"
        title="New User"
        textButton=""
        eventHandler={() => {}}
        showButton={false}
      />

      <div className="flex justify-between">
        <div className=" px-10 py-5 w-full  ">
          <form className="flex justify-between">
            <div className=" w-3/4 p-2">
              <div className="mb-6">
                <label
                  htmlFor="txtFirstName"
                  className="block font-bold uppercase"
                >
                  First Name
                </label>
                <input
                  id="txtFirstName"
                  type="text"
                  placeholder="Input First Name"
                  className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-gray-300"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="txtLastName"
                  className="block font-bold uppercase"
                >
                  Last Name
                </label>
                <input
                  id="txtLastName"
                  type="text"
                  placeholder="Input Last Name"
                  className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-gray-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="txtEmail" className="block font-bold uppercase">
                  Email
                </label>
                <input
                  id="txtEmail"
                  type="email"
                  placeholder="Email"
                  className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-gray-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="txtDate" className="block font-bold uppercase">
                  Date of Birth
                </label>
                <input
                  id="txtDate"
                  type="date"
                  placeholder="Date of Birth"
                  className="text-gray-500 border-2 p-2 rounded-md mt-2 md:w-1/3 w-full placeholder-gray-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="txtNotes" className="block font-bold uppercase">
                  Notes
                </label>
                <textarea
                  id="txtNotes"
                  placeholder="Notes"
                  className="text-gray-500 border-2 p-2 rounded-md mt-2 w-full placeholder-gray-300"
                />
              </div>
              <input
                type="submit"
                className="bg-blue-500 w-full p-3 rounded-md text-white font-bold uppercase"
                value="Update User"
              />
            </div>
            <div className=" w-1/4">
              <div className="flex flex-col items-center gap-5  mt-10">
                <img
                  className="w-16 h-16 md:w-48 md:h-48  rounded-full"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <BiUpload className="text-4xl" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default UserNew;
