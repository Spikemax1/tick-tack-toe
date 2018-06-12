var app = new Vue({
	el: '#app',
	data: {
		boxes:[
			{val: '', num: 0},
			{val: '', num: 1},
			{val: '', num: 2},
			{val: '', num: 3},
			{val: '', num: 4},
			{val: '', num: 5},
			{val: '', num: 6},
			{val: '', num: 7},
			{val: '', num: 8},
		],
		clicks: 0
	},
	methods:{
		pick: function(num) {
			if (this.clicks % 2 == 0) {
				this.boxes[num].val = 'x';
				this.clicks ++;				
			}
			else{
				this.boxes[num].val = 'o';
				this.clicks ++;	
			}
		},
		resetVal: function(){
			var arr = []			
			for (var i = 0; i < this.boxes.length; i++) {
				arr[i] = {val: '', num: i}
			}
			this.boxes = arr
			this.clicks = 0
		}
	}

})