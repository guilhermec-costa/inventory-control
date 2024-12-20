export interface HttpClient {
  host: string;
  get<T>(url: string): Promise<T>;
}