import { LightningElement } from 'lwc';

export default class AccountSearchForm extends LightningElement {
    searchText = '';
    accountNameHandler(event){
        this.searchText = event.target.value;
    }

    searchHandler(){
        const event = new CustomEvent('searchaccountcontact',{detail: this.searchText});
        this.dispatchEvent(event);
    }
}