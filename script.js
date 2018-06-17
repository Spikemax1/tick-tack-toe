var app = new Vue({
	el: '#app',
	data: {
		boxes:[],
		isActive: false,
		winPlayer: '',
		char: 'x',		
		clicks: 0
	},
	methods:{
		pick: function(num) {
			if (this.clicks == 0) {
				this.boxes[num].val = this.char
				this.checkWinner()	
				this.char = 'o'
				this.clicks ++				
			}
			else if(this.clicks == 1){
				this.boxes[num].val = this.char
				this.checkWinner()	
				this.char = 'r'
				this.clicks ++;
			}
			else{
				this.boxes[num].val = this.char
				this.checkWinner()	
				this.char = 'x'
				this.clicks = 0;
			}
		},


		resetVal: function(){
			var arr = []			
			for (var i = 0; i < 25; i++) {
				arr[i] = {val: '', num: i}
			}
			this.boxes = arr
			this.clicks = 0
			this.isActive = false
			this.winPlayer = ''
			this.char = 'x'
		},


		checkWinner: function(){
			var arr = []
			var winner = ''
			var disable = document.getElementById('main')
			for (i in this.boxes) {
				arr.push(this.boxes[i].val)
			}
			if (this.char == 'x') {
				winner = 'крестики'
			}
			else if(this.char == 'o'){
				winner = 'нолики'
			}
			else{
				winner = 'треугольники'
			}




			if (arr[0] == this.char && arr[1] == this.char && arr[2] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}
			if (arr[3] == this.char && arr[4] == this.char && arr[5] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}
			if (arr[6] == this.char && arr[7] == this.char && arr[8] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}

			if (arr[0] == this.char && arr[3] == this.char && arr[6] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}
			if (arr[1] == this.char && arr[4] == this.char && arr[7] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}
			if (arr[2] == this.char && arr[5] == this.char && arr[8] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}

			if (arr[0] == this.char && arr[4] == this.char && arr[8] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}
			if (arr[2] == this.char && arr[4] == this.char && arr[6] == this.char ) {this.winPlayer = 'Победили ' + winner
				this.isActive = true}


			
			if (isNaN(arr[0]) && isNaN(arr[1]) && isNaN(arr[2]) && isNaN(arr[3]) && isNaN(arr[4]) && 
				isNaN(arr[5]) && isNaN(arr[6]) && isNaN(arr[7]) && isNaN(arr[8])) {
				this.winPlayer = 'Ничья'
				this.isActive = true
			}
		}
	}

})