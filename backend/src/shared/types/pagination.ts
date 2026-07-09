export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  pages: number;
};

export type PaginationResponse<T> = {
  items: T[];
  meta: PaginationMeta;
};
