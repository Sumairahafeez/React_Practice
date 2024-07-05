import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Products from './components/product';
import Footer from './components/footer';
import Props from './learn/props';
import States from './learn/States';
import SetStates from './learn/SetStates';
import EventHandling from './learn/EventHandling';
import Conditional from './learn/Conditional';
import List from './learn/List';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>
    {/* <Navbar />
    <Products/>
    <Footer/> */}
    {/* lets tart working with react first what are props? they are the parameters passed on to objects through an example of cars */}
    {/* <Props Name="Audi" color = "red" year = "1992" /> */}
    {/* now what are states? They are like props but instead used withinclass instead of passing as parameters */}
    {/* <States/> */}
    {/* <SetStates/> */}
    {/* now for event handling lets work with it */}
    {/* <EventHandling/> */}
    {/* <Conditional/> */}
    <List/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
