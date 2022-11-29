import logo from './logo.svg'
import bakeryData from './assets/bakery-data.json'
import BakeryItem from './BakeryItem'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Cart from './Cart'
import {
  Grid,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material'
import { ArrowDownward, ArrowUpward, Clear } from '@mui/icons-material'

bakeryData = bakeryData.sort((a, b) => b.price - a.price)
function App () {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [sortSetting, setSortSetting] = useState(true)
  const [veganSetting, setVeganSetting] = useState(0)
  const [nutSetting, setNutSetting] = useState(0)
  const [bakeryList, setBakeryList] = useState(bakeryData)

  const handleClick = item => {
    setCart([...cart, item])
    setTotal(total + item.price)
  }
  const handleSort = () => {
    if (sortSetting) {
      setSortSetting(false)
      setBakeryList(bakeryList.sort((a, b) => a.price - b.price))
    } else {
      setSortSetting(true)
      setBakeryList(bakeryList.sort((a, b) => b.price - a.price))
    }
  }
  const handleDelete = (item, index) => {
    setCart(cart.filter((_, i) => i !== index))

    setTotal(total - item.price)
  }
  const handleSettingsChange = (bool, i) => {
    if (i === 1) {
      setVeganSetting(bool)
    } else if (i === 2) {
      setNutSetting(bool)
    }
  }
  return (
    <div className='App'>
      <h1>My Bakery</h1>
      <h2>click an item to add it to the cart!</h2>
      <br></br>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button onClick={handleSort}>
              Sort by price {sortSetting && <ArrowDownward></ArrowDownward>}
              {!sortSetting && sortSetting != null && (
                <ArrowUpward></ArrowUpward>
              )}
            </Button>
          </ButtonGroup>
          <FormGroup style={{ alignItems: 'center' }}>
            <br></br>
            <h2>Filter by</h2>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={e => handleSettingsChange(e.target.checked, 1)}
                />
              }
              label='vegan items'
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={e => handleSettingsChange(e.target.checked, 2)}
                />
              }
              label='nut-free items'
            />
          </FormGroup>
          <h2>Cart</h2>
          total: ${parseFloat(total.toFixed(2))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
              <Cart
                info={{
                  cart: cart,
                  deleteFunction: handleDelete
                }}
              ></Cart>
            </ul>
          </div>
        </Grid>
        <Grid item sm={9}>
          <div className='bakerylist'>
            {bakeryList
              .filter(
                item =>
                  (!veganSetting && !nutSetting) ||
                  (veganSetting && nutSetting && item.vegan && item.nutfree) ||
                  (veganSetting && item.vegan && !nutSetting) ||
                  (nutSetting && item.nutfree && !veganSetting)
              )
              .map(item => (
                <span className='bakeryitem'>
                  <Button
                    variant='outlined'
                    style={{ height: '40vh' }}
                    onClick={() => handleClick(item)}
                  >
                    <BakeryItem info={item} />
                  </Button>
                </span>
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
