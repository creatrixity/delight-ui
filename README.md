
<img src="https://github.com/pankod/next-boilerplate/blob/master/banner.jpg" alt="Performance oriented Next.js application boilerplate with Redux, Typescript, Express.js and Sass." align="center" />

<br/>
<div align="center" >Performance oriented Next.js application boilerplate with Redux, Typescript, Express.js and Sass.</div>
<br/>

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/pankod/react-redux-boilerplate">
    <img src="https://david-dm.org/pankod/next-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/pankod/next-boilerplate#info=devDependencies"> 
    <img src="https://david-dm.org/pankod/next-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/pankod/next-boilerplate">
    <img src="https://travis-ci.org/pankod/next-boilerplate.svg?branch=master" alt="Build Status" />
  </a>
</div>


<br/>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>



## About


Next.js is a minimalistic React framework that runs in the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating it is also a straightforward way for developers with React experience to get productive fast.

The advantages of this approach is to be able to create Rich User experiences in a uniform way, without compromising Search Engine Optimisation (SEO) factors that are key to good ranking on Google and other search engines. 

This boilerplate make it easier to get started with a well-structured Next.js and TypeScript application.

By the end of setup, you'll have a Next.js project and features which is specified at the below.

<br/>

## Features


This boilerplate includes the latest powerfull tools.

* **Next.js** - Minimalistic framework for server-rendered React applications.
* **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces. path support(allias)
* **Redux** - State management
* **Express.js**- Handles server-side rendering and integrated with Express.js
* **Sass/Scss** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
* **Babel** -  The compiler for next generation JavaScript. Module(alias) support 
* **TSLint** - Contains TypeScript-specific options for our project.
* **Reverse Proxy** - A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server
* **Bundler Analyzer** - Visualize size of webpack output files with an interactive zoomable treemap.
* **dotenv .config** - Expose environment variables to the runtime config of Next.js

<br/>

*Here are a few highlights to look out for in this boilerplate*

<dl>
  
  <dd>The boilerplate includes tsconfig.json which contains a list of your input files as well as all your compilation settings.<dd>

  >One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

 
  <dd>Includes babel-plugin-module-resolver <dd>

  >A Babel plugin to add a new resolver for your modules when compiling your code using Babel. This plugin allows you to add new "root" directories that contain your modules. It also allows you to setup a custom alias for directories, specific files, or even other npm modules.

  
  <dd>Includes next-runtime-dotenv <dd>

  >Normally, .env isn’t available in the browsers (only Node.js), but our boilerplate uses npm package for make it available.

</dl>

<br/>

## Getting Started


1. Clone the repository and install the dependencies:

```
git clone https://github.com/pankod/next-boilerplate.git
```


2. To create a new app, go to the choosen app directory on the CLI then run one of the following methods:

**npm**

```sh
npm install
```
**yarn**

```sh
yarn install
```

3. Once the installation is done, you can run the following command:

 ```
 npm run start:dev
 ```
 <br/>

Then open http://localhost:3000/ to see your app.

<br/>

 ***At this point, your project layout should look like this:***
 
 <br/>

```
.
├── app
│  ├── proxy.js
│  ├── routes.js
│  └── server.js
├── next.config.js
├── pages
│  ├── _app.tsx
│  ├── _document.tsx
│  ├── home
│  │  ├── index.scss
│  │  └── index.tsx
│  └── index.ts
├── src
│  ├── Actions
│  │  ├── HomeActions.ts
│  │  └── index.ts
│  ├── Components
│  │  ├── Heading
│  │  │  ├── index.tsx
│  │  │  └── style.scss
│  │  └── index.ts
│  ├── Definations
│  │  ├── ActionConsts.ts
│  │  └── index.ts
│  ├── Interfaces
│  │  ├── Components
│  │  │  └── Heading.d.ts
│  │  ├── index.ts
│  │  └── Pages
│  │     ├── App.d.ts
│  │     └── Home.d.ts
│  └── Redux
│     ├── Reducers
│     │  ├── home.ts
│     │  └── index.ts
│     └── store.ts
├── tsconfig.json
└── tslint.json

```

## License

Licensed under the MIT License, Copyright © 2018-present Pankod
