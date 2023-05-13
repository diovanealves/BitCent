import { v4 as uuidV4 } from "uuid";

export default class Id {
  static new() {
    return uuidV4();
  }
}
