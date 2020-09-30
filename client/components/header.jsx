import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'home':
        this.props.setView('catalog', {});
        break;
      case 'cart':
        this.props.setView('cart', {});
    }
  }

  render() {
    const items = this.props.cartItemCount;
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="container">
          <a className="navbar-brand header" id="home" href="#" onClick={this.handleClick}>
           $ Wicked Sales
          </a>
          <div className="cart" id="cart" onClick={this.handleClick}>
            {items} Item{items === 1 ? '' : 's'}
            <i className="fas fa-shopping-cart ml-2"></i>
          </div>
        </div>
      </nav>
    );
  }
}
