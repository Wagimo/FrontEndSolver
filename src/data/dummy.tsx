import { ItemMenu } from "@/models";

import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiCreditCard,
} from "react-icons/fi";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from "react-icons/ai";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";

import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const recibos = [
  {
    id: 1,
    status: "Borrador",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Solver de Colombia",
    ammount: 5000000,
    createdDate: "06-01-2022",
  },
  {
    id: 2,
    status: "Pendiente",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "3M Colombia",
    ammount: 15000000,
    createdDate: "06-06-2022",
  },
  {
    id: 3,
    status: "Aprobado",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Bayer Colombia",
    ammount: 10000000,
    createdDate: "06-09-2022",
  },
  {
    id: 4,
    status: "Borrador",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Colgate",
    ammount: 25000000,
    createdDate: "06-10-2022",
  },
  {
    id: 5,
    status: "Pendiente",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "J&J",
    ammount: 12000000,
    createdDate: "06-11-2022",
  },
  {
    id: 6,
    status: "Aprobado",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Sika",
    ammount: 8000000,
    createdDate: "06-14-2022",
  },
  {
    id: 7,
    status: "Borrador",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Solver de Colombia",
    ammount: 11000000,
    createdDate: "06-13-2022",
  },
  {
    id: 8,
    status: "Pendiente",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Specialized",
    ammount: 16000000,
    createdDate: "06-14-2022",
  },
  {
    id: 9,
    status: "Aprobado",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Trek",
    ammount: 5000000,
    createdDate: "06-07-2022",
  },
  {
    id: 10,
    status: "Anulado",
    description: "Recibo de caja asociado al cierre de mes de Junio",
    client: "Colpatria",
    ammount: 25000000,
    createdDate: "06-16-2022",
  },
];

export const linksVoucher = [
  {
    title: "Recibo de Caja",
    links: [
      {
        name: "Datos Generales",
        url: "main",
        icon: <FiEdit />,
      },
      {
        name: "Previsualizar",
        url: "preview",
        icon: <AiOutlineCalendar />,
      },

      {
        name: "Salir",
        url: "dashboard",
        icon: <AiOutlineStock />,
      },
    ],
  },
];

export const linksDashBoard = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        url: "dashboard",
        icon: <FiShoppingBag />,
      },
      {
        name: "Historicos de Caja",
        url: "voucher",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Facturas",
        url: "voucher",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Parámetros",
        url: "voucher",
        icon: <AiOutlineShoppingCart />,
      },
    ],
  },
] as ItemMenu[];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#E0301E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#DC3856",
    name: "orange-theme",
  },
];

export const notificationsData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
    dotColor: "",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
    dotColor: "",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
    dotColor: "",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
    dotColor: "",
  },
];

export const usersData = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
