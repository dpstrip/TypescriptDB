export interface Record {
  id: string;
  [key: string]: any; // Allows for additional properties
}

export interface Connection {
  query: (sql: string, params?: any[]) => Promise<any>;
  close: () => Promise<void>;
}