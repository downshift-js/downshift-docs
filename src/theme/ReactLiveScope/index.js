import React from 'react'
import Downshift, {
  useCombobox,
  useSelect,
  useMultipleSelection,
} from 'downshift'
import cx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {
  Box,
  Button,
  IconButton,
  Input,
  FormLabel,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import Frame, {useFrame} from 'react-frame-component'
import {useVirtual} from 'react-virtual'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  Downshift,
  useCombobox,
  useMultipleSelection,
  useSelect,
  cx,
  Box,
  ExpandMoreIcon,
  ExpandLessIcon,
  IconButton,
  Button,
  Input,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Frame,
  useFrame,
  useVirtual,
  ...React,
}
export default ReactLiveScope
