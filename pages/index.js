import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {

  constructor() {
    super();

    this.state = {}
  }
  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    console.log('render');

    return (
      <BaseLayout>
        <h1>I am the Index Page</h1>
      </BaseLayout> 
    )
  }
}

export default Index;