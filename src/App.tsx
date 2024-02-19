import { Admin, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import products from "./products";
import categories from "./categories";
import customers from "./customers";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
    <Resource name="customers" {...customers} />
  </Admin>
);
