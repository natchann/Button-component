import React from 'react';
import './App.css';
import { Loader } from './components/Loader';
import { Icon } from './components/Icon';



  const Button = ({kind="default", radius, children})=> 
  (
    <button className= {"btn btn-"+kind}
   
    style={{"border-radius": radius + "px" }}
    > {children}
     </button>
    );
    
  const divButtons = (
    <div>
    <Button kind="danger" radius="30" ><Loader name="spinner" /><Icon name="close" />Danger</Button>
    <Button kind="info" radius="10" ><Loader name="circle-o-notch" /><Icon name="folder" />Info</Button>
    <Button kind="agree" radius="5" ><Loader name="refresh" /><Icon name="bars" />Agree</Button>
    <Button kind="warning" radius="100" ><Icon name="trash" />Warning</Button>
    <Button kind="continue" radius="1" ><Icon name="home" />Continue</Button>
    
    </div>
  );

export default divButtons;
