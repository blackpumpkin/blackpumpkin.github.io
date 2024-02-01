---
title: Steam自动探索队列
reprint: false
tags: steam
categories: 网络技巧
cover: 'https://figure.pages.dev/img/83200696_p0.jpg'
background: 'url(https://figure.pages.dev/img/83200696_p0.jpg)'
abbrlink: e70c1929
date: 2024-01-01 18:41:10
updated:
description:
swiper_index:
password:
---
{% note default flat %}
参考教程：[Steam探索队列 控制台版, 无视限区游戏](https://keylol.com/t157861-1-1)
{% endnote %}

# 一、控制台执行脚本
1.打开Steam商店主页并处于登陆状态（不会真有人不知道正版Steam主页是[这个](https://store.steampowered.com/)而不是XX管家、XX游戏中心一类的吧）
2.在Steam商店页面打开浏览器控制台, 此处以chrome浏览器为例，chrome是F12键，切换到`控制台`一栏（英文界面为`console`一栏）
3.将下面的代码复制到浏览器的控制台回车运行即可。
```JavaScript
(function _exec(){
var appids, 
    running = true, 
    queueNumber, 
    progressDialog = ShowAlertDialog('探索中', $J('<div/>').append($J('<div/>', {'class': 'waiting_dialog_throbber'}) ).append( $J('<div/>', {'id': 'progressContainer'}).text('获取进度...') ), '停止').done(abort);
function abort(){
  running = false;
  progressDialog.Dismiss();
}
function retry(){
  abort();
  ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(_exec)
}
function clearApp(){
  if(!running)
    return;
  showProgress();
  var appid = appids.shift();
  !appid ? generateQueue() : $J.post( appids.length ? '/app/' + appid : '/explore/next/', {sessionid: g_sessionID, appid_to_clear_from_queue: appid} ).done(clearApp).fail(retry); 
}
function generateQueue(){
  running && $J.post('/explore/generatenewdiscoveryqueue', {sessionid: g_sessionID, queuetype: 0}).done(beginQueue).fail(retry);
}
function beginQueue(){
  if(!running)
    return;
  $J.get('/explore/').done(function(htmlText){
    var cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/);
    if( !cardInfo ){
      abort();
      ShowAlertDialog('完成','已完成全部3轮探索队列');
      return;
    }
    var matchedAppids = htmlText.match(/0,\s+(\[.*\])/);
    if( !matchedAppids ){
      retry();
      return;
    }
    appids = JSON.parse(matchedAppids[1]);
    queueNumber = cardInfo[1];
    appids.length == 0 ? generateQueue() : clearApp();
    showProgress();
  })
}
function showProgress(){
  $J('#progressContainer').html( '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appids.length + '个待探索游戏' );
}
beginQueue();
}())
```
理论上是支持所有浏览器控制台的, 也不会遇到游戏限区的问题。
tips: 在控制台输入行按键盘的上箭头(↑)可快速输入上次运行过的命令。

# 二、Tampermonkey自动执行脚本
{% note info flat %}
篡改猴(或称油猴，Tampermonkey) 是拥有超过 1000 万用户的最流行的浏览器扩展之一，它允许用户自定义并增强您最喜爱的网页的功能。用户脚本是小型JavaScript程序，可用于向网页添加新功能或修改现有功能。使用篡改猴，您可以轻松在任何网站上创建、管理和运行这些用户脚本。
篡改猴分为黑色的Tampermonkey和红色的Tampermonkey BETA，后者为为先行测试的BETA版本，拥有最新的Tampermonkey功能，但是会有未知bug，因此我们选择前者执行脚本。
{% endnote %}

## 1.为浏览器安装Tampermonkey
仍然以chrome浏览器为例，我们可以去脚本的官方网站下载，也可去chrome官方的扩展中心下载。
[点我进入篡改猴官方](https://www.tampermonkey.net/)
[点我进入chrome商店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?utm_source=ext_app_menu)

## 2.在Tampermonkey内保存并执行脚本
进入Tampermonkey的`管理面板`中，点击已安装脚本左侧的方框加号，将以下代码复制其中，`文件`——`保存`即可。
```JavaScript
// ==UserScript==
// @name         Steam自动探索队列
// @namespace    https://keylol.com/t157861-1-1
// @version      0.1
// @description  Steam节庆活动用脚本，自动探索3次队列。
// @author       baodongsun
// @match        https://store.steampowered.com/
// @grant        SteamCN
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();(function _exec(){
var appids, 
    running = true, 
    queueNumber, 
    progressDialog = ShowAlertDialog('探索中', $J('<div/>').append($J('<div/>', {'class': 'waiting_dialog_throbber'}) ).append( $J('<div/>', {'id': 'progressContainer'}).text('获取进度...') ), '停止').done(abort);
function abort(){
  running = false;
  progressDialog.Dismiss();
}
function retry(){
  abort();
  ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(_exec)
}
function clearApp(){
  if(!running)
    return;
  showProgress();
  var appid = appids.shift();
  !appid ? generateQueue() : $J.post( appids.length ? '/app/' + appid : '/explore/next/', {sessionid: g_sessionID, appid_to_clear_from_queue: appid} ).done(clearApp).fail(retry); 
}
function generateQueue(){
  running && $J.post('/explore/generatenewdiscoveryqueue', {sessionid: g_sessionID, queuetype: 0}).done(beginQueue).fail(retry);
}
function beginQueue(){
  if(!running)
    return;
  $J.get('/explore/').done(function(htmlText){
    var cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/);
    if( !cardInfo ){
      abort();
      ShowAlertDialog('完成','已完成全部3轮探索队列');
      return;
    }
    var matchedAppids = htmlText.match(/0,\s+(\[.*\])/);
    if( !matchedAppids ){
      retry();
      return;
    }
    appids = JSON.parse(matchedAppids[1]);
    queueNumber = cardInfo[1];
    appids.length == 0 ? generateQueue() : clearApp();
    showProgress();
  })
}
function showProgress(){
  $J('#progressContainer').html( '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appids.length + '个待探索游戏' );
}
beginQueue();
}())
```
此时再次进入Steam主页，脚本就会自动进行探索队列。
当然我们可以略微修改代码，使脚本每日仅执行一次。
```JavaScript
// ==UserScript==
// @name         Steam自动探索队列（每日仅执行一次）
// @namespace    https://keylol.com/t157861-1-1
// @version      0.2
// @description  Steam节庆活动用脚本，自动探索3次队列，仅在每天第一次打开steam网页时执行。
// @author       baodongsun
// @license      MIT
// @match        https://store.steampowered.com/
// @grant        SteamCN
// ==/UserScript==
 
(function() {
    'use strict';
 
    var currentDate = new Date().toLocaleDateString();
    var lastExecutionDate = localStorage.getItem('lastExecutionDate');
 
    // 检查是否已经执行过脚本
    if (lastExecutionDate !== currentDate) {
        // 在这里编写你要执行的功能脚本代码
        (function _exec(){
            var appids,
                running = true,
                queueNumber,
                progressDialog = ShowAlertDialog('探索中', $J('<div/>').append($J('<div/>', {'class': 'waiting_dialog_throbber'}) ).append( $J('<div/>', {'id': 'progressContainer'}).text('获取进度...') ), '停止').done(abort);
 
            function abort(){
                running = false;
                progressDialog.Dismiss();
            }
 
            function retry(){
                abort();
                ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(_exec)
            }
 
            function clearApp(){
                if(!running)
                    return;
                showProgress();
                var appid = appids.shift();
                !appid ? generateQueue() : $J.post( appids.length ? '/app/' + appid : '/explore/next/', {sessionid: g_sessionID, appid_to_clear_from_queue: appid} ).done(clearApp).fail(retry);
            }
 
            function generateQueue(){
                running && $J.post('/explore/generatenewdiscoveryqueue', {sessionid: g_sessionID, queuetype: 0}).done(beginQueue).fail(retry);
            }
 
            function beginQueue(){
                if(!running)
                    return;
                $J.get('/explore/').done(function(htmlText){
                    var cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/);
                    if( !cardInfo ){
                        abort();
                        ShowAlertDialog('完成','已完成全部3轮探索队列');
                        return;
                    }
                    var matchedAppids = htmlText.match(/0,\s+(\[.*\])/);
                    if( !matchedAppids ){
                        retry();
                        return;
                    }
                    appids = JSON.parse(matchedAppids[1]);
                    queueNumber = cardInfo[1];
                    appids.length == 0 ? generateQueue() : clearApp();
                    showProgress();
                })
            }
 
            function showProgress(){
                $J('#progressContainer').html( '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appids.length + '个待探索游戏' );
            }
 
            beginQueue();
        })();
 
        // 更新最后执行时间
        localStorage.setItem('lastExecutionDate', currentDate);
    }
})();
```