type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-2 flex justify-center font-semibold border-t-0">
      <p className="dark:text-gray-200 text-center text-sm p-2 text-gray-400 font-medium">
        © {new Date().getFullYear()} All rights reserved by Pwc.com
      </p>
    </div>
  );
};

export default Footer;
