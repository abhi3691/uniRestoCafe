import React from 'react';
import Realm from 'realm';

//Schema Define
const TaskSchema = {
  name: 'Login',
  properties: {
    _id: 'int',
    userName: 'string',
    password: 'string',
    status: 'bool',
  },
  primaryKey: '_id',
};

//create Schema function

async function CreateLogin({id, userName, password, status}) {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [TaskSchema],
  });

  let task;
  realm.write(() => {
    task = realm.create('Login', {
      _id: id,
      userName: userName,
      password: password,
      status: status,
    });
  });
}

//read Schema

export const GetloginData = async () => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [TaskSchema],
  });

  const LoginData = realm.objects('Login');
  return LoginData;
};

export default CreateLogin;
