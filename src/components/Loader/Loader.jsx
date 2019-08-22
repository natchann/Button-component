import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const loaders ={
//     "SPINER":"spinner",
//     "CIRCLE":"circle-o-notch",
//     "REFRESH":"refresh"
// }

export const Loader = ({name})=><i className={"fa fa-"+name+" fa-spin"}></i>