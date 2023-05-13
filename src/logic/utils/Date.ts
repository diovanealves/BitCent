export default class DateFormat {
  static yymmdd = {
    format(dt: Date): string {
      const day = dt.getDate().toString().padStart(2, "0");
      const month = (dt.getMonth() + 1).toString().padStart(2, "0");
      return `${dt.getFullYear()}-${month}-${day}`;
    },
  };

  static ddmmyy = {
    format(dt: Date): string {
      const day = dt.getDate().toString().padStart(2, "0");
      const month = (dt.getMonth() + 1).toString().padStart(2, "0");
      return `${day}/${month}/${dt.getFullYear()}`;
    },
  };
}
