  
  
  //获取开始时间
  function getEndDate(){
      var endTimeStr = $("#timeTwo").val() 
      if(endTimeStr == ''||endTimeStr==null){
          return formatDate(new Date(),"yyyy-MM-dd");
      }else{
          return endTimeStr;
      }
  }
  
  //获取结束时间
  function getStartDate(){
      var startTimeStr = $("#timeOne").val() 
      if(startTimeStr == ''||startTimeStr == null){
          return '2017-11-01';
      }else{
          return startTimeStr;
      }
  }
  
  //日期加上天数后的新日期.
  function addyears(date,years){
	 var sYear = date.getFullYear() + years;  
     var sMonth = date.getMonth() + 1;  
     var sDay = date.getDate();  
     date = new Date(sYear, sMonth, sDay);
	 return date;
  }

  //日期加减“n”月( “时间字符串”,“加减n月”,“取值某一天(默认月末)”)
  function addMonth(sDate, num,dayNum) { 
	 var eDate = null;
	 if(sDate==null||num==null||num==""){
		 alert("addMonth(sDate, num,dayNum)函数传入空值");
	 }else{
	     num = parseInt(num);  
	     var sYear = sDate.getFullYear();  
	     var sMonth = sDate.getMonth() + 1;  
	     var sDay = sDate.getDate();  
	     var eYear = sYear;  
	     var eMonth = sMonth + num;  
	     var eDay = sDay;  
	     while (eMonth > 12) {  
	       eYear++;  
	       eMonth -= 12;  
	     }  
	     eDate = new Date(eYear, eMonth - 1, dayNum); //设置为月初那一天 
	     if(dayNum==null||dayNum==""){
	      	 	while (eDate.getMonth() != eMonth - 1) {  //设置为月末那一天 
	    	        eDay--;  
	    	        eDate = new Date(eYear, eMonth - 1, eDay);  
	    	    }  
	   	 }
	 }
     return eDate;  
   }  
  
   //日期加上天数后的新日期.
   function addDays(date,days){
	  var nd = date;
	  nd = nd.valueOf();
	  nd = nd + days * 24 * 60 * 60 * 1000;
	  nd = new Date(nd);
	  return nd;
   }
  
   //时间戳转字符串
   function longToDate(LongTime, fmt) {
 	  var date = new Date(LongTime);
     return formatDate(date,fmt);    
   }
  
  //日期格式化获取时间字符串 (时间对象，时间字符串格式)
  function formatDate(date,fmt) {
      if(date == null || typeof (date) == undefined || date == ''){
          date = new Date();
      }
      if(typeof (fmt) == undefined || fmt == null || fmt == ""){
          fmt = "yyyy-MM-dd HH:mm:ss";
      }
      var o = {
          "M+" : date.getMonth()+1, //月份
          "d+" : date.getDate(), //日
          "h+" : date.getHours()%12 == 0 ? 12 : date.getHours()%12, //小时
          "H+" : date.getHours(), //小时
          "m+" : date.getMinutes(), //分
          "s+" : date.getSeconds(), //秒
          "q+" : Math.floor((date.getMonth()+3)/3), //季度
          "S" : date.getMilliseconds() //毫秒
      };
      var week = {  		/* formatDate(eee,"yyyy年MM月dd日") */
          "0" : "/u65e5",
          "1" : "/u4e00",
          "2" : "/u4e8c",
          "3" : "/u4e09",
          "4" : "/u56db",
          "5" : "/u4e94",
          "6" : "/u516d"
      };
      if(/(y+)/.test(fmt)){
          fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
      if(/(E+)/.test(fmt)){
          fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[date.getDay()+""]);
      }
      for(var k in o){
          if(new RegExp("("+ k +")").test(fmt)){
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
          }
      }
      return fmt;
  }