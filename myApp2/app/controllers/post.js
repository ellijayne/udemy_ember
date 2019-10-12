import Controller from '@ember/controller';

export default Controller.extend({
    
    actions: {
        sayHello: function() {
            console.log('hellloooo world!');
            //alert('Heeeeey')
        },
        toggleBody: function() {
            this.toggleProperty('isShowingBody');
        },
        submitAction: function() {
            alert(this.get('name') + ' ' + this.get('comment'));
        }
    },

    title: 'My blog post',
    body: 'This is the body of my blog post',
    authors: ['William', 'Robert', 'Michelle'],
    created: new Date(),
    comments: [
        {
            name: 'Mike Smith',
            comment: 'Thanks for the post!'
        },
        {
            name: 'Wendy Williams',
            comment: 'Good stuff'
        },
        {
            name: 'Steve Stephenson',
            comment: 'I like this.'
        },
    ]
});
