// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Card from './Card';
import AnotherPage from './AnotherPage';
import './p2.css'; 

const App = () => {
  const cardsData = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://example.com/avatar1.jpg',
      title: 'Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.jpg',
      title: 'Designer',
    },
    // Add more card data objects as needed
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="card-grid">
            {cardsData.map(card => (
              <Link key={card.id} to={`/card/${card.id}`}>
                <Card {...card} />
              </Link>
            ))}
          </div>
        </Route>
        <Route path="/card/:id">
          <AnotherPage cardsData={cardsData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default p2;
