What is react?
JS library for building user interface for web apps. created by fb. Features jsx, virtual dom,  component based 
and one waya data flow. 

JSX: syntax extension for js looks like html. easy to create component and make code clear.  

DOM: Document object model. used to organize and access elements on webpage. it is js object. it has all 
elements of html like p, links, lists, etc., DOM allows js to find, update, add, delete elements without 
reloading page.
Virtual dom: lightweight copy of real dom. all changes first applied to virtual dom and then on actual dom. 
React compare virtual dom with actual dom and check what is changed and changes only updated section not entire page. 
Component based: react based on components. components are reusable pieces of code. components can be
used to create complex UI. components can be reused in different parts of app. components are buttons navbar etc., 

One way Data Flow: Data flow only from parent to child. Child can't change data directly. they request to parent 
to change data by events. 


Lec 2. Environment Setup. 
install vs code, node js(it has installed npm which is package manager for node). we will use npm to install libraries. 
open terminal in vs code and type node --v to check installed version. npm --v. 


Lec 3. Creating React Application. 
npx create-react-app AppName. This will install packages like react library, react dom library(work with dom
to render app). react scripts(scripts and configuration to build, run and test application).

npm start to run application in browser. 
npm run build to build and prepare files and application for production. it will build production version with 
some compresseed files. 
npm test command to run tests. 


Lec 4. Application Structure 
left side all files and folders. first is our src folder in which most work. app.js having rendering code. 
app.css for styling the component, app_test.js having test files. 
index.js is main entry file where render react application in DOM. we can check here which is the root 
library we use for rendering application. 
index.css file to add some global styles in application. 

.gitignore to put files that we do not want to push in git repository. 
package.json has scripts to run, build, and test app. also check name and version of application. it also has 
dependecies packages that we installed like react, react-library, or other libraries. also some configuration 
for plugin. 
package-lock.json. automatically generated file give info about all dependecies like its name, version and 
installation files. 

Next is public folder having static assets like image, fonts, or main html file. these files are not changed 
during build process.
robots.txt file to tell browser like google which file should be publically available to user and which not. 

node modules to store all the dependencies like react, react dom, libraries etc.,  

