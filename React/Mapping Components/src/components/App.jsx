import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// you can't access to key property
// instead, you should pass it through another property
function createCard(contact){
  return <Card key={contact.id}
    id={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://picsum.photos/200/300"/>
      
      {/* functional programming */}
      {/* for every items in the contacts array */}
      {/* call createCard function */}
      {/* it require "key" property */}
      { contacts.map(createCard) }

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
