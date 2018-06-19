import {ADMIN_SCHEMA, DEBTORS_SCHEMA} from "../AppConfig";

export const AdminSchema = {
  name: ADMIN_SCHEMA,
  properties: {
    name: 'string',
    primaryKey: 'id',
    properties: {
      password: 'string',
      deb_tors: {type: 'list', objectType: DEBTORS_SCHEMA}
    }
  }
};
export const DebtorSchema = {
  name: DEBTORS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    village: 'string',
    name: {type: 'string', optional: true},
  }
};

const Schema = {
  // path: './realm',
  schema: [AdminSchema, DebtorSchema],
  // schemaVersion: '0'
};


export default Schema;