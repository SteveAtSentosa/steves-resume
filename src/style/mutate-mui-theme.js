export default function mutateMuiTheme(theme) {
  const { palette: plt } = theme;
  theme.tableHeaderColumn.textColor = plt.textColor;
  theme.tableRow.stripeColor = plt.tableRowStripeColor;
  theme.toggle.trackOffColor = plt.grey400;
  theme.toggle.trackOnColor = plt.accent2Color;
  theme.toggle.thumbOffColor = plt.grey200;
  theme.toggle.thumbOnColor = plt.accent1Color;
  theme.toggle.labelColor = plt.textColorLighter;
  theme.radioButton.checkedColor = plt.accent1Color;
  theme.checkbox.checkedColor = plt.accent1Color;
  return theme;
}
