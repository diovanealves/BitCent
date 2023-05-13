import Id from "@/logic/core/comum/Id";
import { app } from "../config/app";
import {
  DocumentData,
  DocumentSnapshot,
  OrderByDirection,
  QueryConstraint,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

export default class Collection {
  async save(path: string, entity: any): Promise<any> {
    const db = getFirestore(app);
    const EndId = entity.id ?? Id.new();
    const docRef = doc(db, path, EndId);

    await setDoc(docRef, entity);
    return {
      ...entity,
      id: entity.id ?? EndId,
    };
  }

  async delete(path: string, id?: string): Promise<boolean> {
    if (!id) return false;
    const db = getFirestore(app);
    const docRef = doc(db, path, id);
    const itemInDataBase = await getDoc(docRef);
    if (!itemInDataBase.exists()) return false;
    await deleteDoc(docRef);
    return true;
  }

  async consult(
    path: string,
    sortBy?: string,
    direction?: OrderByDirection
  ): Promise<any[]> {
    const db = getFirestore(app);
    const collectionRef = collection(db, path);
    const filter: QueryConstraint[] = [];
    const sorting = sortBy ? [orderBy(sortBy, direction)] : [];
    const consult = query(collectionRef, ...filter, ...sorting);
    const result = await getDocs(consult);

    return result.docs.map(this._firebaseConverter) ?? [];
  }

  private _firebaseConverter(snapshot: DocumentSnapshot<DocumentData>) {
    const entity: any = { ...snapshot.data(), id: snapshot.id };
    if (!entity) return entity;
    return Object.keys(entity).reduce((obj: any, attributes: string) => {
      const value: any = entity[attributes];
      return { ...obj, [attributes]: value.toDate?.() ?? value };
    }, {});
  }
}
