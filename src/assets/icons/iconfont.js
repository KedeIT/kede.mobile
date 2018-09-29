import styled,{injectGlobal} from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1538203933995'); /* IE9*/
  src: url('iconfont.eot?t=1538203933995#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAACOwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8iEhuY21hcAAAAYAAAABoAAABssuwncpnbHlmAAAB6AAAAhUAAAKIi3bFXGhlYWQAAAQAAAAALwAAADYSycg1aGhlYQAABDAAAAAcAAAAJAfeA4ZobXR4AAAETAAAAA4AAAAUFAAAAGxvY2EAAARcAAAADAAAAAwBUgGubWF4cAAABGgAAAAfAAAAIAEWAH1uYW1lAAAEiAAAAUUAAAJtPlT+fXBvc3QAAAXQAAAAOgAAAEz/cC4DeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeCT2rYW7438AQw9zA0AAUZgTJAQDn0wxxeJztkcENgDAIRR+1GtN4cozGBXpzIE+enZc1Ki09OISfPAI/hAMAMzAZhxFBboSmy1zp/kTqfuS0PrESCLpr1qJPrfCth8TmPLDp6Ltk4dfW8zm62K7n2J3Q7HS/OO07+jjICzO4GNd4nD1SMW/TQBS+7y6p46RxSVKf06Z2sZPYVAiaxIkjURHSog4BpQMTaguKEGoZ2VCFWszEVCEkJMRAhcTQqAtMTB268AOYkPgH/IFOxPCcQE939+597+777t47Jhj7EyaY6LIUy7ErjCU1OG4zaMiLRSFnX4dX1v2CBt2CYbdiv4UQwb2AOn/5b4ERQ6V0FtbkPHqBYCNWquDyUhwKliYGzxAS2I0e5/3FoIcuHQCjhvge4rs4YHlyOmiThAaF5GgmPb7XfwgxfHEwTPAHG29PU+JEOcWd6uHm/lCI4f7mYfXa+fHxecyljLleE5fOPLbG+myL7bCnxEtcOaKs1e1anTRytTrJiNmpMvmO28o1g7ZtQUdblwbtoy0d3Ixt6/912sEKGkY9zo3SWITiuc4MvHbge+NAjHuFpuuVNZiwcdfzAd/Dr4nNWjJ6Ly1LYlda0ScdM9qybV7NpjOzcwt8Z6O/y7HwBelVFShWisVkYm5aEymhTRcTySdIraZ5jOO3JX9IC7f4ZyIdvZqQ8z2yozdj+hOKgsR+elv5lJIF0koil7nvyhvO+jbn2+vOSk9VddOcF2ZG4VzJmGJ5DOjcNUzANJ6Pa3ImvtHfWGRMhesomJKGH2fQb3VA75WG7sd5pEl8jQbpYjoaaJpco6oe0YhL/YHGbanhHT6qajS4VObREUFhqVothXH1H/EyY38BfFNu1AAAAHicY2BkYGAA4u+2mZPi+W2+MnCzMIDA9atOsgj6fwMLA3MdkMvBwAQSBQApgwoEAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAABEAGoBDgFEeJxjYGRgYGBlKGRgZwABJiDmAkIGhv9gPgMAFHsBlAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYElObGohLsgtag4P083LTMnh60gPxPIZsnIz01lYAAAtL8KmgAA') format('woff'),
  url('iconfont.ttf?t=1538203933995') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1538203933995#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
export const CartIcon = styled.i.attrs({
  className:"iconfont"
})`
  &::before { content: "\\e67c"; }
`
export const PersonIcon = styled.i.attrs({
  className:"iconfont"
})`
  &::before { content: "\\e612"; }
`
export const PoisonIcon = styled.i.attrs({
  className:"iconfont"
})`
  &::before { content: "\\e639"; }
`

