//引入 expense
const expenss = require('express');
const request = require('request');
// 创建应用对象
const app = expenss()
app.use(expenss.json());
app.use(expenss.urlencoded({
    extended: true
}));
app.use(expenss.static("./public"))
// 监听端口启动服务
app.get('/hello', (req, res) => {
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    let { word } = req.query;
    let reg = /[\da-z_]+\((.+)\)$/i;
    if (word) {
        request.get(
            "https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=" + encodeURI(word) + "&cb=gg",
            (err, a, body) => {
                if (err) {
                    res.send([])
                    return
                }

                let str = body.match(reg)[1];
                console.log(str);

                str = JSON.parse(str);
                console.log(str.g)
                if (str.g) {
                    // let dataArray = []
                    // str.g.forEach(item => {
                    //     dataArray.push(item);
                    // });
                    res.send(
                        str.g.map(item => item.q)
                    )
                }
            }

        );
    } else {
        //设置响应体
        res.send([]);
    }
})
app.listen(8000, () => {
    console.log("服务已启动，8000 监听中");
})


