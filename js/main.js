var MyButton = React.createClass({
  getInitialState: function() {
    return {coloring: white};
  },

  clicked: function() {
    this.props.clickHandler
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
    return {showText: true};
  },

  handleButtonClick: function() {
    // TODO
  },

  render: function() {
    return(
      <div className='container'>
        <span>{this.props.text}</span>
      </div>
    );
  }
});



React.render(<MyComponent text="I'm only borrowing your Humvee."></MyComponent>,
  document.getElementById('content')
);

