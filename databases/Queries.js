import Schema, { AdminSchema, DebtorSchema } from "./Schema";
import Realm from "realm";
import {DEBTORS_SCHEMA} from "../AppConfig";

function addDebtor(debtor) {
  return new Promise((resolve, reject) => {
    Realm.open( [AdminSchema, DebtorSchema]).then(realm => {
      realm.write(() => {
        console.log("real.write")
        realm.create(DEBTORS_SCHEMA, {name: debtor.name, village: debtor.village, id: debtor.id});
        resolve(debtor);
      })
    }).catch((error) => reject(error));
  })
}

export {addDebtor};