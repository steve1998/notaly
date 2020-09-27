import ItemList from '../types/Items';

export function saveItemsToStorage(itemList: Array<ItemList>) {
  localStorage.setItem('items', JSON.stringify(itemList));
}

export function getItemsFromStorage() {
  const itemString = localStorage.getItem('items');

  if (typeof itemString === 'string') {
    const itemlist = JSON.parse(itemString);
    return itemlist;
  }

  return null;
}
