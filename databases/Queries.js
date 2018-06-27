import Schema from "./Schema";
import Realm from "realm";
import { ADMIN_SCHEMA, DEBTORS_SCHEMA } from "../AppConfig";

function addDebtor(debtor) {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: Schema.schema }).then(realm => {
      realm.write(() => {
        const newDebtor = realm.create(DEBTORS_SCHEMA, { name: debtor.name, village: debtor.village, id: debtor.id });

        console.log('newDebtor', newDebtor);
        resolve(debtor);
      })

    }).catch((error) => reject(error));
  })
}

function newAdmin(admin) {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: Schema.schema }).then(realm => {
      realm.write(() => {
        const newAdmin = realm.create(ADMIN_SCHEMA, {
          name: admin.userName,
          password: admin.password,
          id: admin.id
        });
        console.log('newDebtor', newAdmin)
        resolve(admin);
      })

    })
      .catch(err => reject(err))
  })
}

function  getListAdmin(table) {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: Schema.schema }).then(realm => {
      const data = realm.objects(table);
      resolve(data);
    }).catch(err => reject(err))
  })

}

export { addDebtor, newAdmin, getListAdmin };