import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Person } from '../../services/model';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// If person don't have an image, use this base64 image.
const NO_PERSON_IMAGE = "iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAvVBMVEVAQED///82NjYrKys9PT05OTk8PDwxMTEvLy8zMzMoKCgtLS0mJiY4ODj+/v7S0tK4uLiIiIh+fn5ra2tERETq6urb29ukpKSXl5dubm5fX19WVlb39/e7u7u0tLSurq6rq6uFhYViYmJaWlpNTU1HR0dCQkLU1NTNzc2ampqDg4N0dHRxcXHf39/JycnAwMCmpqbx8fHt7e3m5ubj4+OSkpKOjo6KiopmZmbw8PDExMShoaF5eXlRUVGwsLCEPM9/AAADe0lEQVRo3rXY13LbMBBA0RV6ISmq996L415S//+z4tiJJTs0hYWI+645Q4EEBgsl95qjSqe3AFj0OpVRE/FDZ2TUpVYTzuA5xom2dDoqFrnbGcnhQ1zS3W1hyE3XxJAZMdObYpBtxOHTeLQtALmINeSm+cW5SCsScCIRXZ2HVCk4RKvnIDUFTqmaP9JR4Jja+yIPFpyzD37IpQFE0TcfJKEMgzCaeCA9Dqh4D4+kFJDRARrRDIswgkVaEtDJKyRCGB5hBIdcWvDIXqKQLvdB+BSFGPDKYJBU+iFqgEB+ED+EVBHIQvghYoFADHhm3JE764vQW2fki/JF1BdnZCh9EZk6I1faGxk7Iy1vRF85I2P/v2vkjKT+yMAZWfu/XWtnpEF9Edpw/+L9EcS2Mvfdu+YIZOK7C1cQyDflu6sgEN9FoajjtxP7GPEehZSpD0LLKKS0FHhD1Es4JLV4xA4QyOFRsA+CRcoGi5gVGintCc4gO5/rHBEYQ5CSD3IRYZDoDoMcGkYII/W9x2+Mq2E2/hOJtnE02ufMVsYRO02waHzelKhM41NGbFdnD9V6lOUPCXpFTO6GSrNPCa2GBQ06H6hkmYS09wWObL8DJeLjJ07he8Fz4ebjgipNOBeCc6IVXTw2z50LZ13+knVrW5v9/DmrbVvrJOuqiUJWUi2TErJkqewXd+Q+YsBtGWeULQcWVVyRroXnmKlgjMrr3qB6bkidwGsSnJe2CRJeIyw5jfQJPxor7xOn1dgfjai5/HoKuVbi/cR/kpwkJobAUcLe5CP9f8aBiXYXeURz90YclOsMJP9cj2l908gWGpt61i4tZJKD1DlkJTRl1bTxAUirjGoBWXH2OdIlOaM/Se28Nmm3xuNWe1KbWypzRohk9hlybyE/wYnWUmpNuID81GM2Uo6gwKJ1JiJZkQizWcgTgUKLu/8jlxQKjg7+QzQrGmHyI1LRUHh6+x7pGwhQ9PUdUoshQPHTMdIwECRze4R0YghSXDsgfQOBMtdvSIVAoMjkDVEMAsXUP2SgIFgq/Yt0OQSLz/4iBgJmkhfkl4SAydEL8sQhYHz6glgIGv2DrAIjtvyMbDQETbefkSkHXPhFAfyRiD8goU8hcLQPKwWBU2UYagicHkKbQOBIG6oxBC6uQodD4HgHZgICJ2YwZxA4Noc6hA5H+LeE4C1/A+z/OM04mtiOAAAAAElFTkSuQmCC";

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  public person: Person;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.get("person");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  getImage() {
    if (this.person.image) {
      return "../assets/persons-imgs/" + this.person.image;
    }
    else {
      return "data:image/png;base64," + NO_PERSON_IMAGE;
    }
    
  }
}
