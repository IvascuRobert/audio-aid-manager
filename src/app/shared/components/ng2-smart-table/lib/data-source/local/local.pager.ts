export class LocalPager {
  static paginate(data: any[], page: number, perPage: number): any[] {
    return data.slice(perPage * (page - 1), perPage * page);
  }
}
