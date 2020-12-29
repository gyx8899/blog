# TypeScript

## 基本语法示例

```typescript jsx
let hasDone: boolean = false;
let count: number = 0;
let name: string = 'Kate';

let numberArray: number[] = [1, 2, 3];
let stringArray: Array<string> = ['', 'a', 'cc'];
let numberStringArray: (number | string)[] = [1, '3', 4];
let numberBooleanArray: Array<number | boolean> = [true, 1, 3];

let unknownValue: any = 4;
unknownValue = '1234';
unknownValue = {};
unknownValue.getName();
unknownValue.setName('aa');

let anyArray: any[] = [1, '3', new Date()];

let objectValue: object = {};
objectValue.toFixed();

// void 的可用值：undefined, null
let unuseable1: void = undefined;
let unuseable2: void = null;
// 无返回值，设置 void
function warnUser(): void {
  console.log('waning!');
}

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let u: undefined = undefined;
let n: null = null;

let xTuple: [string, boolean];
xTuple = ['', false];
// xTuple = [123, false];
// enum availableColor {Red = 0, Green = 1, Blue = 2} // 默认编号 0 开始
// enum availableColor {Red, Green, Blue}
enum availableColor {Red = 1, Green, Blue} // 编号从 1 开始
// enum availableColor {Red = 2, Green = 6, Blue = 9} // 编号设置
let c: availableColor = availableColor.Blue;
let colorName: string = availableColor[2]; // Green
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
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

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
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



