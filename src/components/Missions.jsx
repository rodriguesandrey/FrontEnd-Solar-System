import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const other = 'Missões';
    return (
      <div data-testid="missions">
        <Title
          headline={ other }
        />
      </div>
    );
  }
}

export default Missions;
