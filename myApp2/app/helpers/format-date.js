// import Ember from 'ember';
// //import {helper as buildHelper} from '@ember/component/helper';

// export function formatDate(params) {

//     return moment(params[0]).fromNow();

// }

// //export const helper = buildHelper(formatDate);

// export default Ember.Helper.helper(formatDate);



//above seems to have depreciated. Use below. 


import { helper as buildHelper } from '@ember/component/helper';


export default buildHelper(function formatDate(params) {
    return moment(params[0]).fromNow();
});


