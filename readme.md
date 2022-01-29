# way-to-TS

Collection of my exercises/tests for learning TS.

## Technologies used

Built with:

- HTML
- JS
- TS
- CSS
- Node

## Setup and usage

### In root folder:

```shell
npm install
npm  start
tsc
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Sources

- Business College Helsinki. TypeScript lessons
- Udemy Academy: Understanding TypeScript - 2022 Edition

## Authors and acknowledgment

Abel Parada

- [GitHub @abel-parada](https://github.com/abel-parada)
- [LinkedIn](https://www.linkedin.com/in/abelparadamillan/)

---

# To try on your own from scratch.

## To run and get started

Make sure to have installed Node and TypeScript.

Make sure to install lite server and enable atocompilation. This will make things less of a hassle.

### Installing Node and TS

- Install **node**: https://nodejs.org/en/

- Install **TS**:

##### In your project

```shell
npm install typescript --save-dev
```

##### Or globally

```shell
npm install -g typescript
```

- Install lite server

```shell
npm init -y
npm install --save-dev lite server
npm start
```

- Compile project

```shell
tsc filename.ts
```

- Enable autocompilation

```shell
tsc --init
```

Include the following in tsconfig.json file in the compiler options object:

```json
"watch":true
```

Exclude any other TS files and include only the app.ts file in the tsconfig.json

> Add **"exclude":["projectName1.ts", "projectName2.ts"]** in your tsconfig.json as a sister of "compilerOptions"

> Add **"include":["app.ts"] in your tsconfig.json** as a sister of "compilerOptions"

Start autocopilation

```shell
tsc
```
