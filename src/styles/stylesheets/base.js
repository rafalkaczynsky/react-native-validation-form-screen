import {fontMaker, colors} from '../resources'

const singlePadding = 15
const doublePadding = singlePadding * 2
const halfMargin = 5
const singleMargin = 15
const doubleMargin = singleMargin * 2
const tripleMargin = singleMargin * 3

export default StyleSheet => StyleSheet.extend({
  application: StyleSheet.extend({
    statusBarStyle: 'light-content',

    style: {
      flex: 1
    }
  }),

  flex: {
    flex: 1
  },

  padding: {
    padding: 20
  },

  icon: {
    margin: 0,
    padding: 0
  },

  closeButton: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
  },

  text: {
 
    fontSize: 17,
    lineHeight: 22,
    color: colors.black,
    backgroundColor: colors.transparent
  },

  boldText: {
    fontWeight: 'bold'
  },

  highlightText: {
    color: colors.pink
  },

  halfMarginTop: {
    marginTop: halfMargin
  },

  singleMarginTop: {
    marginTop: singleMargin
  },

  doubleMarginTop: {
    marginTop: doubleMargin
  },

  halfMarginBottom: {
    marginBottom: halfMargin
  },

  singleMarginBottom: {
    marginBottom: singleMargin
  },

  doubleMarginBottom: {
    marginBottom: doubleMargin
  },

  halfMargin: {
    marginTop: halfMargin,
    marginBottom: halfMargin
  },

  singleMargin: {
    marginTop: singleMargin,
    marginBottom: singleMargin
  },

  doubleMargin: {
    marginTop: doubleMargin,
    marginBottom: doubleMargin
  },

  underlineRectangle: {
    height: 61,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey
  },

  singlePaddingBottom: {
    paddingBottom: singlePadding ,
  },

  singlePadding: {
    padding: singlePadding,
  },

  doublePaddingBottom: {
    paddingBottom: doublePadding,
  },

  androidJustifyToLeftTextInput: {
    paddingLeft: 0,
    marginLeft: -4,
  },

  singlePlusPaddingBottom: {
    paddingBottom: singlePadding + 10,
  },

  alignCenter: {
    textAlign: "center",
  },

  doubleLineHeight: {
    lineHeight: 20,
  },

  tripleMarginBottom: {
    marginBottom: tripleMargin,
  },

  singlePlusMarginRight: {
    marginRight: 20,
  },


  leftSmaller: {
    left: 50,

  },

  leftBigger: {
    left: 65,
    top: 2
  }

})
