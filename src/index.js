import React from "react";
import ReactDom from "react-dom/client";
import data from "./data.js"
import "./index.css"

function App (){
    return (
        <main className="menu">
        {/* <h2>Menu kita</h2> */}
        
            <Header/>
            <Menu/>
            <Footer/>

        </main>
    )
}


function Header(){
    const style ={
        color:'black',
        textAlign: 'center',
        fontFamily:'Poppins,sans-serif',
        fontSize:'50px',
    };
    return <h1 style={style}>Warteg Bahari</h1>
}


function Menu (){
    const foods = data;
    const numFoods = foods.length;
    return(
        <main className="menu">
            <h2>Menu kita</h2>

            {numFoods > 0 ? (
                <React.Fragment>
                <p style={{
                    textAlign:'center',
                    fontSize:'20px',
                    padding:'10px'
                }}>
                    disini menyediakn aneka makanan yang banyak sekali makanan
                    yang enak dan  lezat , dan juga di warteg ini kami  menyediakan 
                    berbagai macam makanan  yang di perlukan sehari hari 
                </p>
                <ul className="foods">
            {data.map((food) => (
                <Food
                    foodObj = {food} 
                    key ={food.nama}
                />
            ))}
            </ul>
                    
                </React.Fragment>
            ):(
                <h1 style={{
                    fontFamily:'Poppins,sans-serif',
                    textAlign:'center'
                }}>Bisa di cek sesuai jam operasional nya ya kak</h1>
            )}
            {/* <Food/> */}
        </main>
    )
}

function Footer (){
    const hour = new Date().getHours();
    const JamBuka = 12;
    const jamTutup = 22;
    const IsOpen = hour >= JamBuka && hour <= jamTutup;


    if(IsOpen){
        return<FooterOpenHour  JamBuka={JamBuka} jamTutup={jamTutup}/>;
    }else{
        return <ClosedHour  JamBuka={JamBuka} jamTutup={jamTutup}  />
    }
}

function FooterOpenHour ({JamBuka, jamTutup}){
    return(
        <footer className="footer">
        <div className="order">
        <p>
            { new Date().getFullYear()} Warteg Bahari  
            | Jam buka {JamBuka } - jam tutup{jamTutup } 
        </p>
        <button className="btn">order</button>
        </div>       
    </footer> 
    )
}


function ClosedHour ({JamBuka, jamTutup}){
    return (
        <footer className="footer">
            <p>
            Warung masih tutup , coba datang jam {JamBuka} - {jamTutup} 
            </p>       
         </footer> 
    )
}


function Food (props){
    const { nama,deskripsi,foto,harga,stok} = props.foodObj;
    console.log(props);
    return(
        <li className={`food ${!stok ? "sold-out" : ""}`}>
            <img src={foto} alt={nama} width={100} height={70}/>
            <div>
                <h2>{nama}</h2>
                <p>{deskripsi}</p>
                <span>{stok ? harga: "Habis"}</span>
            </div>
        </li>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode> 
         <App/> 
    </React.StrictMode>
    );

