import { LightningElement } from 'lwc';

export default class AccountSearchForm extends LightningElement {
    searchText = '';
    accountNameHandler(event){
        this.searchText = event.target.value;
    }

    searchHandler(){
        console.log(this.searchText);
    }
}