// started based off of this website: https://reactjs.org/docs/add-react-to-a-website.html

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e (
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#symbol_lookup_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
