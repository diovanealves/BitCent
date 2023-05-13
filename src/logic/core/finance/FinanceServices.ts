import Collection from "@/logic/firebase/database/Collection";
import User from "../user/User";
import Transaction from "./Transaction";

export default class FinanceServices {
  private _collection = new Collection();

  async save(transaction: Transaction, user: User) {
    return this._collection.save(
      `finance/${user.email}/transactions`,
      transaction
    );
  }

  async consult(user: User) {
    return this._collection.consult(
      `finance/${user.email}/transactions`,
      "date",
      "desc"
    );
  }

  async delete(transaction: Transaction, user: User) {
    return this._collection.delete(
      `finance/${user.email}/transactions`,
      transaction.id
    );
  }
}
