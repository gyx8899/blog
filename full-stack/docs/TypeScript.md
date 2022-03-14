# TypeScript

## 基本类型示例

```typescript jsx
// 联合类型 ｜ 

// 原始类型
let hasDone: boolean = false;
let count: number = 0;
let name: string = 'Kate';

// 数组
let numberArray: number[] = [1, 2, 3];
let stringArray: Array<string> = ['', 'a', 'cc'];
let numberStringArray: (number | string)[] = [1, '3', 4];
let numberBooleanArray: Array<number | boolean> = [true, 1, 3];
let b: 10;
b = 10;
let c: 'girl' | 'boy';
c = 'boy';
// c = 'abc';
let d: boolean | string;
// d = 1;
d = true;
d = '1234';
let e: unknown; // 类似 any, 是一个类型安全的any， 但不能赋值给其他类型的变量；
e = 1;
e = true;
e = '134';
let s: string;
// s = e;
if (typeof e === 'string') {
  s = e;
}
s = e as string;
// s = <string> e;

// any
let unknownValue: any = 4;
unknownValue = '1234';
unknownValue = {};
unknownValue.getName();
unknownValue.setName('aa');

let anyArray: any[] = [1, '3', new Date()];

let objectValue: object = {};
objectValue.toFixed();

// void 的可用值：undefined, null
let unUseable1: void = undefined;
let unUseable2: void = null;
// 无返回值，设置 void
function warnUser(): void {
  console.log('waning!');
}

// 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给number类型的变量。
let u: undefined = undefined;
let n: null = null;

// 元组类型
let xTuple: [string, boolean];
xTuple = ['', false];
// xTuple = [123, false];

// 枚举类型
// enum availableColor {Red = 0, Green = 1, Blue = 2} // 默认编号 0 开始
// enum availableColor {Red, Green, Blue}
enum availableColor {Red = 1, Green, Blue} // 编号从 1 开始
// enum availableColor {Red = 2, Green = 6, Blue = 9} // 编号设置
let c: availableColor = availableColor.Blue;
let colorName: string = availableColor[2]; // Green
console.log(colorName);  // 显示 'Green' 因为上面代码里它的值是2

// 函数类型 - 声明和实现一起
const add = (a: number, b: number): number => a + b
function add1(a: number, b: number): number {
  return a + b
}
// 函数类型 - 声明 + 实现 分开
const add2: (a: number, b: number): number => number
add2 = (a, b) => a + b
type add3 = (a: number, b: number) => number
interface add4 {
  (a: number, b: number): number
}

// never 类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null 或 undefined 之外的类型。
// 使用object类型，就可以更好的表示像Object.create 这样的API。例如：
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
create(undefined); // Error, ? not error

//类型断言
//有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
//通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
//类型断言有两种形式。 其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// 另一个为as语法：
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 变量声明

此处对 var, let, const 的介绍及对比省略。

```typescript jsx
// 解构
type C = {a: string, b?: number} // ?: 可选参数
function f({ a, b}: C): void {}
function ff({a="", b=0} = {}): void {}
function fff({a, b = 0} = {a:""}): void {}

enum Gender{
  Male = 0,
  Female = 1
}

let b: {name: string};
b = {name: 'zhangsan'};
// b = {name: 'lisi', age: 123};

let c: {name: string, age ?: number}; // ?: 表示 age 参数可选，非必须；
c = {name: 'lisi'};
c = {name: 'lisi', age: 12};
// c = {name: 'wangwu', sex: 'gender'};

let d: {name: string, [propName: string]: any};
d = {name: 'zhaoliu', age: 123, sex: Gender.Male};

let e: (p1: string, p2: string) => string;
e = function (s1, s2) {
  return s1 + s2;
};

let j: {name: string} & {age: number};
// j = {name: 'lisi'};
j = {name: 'zhangsan', age: 12};

let k: 1|2|3;
let l: 1|2|3;
type myType= 1|2|3;
let m: myType;
```

## 接口

```typescript jsx
interface Person {
  name: string
  age?: string
}
```

## 泛型

```typescript jsx
function fn<T> (a: T): T {
  return a;
}

fn(2);
fn<string>('hello');

function fn2<T, K> (a: T, b: K): T {
  console.log(b);
  return a;
}
fn2<string, number>('hello', 123);

```

## 技巧点

- 在构造函数的参数上使用public等同于创建了同名的成员变量

```typescript jsx
class Student {
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}
```

## 实践记录

```typescript tsx
const launchBtn = useRef<HTMLInputElement>(null)
```

## 精巧示例

- <https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/> Starting a TypeScript Project in 2021 · Chris Hager