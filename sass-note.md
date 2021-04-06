
#### variable 
https://sass-lang.com/documentation/variables
```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

vs css var: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

```css
:root {
  --main-bg-color: brown;
}

.grid {
  color: white;
  background-color: var(--main-bg-color);
}
```
