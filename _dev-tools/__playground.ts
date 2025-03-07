// const thing = {};
// const printThing = thing && 'no-id';
// console.log(printThing);

// const a = [1, 2, 3, 4];
// const b = [1, 2];

// const removedItems = a.filter((x) => !b.includes(x));

// console.log(removedItems);

// import { sort } from 'fast-sort';

// const times = ['10:30', '11:00', '09:45', '15:20', '08:00'];
// sort(times).asc();

// import { nextDay, startOfToday } from 'date-fns';

// const now = new Date();
// console.log(getDay(new Date('2024-04-23T20:00:00.000Z')));
// console.log(nextDay(now, getDay(new Date('2024-04-23T20:00:00.000Z')) as Day));
// console.log(nextDay(now, 0 as Day));
// console.log(new Date(2024, 3, 30));
// console.log(nextDay(startOfToday(), 1));

// console.log(startOfToday());

try {
  const scheduledProductIds = ['1', '2', '3'];
  const shelfProductIds = Object.keys({});
  const productsToAdd = scheduledProductIds.filter((id) => !shelfProductIds.includes(id));
  console.log(productsToAdd);
  // productsToAdd.forEach((id) => {
  //   const product = products$.byId[id].peek();
  //   if (product) {
  //     console.log('adding product', product.name);
  //     // shelf$.addOrReplaceProduct(product);
  //   }
  // });
  // localSettings$.didSyncScheduledProductsToShelf.set(true);
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('Error syncing scheduled products to shelf:', error);
}
