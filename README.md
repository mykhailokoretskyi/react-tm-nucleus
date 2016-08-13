# README
React controlled components for tm-nucleus

## Usage

#### Installation
```
npm install --save react-tm-nucleus
```

#### In the code:
```
import {TextInput, Dropdown, Button} from 'react-tm-nucleus';
```

## Form elements

* `Input` - basic input component. Renders \<input/\> and provides accessors through `ref` to state attributes.
* `TextInput` - `Input` wrapper;
* `EmailInput` - `Input` wrapper;
* `PasswordInput` - `Input` wrapper;
* `Select` - basic \<select\> component;
* `Dropdown` - wrapper of `Select`;

#### State attributes
* `type`
* `value`
* `checked`
* `disabled`
* `required`

#### Callback attributes
* `changeCallback`
* `clickCallback`
* `focusCallback`
* `blurCallback`
* `mouseEnterCallback`
* `mouseLeaveCallback`

*****************************

## Buttons

* `Button` - generic;
* `ButtonCTA` - wrapper of `Button`;
* `ButtonFull` - wrapper of `Button`;
* `ButtonStatic` - wrapper of `Button`;
* `ButtonAux` - wrapper of `Button`;
* `ButtonAuxSecondary` - wrapper of `Button`;
* `ButtonAuxFull` - wrapper of `Button`;
* `ButtonAuxMinor` - wrapper of `Button`;
* `ButtonOutlined` - wrapper of `Button`;
* `ButtonOutlinedStatic` - wrapper of `Button`;
* `ButtonOutlinedFull` - wrapper of `Button`;
* `Unbutton` - wrapper of `Button`;

#### Attributes
* `button` - if `true` - render `\<button\>` tag, if `false` (default) - `\<a\>`
* `disabled` - disables button, provides accessor, state attribute

#### Callback attributes
* `clickCallback`
* `focusCallback`
* `blurCallback`
* `mouseEnterCallback`
* `mouseLeaveCallback`

*****************************


## What`s next?

* input validators
* other components