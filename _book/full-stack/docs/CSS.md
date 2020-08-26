# CSS

[TOC]

## Tricks

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


最后更新于2020年5月15日
