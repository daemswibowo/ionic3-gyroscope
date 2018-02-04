import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	items = ['dimas','razak','azis'];
	dimas = 'dimasasdfadsf wibowo';
	a = 2;
	orientation: GyroscopeOrientation;

	constructor(private platform: Platform, public navCtrl: NavController, private gyroscope: Gyroscope) {
	}

	ionViewDidLoad ()
	{
		console.log('taload');
		if (this.platform.is('cordova')) {
			// setInterval(() => {
				this.gyro();
			// }, 100);
		}
	}

	gyro () {
		let options: GyroscopeOptions = {
			frequency: 1000
		};

		this.gyroscope.watch(options)
		.subscribe((orientation: GyroscopeOrientation) => {
			console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
			this.orientation = orientation;
		});
	}
}
