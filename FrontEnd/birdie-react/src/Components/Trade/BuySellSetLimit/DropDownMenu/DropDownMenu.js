import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { Currencies } from './Currencies'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropDownMenu = () => (
  <Dropdown placeholder='Currencies' search selection options={Currencies} />
)

export default DropDownMenu
