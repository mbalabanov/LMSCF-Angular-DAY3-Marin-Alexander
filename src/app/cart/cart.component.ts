import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;
	checkoutForm;

	constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.items = this.cartService.getItems();
		this.checkoutForm = this.formBuilder.group({
			name: '',
			address: ''
		});
		total();
	}

	onSubmit(customerData) {
		window.alert('Your order has been submitted');
		this.items = this.cartService.clearCart();
		this.checkoutForm.reset();
	}

	clearCart() {
		this.items = [];
		return this.items;
	}

	total() {
		var totalPrice = 0;
		for(let item of this.items){
			totalPrice += item.price;
		};

		console.log(totalPrice);
	};


}
