export enum LOCAL_STORAGE_KEYS_FOR_TABLE {
  customers = 'customer_table',
  utilities = 'utilities_table',
  accessories = 'accessories_table',
  devices = 'devices_table',
}

export function setItem(key: LOCAL_STORAGE_KEYS_FOR_TABLE, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key: any): string[] {
  const value = localStorage.getItem(key);
  const columns = value ? JSON.parse(value) : [];

  return columns;
}
