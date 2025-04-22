import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar title={"Bootstrap"} />
      <Jumbotron title={"A WARM WELCOME!"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia corporis repellat natus ex eveniet temporibus et a veniam blanditiis voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nihil at id repudiandae amet iure omnis a eum ut quae."} btnText={"Call to action!"}/>
      <div className="card-group gap-4 px-5">
        <Card title={"Lorem"} text={"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} buttonText={"Entrar"}/>
        <Card title={"Lorem"} text={"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} buttonText={"Entrar"}/>
        <Card title={"Lorem"} text={"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} buttonText={"Entrar"}/>
        <Card title={"Lorem"} text={"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} buttonText={"Entrar"}/>
      </div>

      <Footer/>
    </>
  );
};

export default Home;