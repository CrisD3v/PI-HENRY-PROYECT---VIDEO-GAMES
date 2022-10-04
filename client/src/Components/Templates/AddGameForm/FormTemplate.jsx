import React,{useState, useEffect} from 'react'
import Input from '../../Atoms/Inputs/InputForm2.0/Input/Input'
import CheckBox from '../../Atoms/Inputs/InputForm2.0/Checkbox/CheckBox'
import TextArea from '../../Atoms/Inputs/InputForm2.0/TextArea/TextArea'
import Date from '../../Atoms/Inputs/InputForm2.0/Date/Date'
import Style from './form.module.css'
import { getPlatforms, postVideogame , getGenres, resetVideogames, getVideogames } from './../../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validate from './InputValidador'

function FormTemplate() {
    const {container , wrapper , steps , button , four , col , section , row, cf, formWrapper , description, btnContainer} = Style
    const dispatch = useDispatch()
    const history = useHistory()
    

    const initialState = {
        name: '',
        description: '',
        released: '',
        rating:'',
        platform: [],
        image: '',
        genre: []
    }
    const [input,setInput] = useState(initialState)
    const [errors,setErrors] =  useState({})

    let allGenres = useSelector((state) => state.genres)
    const allPlatforms = useSelector((state) => state.platforms)
    

     useEffect(() => {
        dispatch(getPlatforms());
        dispatch(getGenres())
      }, []);

    let handleSubmit = (e) => {
        e.preventDefault()

        if (!input.name) {return alert('Name is required')}
        if (input.image.length === 0) {return alert('Image is required')}
        if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(input.released)) 
            {return alert('Wrong released date format. Should be YYYY-MM-DD OR YYYY-M-D')}
        if (!input.rating) {return alert('Rating is required')}
        if (!/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) || 
        input.rating <0 || input.rating >5) 
        {return alert('Wrong format for Rating. Should be a number between 0-5')
        }
        if (input.platform.length===0) {return alert('Platform is required')}
        if(input.genre.length===0) {return alert('Genre is required')}
        dispatch(postVideogame(input))
        dispatch(getVideogames())
        dispatch(resetVideogames())
        alert(`Videogame ${input.name} has been added`)
        setInput({ ...initialState})
        history.push('/home')
    }

    function handlePlatforms(e) {
        console.log('Platform: ',e.target.value)
       setInput({
         ...input,
         platform: [...input.platform,e.target.value]
       })
    } 

    function handleGenres(e) {
       setInput({
         ...input,
         genre: [...input.genre,e.target.value]
       })
    } 

    let handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
          })
          setErrors(validate ({
              ...input,[e.target.name]:e.target.value
          }))
    }

  return (
    <div className={container}>
        <div className={wrapper}>
            <form action={formWrapper} onSubmit={handleSubmit}>
                <fieldset className={`${section}`}>
                    <h3>VIDEO GAME</h3>
                    <Input type='text' name='name' placeholder='Name Video Game' value={input.name} onChange={handleOnChange} />
                    {errors.name && ( <p className={Style.error}> {errors.name} </p> )}
                    <Input type='text' name='image' placeholder='Url Image' value={input.image} onChange={handleOnChange} />
                    {errors.image && ( <p className={Style.error}> {errors.image} </p>)}
                    <Input type='number' name='rating' placeholder='Rating' value={input.rating} onChange={handleOnChange}/>
                    {errors.rating && ( <p className={Style.error}> {errors.rating} </p> )}   
                </fieldset>
                <fieldset className={`${section}`}>
                    <h3>PLATFORMS</h3>
                    <div className={`${row} ${cf}`}>
                        {allPlatforms.sort().map(p => {
                        return(
                                <div className={`${four} ${col}`}>
                                    <CheckBox name={p} id={p} value={p} onChange={handlePlatforms} />
                                </div>
                            )
                        })}
                    {errors.platform && ( <p className={Style.error}> {errors.platform} </p> )}
                    </div>
                </fieldset>
                <fieldset className={`${section}`}>
                    <h3>GENRES</h3>
                    <div className={`${row} ${cf}`}>
                        {allGenres.sort().map(p => {
                            return(
                                <div className={`${four} ${col}`}>
                                    <CheckBox name={p.name} id={p.id} value={p.name} onChange={handleGenres}/>
                                </div>
                            )
                        })} 
                    {errors.genre && ( <p className={Style.error}> {errors.genre} </p>)}  
                    </div>
                </fieldset>
                <fieldset className={`${section}`}>
                    <h3>DESCRIPTION</h3>
                    <div className={description}>
                        <TextArea value={input.description} name='description' onChange={handleOnChange}  />
                        {errors.description && ( <p className={Style.error}> {errors.description} </p> )}
                        <label htmlFor="">RELEASED DATE</label>
                        <Date value={input.released} name='released' onChange={handleOnChange}/>
                    </div>
                    <div className={btnContainer}>
                        <button type='submit' className={button}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default FormTemplate