import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'news.html'
})
export class NewsPage {

  constructor(
  	public navCtrl: NavController,
  	public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ){}

  logFunction() {
  	console.log(123);
  };

  openMenu() {
  	let actionSheet = this.actionsheetCtrl.create({
  		title: 'Albums',
  		cssClass: 'action-sheets-basic-page',
  		buttons: [
	  		{
	  			text: 'Delete',
	  			role: 'destructive',
	  			icon: !this.platform.is('ios') ? 'trash' : null,
	  			handler: () => {
	  				console.log('Delete Click');
	  			}
	  		},
	  		{
	        text: 'Cancel',
	        role: 'cancel', // will always sort to be on the bottom
	        icon: !this.platform.is('ios') ? 'close' : null,
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        }
  		]
  	});

  	actionSheet.present();
  };
}