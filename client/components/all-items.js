import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class AllItems extends Component {
  render() {
    let {items} = this.props
    let {sport} = this.props.match.params
    items = !sport ? items : items.filter((item) => item.sport === sport)
    return (
      <div id="items">
        {items.map((item) => {
          return (
            <div key={item.id} className="singleItem">
              <Link to={`/items/${item.id}`}>
                <img src={item.imageUrl} />
                <h2>{item.name}</h2>
                <div className="container-4">
                  <h3>Price: {item.price}</h3>
                  <h3>Quantity: {item.quantity}</h3>
                  {item.description ? <p>{item.description}</p> : ''}
                </div>
              </Link>
              <button type="button">Add Item To Cart</button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
})

export default connect(mapStateToProps)(AllItems)
