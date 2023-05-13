import Authentication from "../firebase/auth/auth";
import FinanceServices from "./finance/FinanceServices";

class Services {
  get finances() {
    return new FinanceServices();
  }
  get authentication() {
    return new Authentication();
  }
}

const services = new Services();
export default services;
