import React from 'react'
import Input from '../../../StyledComponent/Input/Input'
import style from './contact_form.module.scss'
import TextArea from '../../../StyledComponent/TextArea/TextArea'
import { phone_type } from '../../../LocalData/list'
import Button from '../../../StyledComponent/Button/Button'

const ContactForm = () => {
    return (
        <form className={`${style.contact_form} container`}>
            <div className={style.contact_form__userName}>
                <div className={style.contact_form__userName_name}>
                    <Input labelName='First Name' placeholder='First Name' type='text' />
                </div>
                <div className={style.contact_form__userName_surname}>
                    <Input labelName='Last Name' placeholder='Last Name' type='text' />
                </div>



            </div>
            <div className={style.contact_form__email}>
            <Input labelName='Email' placeholder='Email' type='email' />
            </div>
            <div className={style.contact_form__phone}>
            <Input labelName='Phone Number' placeholder='Phone Number' type='tel' select={phone_type} />
            </div>

            <div className={style.contact_form__textarea}>
                <TextArea labelName='Message' placeholder='Your Message' height='178px'/>
            </div>


            <Button type='blue' >Send Massage</Button>


        </form>
    )
}

export default ContactForm
