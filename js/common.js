/** 
 * 判断指定名称的复选框是否被选中 
 * 
 * @param {} 
 *            chname复选框名称 
 */  
function chkCheckCha(chname) {  
    var obj = jQuery("[name='" + chname + "']");  
    var isCheck = false;  
    for (var i = 0; i < obj.length; i++) {  
        if (obj[i].checked == true) {  
            isCheck = true;  
            break;  
        }  
    }  
    return isCheck;  
}  
  
/** 
 * 得到指定名称的复选框被选中个数 
 * 
 * @param {} 
 *            chname 
 * @return {} 
 */  
function checkChangedOnly(chname) {  
    var obj = jQuery("[name='" + chname + "']");  
    var count = 0;  
    for (var i = 0; i < obj.length; i++) {  
        if (obj[i].checked == true) {  
            count++;  
        }  
    }  
    return count;  
}  
  
/** 
 * 得到指定名称的单个被选中的复选择框的值 
 * 
 * @param {} 
 *            chname 
 */  
function getValueCheckOnly(chname) {  
    var str = "";  
    jQuery("[name='" + chname + "'][checked]").each(function() {  
        str += jQuery(this).val();  
    });  
    return str;  
}  
  
/** 
 * 得到多个复选框的值 
 * 
 * @param {} 
 *            chname 
 */  
function getCheckVals(chname) {  
    var str = "";  
    jQuery("[name='" + chname + "'][checked]").each(function() {  
        str += jQuery(this).val() + "@";  
    });  
    return str.substring(0, str.length - 1);  
}  
  
function getCheckHidden(chname,tagId){  
    var strval = getCheckVals(chname);  
    var arr = "";  
    var temp = strval.split("@");  
    for(var i = 0;i<temp.length;i++){  
        var val = temp[i];  
        var id = tagId+val;  
        var tag = $("#"+id).val();  
        arr+=tag+"@";  
    }  
    return arr;  
}  
  
/** 
 * 得到一些复选框的值 复选框的值中是否包含有","若无则用","将多个值组合 若有则先将值用","隔开再用","组合 
 * 
 * @param {} 
 *            chname 
 */  
function getSomeChVals(chname) {  
    var str = "";  
    jQuery("[name='" + chname + "'][checked]").each(function() {  
        var temp = jQuery(this).val();  
        if (temp.indexOf(",") == -1) {  
            str += temp + ",";  
        } else {  
            var tempValue = temp.split(",");  
            str += tempValue[0] + ",";  
        }  
    });  
    return str.substring(0, str.length - 1);  
}  
  
function getAnyCheckValue(chname) {  
    var str = getCheckVals(chname);  
    var tstr = str.split("@");  
    var result = "";  
    for (var i = 0; i < tstr.length; i++) {  
        var temp = tstr[i].split(",");  
        result += temp[0] + ",";  
    }  
    return result.substring(0, result.length - 1);  
}  
  
/** 
 * 得到指定名称的有多个值的多个复选框的值 
 * 
 * @param chname 
 */  
function getCheckValues(chname) {  
    var str = "";  
    var sids = "";  
    var snames = "";  
    jQuery("[name='checkbox'][checked]").each(function() {  
        var strval = jQuery(this).val();  
        var temp = strval.split(",");  
        var sid = temp[0];  
        var sname = temp[1];  
        sids += sid + ",";  
        snames += sname + ", ";  
    });  
    str = sids.substring(0, sids.length - 1) + "|"  
        + snames.substring(0, snames.length - 2);  
    return str;  
}  
  
/** 
 * 判断复选框的状态 
 * 
 * @param {} 
 *            chname 
 */  
function decideCheckState(chname) {  
    var str = getCheckVals(chname);  
    var tstr = str.split("@");  
    var temp = "";  
    for (var i = 0; i < tstr.length; i++) {  
        var tval = tstr[i];  
        var tem = tval.substring(tval.length - 1, tval.length);  
        temp += tem;  
    }  
    return temp;  
}  
  
// 复选框的值是否全为0  
function checkStringz(chname) {  
    var regex = /^[0]*$/g;  
    var source = decideCheckState(chname);  
    return regex.test(source);  
}  
  
// 复选框的值是否全为1  
function checkStringO(chname) {  
    var regex = /^[1]*$/g;  
    var source = decideCheckState(chname);  
    return regex.test(source);  
}  
  
function decideStrallz(source) {  
    var regex = /^[0]*$/g;  
    return regex.test(source);  
}  
function decideStrallO(source) {  
    var regex = /^[1]*$/g;  
    return regex.test(source);  
}  
  
/** 
 * 复选框全选v 
 * 
 * @param {} 
 *            chname 
 */  
function checkboxAll(chname) {  
    jQuery("[name='" + chname + "']").each(function() {  
        jQuery(this).attr("checked", true);  
    });  
}  
  
/** 
 * 复选框反选 
 * 
 * @param {} 
 *            chname 
 */  
function inverSelect(chname) {  
    jQuery("[name='" + chname + "']").each(function() {  
        if (jQuery(this).attr("checked")) {  
            jQuery(this).attr("checked", false);  
        } else {  
            jQuery(this).attr("checked", true);  
        }  
    });  
}  
  
function selects(all_id,chname){  
    $("#"+all_id).click(function(){  
        if($(this).attr("checked")){  
            checkboxAll(chname);  
        }else{  
            clearSelect(chname);  
        }  
    });  
}  
function mouseHover(obj){  
    alert($(obj).attr("style"));  
}  
  
/** 
 * 取消全选或反选 
 * 
 * @param {} 
 *            chname 
 */  
function clearSelect(chname) {  
    jQuery("[name='" + chname + "']").each(function() {  
        jQuery(this).attr("checked", false);  
    });  
}  
  
/** 
 * 点击删除按钮时使用 
 */  
function dele(chname) {  
    var b = chkCheckCha(chname);  
    if (!b) {  
        alert("请选择要删除的记录");  
        return false;  
    } else if (confirm("删除后无法恢复，确定删除吗?")) {  
        jQuery("[name='form1']").submit();  
    } else {  
        return false;  
    }  
}  
  
/** 
 * 校验时间格式 
 * 
 * @param {} 
 *            timevale 
 * @return {} 
 */  
function checkTime(timevale) {  
    var regex = /^(([0-1][0-9])|([2][0-4]))(\:)[0-5][0-9](\:)[0-5][0-9]$/g;  
    var b = regex.test(timevale);  
    return b;  
}  
  
/** 
 * 校验Ip地址格式 
 * 
 * @param {} 
 *            ipvale 
 */  
function checkIp(ipvale) {  
    var regex = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;  
    var b = regex.test(ipvale);  
    return b;  
}  
  
/** 
 * 是否是由字母或数字组成的字符串 
 * 
 * @param {} 
 *            letVale 
 */  
function checkLetOrNum(letVale) {  
    var regex = /^([a-zA-Z_]{1})([\w]*)$/g;  
    var b = regex.test(letVale);  
    return b;  
}  
  
/** 
 * 取字符串的第index的字符 
 * 
 * @param {} 
 *            source 
 * @param {} 
 *            index 
 */  
function interceptStr(source, index) {  
    var temp = source.charAt(index);  
    return parseInt(temp);  
}  
  
/** 
 * 检查字符串中beindex位置到endindex位置之间是否全由targer组成 
 * 
 * @param {} 
 *            source 
 * @param {} 
 *            targer 
 * @param {} 
 *            beindex 
 * @param {} 
 *            endindex 
 */  
function checkStr(source, targer, beindex, endindex) {  
    var flag = false;  
    for (var i = beindex; i <= endindex; i++) {  
        var temp = source.charAt(i);  
        if (targer == temp) {  
            flag = true;  
        }  
    }  
    return flag;  
}  
  
/** 
 * 验证字符串中的某一段是否全为0 
 * 
 * @param {} 
 *            source 
 * @param {} 
 *            begin 
 * @param {} 
 *            end 
 * @return {} 
 */  
function checkString(source, begin, end) {  
    var regex = /^[0]*$/g;  
    var temp = source.substring(begin, end + 1);  
    //alert("###temp=="+temp);  
    return regex.test(temp);  
}  
  
/** 
 * 判断两个字符串是否想等 相等返回true否则返回false 
 * 
 * @param {} 
 *            source 
 * @param {} 
 *            target 
 */  
function decideString(source, target) {  
    return (source == target) ? true : false;  
}  
  
/** 
 * 将字符串转换成数字 
 * @param val 
 * @return 
 */  
function stringToNumber(val){  
    return Number(val);  
}  
  
/** 
 * 验证是否是整数或小数 
 * @param source 
 * @return 
 */  
function checkIntAndFloat(source){  
    var regex = /^[0-9]+(\.[0-9]+)?$/g;  
    return regex.test(source);  
}  
  
/** 
 * 验证是否是整数或只有一位小数点的小数 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkFloat(source) {  
    // var regex=/^[1-9]d*.d{1}|0.d{1}[1-9]d{1}$/g;  
    var regex = /^[0-9]+\d*[\.\d]?\d{0,1}$/g;  
    return regex.test(source);  
}  
  
/** 
 * 验证是否两位数以内的正整数 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkTwoInt(source) {  
    var regex = /^[1-9][0-9]?$/g;  //两位数以内的正整数  
    return regex.test(source);  
}  
  
/** 
 * 验证数字 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkNumber(source) {  
    var regex = /^(\-|\+)?\d+(\.\d+)?$/;  
    return regex.test(source);  
}  
  
/** 
 * 验证是否是两位小数的正实数 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkTowLenFloat(source) {  
    var regex = /^[0-9]+(.[0-9]{2})?$/g;//只能输入有两位小数的正实数  
    return regex.test(source);  
}  
  
/** 
 * 验证是否是两位或一位小数的正实数 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkTowLenFloatt(source) {  
    var regex = /^[0-9]+(.[0-9]{1,2})?$/g;//只能输入有两位小数的正实数  
    return regex.test(source);  
}  
  
/** 
 * 验证是否是整数或只有2位小数的数 
 * 
 * @param {} 
 *            source 
 */  
function checkTowFloat(source) {  
    var regex = /^[1-9]+\d*[\.\d]?\d{0,2}$/g;  
    return regex.test(source);  
}  
  
/** 
 * 验证是否有空格 
 * 
 * @param {} 
 *            source 
 */  
function checkSpace(source) {  
    var regex = /\s/g;  
    return regex.test(source);  
}  
  
/** 
 * 检查一个数是否是整数则位数在8以内 
 * 
 * @param {} 
 *            source 
 */  
function checkIntLeng(source) {  
    var regex = /^[1-9]{1}[0-9]{1,7}$/g  
    return regex.test(source);  
}  
  
/** 
 * 检查一个数是否是整数则位数在2以内 
 * 
 * @param {} 
 *            source 
 */  
function checkIntTwoLeng(source) {  
    var regex = /^[1-9]{1}[0-9]{1,2}$/g  
    return regex.test(source);  
}  
  
/** 
 * 验证正整数 
 * 
 * @param {} 
 *            source 
 */  
function checkInt(source) {  
    // var regex=/^[1-9]d*$/g  
    var regex = /^[0-9]*[1-9][0-9]*$/g  
    return regex.test(source);  
}  
  
/** 
 * 验证非负数 
 * 
 * @param {} 
 *            source 
 */  
function checkNegative(source) {  
    var regex=/^[1-9]\d*|0$/g  
    return regex.test(source);  
}  
  
/** 
 * 分割IP地址 
 * 
 * @param {} 
 *            ipAddress 
 */  
function getIpNum(ipAddress) {  
    var ip = ipAddress.split(".");  
    var a = parseInt(ip[0]);  
    var b = parseInt(ip[1]);  
    var c = parseInt(ip[2]);  
    var d = parseInt(ip[3]);  
    var ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;  
    return ipNum;  
}  
  
/** 
 * 判断IP大小 
 */  
function decideIp(startIp, endIp) {  
    var ip1 = getIpNum(startIp);  
    var ip2 = getIpNum(endIp);  
    return (ip2 > ip1) ? true : false;  
}  
  
/** 
 * 验证是否全是空格 
 * 
 * @param {} 
 *            source 
 * @return {} 
 */  
function checkAllSpace(source) {  
    var regex = /^\s+$/g  
    return regex.test(source);  
}  
  
/******************************************************************************* 
 * openWindow(url)函数：弹出窗口 * url：路径 * left:左边的距离 * top：上边的距离 * width：窗口宽度 * 
 * height：窗口高度 * resize：yes时可调整窗口大小，no则不可调 * 
 ******************************************************************************/  
function openWindow(url,width, height, resize) {  
    var mleft = (screen.width - width) / 2;  
    var mtop = (screen.height - height) / 2;  
    window.open(url,"","height=" + height + ",width=" + width  
        + ",location=no,menubar=no,resizable=" + resize  
        + ",scrollbars=yes,status=no,toolbar=no,left=" + mleft  
        + ",top=" + mtop + "");  
}  
  
function openWindow(url,width, height, resize,scrollbars) {  
    var mleft = (screen.width - width) / 2;  
    var mtop = (screen.height - height) / 2;  
    window.open(url,"","height=" + height + ",width=" + width  
        + ",location=no,menubar=no,resizable=" + resize  
        + ",scrollbars="+scrollbars+",status=no,toolbar=no,left=" + mleft  
        + ",top=" + mtop + "");  
}  
/** 
 * 
 * @param {} url 
 * @param {} width 
 * @param {} height 
 */  
function showNewWind(url,width,height){  
    //alert(url);  
    var showresult = window.showModalDialog(url,window,"dialogWidth="+width+"px;dialogHeight="+height+"px;location=no;status=no;scroll=yes");  
    return showresult;  
}  
  
/** 
 * 
 * @param {} url 
 * @param {} width 
 * @param {} height 
 */  
function showNewLessWind(url,width,height){  
    //alert(url);  
    var showresult = window.showModelessDialog(url,window,"dialogWidth:"+width+"px;location=no;status:no;dialogHeight:"+height+"px");  
    return showresult;  
}  
  
function decideLeve(source){  
    var regex=/^[a-zA-Z]{1}$/g;  
    return regex.test(source);  
}  
  
function openBlankWindow(url){  
    openWindow(url,"650","400","yes");  
}  
  
/** 
 * 时间变化 
 * @param {} source 
 * @param {} addval 
 */  
function dateToString(source,addval){  
    var paddval = parseInt(addval);//增量(秒)  
    var temp = source.split(":");  
    var thrs = parseInt(temp[0])*3600;//小时化成秒  
    var tmis = parseInt(temp[1])*60;//分钟化成秒;  
    var tss = parseInt(temp[2]);//秒  
    var totals = parseInt(thrs)+parseInt(tmis)+parseInt(tss)+parseInt(paddval);  
    var result = timeTohhmmss(totals);  
    return result;  
}  
  
/** 
 * 由秒数转化成hh:mm:ss格式 
 * @param {} seconds 
 */  
function timeTohhmmss(seconds){  
    var hh;  
    var mm;  
    var ss;  
    if(seconds==null || seconds<0){  
        return;  
    }  
    var pseconds = parseInt(seconds);  
    //得到小时  
    hh = pseconds/3600|0;  
    pseconds = parseInt(pseconds)-parseInt(hh)*3600;  
    if(parseInt(hh)<10){  
        hh="0"+hh;  
    }  
    if(parseInt(hh)>=24){  
        hh="00";  
    }  
    //得到分钟  
    mm = parseInt(pseconds)/60|0;  
    //得到秒  
    ss = parseInt(pseconds)-parseInt(mm)*60;  
    if(parseInt(mm)<10){  
        mm = "0"+mm;  
    }  
    if(parseInt(ss)<10){  
        ss = "0"+ss;  
    }  
    return hh+":"+mm+":"+ss;  
}  
  
/** 
 验证身份证号是否正确 
 **/  
function isCardNo(num){  
    if(isNaN(num)){  
        alert("输入的身份证号不是数字！");  
        return false;  
    }  
    var len = num.length;  
    if(len<15 || len>18){  
        alert("输入的身份证号码长度不正确定！应为15位或18位");  
        return false;  
    }  
    var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;  
    var re18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;  
    var res = (re15.test(num) || re18.test(num));  
    if(res==false){  
        alert("输入的身份证号格式不正确！");  
        return false;  
    }  
    return res;  
}  
  
/** 
 * 判断字符串是否为空，若为空则返回true否则返回false 
 * @param source 
 * @return true或者false 
 **/  
function isEmpty(source){  
    var str = source.replace(/(^\s*)|(\s*$)/g,"");  
    if(str=="" || str.toLowerCase()=="null" || str.length<=0){  
        return true;  
    }else{  
        return false;  
    }  
}  
  
/** 
 * 验证是否为电话号码（座机） 
 * 
 * @param {} 
 *            source 
 */  
  
function isTelephone(source) {  
    var regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/  
    return regex.test(source);  //search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1  
}  
  
/** 
 * 验证是否为手机号码（移动手机） 
 * 
 * @param {} 
 *            source 
 */  
  
function isMobilePhone(source) {  
    var regex = /^((\d3\d3)|(\d{3}\-))?1\d{10}/;  
    return regex.test(source);  
}  
  
/** 
 * 验证是否为电子邮箱 
 * 
 * @param {} 
 *            source 
 */  
function isEmail(source) {  
    var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;  
    if(source.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){  
        return true;  
    }else{  
        alert("电子邮箱格式不正确");  
        return false;  
    }  
}  
  
/** 
 * 
 *验证是否为邮编 
 * @param 
 *      source 
 */  
function isZip(source){  
    var regex=/^[1-9]\d{5}$/;  
    return regex.test(source);  
}  
  
/** 
 * 
 *验证字符串是否是中文 
 * 
 **/  
function isChines(source){  
    var regex = /^[\u4E00-\u9FA5]+$/;  
    return regex.test(source);  
}  
  
/** 
 生成指定位数的随机整数 
 **/  
function getRandomNum(count){  
    var arr = new Array;  
    var reNum = "";  
    for(var i=0;i<count;i++){  
        arr[i] = parseInt(Math.random()*10);  
        reNum += String(arr[i]);  
    }  
    return reNum;  
}  
function random(min,max){  
    return Math.floor(min+Math.random()*(max-min));  
}  
/* 
 *判断包含关系 
 *string:原始字符串 
 *substr:子字符串 
 *isIgnoreCase:忽略大小写 
 */  
  
  
function jsContains(string,substr,isIgnoreCase)  
{  
    if(isIgnoreCase)  
    {  
        string=string.toLowerCase();  
        substr=substr.toLowerCase();  
    }  
    var startChar=substr.substring(0,1);  
    var strLen=substr.length;  
    for(var j=0;j<string.length-strLen+1;j++)  
    {  
        if(string.charAt(j)==startChar)//如果匹配起始字符,开始查找  
        {  
            if(string.substring(j,j+strLen)==substr)//如果从j开始的字符与str匹配，那ok  
            {  
                return true;  
            }  
        }  
    }  
    return false;  
}  
  
/** 
 * 随机数UUID 
 * @return 
 */  
function makeUUID() {  
    var S4 = function () {  
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);  
    };  
    //return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());  
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());  
}  
  
  
  
  
/** 
 * 得到项目的基地址 
 * @return {} 
 */  
function getContextPath() {  
    var strFullPath = window.document.location.href;  
    var strPath = window.document.location.pathname;  
    var pos = strFullPath.indexOf(strPath);  
    var prePath = strFullPath.substring(0, pos);  
    var path = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);  
    return path;  
}  
  
  
/** 
 *  显示提示信息 
 * @param {Object} msg 
 */  
function showInfoMessage(msg) {  
    Ext.MessageBox.show({  
        width:320,  
        buttons:Ext.Msg.OK,  
        msg:msg,  
        icon:Ext.MessageBox.INFO,  
        title:"系统提示"  
    });  
}  
/** 
 * 给URL追加参数 
 * @param {} url 
 * @param {} parameter 参数名 
 * @param {} value  参数值 
 */  
function urlAddParmert(url,parameter,value){  
    var buf = new StringBuffer();  
    if(!isEmpty(url)){  
        buf.append(url);  
        if(url.indexOf("?") > -1){  //已经有参数  
            buf.append("&");  
        }else{  
            buf.append("?");  
        }  
        buf.append(parameter);  
        buf.append("=");  
        buf.append(value);  
    }  
    return buf.toString();  
}  
  
/** 
 * 得到文件的扩展名 
 * @param {} filename 
 */  
function getFileExt(filename){  
    var d=/\.[^\.]+$/.exec(filename);  
    var ext = new String(d);  
    var s = ext.toLowerCase();  
    return s;  
}  
  
  
//字符串编码  
function strEncode(source){  
    return encodeURIComponent(source);  
}  
//字符串解码  
function strDencode(source){  
    return decodeURIComponent(source);  
}  
/** 
 * 字符串转正形 
 * @param source 
 * @returns 
 */  
function strParseInt(source){  
    if(isEmpty(source) || isNaN(source)){  
        return 0;  
    }  
    return parseInt(source);  
}  
/** 
 * 字符串转Float形 
 * @param source 
 * @returns 
 */  
function strParseFloat(source){  
    if(isEmpty(source) || isNaN(source)){  
        return 0;  
    }  
    return parseFloat(source);  
}  
  
/** 
 * 获取今天日期，星期几 
 * @returns 
 */  
function getTodayDate(){  
    var now = new Date();  
    var yy = now.getFullYear();  
    var mm = now.getMonth()+1;  
    var dd=now.getDate();  
    var day = new Array();  
    day[0] = "星期日";  
    day[1] = "星期一";  
    day[2] = "星期二";  
    day[3] = "星期三";  
    day[4] = "星期四";  
    day[5] = "星期五";  
    day[6] = "星期六";  
    return( yy + '年' + mm + '月'+ dd +'日 '+day[now.getDay()]);  
}  
  
/** 
 * 获取一段时间中含有的周末数量 
 * @param beginDate 
 * @param endDate 
 * @returns {number} 
 */  
function getIntervalWeekends(beginDate,endDate) {  
    var weekends = 0;  
    var dateDiffDays = dateDiff("d", beginDate, endDate)+1;  
    if(dateDiffDays>0){  
        for(var i=0;i<dateDiffDays;i++){  
            var newDate = dateAdd("d",i,beginDate);  
            if(newDate.getDay()==0 || newDate.getDay()==6){  
                weekends++;  
            }  
        }  
    }  
    return weekends;  
}  
  
/** 
 * 时间戳转成时间 
 * @param time 
 * @returns 
 */  
function timeStamp2String(time){  
    var datetime = new Date();  
    datetime.setTime(time);  
    var year = datetime.getFullYear();  
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;  
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();  
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();  
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();  
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();  
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;  
}  
  
/** 
 * 判断是否为空 
 * @param val 
 * @returns 
 */  
function isNull(val) {  
    if (val == undefined || val == null || val == "" || val == ''  
        || val == "undefined" || val == "null" || val == "NULL") {  
        return true;  
    }  
    return false;  
}  
  
/** 
 * 判断闰年 
 * @param date Date日期对象 
 * @return boolean true 或false 
 */  
this.isLeapYear = function(date){  
    return (0==date.getYear()%4&&((date.getYear()%100!=0)||(date.getYear()%400==0)));  
}  
  
/** 
 * 日期对象转换为指定格式的字符串 
 * @param f 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss 
 * @param date Date日期对象, 如果缺省，则为当前时间 
 * 
 * YYYY/yyyy/YY/yy 表示年份 
 * MM/M 月份 
 * W/w 星期 
 * dd/DD/d/D 日期 
 * hh/HH/h/H 时间 
 * mm/m 分钟 
 * ss/SS/s/S 秒 
 * @return string 指定格式的时间字符串 
 */  
this.dateToStr = function(formatStr, date){  
    formatStr = arguments[0] || "yyyy-MM-dd HH:mm:ss";  
    date = arguments[1] || new Date();  
    var str = formatStr;  
    var Week = ['日','一','二','三','四','五','六'];  
    str=str.replace(/yyyy|YYYY/,date.getFullYear());  
    str=str.replace(/yy|YY/,(date.getYear() % 100)>9?(date.getYear() % 100).toString():'0' + (date.getYear() % 100));  
    str=str.replace(/MM/,date.getMonth()>9?(date.getMonth() + 1):'0' + (date.getMonth() + 1));  
    str=str.replace(/M/g,date.getMonth());  
    str=str.replace(/w|W/g,Week[date.getDay()]);  
  
    str=str.replace(/dd|DD/,date.getDate()>9?date.getDate().toString():'0' + date.getDate());  
    str=str.replace(/d|D/g,date.getDate());  
  
    str=str.replace(/hh|HH/,date.getHours()>9?date.getHours().toString():'0' + date.getHours());  
    str=str.replace(/h|H/g,date.getHours());  
    str=str.replace(/mm/,date.getMinutes()>9?date.getMinutes().toString():'0' + date.getMinutes());  
    str=str.replace(/m/g,date.getMinutes());  
  
    str=str.replace(/ss|SS/,date.getSeconds()>9?date.getSeconds().toString():'0' + date.getSeconds());  
    str=str.replace(/s|S/g,date.getSeconds());  
  
    return str;  
}  
  
  
/** 
 * 日期计算 
 * @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
 * @param num int 
 * @param date Date 日期对象 
 * @return Date 返回日期对象 
 */  
this.dateAdd = function(strInterval, num, date){  
    date =  arguments[2] || new Date();  
    switch (strInterval) {  
        case 's' :return new Date(date.getTime() + (1000 * num));  
        case 'n' :return new Date(date.getTime() + (60000 * num));  
        case 'h' :return new Date(date.getTime() + (3600000 * num));  
        case 'd' :return new Date(date.getTime() + (86400000 * num));  
        case 'w' :return new Date(date.getTime() + ((86400000 * 7) * num));  
        case 'm' :return new Date(date.getFullYear(), (date.getMonth()) + num, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());  
        case 'y' :return new Date((date.getFullYear() + num), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());  
    }  
}  
  
/** 
 * 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串 
 * @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
 * @param dtStart Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
 * @param dtEnd Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
 */  
this.dateDiff = function(strInterval, dtStart, dtEnd) { //如 'd',new Date("2016-8-22"),new Date("2016-8-25")  
    switch (strInterval) {  
        case 's' :return parseInt((dtEnd - dtStart) / 1000);  
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
    }  
}  
  
/** 
 * 字符串转换为日期对象 
 * @param date Date 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制 
 */  
this.strToDate = function(dateStr){  
    var data = dateStr;  
    var reCat = /(\d{1,4})/gm;  
    var t = data.match(reCat);  
    t[1] = t[1] - 1;  
    eval('var d = new Date('+t.join(',')+');');  
    return d;  
}  
  
/** 
 * 把指定格式的字符串转换为日期对象yyyy-MM-dd HH:mm:ss 
 * 
 */  
this.strFormatToDate = function(formatStr, dateStr){  
    var year = 0;  
    var start = -1;  
    var len = dateStr.length;  
    if((start = formatStr.indexOf('yyyy')) > -1 && start < len){  
        year = dateStr.substr(start, 4);  
    }  
    var month = 0;  
    if((start = formatStr.indexOf('MM')) > -1  && start < len){  
        month = parseInt(dateStr.substr(start, 2)) - 1;  
    }  
    var day = 0;  
    if((start = formatStr.indexOf('dd')) > -1 && start < len){  
        day = parseInt(dateStr.substr(start, 2));  
    }  
    var hour = 0;  
    if( ((start = formatStr.indexOf('HH')) > -1 || (start = formatStr.indexOf('hh')) > 1) && start < len){  
        hour = parseInt(dateStr.substr(start, 2));  
    }  
    var minute = 0;  
    if((start = formatStr.indexOf('mm')) > -1  && start < len){  
        minute = dateStr.substr(start, 2);  
    }  
    var second = 0;  
    if((start = formatStr.indexOf('ss')) > -1  && start < len){  
        second = dateStr.substr(start, 2);  
    }  
    return new Date(year, month, day, hour, minute, second);  
}  
  
  
/** 
 * 日期对象转换为毫秒数 
 */  
this.dateToLong = function(date){  
    return date.getTime();  
}  
  
/** 
 * 毫秒转换为日期对象 
 * @param dateVal number 日期的毫秒数 
 */  
this.longToDate = function(dateVal){  
    return new Date(dateVal);  
}  
  
/** 
 * 判断字符串是否为日期格式 
 * @param str string 字符串 
 * @param formatStr string 日期格式， 如下 yyyy-MM-dd 
 */  
this.isDate = function(str, formatStr){  
    if (formatStr == null){  
        formatStr = "yyyyMMdd";  
    }  
    var yIndex = formatStr.indexOf("yyyy");  
    if(yIndex==-1){  
        return false;  
    }  
    var year = str.substring(yIndex,yIndex+4);  
    var mIndex = formatStr.indexOf("MM");  
    if(mIndex==-1){  
        return false;  
    }  
    var month = str.substring(mIndex,mIndex+2);  
    var dIndex = formatStr.indexOf("dd");  
    if(dIndex==-1){  
        return false;  
    }  
    var day = str.substring(dIndex,dIndex+2);  
    if(!isNumber(year)||year>"2100" || year< "1900"){  
        return false;  
    }  
    if(!isNumber(month)||month>"12" || month< "01"){  
        return false;  
    }  
    if(day>getMaxDay(year,month) || day< "01"){  
        return false;  
    }  
    return true;  
}  
  
this.getMaxDay = function(year,month) {  
    if(month==4||month==6||month==9||month==11)  
        return "30";  
    if(month==2)  
        if(year%4==0&&year%100!=0 || year%400==0)  
            return "29";  
        else  
            return "28";  
    return "31";  
}  
  
/** 
 *    变量是否为数字 
 */  
this.isNumber = function(str)  
{  
    var regExp = /^\d+$/g;  
    return regExp.test(str);  
}  
  
/** 
 * 把日期分割成数组 [年、月、日、时、分、秒] 
 */  
this.toArray = function(myDate)  
{  
    myDate = arguments[0] || new Date();  
    var myArray = Array();  
    myArray[0] = myDate.getFullYear();  
    myArray[1] = myDate.getMonth();  
    myArray[2] = myDate.getDate();  
    myArray[3] = myDate.getHours();  
    myArray[4] = myDate.getMinutes();  
    myArray[5] = myDate.getSeconds();  
    return myArray;  
}  
  
/** 
 * 取得日期数据信息 
 * 参数 interval 表示数据类型 
 * y 年 M月 d日 w星期 ww周 h时 n分 s秒 
 */  
this.datePart = function(interval, myDate)  
{  
    myDate = arguments[1] || new Date();  
    var partStr='';  
    var Week = ['日','一','二','三','四','五','六'];  
    switch (interval)  
    {  
        case 'y' :partStr = myDate.getFullYear();break;  
        case 'M' :partStr = myDate.getMonth()+1;break;  
        case 'd' :partStr = myDate.getDate();break;  
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'm' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}  
  
/** 
 * 取得当前日期所在月的最大天数 
 */  
this.maxDayOfDate = function(date)  
{  
    date = arguments[0] || new Date();  
    date.setDate(1);  
    date.setMonth(date.getMonth() + 1);  
    var time = date.getTime() - 24 * 60 * 60 * 1000;  
    var newDate = new Date(time);  
    return newDate.getDate();  
}  

/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

/**
 * 
 * @desc 获取浏览器类型和版本
 * @return {String} 
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
}



/**
 * 
 * @desc 获取操作系统类型
 * @return {String} 
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
}

/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
 * 
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
function offset(ele) {
    var pos = {
        left: 0,
        top: 0
    };
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    };
    return pos;
}


var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return
    }
    var diff = to - getScrollTop();
    if (diff === 0) return
    var step = diff / duration * 10;
    requestAnimationFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 16);
        });
}



/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
function deepClone(values) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeof values) return values;
    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }
    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }
    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy values! Its type isn't supported.");
}


/**
 * 
 * @desc 生成指定范围随机数
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
function randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}



/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 
 * @desc   判断是否为URL地址
 * @param  {String} str 
 * @return {Boolean}
 */
function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * 
 * @desc   现金额转大写
 * @param  {Number} n 
 * @return {String}
 */
function digitUppercase(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
function formatPassTime(startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

/**
 * 
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime  
 * @return {String}
 */
function formatRemainTime(endTime) {
    var startDate = new Date(); //开始时间
    var endDate = new Date(endTime); //结束时间
    var t = endDate.getTime() - startDate.getTime(); //时间差
    var d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

