import { ADMIN_SCHEMA, DEBTORS_SCHEMA } from "../AppConfig";
import RNFS from 'react-native-fs';

export const AdminSchema = {
  name: ADMIN_SCHEMA,
  properties: {
    id: 'string',
    name: 'string',
    password: 'string',
    debtors: { type: 'list', objectType: DEBTORS_SCHEMA }
  }
};
export const DebtorSchema = {
  name: DEBTORS_SCHEMA,
  properties: {
    id: 'string',
    village: 'string',
    name: 'string',
  }
};

const Schema = {
  path: RNFS.DocumentDirectoryPath  + './data/demo.realm',
  schema: [AdminSchema, DebtorSchema],
  schemaVersion: '0'
};


export default Schema;