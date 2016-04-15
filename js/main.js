var ColorButton = React.createClass({
  red: function() {
    {this.props.redClick()};
  },

  green: function() {
    {this.props.greenClick()};
  },

  white: function() {
    {this.props.whiteClick()};
  },

  makeButton: function() {
    if (this.props.children=="white") {
      return (
        <button onClick={this.white}
          className="white btn-floating waves-effect waves-light">
        </button>
      );
    } else if (this.props.children=="red") {
      return (
        <button onClick={this.red}
          className="red btn-floating waves-effect waves-light">
        </button>
      );
    } else if (this.props.children=="green") {
      return (
        <button onClick={this.green}
          className="green btn-floating waves-effect waves-light">
        </button>
      );
    }
  },

  render: function() {
    return(<div>{this.makeButton()}</div>);
  }
});

var MyButton = React.createClass({

  clicked: function() {
    this.props.clickHandler();
  },

  render: function() {
    return(
      <div>
        <button onClick={this.clicked}
          className="btn btn-floating waves-effect waves-light">
          <i className="material-icons">create</i>
        </button>
      </div>
    );
  }
});

var MyComponent = React.createClass({

  getInitialState: function() {
    return {
      showText: true,
      colors: "whitetext"
    };
  },

  handleButtonClick: function() {
    if (this.state.showText==true) {
      this.setState({showText: false});
    } else {
      this.setState({showText: true});
    }
  },

  redClickHandler: function() {
    this.setState({colors: "redtext"})
  },

  greenClickHandler: function() {
    this.setState({colors: "greentext"})
  },

  whiteClickHandler: function() {
    this.setState({colors: "whitetext"})
  },

  renderText: function() {
    if (this.state.showText==true) {
      return (<span>{this.props.text}</span>);
    } else {
      return (<span></span>);
    }
  },

  render: function() {
    return(
      <div className='container'>

          <MyButton className="btn" clickHandler={this.handleButtonClick}></MyButton>
          <ColorButton redClick={this.redClickHandler}>red</ColorButton>
          <ColorButton whiteClick={this.whiteClickHandler}>white</ColorButton>
          <ColorButton greenClick={this.greenClickHandler}>green</ColorButton>

        <p className={this.state.colors}>{this.renderText()}</p>
      </div>
    );
  }
});

React.render(<MyComponent
  text="'Reading makes a full Man, Meditation a profound Man, Discourse a clear Man.' - Benjamin Franklin">
  </MyComponent>,
  document.getElementById('content')
);

