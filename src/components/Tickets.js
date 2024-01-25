import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
import '../assets/css/Tickets.css';

const TicketForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    id: '',
    date: '',
    adultsCount: 0,
    childrenCount: 0,
    price: 0,
  });

  const handleInputChange = (key, value) => {
    setFormFields((prevFields) => ({ ...prevFields, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTicket = {
      ...formFields,
      id: uuidv4(), // Generate a unique ID
    };

    try {
      const response = await fetch("http://localhost:8080/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTicket),
      });

      if (response.ok) {
        console.log("Ticket submitted successfully!");
        alert("Ticket submitted successfully!");

        setFormFields({
          id: '',
          date: '',
          adultsCount: 0,
          childrenCount: 0,
          price: 0,
        });
        navigate('/parking');
      } else {
        console.error("Failed to submit ticket");
      }
    } catch (error) {
      console.error("Error submitting ticket", error);
    }

    console.log('Ticket submitted:', newTicket);
  };

  return (
    <div className="ticketsite">
      <label>Datum des Besuches:</label>
      <input
        className="date"
        type="date"
        value={formFields.date}
        onChange={(e) => handleInputChange('date', e.target.value)}
      />
      <br></br>
      <label>Anzahl Erwachsene:</label>
      <div>
        <button className="button" onClick={() => handleInputChange('adultsCount', Math.max(0, formFields.adultsCount - 1))} disabled={formFields.adultsCount === 0}>-</button>
        <span>{formFields.adultsCount}</span>
        <button className="button" onClick={() => handleInputChange('adultsCount', formFields.adultsCount + 1)}>+</button>
        <br></br>
      </div>
      <label>Anzahl Kinder:</label>
      <div>
        <button className="button" onClick={() => handleInputChange('childrenCount', Math.max(0, formFields.childrenCount - 1))} disabled={formFields.childrenCount === 0}>-</button>
        <span>{formFields.childrenCount}</span>
        <button className="button" onClick={() => handleInputChange('childrenCount', formFields.childrenCount + 1)}>+</button>
        <br></br>
      </div>
      <label>Preis:</label>
      <input
        type="number"
        value={formFields.price}
        onChange={(e) => handleInputChange('price', e.target.value)}
      />
      <br></br>
      <button className="buttonnavigation" onClick={handleSubmit}>Kaufen</button>
    </div>
  );
};

export default TicketForm;
