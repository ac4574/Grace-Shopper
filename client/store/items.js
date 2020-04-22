import axios from 'axios'

const GOT_ITEMS = 'GOT_ITEMS'
const CHECKOUT = 'CHECKOUT'

// GET ALL ITEMS
export const gotItems = (items) => ({
  type: GOT_ITEMS,
  items,
})

export const getItems = () => async (dispatch) => {
  const {data} = await axios.get('/api/items')
  dispatch(gotItems(data))
}

const defaultItems = []
export default function itemsReducer(state = defaultItems, action) {
  switch (action.type) {
    case GOT_ITEMS:
      return action.items
    case CHECKOUT:
      return action.items //HERE simulate backend model change
    default:
      return state
  }
}
