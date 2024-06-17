export enum LOCAL_STORAGE_KEYS_FOR_TABLE {
  customers = "customer_table",
  utilities = "utilities_table",
  accessories = "accessories_table",
  devices = "devices_table",
}

export function setItem(key: LOCAL_STORAGE_KEYS_FOR_TABLE, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key): string[] {
  const columns = JSON.parse(localStorage.getItem(key));

  if (columns) {
    return columns;
  }
}
