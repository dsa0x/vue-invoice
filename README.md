# vue-invoice

A simple Invoice component for Vue

### Installation

```
npm install vue-invoice
yarn add vue-slider-component
```

### Global registration

```
import Vue from 'vue'
import Invoice from 'vue-invoice'

Vue.use(Invoice, { store } )

```

### Usage

```
<template>
  <div id="app">
    <Invoice
      :company="company"
      :customer="customer"
      :invoice="invoice"
      :variant="1"
      currency="eur"
    />
  </div>
  </template>

```
