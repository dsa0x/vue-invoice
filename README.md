# vue-invoice

A simple, light and configurable Invoice component for Vue

### Installation

```
npm install vue-invoice
yarn add vue-invoice
```

### Usage

### Global registration

Import the component and register with vue.
Ensure to add vuex store as options

```
import Vue from 'vue'
import Invoice from 'vue-invoice'

Vue.use(Invoice, { store } )

```

### Sample

You can set a custom currency. it is set to USD by default

```
<!--vue template-->
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

  <script>
export default {
  name: "App",
  data() {
    return {
      company: {
        name: "My Company",
        address: "38, Bayreuther Straße, 60306, Frankfurt, Hesse, Germany."
      },
      invoice: {
        id: "",
        items: [
          {
            description: "Macbook 2019 Pro Touchbar 16'",
            price: "4000",
            quantity: "2"
          },
          {
            description: "Ford Fusion 2020",
            price: "25000",
            quantity: "1",
            tax: 5    //Optional
          }
        ],
        dueDate: "12.2.20"
      },
      customer: {
        name: "Stefan Doe",
        email: "stefandoe@aol.com",
        description: "Steafanie GmbH"
      },
      logo: ""
    };
  }
};
</script>

```

### Complete Props table

| Props    | Type    | Content                                  | Default   | Required |
| -------- | ------- | ---------------------------------------- | --------- | -------- |
| variant  | Integer | Color Variant id                         | 1         | No       |
| currency | String  | currency code                            | USD       | No       |
| company  | Object  | company name and address                 | undefined | Yes      |
| customer | Object  | customer name, company and email address | undefined | Yes      |
| invoice  | Object  | invoice items, invoice id & due date     | undefined | Yes      |

### License

This project is licensed under the MIT License.
