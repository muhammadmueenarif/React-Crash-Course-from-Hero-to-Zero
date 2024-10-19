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


Lec 5. Cleaning Application. 
in app.js remove all code inside return div. remove logo.svg and its import in app.js. in app.css, copy 
background and minheight,color of .app-header and paste in index.css. 
in index.css, remove all except .app and write max width 960px, margin 0 auto, and padding 64,16,16px.  
anything that will be returning will show on screen. 

Lec 6. Developer tools.
What is browser? developer tools? why we need? chrome browser developer tools let you edit pages directly and 
diagnose problems easily. right click and inspect. first tab is element where we can see html Structure.
we can edit it and click on elements to see its details. we can see different sizes and check responsiveness. 

Next is console. we can see log messages here. in its network tab we can see loading files and requesting. 
methods of requests get post etc., and other details. in the preview section we can see what is the response 
of the request. 
Next is application tab. we can see local storage, session storage, cookies, and cache. 

Let's install react developer tools. open react developer tools. we can inspect our component with this tool.
we can see props, hooks info. we can see state of different component and change it. install it for chrome 
and add extension. it will show component and profiler in your console. we can see and inspect all the component.


Lec 7. Creating Components 
introduction. 
How to import and export. 

Lec 8. create first react component. 
Lec 9. Create separate component file. 
in previous lecture we created a component in same app.js main file but in this we will create separate folder 
of components and place all components in that folder. if we want to create separate component then first we 
need to export it and then import the component in the file where we want to use it. 
if we write export default component then we can import it directly but if we write export keyword before function
keyword then we do not need to export it at the end of page. but we will need to import it in {}. 

Lec 10. Writing Markup with JSX. 
JSX has strcit rules. first is that we can only return one element from react component. if we want to return
multiple components then we will wrap them inside a single tag. 
issue is that if we render multiple elements then it can cause issue with rendering and synchronizing virtual 
dom with real dom. if we render one component then it is easy and efficient for react to render and manage. 

Next rule is close of text. JSX require text to be closed. 2 types self closing text and wrapping text. 
self closing like <img> tag and br. wrapping are like <div></div>.

Next rule is camel case for naming props and attributes. camel case example is className.it is easy to convert 
variables and keys of object so that's why camel case.  


Lec 11. Using variables in JSX.
How to pass data as props or objects instead of writing it as directly. also learned how to call a function inside jsx. 
we will use double curly braces to specify styles. style={{boreder:"10px"}}