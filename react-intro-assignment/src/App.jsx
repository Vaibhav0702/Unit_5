import "./App.css";

function App() {


  //   const food = "Pizza";
  //   const age = 24;
  //   const skills = ["mern", "node", "java", "dsa", "animation","design"];
  //   const mobarr = ["Samsung", "HTC", "Micromax", "Apple"];
  //   return (
  //     <div className="App">
  //       Your favorite food is {food} , you are {age} years old!
  //       <div> you are {age > 18 ? "Eligible" : "Not-Eligible"} for license </div>
  //       <div>
  //         {skills.map((e) => {
  //           return <p className="redtext"> <Skill skill = {e} /></p>;
  //         })}
  //          {mobarr.map((e) => {
  //           return <p className="redtext"> <Skill skill = {e} /></p>;
  //         })}
  //       </div>
  //       <Skill skill = "VsCode"/>
  //     </div>
  //   );

  // //component

  // function Skill(props) {
  //   console.log("Skills props", props);
  //   return <p className="redtext"> <ul><li>{props.skill}</li></ul> </p>;
  // }

  // --------------------------

  const mid = ["Services", "Projects", "About"];
  const osarr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const mobarr = [ {name : "Samsung" , style : "square"} ,{name : "HTC" , style : "square"} ,{name : "Micromax" , style : "disc"} ,{name : "Apple" , style : "circle"}  ];

  return (
    <div className="App">
      <div className="nav">
        <div className="logo">LOGOBAKERY</div>
        <div className="links">
          {mid.map((e) => {
            return <div className="txt">{e}</div>;
          })}
        </div>
        <button className="btn">connect</button>
      </div>
      <div className="body">
        <div className="os">
          <h1>Mobile Operating System</h1>
          {osarr.map((e) => {
            return <Skill skill = {e} />;
          })}
        </div>
        <div className="mob">
          <h1>Mobile Manufacturers</h1>
          {mobarr.map((e) => {
            return (

              <li className={e.style}>{e.name}</li>

            );
          })}
        </div>
      </div>
    </div>
  );
}

//  --
function Skill(props) {
  return <li>{props.skill}</li>;
}

export default App;
