export class PaginationDto<T> {
  page: number;
  limit: number;
  totalItems: number;
  items: T[];

  constructor(page: number, limit: number, totalItems: number, items: T[]) {
    this.page = page;
    this.limit = limit;
    this.totalItems = totalItems;
    this.items = items;
  }
}
