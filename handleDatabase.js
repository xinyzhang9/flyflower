var data = require('./data/poetry.json');
var fs = require('fs');
console.log(data.length);
var blacked = [
'闫弘轩',
'夏清男',
'戴望舒',
'食指',
'闻捷',
'陈敬容',
'董必武',
'冯至',
'戈壁舟',
'柯原',
'流沙河',
'无名诗人587',
'海子',
'何其芳',
'李季',
'田间',
'张立新',
'陈前勇',
'吴昌澡',
'玄之',
'于右任',
'汪国真',
'艾青',
'宗白华',
'郑愁予',
'席慕容',
'闻一多',
'马君武',
'穆旦',
'郭沫若',
'峻德',
'方文山',
'冰心',
'郁达夫',
'鲁迅',
'陈梦家',
'金庸',
'邓玉宾',
'臧克家',
'胡适',
'章太炎',
'熙让',
'樊增祥',
'柯原',
'林夕',
'余光中',
'李大钊',
'戈壁舟',
'徐志摩',
'宋玉',
'孙中山',
'北岛',
'力量的力'
];

var res = [];
for(d of data){
	if(blacked.indexOf(d.d_author) < 0){
		res.push(d);
	}
}
console.log(res.length);
fs.writeFile('./data/p2.json', JSON.stringify(res), 'utf8');
