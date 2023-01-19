// https://osakinishitsurei.home.blog/2019/06/17/node-js%E3%81%AEfilesystem%E3%81%A7%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%81%8B%E3%82%89%E7%94%BB%E5%83%8F%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89/
// https://qiita.com/kobake@github/items/2a8e691d4755a9601b20

const rp = require('request-promise');
const fs = require('fs');
const readline = require('readline');

// gyazoのurl一覧を取得
// ./gyazo.list は事前に $ make で作成しておくこと
const stream = fs.createReadStream('./gyazo.list', { encoding: 'utf-8', highWaterMark: 1024 });
const reader = readline.createInterface({input: stream});

reader.on("line", (data) => {
	// https://qiita.com/nagimaruxxx/items/c2f186a2df5e32233122
	const url = data.match(/https?:\/\/[-_.!~*\'a-zA-Z0-9;\/?:\@&=+\$,%#]+/g)[0];
	// https://qiita.com/gorton/items/ded2d128ded9c9f732e8
	const filename = url.match(".+/(.+?)([\?#;].*)?$")[1];
	const file = fs.createWriteStream(`./gyazo/${filename}`);
	console.log(`Downloading ... ${url} => ${filename}`);
	rp(url).pipe(file);
	return
});

