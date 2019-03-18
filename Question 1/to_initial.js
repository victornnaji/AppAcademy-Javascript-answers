function to_initial(name){
    let initial = name.toUpperCase().split(' ').map(x => x[0]).join('.');

    return initial;
}
