# 超文本标记语言 HTML

## 新技术需要尝试

- [渐进增强的 avif 格式图片 > webp > jpeg](https://darekkay.com/blog/avif-images/)

```html
<picture>
  <source type="image/avif" srcset="cow.avif" />
  <source type="image/webp" srcset="cow.webp" />
  <img src="cow.jpg" srcset="cow.png" alt="Cow" />
</picture>
```

转换工具

1. [squoosh](https://squoosh.app/)
1. Squoosh也可以作为[CLI](https://www.npmjs.com/package/@squoosh/cli)工具使用

```bash
squoosh-cli --avif '{speed: 2}' cow.jpg
```

1. [ImageMagick](https://imagemagick.org/index.php)

```bash
convert -quality 75 cow.jpg cow.avif
```
