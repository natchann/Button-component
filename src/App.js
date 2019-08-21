import React from 'react';
import './App.css';


  const Button = ({text, kind="default", radius, icon,loader, ...buttonProps})=> 
  (
    <button className={"btn btn-"+kind} {...buttonProps}
    style={{"border-radius": radius + "px" }}
    > <i className={"fa fa-"+loader+" fa-spin"}></i><i className={"fa fa-"+icon}></i>{text}</button>
    );
    

  const divButtons = (
    <div>
    <Button kind="danger" radius="30" icon="close" loader="spinner" text="danger" />
    <Button kind="info" radius="10" icon="folder" loader="refresh" text="info" />
    <Button kind="agree" radius="5" icon="bars" loader="" text="agree" />
    <Button kind="warning" radius="100" icon="trash" text="warning" />
    <Button kind="continue" radius="1" icon="home" text="continue" />
    </div>
  );

export default divButtons;
