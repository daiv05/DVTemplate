import { icons } from '@iconify-json/mdi'
import {
  getIconData,
  iconToSVG,
  iconToHTML,
  replaceIDs
} from '@iconify/utils'

const getSVG = (iconRequest) => {
  try {
    console.log('icons', icons)
    const iconData = getIconData(icons, iconRequest.name)
    if (!iconData) {
      throw new Error(`El icono "${iconRequest.name}" no existe`)
    }
    const { attributes, body } = iconToSVG(iconData, {
      height: iconRequest.size
    })
    return iconToHTML(replaceIDs(body), attributes)
  } catch (err) {
    console.error(err, 'error icons-mdi')
    return ''
  }
}

export { getSVG }
