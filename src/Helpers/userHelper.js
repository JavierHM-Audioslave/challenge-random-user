export const orderByName = users => {

    return users.sort( (a, b) => {

        if( a.name.last.toLowerCase() < b.name.last.toLowerCase() ) {
            return -1;
        }

        if( a.name.last.toLowerCase() > b.name.last.toLowerCase() ) {
            return 1;
        }

        if( a.name.first.toLowerCase() < b.name.first.toLowerCase() ) {
            return -1;
        }

        if( a.name.first.toLowerCase() > b.name.first.toLowerCase() ) {
            return 1;
        }

        return 0;
    });
};



export const userFiltering = (e, users) => {

    e.preventDefault();
    const nameInsertedByUser = e.target.elements[0].value.toLowerCase();

    return users.filter( user => {

        const mergeOfFirstAndLastName = user.name.first.toLowerCase() + " " + user.name.last.toLowerCase();
        
        if( mergeOfFirstAndLastName.includes(nameInsertedByUser) ) {
            return user;
        };
    });
};