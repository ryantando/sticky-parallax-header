import { Dimensions, Platform } from 'react-native'

export function isIphoneX() {
  const dimen = Dimensions.get('window')

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  )
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  }

  return regularStyle
}

export function getSafelyScrollNode(scrollNode) {
  // after react-native 0.62
  if (scrollNode && scrollNode.scrollTo) return scrollNode

  // before react-native 0.62
  return scrollNode.getNode()
}
