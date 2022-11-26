import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const name = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title
          headline={ name }
        />
      </div>
    );
  }
}

export default SolarSystem;
