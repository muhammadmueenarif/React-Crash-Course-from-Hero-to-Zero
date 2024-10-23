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


Lec 12. Passing props to components. 
React component use props to communicate with each other. parents pass data to child as props. once we pass 
as props then we need to read that props in the child component where we want to access that. 
it does not matter how many props we pass as all will be grouped under one object. 


Lec 13. Components props manipulation. 
we can use props keyword to access all props in child. if we want to use only one prop then we can pass it in 
function parameter with its name like {product}. we can also use variables to access it like if we pass props keyword 
in function parameter, then we can create variable below like const product= props.product; and use it where we want. 

we can pass background="red" with props and use background keyword where we want to use it in component. 
if we have multiple props and pass one prop with its name like card, we can use ...restProps to add other props. 


Lec 14. Responding to Events. 
we will create function and can use onClick={handleFunction(propsName)} in this way. we can also place 
onClick={(=> handleFunction(prop))} if any issue. 


Lec 15. Rendering Lists. 
learn js array method to manipulate array of data. filter and map methods to filter and transform array of data. 
Render product using map method. we need to pass a key of prop that should be unique about each item because 
react need specific id to render the specific product else it will render all item and cannot figure which 
item i need to make changes. it is not good to use array index as key as array index can be deleed or change and cause issues.


Lec 16. Fragment Component
What are and why need? 
React Fragment is special component allows you to group components. Fragment component not rendered and only visible 
for react. 
Fragment does not accepts key so we will need to import fragment. and we can pass key to fragment. <fragment key={title}></fragment>  

render a list of children without adding extra nodes to the DOM. it is used when we want to render multiple 
components but do not want to add extra nodes to the DOM.


Lec 17. Conditional Rendering
you might want to display a list of elements only if the list is not empty and if it's empty, just display 
a message list is empty. Or another example, you might need to display different content one for logged in user and another
one for guest user.

Imagine you have a limited number of products which are available, and you need to display which products are not
available or in case if it's available, how many items user can buy, and about the buy button view display status
product available or not.
if product not available then buy button will not show. 


Lec 18. Styling in React. 
Using inline Styles
we use inline styling with {{}}. outer braces are for js object and second braces are for css structure object. 
css also written in camel case. in simple css we write border-radius but here we will write borderRadius. 
Also we will use className instead of simple class keyword. we can write at the top of file and store them in 
variable and use them in component. const styles= {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
        list:{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }
}

and use variable name instead of complete code. we can use dynamic variable and dynamic styles and pass them. 
not recommended for large and complex projects. difficult to maintain. it does not support many css features.
like hover, active, focus placeholder etc.,it does not support media queries. does not support animation and 
difficult to override.  


Lec 19. Using css files. 
ALways keep styles for each component in separate file. it will help to import only needed styles and keep code clean. 
as we have separate file for app.css. place css file in same folder of that component. name css classes as pascal 
case like App. using separate css file has advantages like using keyframes, animation, hover, active, focus,
media queries. file divided into components and reduce duplication. Disadvantage is that need to manage proper 
class name. if not managed can cause a lot of errors and overrite the styles. 


Lec 20. Using CSS Modules. 
change the name of file from ProductCard.css to ProductCard.module.css. and then import it as styles object. 
import styles from './ProductCard.css'; then we will give className as className={styles.container}
using css module has same advantages as separate css file. it prevents global style conflict. it does not overrite
styles with other components. also class name is dynamicaly generated and unique. if you inspect elements you will see
different class name.

it has pros that it does not allow to apply some dynamic styles based on state or props. also the process of css 
module may require additional configuration in build process. 


Lec 21. Using global css
global file is place in root of application. in our case it is index.css. the first case is that we can define 
styles for html tags like body. it is global because it is applied to all components of page and we can write 
font family font style color background margin etc., and set style for different texts like heading paragraph. 
we can also define css variables in global file and use them in all the application. we can also define some 
utility classes like we use tailwind css. 


Lec 22. Alternative Styling Options. 
SaaS preprocessor that extends css features like variable. we can also do nesting in css with SaaS as nav {
    ul{
        //write properties here. margin, padding 0. 
    }
} 

we can also use mixins where we can pass props and use props. it also has some arrays, loops. but we need to
configure it in webpack and some other configuration properly. we can use tailwind css and other things, 
tailwind has limited design flexibility. we cannot do everythnig with it. 


Lec 23. Managing states 
Component life cycle and state. 
component lives on page for some period and goes through stages of mounting >>updating >> unmounting. 
we can consider as birth, growth and death of process. mounting is when component added to the DOM. then the 
updating state is triggered each time after prop or state changes and after this the component will display updated 
information on the page. this process is called rendering. 
when component removed from DOM, and state is also cleared. when component removed from DOM it is no more needed 
so react clear its all states. 
state is special js object that can store data inside component. also the state of component can be changed during
lifecycle of component and also one component is unmounted. when unmounted state is destroyed.
props: data shared from parent to child component and cannot be changed directly. 
state: data which local component has and can be changed directly.  


Lec 24. Component state and Local Variable. 
local variable changes does not trigger a render in react component. it means data on page won't be updated. 
if we want to update everytime, we will use component state. don't use local variables. value of local variable 
don't store between renders.
for example if any text in component updates and we have local variable with set value then it will be reset because 
rack does not store local variable values between render. 

if we want to use local variable then we should store static data information in it. the data which will never be changed.
and for internal component details data that can be changes use component state. 


Lec 25. useState Hook 
hooks are js function that allow to use some react features and normally start with prefix use. useState helps to
manage state inside component. first import hook from react library. 
const [stockCount, setStockCount] = useState(product.stockCount); it has 2 items. first is value and 2 is 
method to set this value. as it is destruction, we can name this variable which we want. in the right side 
after the useState keyword, we provided initial value for the state. 
if we render the same components three times, and each copy have a completely different state. changing state 
in one component won't affect others. hooks start with a prefix use, and should be defined at top of component.
it cannot be defined inside loops, nested functions, or some conditions. It should be defined only at the top of your component.


Lec 26. Batch updating of useState. 
how to perform multiple state update in one events. sometime maybe we need it so we should know how to solve it. 
function handleTwoClicks() {
    setStockCount(stockCount - 1); //6 -1 .
    setStockCount(stockCount - 1); //6 -1  
    console.log("stock count is", stockCount);
    // onPurchase(product);
  }

when we call function, then stock count will decrease by 1 not by 2 because react does not update state immediately. 
it schedule and updates for next component render. it waits until all code in event handler has run before processing 
some state updates. this help to optimize the performance and reduce number of components render.
first 6-1. when we click again 6-1. when we console then also 6 because it does not update the value. it will wait 
until the old code will run and then update the value. to fix this, we can use previous state. 

  function handleClick() {
    setStockCount((prevStockCount) => prevStockCount -1);
    onPurchase(product);
  }

  function handleTwoClicks() {
    setStockCount( (prevStockCount) => prevStockCount - 1); //6-1
    setStockCount((prevStockCount) => prevStockCount - 1);  //5-1     
  }

  if we work with api or some other dynamic values, this is much safer.  


Lec 27. Managing COmplex States. 
how to update object and nested objects correctly. but first we need to create product filter component to show
how to manipulate object states. this allows you to filter products based on minimum and maximum price.
to update the object state we will need two values as in our case, filter product has two values minimum and max. 
also we will pass two parameters in function. to update the state of object, we will need to have previous state 
because filter has two properties minimum value and max value. at a time, we will need to update only one of them. 

how to update nested states. 