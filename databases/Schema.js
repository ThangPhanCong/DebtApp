import { ADMIN_SCHEMA, DEBTORS_SCHEMA, VILLAGE_SCHEMA } from "../AppConfig";
import RNFS from 'react-native-fs';

export const AdminSchema = {
  name: ADMIN_SCHEMA,
  properties: {
    id: 'string',
    name: 'string',
    password: 'string',
    villages: { type: 'list', objectType: VILLAGE_SCHEMA }
  }
};
export const VillageSchema = {
  name: VILLAGE_SCHEMA,
  properties: {
    id: 'string',
    name: 'string',
    debtors: { type: 'list', objectType: DEBTORS_SCHEMA }
  }
};

export const DebtorSchema = {
  name: DEBTORS_SCHEMA,
  properties: {
    id: 'string',
    name: 'string',
  }
};

const Schema = {
  path: RNFS.DocumentDirectoryPath  + './data/demo.realm',
  schema: [AdminSchema, DebtorSchema, VillageSchema],
  schemaVersion: '0'
};


export default Schema;