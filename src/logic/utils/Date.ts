export default class DateFormat {
  static ddmmyy = {
    format(dt: Date): string {
      const dia = dt.getDate().toString().padStart(2, "0");
      const mes = (dt.getMonth() + 1).toString().padStart(2, "0");
      return `${dia}/${mes}/${dt.getFullYear()}`;
    },
  };
}
