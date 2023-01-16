import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

export const getTodos = () => {
  return axios.get(url);
};

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const qwerty = async () => {
  try {
    const resp = await getTodos();
    const data = resp.data as Todo;
    console.log('data', data);

    const { completed, id, title } = data;

    logTodo(id, title, completed);
  } catch (error) {}
};
qwerty();

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id}
    TITLE: ${title}
    COPLETED: ${completed}
  `);
};

// list
const arr = ['a', 'b', 'c'];
const arr1: Array<number> = [1, 2];
const arr2: string[][] = [];

type myType = string | number;
const arr3: myType[] = [];

arr3.push(3, 'a');

console.log('arr3', arr3);

//tuple

const tuple: [string, number, boolean] = ['abc', 2, true];

const fun1 = (num: number): string => {
  return String(num);
};

type Callback = () => () => string;

const fun2 = (cb: Callback) => {
  return;
};

const createPassword = (name: string, age?: number | string) =>
  `${name}, ${age}`;

createPassword('Jack');

const createSkills = (name: string, ...skills: Array<string>): string => {
  console.log('skills', skills);
  return `${name}  my skills are  ${skills.join()}`;
};

console.log('createSkills', createSkills('Jack', 'Es6', 'Redux', 'Js'));

// нічого не повертає
const greetUser = (): void => {
  alert('hello');
};

const msg = 'error';

const error = (msg: string): never => {
  throw new Error(msg);
};

let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
  alert(`Hello ${name}`);
}
myFunc = oldFunc;

let user: { name: string; age: number; nikName: string } = {
  name: 'Alex',
  age: 37,
  nikName: 'boss',
};

type Person = {
  name: string;
  age: number;
  nikName: string;
  getNikName?: () => string;
};

const admin: Person = {
  name: 'Alex',
  age: 37,
  nikName: 'boss',
};

console.log(admin);

const geust: Person = {
  name: 'Alex',
  age: 37,
  nikName: 'boss',

  getNikName() {
    return this.nikName;
  },
};

// class

class User {
  name: string;
  age: number;
  nikName: string = 'Superman';

  constructor(name: string, age: number, nikName: string) {
    this.name = name;
    this.age = age;
    this.nikName = nikName;
  }

  getPass(): string {
    return this.nikName;
  }
}

const boss = new User('Alex', 37, 'boss');

console.log('boss', boss.age);
console.log('boss.getPass', boss.getPass());

interface User2 {
  readonly name: string;
  age?: number;
  [propName: string]: any;
}

const alex: User2 = {
  name: 'Alex',
  age: 37,
  nikName: 'boss',
};

//class interface

interface User3 {
  readonly name: string;
  age?: number;
  getPass(): string;
}

interface Admin extends User3 {
  getAge(): number;
}

class Alex implements Admin {
  name: 'Alex';
  getPass() {
    return '';
  }

  getAge(): number {
    return 23;
  }
}

//generic

const getter = <T>(data: T): T => {
  return data;
};

console.log('getter', getter('35').length);

//------------------------------------
// import { createContext, useContext } from 'react';
// import { ActionTypes } from '../../form-state';

// type ApiContextType = {
//   undo: () => void;
//   redo: () => void;
//   select: (id: string) => void;
//   dispatch: (action: ActionTypes) => void;
//   editMode: boolean;
// };

// const ApiContext = createContext<ApiContextType>({
//   undo: () => {},
//   redo: () => {},
//   select: () => {},
//   dispatch: () => {},
//   editMode: false,
// });

// const useApi = (): ApiContextType => useContext(ApiContext);

// export { ApiContext, useApi };

//-------------------------------------

// import React, { useCallback } from 'react';
// import { FormGroup, Label } from 'i-doit-ui-kit/lib/components/Form/Infrastructure';
// import { Input } from 'i-doit-ui-kit/lib/components/Form/Control';
// import { t } from '../../library/helpers/Util';
// import { ValidationComponentType } from '../../pages/Settings/Category/components/Validation/helper';

// type LengthType = {
//   minLength: number;
//   maxLength: number;
// };
// const toNumber = (num: string) => (Number.isNaN(parseInt(num, 10)) ? null : parseInt(num, 10));

// export const Length = ({ validationApi }: ValidationComponentType<LengthType>) => {
//   const data = validationApi.get();
//   const onChange = useCallback(
//     (key: string, value: string) => {
//       const numberValue = toNumber(value);
//       const final = {
//         ...data,
//         [key]: numberValue,
//       };

//       if (!final.minLength && !final.maxLength) {
//         validationApi.disable();
//         return;
//       }

//       validationApi.setKey(key, numberValue);
//     },
//     [data, validationApi],
//   );

//   const onBlur = (): void => {
//     if (!data || !data.minLength || !data.maxLength || data.minLength < data.maxLength) {
//       return;
//     }

//     validationApi.setFull({
//       minLength: data.maxLength,
//       maxLength: data.minLength,
//     });
//   };

//   return (
//     <>
//       <FormGroup className="my-2">
//         <Label id="minLength">{t('categoryBuilder.attributeSettings.validation-rules.length.min-length.label')}</Label>
//         <Input
//           type="number"
//           placeholder={t('categoryBuilder.attributeSettings.validation-rules.length.min-length.placeholder')}
//           id="minLength"
//           value={validationApi.get()?.minLength}
//           onChange={a => onChange('minLength', a.toString())}
//           onBlur={onBlur}
//         />
//       </FormGroup>
//       <FormGroup className="my-2">
//         <Label id="maxLength">{t('categoryBuilder.attributeSettings.validation-rules.length.max-length.label')}</Label>
//         <Input
//           type="number"
//           placeholder={t('categoryBuilder.attributeSettings.validation-rules.length.max-length.placeholder')}
//           id="maxLength"
//           value={validationApi.get()?.maxLength}
//           onChange={a => onChange('maxLength', a.toString())}
//           onBlur={onBlur}
//         />
//       </FormGroup>
//     </>
//   );
// };
