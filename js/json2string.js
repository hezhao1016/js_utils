/**
 * JSON - String 之间的转换
 */

/**
 * json对象转字符串形式
 */
function json2String(o) {
	var arr = [];
	var fmt = function(s) {
		if (typeof s == 'object' && s != null)
			return json2String(s);
		return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
	}
	for ( var i in o)
		arr.push("'" + i + "':" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
}

/**
 * json数组转化为 String对象的方法
 * 
 * @param jsonArray
 */
function jsonArray2String(jsonArray) {
	var JsonArrayString = "[";
	for (var i = 0; i < jsonArray.length; i++) {
		JsonArrayString = JsonArrayString + json2String(jsonArray[i]) + ",";
	}
	JsonArrayString = JsonArrayString.substring(0, JsonArrayString.length - 1)
			+ "]";
	return JsonArrayString;
}

/**
 * string对象转化为json对象
 * 
 * @param stringValue
 * @returns
 */
function string2Json(stringValue) {
	eval("var theJsonValue = " + stringValue);
	return theJsonValue;
}