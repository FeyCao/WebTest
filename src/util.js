// JavaScript Document
var setLabelColor = function(gain){
    if(gain>0){
        return RedColor;
    }else if(gain == 0){
        return WhiteColor;
    }else {
        return GreenColor;
    }
};

var GetLength = function (str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

//js截取字符串，中英文都能用
//如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
//字符串，长度

/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if (str_length < len) {
        return str;
    }
}

function resumeBgSound(){
    cc.audioEngine.resumeMusic();
}

function pauseBgSound() {
    cc.audioEngine.pauseMusic();
}

function isBgMusicPlaying() {

    myObj.fun1FromAndroid("调用android本地方法fun1FromAndroid(String name)！！");
    return cc.audioEngine.isMusicPlaying()==true;
}

// cc.LoaderScene.preload(["res/title.png","res/battle_bg.png","res/sound/home_bg.mp3","res/sound/button.mp3","res/playerInfo_bg.png","res/rank_bg.png","res/rank1.png","res/rank2.png","res/rank3.png","res/ko.png","res/vs.png","res/zhanji_bg.png","res/close.png","res/line_bg.png","res/selected.png","res/rotate.png","res/rotate_shadow.png","res/bg_touxiang.png","res/touxiang.plist","res/touxiang.png","res/bg_control.png","res/btn_open.png","res/btn_close.png","res/bg_message.png","res/btn_login.png","res/btn_download.png","res/btn_general.png","res/btn_hd.png","res/btn_hd1.png","res/btn_general1.png","res/btnBuyDisable.png","res/btnBuyEnable.png","res/btnCloseBuy.png","res/btnCloseDisable.png","res/btnCloseSell.png","res/btnSellDisable.png","res/btnSellEnable.png","res/buyOpenTag.png","res/buyCloseTag.png","res/sellOpenTag.png","res/sellCloseTag.png","res/cursor.png","res/selectedBar.png","res/matchMoreEnd.png","res/matchEnd.png","res/btnEnd.png","res/meBtnReplay.png","res/meBtnAgain.png","res/btnStart.png","res/meBtnShare.png","res/btn_sc_d_normal.png","res/btn_sc_a_normal.png","res/btn_sc_d_double.png","res/btn_sc_a_double.png","res/btn_sc_d_half.png","res/btn_sc_a_half.png","res/btn_sc_play.png","res/btn_sc_bg.png","res/btn_sc_pause.png","res/mainMenu_bg.png","res/btn_control.png","res/btn_zhanji.png","res/btn_paihang.png","res/btn_help.png","res/btn_mode1_u.png","res/btn_mode1_d.png","res/btn_mode2_u.png","res/btn_mode2_d.png","res/btn_mode3_u.png","res/btn_mode3_d.png","res/btn_mode4_u.png","res/btn_mode4_d.png","res/xunzhang.png","res/btnRecord.png","res/btn_mode1d.png", "res/btn_mode1u.png","res/btn_mode2d.png", "res/btn_mode2u.png","res/btn_mode3d.png", "res/btn_mode3u.png","res/btn_mode4d.png", "res/btn_mode4u.png","res/home.png","res/blue_bg.png","res/less_bg.png","fonts/Arial.ttf"]
//