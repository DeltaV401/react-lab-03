

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <form>
              <input name="{id}" value={this.props.text} />
            </form>
            <span id="{id}">{this.props.text}</span>
            <button onClick={editItem(this.props.id)}>edit</button>
            <button onClick={deleteItem(this.props.id)}>delete</button>
          </li>
        </ul>
      </>
    )
  }
}
