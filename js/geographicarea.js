function geographicarea(province, city){
	this.province = province;
	this.city = city;
}

var areacontainer = new Array();

private_init_geographicarea();

function changeProvince(provinceobj, cityobj){
	initArea(cityobj, provinceobj.value, "");
}

function findCitys(province) {
	for(i in areacontainer){
		var area = areacontainer[i];		
		if(area.province == province) return area.city;
	}
	return null;
}

function initArea(cityobj, province, city){	
	var citys = findCitys(province);
	if(!citys) return;
	cityobj.options.length = 0;
	for(i in citys){
		var c = citys[i];
		var op = new Option(c,c);
		cityobj.options.add(op);
		if(c == city) op.selected = true;
	}
	if(city == "") cityobj.options[0].selected = true;
}

function private_init_geographicarea() {
	areacontainer.push(new geographicarea("", "".split(",")));
	areacontainer.push(new geographicarea("中国其他", "".split(",")));
	areacontainer.push(new geographicarea("安徽", "其他,安庆,蚌埠,巢湖,池州,滁州,阜阳,淮北,合肥,淮南,黄山,毫州,六安,马鞍山,宿州,铜陵,芜湖,宣城".split(",")));
	areacontainer.push(new geographicarea("北京", "北京".split(",")));
	areacontainer.push(new geographicarea("重庆", "重庆".split(",")));
	areacontainer.push(new geographicarea("福建", "其他,福州,龙岩,宁德,南平,莆田,泉州,三明,厦门,漳州".split(",")));
	areacontainer.push(new geographicarea("广东", "其他,潮州,东莞,佛山,广州,河源,惠州,江门,揭阳,茂名,梅州,清远,韶关,汕头,汕尾,深圳,云浮,阳江,珠海,湛江,肇庆,中山".split(",")));
	areacontainer.push(new geographicarea("甘肃", "其他,白银市,定西地区,甘南州,金昌市,酒泉,嘉峪关,陇南地区,临夏州,兰州,平凉地区,庆阳地区,天水,武威地区,张掖地区".split(",")));
	areacontainer.push(new geographicarea("广西", "其他,北海,百色,防城,贵港,桂林,河池,柳州,南宁,钦州,梧州,玉林,崇左,贺州,来宾".split(",")));
	areacontainer.push(new geographicarea("贵州", "其他,安顺,毕节,黔南州,贵阳,黔东南州,六盘水,铜仁,遵义,黔西南州".split(",")));
	areacontainer.push(new geographicarea("河南", "其他,安阳,鹤壁,济源,焦作,开封,漯河,洛阳,南阳,平顶山,濮阳,三门峡,商丘,许昌,新乡,信阳,周口,驻马店,郑州".split(",")));
	areacontainer.push(new geographicarea("湖北", "其他,武汉,恩施,鄂州,黄冈,黄石,荆门,荆州,潜江,十堰,随州,天门,襄樊,孝感,咸宁,仙桃,宜昌".split(",")));
	areacontainer.push(new geographicarea("河北", "其他,保定,承德,沧州,邯郸,衡水,廊坊,秦皇岛,石家庄,唐山,邢台,张家口".split(",")));
	areacontainer.push(new geographicarea("海南", "其他,儋州,海口,三亚,安定,白沙,保亭,昌江,东方,澄迈,临高,陵水,琼海,通什,文昌,万宁,琼山,乐东".split(",")));
	areacontainer.push(new geographicarea("香港", "香港".split(",")));
	areacontainer.push(new geographicarea("黑龙江", "其他,大庆,大兴安岭,哈尔滨,鹤岗,黑河,鸡西,佳木斯,牡丹江,齐齐哈尔,七台河,绥化,绥远,伊春".split(",")));
	areacontainer.push(new geographicarea("湖南", "其他,常德,长沙,郴州,怀化,衡阳,益阳,湘西州,娄底,邵阳,湘潭,岳阳,永州,张家界,株州".split(",")));
	areacontainer.push(new geographicarea("吉林", "其他,白城,白山,长春,吉林,辽源,四平,松原,通化,延边".split(",")));
	areacontainer.push(new geographicarea("江苏", "其他,常州,淮安,连云港,南京,南通,宿迁,苏州,泰州,无锡,徐州,盐城,扬州,镇江".split(",")));
	areacontainer.push(new geographicarea("江西", "其他,抚州,赣州,吉安,景德镇,九江,南昌,萍乡,上饶,新余,宜昌,鹰潭".split(",")));
	areacontainer.push(new geographicarea("辽宁", "其他,鞍山,本溪,朝阳,丹东,大连,抚顺,阜新,锦西,锦州,辽阳,盘锦,沈阳,铁岭,营口".split(",")));
	areacontainer.push(new geographicarea("澳门", "澳门".split(",")));
	areacontainer.push(new geographicarea("内蒙古", "其他,包头,巴彦淖尔,赤峰,鄂尔多斯,呼和浩特,呼伦贝尔,通辽,乌盟,乌海,兴安盟,锡林郭勒".split(",")));
	areacontainer.push(new geographicarea("宁夏", "其他,石嘴山,银川,银南,固原".split(",")));
	areacontainer.push(new geographicarea("青海", "其他,西宁,海西州,海东,海南,海北,黄南,玉树,果洛".split(",")));
	areacontainer.push(new geographicarea("四川", "其他,阿坝,巴中,成都,德阳,达州,广安,广元,甘孜州,乐山,泸州,眉山,绵阳,南充,内江,攀枝花,遂宁,凉山州,雅安,宜宾,自贡,资阳".split(",")));
	areacontainer.push(new geographicarea("山东", "其他,滨州,东营,德州,菏泽,济南,济宁,聊城,临沂,莱芜,青岛,日照,泰安,潍坊,威海,烟台,淄博,枣庄".split(",")));
	areacontainer.push(new geographicarea("上海", "上海".split(",")));
	areacontainer.push(new geographicarea("山西", "其他,长治,大同,晋城,晋中,临汾,吕梁,忻州,朔州,太原,运城,阳泉".split(",")));
	areacontainer.push(new geographicarea("天津", "天津".split(",")));
	areacontainer.push(new geographicarea("台湾", "台湾".split(",")));
	areacontainer.push(new geographicarea("陕西", "其他,安康,宝鸡,汉中,铜川,渭南,西安,咸阳,延安,榆林,商洛".split(",")));
	areacontainer.push(new geographicarea("新疆", "其他,阿克苏,哈密,和田,伊犁州,克拉玛依,喀什,石河子,乌鲁木齐,博州,巴州,昌吉,克州,吐鲁番,塔城".split(",")));
	areacontainer.push(new geographicarea("西藏", "其他,拉萨,那曲,昌都,山南,日喀则,阿里,林芝".split(",")));
	areacontainer.push(new geographicarea("云南", "其他,保山,楚雄,德宏州,大理,红河州,昆明,丽江,曲靖,思茅,文山,西双版纳,昭通,玉溪,临沧,怒江,迪庆".split(",")));
	areacontainer.push(new geographicarea("浙江", "其他,湖州,杭州,金华,嘉兴,丽水,宁波,衢州,绍兴,台州,温州,舟山".split(",")));
}
