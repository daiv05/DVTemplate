import { icons } from '@iconify-json/mdi'
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils'

const getSVG = (iconRequest) => {
  console.log('iconRequest', iconRequest)
  try {
    const iconData = getIconData(icons, iconRequest.name)
    if (!iconData) {
      throw new Error(`Icon "${iconRequest.name}" is missing`)
    }
    const renderData = iconToSVG(iconData, {
      height: iconRequest.size,
    })
    const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes)
    return svg
  } catch (err) {
    console.error(err, 'error icons-mdi')
    return null
  }
}

export { getSVG }
