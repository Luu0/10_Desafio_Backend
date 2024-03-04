import { faker } from "@faker-js/faker";

export const generateProduct = () => {
  // let randCode = parseInt(faker.random.numeric(1));
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    code: faker.string.numeric(),
    stock: faker.string.numeric(1),
  }
};