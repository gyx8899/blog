# CSS 特殊用法

<!-- toc -->

## 精选技巧

- Website: Support dark mode
> When your system uses Dark Mode (System Preferences -> General -> Appearance -> Dark)

```css
body {
    color: black;
    background: white;
}

@media (prefers-color-scheme: dark) {
    body {
        color: white;
        background: black;
    }
}
```

