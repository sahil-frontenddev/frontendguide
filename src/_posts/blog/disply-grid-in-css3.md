---
title: disply grid in css3
description: CSS Grid Layout is a powerful and modern CSS3 feature that
  simplifies web design by providing a grid-based structure. It’s the go-to
  layout system for developers aiming to create responsive and visually
  appealing designs. This guide will cover everything you need to know about CSS
  Grid, with examples and tips to optimize your website layout.
date: 2025-01-17T22:39:00.000Z
thumbnail: /images/uploads/css-grid-3.png
---
**Complete Guide to CSS Grid Layout**

CSS Grid Layout is a powerful and modern CSS3 feature that simplifies web design by providing a grid-based structure. It’s the go-to layout system for developers aiming to create responsive and visually appealing designs. This guide will cover everything you need to know about CSS Grid, with examples and tips to optimize your website layout.

### **What is CSS Grid Layout?**

CSS Grid Layout is a two-dimensional layout system in CSS3. It enables developers to design web pages using rows and columns, offering precise control over item placement and alignment.

### **Benefits of Using CSS Grid**

1. **Two-Dimensional Layouts:** Control rows and columns simultaneously.
2. **Responsive Design:** Adapt layouts to different screen sizes with ease.
3. **Alignment Options:** Align items vertically and horizontally effortlessly.
4. **Flexibility:** Design complex layouts without relying heavily on additional CSS or JavaScript.
5. **Simplified Code:** Reduce the need for floats or positioning hacks.

### **Basic Terminology in CSS Grid**

1. **Grid Container:** The parent element where the grid layout is applied.
2. **Grid Item:** Child elements of the grid container.
3. **Grid Lines:** Horizontal and vertical lines dividing the grid.
4. **Grid Tracks:** Rows and columns created by grid lines.
5. **Grid Area:** A rectangular space within the grid.

### **How to Use CSS Grid Layout**

#### **Step 1: Define a Grid Container**

To start using CSS Grid, apply `display: grid;` to the parent container.

#### **Step 2: Create Rows and Columns**

Define the number and size of rows and columns using `grid-template-rows` and `grid-template-columns`.

This example creates:

* 2 rows, each 100px tall.
* 2 columns: the first column takes up 1 fraction of the space, and the second takes 2 fractions.

### **Positioning Grid Items**

You can position items using these properties:

1. `grid-column-start`
2. `grid-column-end`
3. `grid-row-start`
4. `grid-row-end`

#### Example:

### **CSS Grid Properties Overview**

### **Responsive Design with CSS Grid**

CSS Grid makes creating responsive designs simple and efficient. For example, use the `repeat` function with `auto-fit` or `auto-fill`:

This layout adapts to available space, ensuring grid items are always properly sized.

### **Complete Example: CSS Grid in Action**

### **Browser Support for CSS Grid**

CSS Grid Layout is supported by all modern browsers, including:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

For older browsers, use fallbacks like Flexbox or ensure progressive enhancement.

### **Conclusion**

CSS Grid Layout is a game-changer for web developers, enabling the creation of stunning and responsive designs with ease. By mastering CSS Grid, you can simplify your layout code and create user-friendly interfaces. Start experimenting with CSS Grid today and take your web design skills to the next level!

PropertyDescription`display: grid;`Defines a container as a grid layout.`grid-template-columns`Specifies the size of each column.`grid-template-rows`Specifies the size of each row.`gap`Defines the space between grid items.`align-items`Aligns items along the block (vertical) axis.`justify-items`Aligns items along the inline (horizontal) axis.
