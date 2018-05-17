import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { Currencies } from './Currencies'

const DropDownMenu = () => (
    <Dropdown placeholder='Currencies' search selection options={Currencies} />
)

export default DropDownMenu