//比较版本函数
(function(window,undefined){
	var versionCompare=function (v1,v2){
				var pattern=/[^0-9.]/ig;
				var pattern1=/[0-9]\./;
				if(!pattern1.test(v1)||!pattern1.test(v2)){
					return "不支持检测该格式的版本号！"
				}
				var version1=v1.replace(pattern,"");
				var version2=v2.replace(pattern,"");
				var versionArr1=version1.split(".");
				var versionArr2=version2.split(".");
				var versionArr1Length=versionArr1.length;
				var versionArr1Length=versionArr1.length;
				var maxVersion=deleteLongArr(versionArr1Length,versionArr1Length,versionArr1,versionArr2);
				if(maxVersion==1){
					return v1
				};
				if(maxVersion==2){
					return v2
				};
				if(maxVersion==0){
					return "版本一致"
				};
				
                 
			};
			//比较大小
			function compareNum(num1,num2){
				return num1-num2;
			};
			//截取长的数组
			function deleteLongArr(num1,num2,v1,v2){
				var arrValue=compareNum(num1,num2);
				if(arrValue<0){
					var arrLength=Math.abs(arrValue);
					    v2=v2.slice(v1.length-1,v2.length-1);
				};
				if(arrValue>0){
					var arrLength=Math.abs(arrValue);
					    v1=v1.slice(v1.length-1,v2.length-1);
				};
				return compareValue(v1,v2)
			};
			//比较版本号数组的大小
			function compareValue(version1,version2){
				var arrValue;
				for(var i=0;i<version1.length;i++){
					if(version1[i]!=version2[i]){
						arrValue=compareNum(version1[i],version2[i]);
						if(arrValue>0){
					     	return 1
				         };
				         if(arrValue<0){
					     	return 2
				         };
				         break;
					};

				};
				return 0
			};
			window.versionCompare=versionCompare;
		})(window);
		