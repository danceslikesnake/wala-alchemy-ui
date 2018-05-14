---
description: A set of helper variables to help you build consistent UI.
---

# Helpers

## Constants

The variable `AUI_CONSTANTS` gives you access various device metrics and design system constants.

### gridBase

```javascript
AUI_CONSTANTS.gridBase
```

This is the standard unit of our vertical rhythm grid, which is 13dp



### gridBaseDense

```javascript
AUI_CONSTANTS.gridBaseDense
```

This is the unit for when a denser vertical rhythm is needed \(like fitting a lot of information in a smaller space\), which is 8dp.



### deviceWidth

```javascript
AUI_CONSTANTS.deviceWidth
```

This is the width of the user's screen, obtained via React Native's`Dimensions` API.



### deviceHeight

```javascript
AUI_CONSTANTS.deviceHeight
```

This is the full height of the user's screen, obtained via React Native's `Dimensions` API.



### pixelDensity

```text
AUI_CONSTANTS.pixelDensity
```

This gets the pixel density of the user's device, obtained via React Native's PixelRatio API. This is useful in case you need to scale certain Compounds or other UI for higher- or lower-end smartphones.



### statusBarHeight

```text
AUI_CONSTANTS.statusBarHeight
```

This grabs the height of the Status Bar on a user's device.



### availableHeight

```text
AUI_CONSTANTS.availableHeight
```

This grabs the _available height_ of a user's screen, subtracting the Status Bar and other native UI.



## Functions

The variable `AUI_FUNCTIONS` gives you access to a set of functions to make development easier

### gridBaseMultiplier\(\)

```jsx
AUI_FUNCTIONS.gridBaseMultiplier(multiplier, dense)
```

This function is calculates a value consistent with our grid base and vertical rhythm. Use this to set heights of Elements, Compounds and other UI, as well as spacing values like padding. Only use this to set bottom margin spacing if a [`<Spacer />`](elements/layout/spacer.md) Element won't suffice

| **argument** | **default** | **type** | **description** |
| --- | --- | --- |
| multiplier | 1 | number | a number to multiply against the grid base |
| dense | false | bool | determines whether to use the default or dense grid base |



