
	var Yesterday = function(){
		var d = new Date();
		this.today = function(){
			return d;
		};
		this.yesterday = function(){
			d.setDate(d.getDate()-1);
			return d;
		};
		this.tomorrow = function(){
			d.setDate(d.getDate()+1);
			return d;
		};
		this.future = function(n){
			if(!(Number.isInteger(n))){
				return 'num must be a number';
			}
			d.setDate(d.getDate()+n);
			return d;
		};
		this.past = function(n){
			if(!(Number.isInteger(n))){
				return 'num must be a number';
			}
			d.setDate(d.getDate()-n);
			return d;
		};
		this.holiday = function(){
			return '我好想dayday都是Saturdayヾ(^ω^*)';
		}
	};
	if(exports && module.exports){
		exports = module.exports = Yesterday;
	}