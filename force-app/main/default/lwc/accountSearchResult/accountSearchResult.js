import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountController.getAccounts';

const COLUMNS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name'},
    { label: 'Actions', type:'button', typeAttributes:{
        label:'View Contacts',
        name:'View Contacts',
        title:'View Contacts',
        value:'View_Contacts',
    }},
];

export default class AccountSearchResult extends LightningElement {
    columns = COLUMNS;
    @api searchText;

    @wire(getAccounts,{searchText:'$searchText'})
    accountsList;
}