export default class Money {
  private static _language = "pt-BR";
  private static _currency = "BRL";

  static format(num: number): string {
    return (num ?? 0).toLocaleString(Money._language, {
      style: "currency",
      currency: Money._currency,
    });
  }
}
