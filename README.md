# teral-translate

The easiest way to make your react app multilingual 🌎🌍🌏

#### Features

* Automatically detect and translate text
* Edit and manage translations from a single interface
* Access to professional translators

#### Example

To get started, simply add this in your App:

```jsx
<Teral
  apiKey="APIKEY"
  sourceLanguage="SOURCELANGUAGE"
/>
```

* You can get your **APIKEY** by signing up at [https://app.teral.io/signup](https://app.teral.io/signup "https://app.teral.io/signup")
* **SOURCELANGUAGE** is the 2 digit language code (ISO 639-1 Code) that your app is currently in. Learn more [here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements). For a list of supported languages , please check [here ](https://teral.crunch.help/others/list-of-supported-languages).


## Table of Contents

* [Installation](#installation)
* [Setup](#setup)
* [Usage](#usage)

<br />

## Installation

Whatever floats your boat:

[npm](https://www.npmjs.com): `npm install teral-translate`

<br />

## Setup

#### Step 1: Get your ApiKey

Simply go to [https://app.teral.io/signup](https://app.teral.io/signup "https://app.teral.io/signup") and create an account .

* Create a project and specify the languages you would like your site translated in.
* Customize the language switcher position and appearance
* Grab your **ApiKey**


#### Step 2: Start translating

That is all! Simply add your **ApiKey** and your app is now multilingual. That's right no need to provide an existing mapping. New text will automatically be translated as they are detected.

If you need to edit the translations, you can do so from our [dashboard](https://app.teral.io/translations)

Continue reading below to see how to handle the various translation scenarios.

<br />

## Usage

The library can be imported in whatever way you find suitable:

```jsx
import Teral from 'teral-translate'

<Teral
  apiKey="ABCD"
  sourceLanguage="en"
/>
```
