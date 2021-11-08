"use strict";

$(document).ready(function(){

    // タイマー変数を宣言、初期化
    const nowTime = {
        hour: 0, minute: 0, second: 0, msecond: 0
    };

    // 関数定義
    let timeCounter = null;
    // 画面に時間を表示する処理関数
    const displayTime = () =>{
        
        // ディスプレイ表示用の文字列を宣言
        const  dispTime= {
            smsecond: "00", ssecond: "00", sminute: "00", shour: "00"
        }
        // 数値型を文字列方に変更、数字２桁で表示
        dispTime.smsecond = ("00" + nowTime.msecond).slice(-2);
        dispTime.ssecond = ("00" + nowTime.second).slice(-2);
        dispTime.sminute = ("00" + nowTime.minute).slice(-2);
        dispTime.shour = ("00" + nowTime.hour).slice(-2);
        $(".msecond").text(dispTime.smsecond);
        $(".second").text(dispTime.ssecond);
        $(".minute").text(dispTime.sminute);
        $(".hour").text(dispTime.shour);
    };

    // スタートボタンを押した時の処理
    $(".start").click(function(){

        // 10msごとにカウントアップ処理
        timeCounter = setInterval(function(){
            const  dispTime= {
                smsecond: "00", ssecond: "00", sminute: "00", shour: "00"
            }

            // カウントアップメイン処理
            nowTime.msecond += 1;
            if (nowTime.msecond === 100) {
                nowTime.second += 1;
                nowTime.msecond = 0;
            }
            if (nowTime.second === 60) {
                nowTime.minute += 1;
                nowTime.second = 0;
            }
            if(nowTime.minute === 60){
               nowTime.hour += 1;
               nowTime.minute = 0;
            }

            // 画面出力
            displayTime();
        }, 10);

        // ボタンの活性/非活性を設定    
        $(this).prop("disabled", true);
        $(".reset").prop("disabled", true);
        $(".stop").prop("disabled", false);
    });

    // ストップボタンを押した時の処理    
    $(".stop").click(function(){

        // カウントアップ処理を終了
        clearInterval(timeCounter);

        // ボタンの活性/非活性を設定
        $(this).prop("disabled", true);
        $(".start, .reset").prop("disabled", false);            
    });

    // リセットボタンを押した時の処理
    $(".reset").click(function(){

        // タイマーを0クリア
        nowTime.msecond = 0;
        nowTime.second = 0;
        nowTime.minute = 0;
        nowTime.hour = 0;

        // 画面出力
        displayTime();

        // ボタンの活性/非活性を設定
        $(this).prop("disabled", true);
        $(".stop").prop("disabled", true);
        $(".start").prop("disabled", false); 
    })

});