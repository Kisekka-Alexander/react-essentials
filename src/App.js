import Header from './Components/Header'

function App() {
return (
  <div className='container'>
       <Header/>
  </div>
)
}

export default App;




// import gitdp from './gitdp.jpg';

// function Header(props){
//   return(
//     <header>
//       <h1> Welcome to Maama {props.name}'s Restaurant</h1>
//     </header>
//   )
// }

// function Main(props){
//   return(
//     <section>
//       <p> We serve the most {props.adjective} food around.</p>
//       <img src="https://github.com/Kisekka-Alexander.png" height={200}/>
//       <ul style={{textAlign: "left"}}>
//         {props.dishes.map((dish) => 
//         (<li key={dish.id}>{dish.title}</li>))}
//       </ul>
//     </section>
//   )
// }

// function Footer(props){
//   return(
//     <footer>
//       <p> Copyright {props.year} </p>
//     </footer>
//   )
// }

// const dishes = [
//   "Matooke + Fish",
//   "Rice + chicken",
//   "Gnuts + Matooke",
//   "Meat + Sweetpotatoes"

// ];

// const dishObjects = dishes.map((dish,i) => ({id:i, title: dish }));
// console.log(dishObjects);