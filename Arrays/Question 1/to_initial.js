function to_initial(name){
    let theInitial = name.toUpperCase().split(' ').map(x => x[0]).join('.');

    return theInitial;
}
