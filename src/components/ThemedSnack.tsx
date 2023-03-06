import * as React from 'react'
import {Snack} from 'mdx-embed'
import {useColorMode} from '@docusaurus/theme-common'

export const ThemedSnack = ({snackId}) => {
  const {colorMode} = useColorMode()

  return (
    <Snack
      snackId={snackId}
      theme={colorMode}
      platform="ios"
    />
  )
}
