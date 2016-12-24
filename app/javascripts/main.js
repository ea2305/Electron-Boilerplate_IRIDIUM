class Hello { 

	constructor(props) {	
	  this.state = {};
	}

	sayHello(){
		console.log('hello');
	}

}



window.onload = () => {
	let helper = new Hello();
	helper.sayHello();
}