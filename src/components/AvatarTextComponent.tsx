import { themeColors } from "@/data/dummy";

interface Props {
  name: string;
}
const AvatarTextComponent = ({ name }: Props) => {
  let inicials = "NN";

  if (name) {
    if (name.includes(" ")) {
      const nameArray = name.split(" ");
      const firstName = nameArray[0];
      const lastName = nameArray[nameArray.length - 1];
      inicials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    } else {
      inicials = `${name.charAt(0)}${name.charAt(1)}`;
    }
  }
  const colorFondo =
    themeColors[Math.floor(Math.random() * themeColors.length)];

  return (
    <div
      style={{ backgroundColor: colorFondo.color }}
      className="uppercase xs:mr-10 mr-2 flex items-center
     justify-center xs:w-12 sm:w-12 md:w-12 lg:w-12   w-32 h-12 font-bold rounded-lg select-none text-gray-100 dark:text-gray-700"
    >
      {inicials}
    </div>
  );
};

export default AvatarTextComponent;
