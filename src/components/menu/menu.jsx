// External Imports
import React, { Component } from 'react'
import { Menu, Dropdown, DropdownItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const TopMenu = (WrappedComponent) => {
  class MenuExampleBasic extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.moveForward = this.moveForward.bind(this);
    }
    

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  moveForward = (time) =>{
    console.log(`Moving ${time} Minute`);
  }
  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu>
      <Link to='/'><Menu.Item>Home</Menu.Item></Link>
      <Dropdown text='Game' pointing className='link item'>
        <Dropdown.Menu>
        <Link to='/map' style={{ textDecoration: 'none' }}><Dropdown.Item>System Maps</Dropdown.Item></Link>
          <Dropdown.Divider />
          <Dropdown.Item>Ships</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>Forums</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item><button onClick={this.moveForward(1)}>1 Minute</button></Menu.Item>
    </Menu>
    <div>
      <WrappedComponent />
    </div>
    </div>
    )
  }
}
  return MenuExampleBasic
}

export default TopMenu;