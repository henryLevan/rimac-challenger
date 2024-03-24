import React from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DOCUMENT_TYPES, ERRORS_MESSAGES } from '../../utils/constants'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import { useForm } from "react-hook-form"

const Form = ({ handleReadyForm }) => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        handleReadyForm(data)
    }
    const documentTypes = DOCUMENT_TYPES;

    const isNumber = (number) => !isNaN(number) || "Debe ser números";

    const handleChange = () => {
        resetField('documentNumber');
      };
    return(
        <>
            <div className='main-content main-form'>
                <div className='main-content__center main-form__content'>
                    <div className='content-top-info'>
                        <div>
                            <span className='snack'>Seguro Salud Flexible</span>
                            <h2>Creado para ti y tu familia</h2>
                        </div>
                        <img width={136} src='images/home-images/family.png' alt='Rimac'></img>
                    </div>
                    <div className='divider'>
                            <Divider variant="middle" flexItem />
                        </div>
                    <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                    <div className='main-form__content--form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='main-form__content--group'>
                                <FormControl className='select-control'>
                                    <Select
                                    onChange={handleChange}
                                    IconComponent={KeyboardArrowDownIcon}
                                    id="demo-simple-select"
                                    value={'DNI'}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {
                                            documentTypes.length && documentTypes.map((type, key) => 
                                            <MenuItem key={key} value={type.type}>{type.value}</MenuItem>
                                            ) 
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-password-input"
                                        label="Nro. de documento"
                                        variant="filled"
                                        autoComplete="current-password"
                                        {...register("documentNumber", { required: {
                                            value: true,
                                            message: ERRORS_MESSAGES.errorDni
                                        }, minLength: { value: 8, message: "Digite el número de su documento correctamente" },
                                        maxLength: { value: 8, message: "Digite el número de su documento correctamente" },
                                        validate: isNumber })}
                                        />
                                </FormControl>
                            </div>
                            {errors.type}
                            { errors.documentNumber && <FormHelperText>{ errors.documentNumber.message }</FormHelperText>}
                            <div className='main-form__content--group'>
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Celular"
                                        variant="filled"
                                        autoComplete="current-password"
                                        {...register("cellPhoneNumber",  { required: {
                                            value: true,
                                            message: ERRORS_MESSAGES.cellPhoneNumber
                                        }, minLength: { value: 9, message: "Digite el número de su celular correctamente" },
                                        maxLength: { value: 9, message: "Digite el número de su celular correctamente" },
                                        validate: isNumber })}
                                        />
                                </FormControl>
                            </div>
                            { errors.cellPhoneNumber && <FormHelperText>{ errors.cellPhoneNumber.message }</FormHelperText>}
                            <div className='main-form__content--group-checkbox'>
                            <FormGroup>
                                <FormControlLabel  {...register("aceptPOP",  { required: true })} className='labelForm' control={<Checkbox />} label="Acepto lo Política de Privacidad" />
                                { errors.aceptPOP && <FormHelperText>{ ERRORS_MESSAGES.errorTaC }</FormHelperText>}
                                <FormControlLabel {...register("aceptPCC",  { required: true })} control={<Checkbox />} label="Acepto la Política Comunicaciones Comerciales" />
                            </FormGroup>
                            </div>
                            
                            { errors.aceptPCC && <FormHelperText>{ ERRORS_MESSAGES.errorTaC }</FormHelperText>}
                            <span className='terms-and-conditions'>Aplican Términos y Condiciones.</span>
                            <div className='content-button'>
                                <Button type='submit' size="large" variant="contained">
                                    Cotiza aquí
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form