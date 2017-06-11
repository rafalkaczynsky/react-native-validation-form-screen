import {colors} from '../resources'

export default StyleSheet => StyleSheet.extend({
    container: {
    height: 38,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
    marginBottom: 40,
    marginTop: 40,
  },
    titleText:{
    color: colors.white,
    lineHeight: 17,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    },
})