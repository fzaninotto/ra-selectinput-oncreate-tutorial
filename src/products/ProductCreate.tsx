import {
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
  useCreate,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="reference" />
      <CategoryInput />
      <TextInput source="thumbnail" fullWidth />
      <NumberInput source="price" />
      <TextInput source="description" fullWidth multiline />
      <NumberInput source="width" />
      <NumberInput source="height" />
      <NumberInput source="stock" />
    </SimpleForm>
  </Create>
);

const CategoryInput = () => {
  const [create] = useCreate();
  return (
    <ReferenceInput
      source="category_id"
      reference="categories"
      sort={{ field: "name", order: "ASC" }}
    >
      <SelectInput
        onCreate={async () => {
          const newCategoryName = prompt("Enter a name for the new category");
          if (newCategoryName) {
            const newCategory = await create(
              "categories",
              { data: { name: newCategoryName } },
              { returnPromise: true }
            );
            return newCategory;
          }
        }}
      />
    </ReferenceInput>
  );
};
