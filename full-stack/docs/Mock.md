# Mock 规则示例

## 规则
```json
{
  "base": {
    "range": "@range(3, 7)",
    "string": "@string(7, 20)",
    "character": "@character('abcde')",
    "float": "@float(60, 100)",
    "integer": "@integer(60, 100)",
    "natural": "@natural(60, 100)",
    "boolean": "@boolean"
  },
  "date": {
    "date": "@date",
    "time": "@time",
    "datetime": "@datetime",
    "now": "@now"
  },
  "image": {
    "image": "@image('200x100', '#50B347', '#FFF'd, 'EasyMock')"
  },
  "color": {
    "color": "@color",
    "hex": "@hex",
    "rgb": "@rgb",
    "rgba": "@rgba",
    "hsl": "@hsl"
  },
  "text": {
    "paragraph": "@paragraph(1, 3)",
    "sentence": "@sentence(3, 5)",
    "word": "@word(3, 5)",
    "title": "@title(3, 5)",
    "cparagraph": "@cparagraph(1, 3)",
    "csentence": "@csentence(3, 5)",
    "cword": "@cword('零一二三四五六七八九十', 5, 7)",
    "ctitle": "@ctitle(3, 5)"
  },
  "name": {
    "first": "@first",
    "last": "@last",
    "name": "@name",
    "cfirst": "@cfirst",
    "clast": "@clast",
    "cname": "@cname"
  },
  "web": {
    "url": "@url",
    "domain": "@domain",
    "protocol": "@protocol",
    "tld": "@tld",
    "email": "@email",
    "ip": "@ip"
  },
  "address": {
    "region": "@region",
    "province": "@province",
    "city": "@city(true)",
    "county": "@county(true)",
    "zip": "@zip"
  },
  "helper": {
    "capitalize": "@capitalize('hello')",
    "upper": "@upper('hello')",
    "lower": "@lower('HELLO')",
    "pick": "@pick(['a', 'e', 'i', 'o', 'u'])",
    "shuffle": "@shuffle(['a', 'e', 'i', 'o', 'u'])"
  },
  "miscellaneous": {
    "id": "@id",
    "guid": "@guid",
    "increment": "@increment(1000)"
  }
}

{
  "string|1-10": "★",
  "string2|3": "★★",
  "number|+1": 202,
  "number2|1-100.1-10": 1,
  "boolean|1": true,
  "regexp": /[a-z][A-Z][0-9]/,
  "absolutePath": "@/string @/user/name",
  "user": {
    "name": "demo"
  },
  "object|2": {
    "310000": "上海市",
    "320000": "江苏省"
  },
  "array|1": [ "AMD" ]
}
{
  "string": "★",
  "string2": "★★★★★★",
  "number": 202,
  "number2": 71.73566,
  "boolean": false,
  "regexp": "qS8",
  "absolutePath": "★ demo",
  "user": {
    "name": "demo"
  },
  "object": {
    "310000": "上海市",
    "320000": "江苏省"
  },
  "array": "AMD"
}

{
  "string|1-2": "@string",
  "integer": "@integer(10, 30)",
  "float": "@float(60, 100, 2, 2)",
  "boolean": "@boolean",
  "date": "@date(yyyy-MM-dd)",
  "datetime": "@datetime",
  "now": "@now",
  "url": "@url",
  "email": "@email",
  "region": "@region",
  "city": "@city",
  "province": "@province",
  "county": "@county",
  "upper": "@upper(@title)",
  "guid": "@guid",
  "id": "@id",
  "image": "@image(200x200)",
  "title": "@title",
  "cparagraph": "@cparagraph",
  "csentence": "@csentence",
  "range": "@range(2, 10)"
}
{
  "string": "&b(V",
  "integer": 29,
  "float": 65.93,
  "boolean": true,
  "date": "2013-02-05",
  "datetime": "1983-09-13 16:25:29",
  "now": "2017-08-12 01:16:03",
  "url": "cid://vqdwk.nc/iqffqrjzqa",
  "email": "u.ianef@hcmc.bv",
  "region": "华南",
  "city": "通化市",
  "province": "陕西省",
  "county": "嵊州市",
  "upper": "DGWVCCRR TLGZN XSFVHZPF TUJ",
  "guid": "c09c7F2b-0AEF-B2E8-74ba-E1efC0FecEeA",
  "id": "650000201405028485",
  "image": "http://dummyimage.com/200x200",
  "title": "Orjac Kwovfiq Axtwjlop Xoggxbxbw",
  "cparagraph": "他明林决每别精与界受部因第方。习压直型示多性子主求求际后世。严比加指安思研计被来交达技天段光。全千设步影身据当条查需府有志。斗中维位转展新斯克何类及拉件科引解。主料内被生今法听或见京情准调就品。同六通目自观照干意音期根几形。",
  "csentence": "命己结最方心人车据称温增划眼难。",
  "range": [2, 3, 4, 5, 6, 7, 8, 9]
}
```
