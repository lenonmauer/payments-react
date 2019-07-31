import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <div>Dashboard</div>
      <Link to="/payment">Ir para o pagamento</Link>
    </Container>
  );
}

export default Dashboard;
