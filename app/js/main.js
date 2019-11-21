var app = new Vue({
	el: '#app',
	data: {
		
		categories: [],
		activeCat: undefined,
		messages: [],
		allCats: {
			id: 'all',
			name: 'All messages',
		},
		url: {
			categories: 'categories.json',
			messages: 'messages.json',
		},
	},
	methods: {
		getCategories(count){
			axios.get(this.url.categories).then((response) => {
				this.categories = response.data;
				this.categories.push(this.allCats);
			})
		},
		
		getMessages(){
			axios.get(this.url.messages).then((response) => {
				this.messages = response.data;
			});
		},
		showMessages: function(id){

			this.activeCat = !this.activeCat;

			axios.get(this.url.messages).then((response) => {
				if(id !=='all'){
					var filteredMessages = response.data.filter((item) => {
						return item.id == id
					})
				}else{
					var filteredMessages = response.data;
				}
				
				this.messages = filteredMessages;
			});

			
		}
	}
})

app.getCategories()
app.getMessages()


