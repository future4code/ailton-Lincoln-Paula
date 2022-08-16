import { extendTheme } from "@chakra-ui/react"
import {primaryColor, neutralColor} from './colors'

const theme = extendTheme({
  colors: {
    brand: {
      100: "rgb(255, 69, 0)",
      200: "#0079D3",
    },
  },
})

export default theme