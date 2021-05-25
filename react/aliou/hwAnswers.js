
// Ahmed - How to create a prop

// Ahmed - How to give a prop its value

// Ahmed - How to use a prop that was already created



// 1) How to create a property

// let's suppose we have the following Welcome component

const Welcome = (props)=> <div>Welcome</div>

// if we are rendering our Welcome component in a paerent component let say App it would look as follows

const App = ()=> <Welcome/>

// inorder to create a property  for our welcome component  so that it should display Welcomre+{property created as name}
//we would do the following

const App = ()=> <Welcome name/>

// From the above we conclude that properties are created and passed as html atribute from within tag created 
//for the component when returned in a presentational component.

// 2) How to give a prop its value

// from the above example let's give a value of "sara" to our name property such that our welcome component
//will display welcome Sara

const App = ()=> <Welcome name="sara"/>

// from the example above we conclude that prop values are initialised by equating the appelation given to 
// the prop created to a specific data type i.e a string in our case.

// 3) How to use a prop that was already created

//Inorder to attempt and answer to the above question it is worth nothing that there is a 
//slight diffrence between  class components and functional componets i.e
//in case we are using class components the this key word has to be used.

//from the above exampel on line 33 let's say we want to print "welcome sara" to our ui we shall have the following
const Welcome = (props)=> <div>Welcome {props.name}</div>

//We conclude that props are used by calling them within the component which hosts the property.


