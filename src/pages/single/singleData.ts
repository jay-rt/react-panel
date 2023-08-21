import { Props } from "./Single";

type UserInfoType = {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
};

type UserDataType = {
  name: string;
  visits: number;
  clicks: number;
};

type ProductInfoType = {
  productId: string;
  color: string;
  price: string;
  producer: string;
  export: string;
};

type ProductDataType = {
  name: string;
  visits: number;
  orders: number;
};

export const singleUser: Props<UserInfoType, UserDataType> = {
  id: 1,
  slug: "users",
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      id: 6,
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      id: 5,
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      id: 4,
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    { id: 3, text: "John Doe reviewed a product", time: "1 month ago" },
    {
      id: 2,
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      id: 1,
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};

export const singleProduct: Props<ProductInfoType, ProductDataType> = {
  id: 1,
  slug: "products",
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      id: 6,
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      id: 5,
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      id: 4,
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      id: 3,
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      id: 2,
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      id: 1,
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
