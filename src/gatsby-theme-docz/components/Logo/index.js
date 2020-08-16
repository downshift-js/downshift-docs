/** @jsx jsx */
import {jsx, Flex} from 'theme-ui'
import {Link} from 'docz'

import logo from './downshift.svg'
import * as styles from './styles'

export const Logo = () => {
  return (
    <Link to="/" sx={styles.link}>
      <Flex sx={styles.logo} data-testid="logo">
        <img src={logo} sx={styles.image} alt="Downshift Logo" />
        Downshift
      </Flex>
    </Link>
  )
}
