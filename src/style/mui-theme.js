import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from "material-ui/styles/spacing";
import zIndex from "material-ui/styles/zIndex";

import {
  white,
  black,
  darkBlack,
  fullBlack,
  blueGrey500,
  blueGrey300,
  blueGrey100,
  blue500,
  blue600,
  red200,
  red500,
  red700,
  green50,
  green100,
  green500,
  green900,
  grey50,
  grey100,
  grey200,
  grey300,
  grey400,
  grey500,
  grey600,
  grey700,
  grey800,
  grey900,
  cyan50,
  cyan100,
  cyan400,
  cyan500,
  cyanA200,
  yellow600,
  yellow700,
  lightBlue500,
  lightGreen600,
  lightGreen400,
  orange500,
  orange800
} from 'material-ui/styles/colors';

export const CompanyColors = {
  primaryAppColor   : '#244A5D',
  bsaBlue           : '#3399CC',
  accentColor       : "#93C42D",
  transparentAccent : fade('#93C42D', .5)
};

export const Palette = {
  // Material UI Property Names
  primary1Color: blueGrey500,
  primary2Color: blueGrey300,
  primary3Color: blueGrey100,
  accent1Color: CompanyColors.accentColor,
  accent2Color: CompanyColors.transparentAccent,
  accent3Color: cyan100,
  textColor: grey800,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey400,
  bodyColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: cyan500,
  shadowColor: fullBlack,

  // Custom color names
  dangerColor: red500,
  safeColor: green500,
  dangerColorLight: red200,
  activeColor: cyanA200,
  textColorLight: grey600,
  textColorLighter: grey500,
  textColorLightest: grey300,
  alternateTextColorLight: grey300,
  textColorDanger: red500,
  textColorWarning: orange500,
  primaryAppColor: CompanyColors.primaryAppColor ,
  addContentColor: CompanyColors.accentColor,
  addContentColorMuted: CompanyColors.transparentAccent,
  newColor: lightBlue500,
  bsaBlue: CompanyColors.bsaBlue,
  tabBackground: grey200,
  tabBackgroundSelected: white,
  tabColor: grey600,
  tabColorSelected: grey900,
  tabBorderColor: grey300,
  tabHoverBackgroundColor: blueGrey100,
  tableRowStripeColor: grey100,
  textAreaColor: grey100,
  activeTableRowColor: cyan50,
  acceptedResponseBackground: green50,
  acceptedResponseText: green900,
  disabledResponseBackground: '#f5f5f5',
  disabledResponseText: grey400,
  requestBackground: blueGrey500,
  requestColor: grey50,
  responseDivider: blueGrey100,
  termBoxBackground: green100,
  acceptedTermsBoxBackground: lightBlue500,
  acceptedText: lightGreen600,
  white,
  black,
  blue600,
  lightGreen400,
  grey100,
  grey200,
  grey300,
  grey400,
  grey500,
  grey600,
  grey700,
  grey800,
  grey900,
  cyan400,
  lightGreen400,
  pct18: 'rgba(0,0,0,0.18)',
  pct48: 'rgba(0,0,0,0.48)',
  pct54: 'rgba(0,0,0,0.54)',
  pct66: 'rgba(0,0,0,0.66)',
  pct72: 'rgba(0,0,0,0.72)',
  notePadYellow: 'rgb(255, 252, 205)',
  cardHeaderBorder: '#BDBDBD',

  // Serviceability status color names
  orderGoodStatus: 'rgb(0, 151, 167)',
  orderBadStatus: 'rgb(213, 0, 0)',
  orderCompletedStatus: 'rgb(13, 71, 161)',
  orderGoodStatusBackground: 'rgba(0, 151, 167, 0.3)',
  orderBadStatusBackground: 'rgba(213, 0, 0, 0.3)',
  orderCompletedStatusBackground: 'rgba(13, 71, 161, 0.3)',
  acceptedStatus: lightBlue500,
  serviceableStatus: green500,
  unsubmittedStatus: grey500,
  noResponseStatus: grey600,
  pendingStatus: yellow600,
  pendingStatusText: yellow700,
  unserviceableStatus: red700,
  defaultStatus: grey300,

  // deprecated serviceability status color names
  confidenceGreen: green500,
  confidenceRed: red700,
  confidenceYellow: yellow600,
  confidenceYellowText: yellow700 ,
  acceptedBlue:lightBlue500,
  unSubmittedLightGrey: grey500 ,
  noResponseGrey:grey600,
  badgeAccepted:lightBlue500,
  badgeAvailable:green500,
  badgeYellow:yellow600,
  badgeRed:'#D33232', // Not found in color palette
  badgeNotSubmitted: white,
  badgeNoResponse:grey600,
  badgeDefault:grey300,

  // deprecated (don't use)
  saveGreen: CompanyColors.saveGreen,  // accent1Color
  saveGreenLight: "rgba(#93c42d, 0.5)", // accent2Color
  bsaGrey: grey600, // grey600
  partnerTextColor: CompanyColors.primaryAppColor // primaryAppColor
};

export const shadow = {
  button: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  paper: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  thumb: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.5) 0px 1px 4px'
};

export const transition = {
  drawer: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
};

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: Palette,
  shadow,
  transition
};
