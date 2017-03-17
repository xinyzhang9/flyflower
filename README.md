# Flyflower(飞花令)
Flyflower for Chinese poems is an interesting word game for players who knows Chinese culture well.  
Two players take turns to speak out a verse which contains a special character and see who fails to do that.  

飞花令，原本是古人行酒令时的一个文字游戏，源自古人的诗词之趣，得名于唐代诗人韩翃《寒食》中的名句“春城无处不飞花”。行飞花令时选用诗词曲中的句子，但选择的句子一般不超过七个字。  
## Example
The chosen character is **花**  
A: 春风得意马蹄疾， 一日看尽长安**花**。    
B: 夜来风雨声，**花**落知多少。  
A: ...

## Live
[live demo](https://xinyzhang9.github.io/flyflower/)
## Features
- [x] customized data structure to store poems| 高效数据结构
- [x] search algorithm in O(1) time | 常数级检索算法
- [x] full context display at anytime | 随时翻阅全篇
- [x] off-line collection of poems | 离线收藏功能
- [x] highlight key character | 高亮关键字
- [x] cache common key character | 缓存常见字

## License
GNU General Public License v3.0
## Technology
**Rxjs**: interact with user's input.  
**SQLite**: store original databases and is transformed to JSON before use.  

## Screenshot
![alt tag](https://raw.githubusercontent.com/xinyzhang9/flyflower/master/screen2.png)
