function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Name is required' 
    } 
    else if(!input.image){
        errors.image = 'Image is required'
    }
    else if (!input.rating || input.rating<0 || input.rating >5) {
        errors.rating = 'Rating must be a nummber between 0-5'
    }
    else if (input.platform.length===0) {
        errors.platform = 'Platform is required'
    }
    else if (input.genre.length === 0){
        errors.genre = 'Genre is required'
    }
    else if (!input.description){
        errors.description = 'Description is required'
    }
    return errors 
}

export default validate