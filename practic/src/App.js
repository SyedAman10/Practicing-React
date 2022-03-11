import React ,  {useState , useEffect} from 'react';
import './App.css'



// Reusable Components

// const Person = ({name, age , imageUrl , height}) => {
//     return (
//         <div className='person_container'>
//             <h2>{name}</h2>
//             <h2>{age}</h2>
//             <img src={imageUrl} alt={name}/>
//             <h4>{height}</h4>
//         </div>

//     )
// }






const App = () => {

    // Dynamic transitions
    // const message = 'hi'
    // const user = "aman"
    // const isOnline = false;
     

    // Using JS Fragments
    // const name = 'billie';




    //Intro to UseState

    // const [counter , setCounter] = useState(0);




    // intro to useeffect
    // useEffect(() => {
    //    alert('You have changeed the counter to ' + counter)
    // },[counter]);
    return(
        // Dynamic transitions
        // <div className="App">
        //     <h1> hellooo {isOnline ? user : 'NOT ACTIVE'} </h1>
        // </div>
       
       
       
       
        // Using JS fragments       
        //  <div className='App'>
        //     {name ? (
        //         <>
        //           <h1>{name}</h1>
        //         </>
        //     ): (
        //         <>
        //           <h1>test</h1>
        //           <h2>No user</h2>
        //         </>
        //     )}
        //  </div>
        
        
        
        // <div className='App'>
             
        //     <Person 
        //        name="Name:Aman"
        //        age="Age:21"
        //        imageUrl="https://images.unsplash.com/photo-1625838144804-300f3907c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        //        height="Height:180 cm"
        //      />
             
        //      <Person 
        //        name="Sergio"
        //        age="21"
        //        imageUrl="https://images.unsplash.com/photo-1625838144804-300f3907c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        //        height="180 cm"
        //      />

        //       <Person 
        //        name="Sameer"
        //        age="21"
        //        imageUrl="https://images.unsplash.com/photo-1625838144804-300f3907c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        //        height="180 cm"
        //      />
        // </div>
            


        //Intro to UseState
        // <div className='App'>
        //      <button onClick= { () => setCounter ((prevCount) => prevCount - 1)}>-</button>
        //      <h1>{counter}</h1>
        //      <button onClick = { () => setCounter ((prevCount) => prevCount + 1)}>+</button>
        // </div>

          

        <div className='App'></div>



        )
}
export default App;