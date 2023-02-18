'use strict';

//正常に処理が終了した時=>resolve()を使う
//処理でエラーが起きた時=>reject()を使う
//then()->reslove()に対応

//Promiseの結果を使って更にPromiseつなげる=>Promiseチェーン
new Promise((resolve) => {
    const nowDate = new Date();
    resolve(nowDate);
})
    .then((v1) => {
        //v1 は 現在の時刻情報
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        return new Promise((resolve) => {
            resolve(monthAndDate);
        });
    })
    .then((v2) => {
        //v2 は 日付の情報
        const text = `今日は${v2.month+1}月${v2.date}日です。`;
        return new Promise((resolve) => {
            resolve(text);
        });
    })
    .then((v3) => {
        //v3 は 日付を示す文章
        console.log(v3);    //今日の日付に関する文章が出力される
    })