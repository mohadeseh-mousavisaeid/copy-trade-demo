export interface IResponse<T> {
  data: T;
  isSuccess: boolean;
  errors: string[] | null;
}
