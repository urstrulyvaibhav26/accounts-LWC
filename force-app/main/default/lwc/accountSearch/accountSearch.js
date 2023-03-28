import { LightningElement } from 'lwc';

export default class AccountSearch extends LightningElement {
    searchText = '';
    searchaccountcontactHandler(event) {
        this.searchText = event.detail;
    }
}