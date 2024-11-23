import { useState } from 'react'



export function handleRandomize() {

    
    let oldElement;
   for (let i = listItems.length - 1; i > 0; i--) {
     let rand = Math.floor(Math.random() * (i + 1));
     oldElement = listItems[i];
     listItems[i] = listItems[rand];
     listItems[rand] = oldElement;
   }
   console.log(listItems)
}