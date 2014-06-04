;(function(global,undefined){
	var Yesterday = function(){
		var d = new Date();
		this.today = function(){
			return d;
		};
		this.yesterday = function(){
			d.setDate(d.getDate()-1);
			return d;
		};
		this.yesterday = function(){
			d.setDate(d.getDate()+1);
			return d;
		};
		this.future = function(n){
			if(!(n instanceof Number)){
				return 'num must be a number';
			}
			d.setDate(d.getDate()+n);
			return d;
		};
		this.future = function(n){
			if(!(n instanceof Number)){
				return 'num must be a number';
			}
			d.setDate(d.getDate()-n);
			return d;
		};
		this.holiday = function(){
			return '我好想dayday都是Saturdayヾ(^ω^*)';
		}
	};
})(window,undefined)