var MyButton = React.createClass({
  getInitialState: function() {
    return {coloring: "white"};
  },

  clicked: function() {
    this.props.clickHandler();
  },

// Maybe add color changing buttons later. - Icebox
  // red: function() {
  //   return {coloring: red};
  // },

  // green: function() {
  //   return {coloring: green};
  // },

  // white: function() {
  //   return {coloring: white};
  // },

  render: function() {
    return(
      <div>
      <button
        onClick={this.clicked}
        className="btn btn-floating waves-effect waves-light">
        <i className="material-icons">create</i>
      </button>
    </div>
      )
  }
});

var MyComponent = React.createClass({

  getInitialState: function() {
    return {
      showText: true,
      colors: ["white", "red", "blue"]
    };
  },

  handleButtonClick: function() {
    console.log("clicked!");
    if (this.state.showText==true) {
      this.setState({showText: false});
    } else {
      this.setState({showText: true});
    }
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
        <MyButton clickHandler={this.handleButtonClick}>
        </MyButton>

        <p>{this.renderText()}</p>
      </div>
    );
  }
});



React.render(<MyComponent text="I'm only borrowing your Humvee."></MyComponent>,
  document.getElementById('content')
);

