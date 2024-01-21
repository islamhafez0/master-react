const sum = (x: number, y: number) => {
    return x + y;
}
console.log(sum(10, 20));

let username;
console.log(username);


const props: {username: string, age: number, isMarried: boolean, hobbies: string[]} = {
    username: "eslam",
    age: 20,
    isMarried: false,
    hobbies: ["code", "football", "programming"],
};

const list: [number, string, {username: string}, boolean] = [20, "Eslam", {username: "eslam"}, false]

const logMessage = (message: string) => {
    return message.slice(0, 5)
}
const message: string = "Hello World";

console.log(logMessage(message));

export interface Creds {
    readonly username: string;
    password: string;
    name: string;
    isLogged: boolean;
    isVerified: boolean;
}
export interface NewCreds extends Creds {
    address: string;
}

const userCreds: Creds = {
    username : "eslam",
    password: "**********",
    name: "Eslam Hafez",
    isLogged: true,
    isVerified: false,
}
// userCreds.username = "eslam hafez";

const newCreds: NewCreds = {
    ...userCreds,
    address: "10 main street"
};
console.log(userCreds);
console.log(newCreds);

const person: Record<string, string | number> = {
    work: "dev",
    status: "married",
    age: 20
}
// person["age"] = true; // error not assignable to string or number

export interface UserInfo {
    username: string,
    age: number,
    isMarried: boolean,
}

type userKeys = keyof UserInfo;

const user: UserInfo = {
    username: "Eslam Hafez",
    age: 20,
    isMarried: true,
}
const getProp = (obj: UserInfo, key: userKeys) => {
    return obj[key]
}
console.log(getProp(user, "username"));

const printCoordinates = ([x, y]: number[]): void => {
    console.log(`Coordinates= ${x}, ${y}`)
}
const Coordinates: number[] = [20, 30]
printCoordinates([20, 30]);

let a = 3;
let b = 5;
//array destructuring
[a, b] = [b, a]

console.log(`a=${a}`, `b=${b}`);

const printLangs = ([...langs]: string[]) => {
    const lang = langs.map((lang, index) => {
        return `Lang ${index + 1} = ${lang}`
    })
    return lang
}
console.log(printLangs(["Javascript", "Typescript", "Java", 'c++']));

const printLangs2 = ([a, b, c, d]: string[]) => {
    return `lanhuage1 is ${a} two is ${b} three is ${c} four is ${d}`;
}
console.log(printLangs2(["Javascript", "Typescript", "Java", 'c#']));

const sumNums = (...nums: number[]) => {
    return nums.reduce((n, num) => n + num)
}
console.log(sumNums(10, 30, 40, 50, 20*100));