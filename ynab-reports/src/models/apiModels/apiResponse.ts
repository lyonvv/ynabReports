export interface IErrorDetail {
  id: string;
  name: string;
  detail: string;
}

export interface IApiResponse<T> {
  data: T;
  error: IErrorDetail;
}
