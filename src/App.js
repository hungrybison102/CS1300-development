import logo from './logo.svg'
import bakeryData from './assets/bakery-data.json'
import BakeryItem from './BakeryItem'
import { useState } from 'react'
import Button from '@mui/material/Button'
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
  const [cart, changeCart] = useState([])
  const [total, changeTotal] = useState(0)
  const [sortSetting, changeSortSetting] = useState(true)
  const [veganSetting, changeVeganSetting] = useState(0)
  const [nutSetting, changeNutSetting] = useState(0)

  const handleDelete = (item, index) => {
    changeCart(cart.filter((_, i) => i !== index))

    changeTotal(total - item.price)
  }
  const handleClick = item => {
    changeCart([...cart, item])
    changeTotal(total + item.price)
  }
  const handleSort = () => {
    if (sortSetting) {
      changeSortSetting(false)
      bakeryData = bakeryData.sort((a, b) => a.price - b.price)
    } else {
      changeSortSetting(true)
      bakeryData = bakeryData.sort((a, b) => b.price - a.price)
    }
  }
  const handleSettingsChange = (bool, i) => {
    if (i === 1) {
      changeVeganSetting(bool)
    } else if (i === 2) {
      changeNutSetting(bool)
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
        <ul style={{ textAlign: 'left', listStyleType:"none" }}>
          {cart.map((item, index) => (
            <li>
              {' '}
              <Button onClick={() => handleDelete(item, index)}>
                {item.name} <Clear></Clear>
              </Button>
            </li>
          ))}
        </ul>
      </div>
        </Grid>
        <Grid item sm={9}>
          <div className='bakerylist'>
            {bakeryData.map(
              (
                item,
                index // TODO: map bakeryData to BakeryItem components
              ) => {
                return (!veganSetting && !nutSetting) ||
                  (veganSetting && nutSetting && item.vegan && item.nutfree) ||
                  (veganSetting && item.vegan && !nutSetting) ||
                  (nutSetting && item.nutfree && !veganSetting) ? (
                  <span className='bakeryitem'>
                    <Button variant="outlined" style={{height:"40vh"}} onClick={() => handleClick(item)}>
                      <BakeryItem info={item} />
                    </Button>
                  </span>
                ) : (
                  <></>
                )
              }
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
