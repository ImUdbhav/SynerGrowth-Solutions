import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from './Button';
import emailjs from '@emailjs/browser';


// Define the validation schema using Yup
const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email format').required('Email is required'),
  Phone: yup.string().matches(/^[0-9]+$/, 'Phone must be a number').required('Phone is required'),
  Message: yup.string().required('Message is required')
});


const Form = () => {
 
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
 

  const onSubmit = (data) => {
    
    emailjs.send(serviceId, templateId, data, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
          alert('We will reach back soon!!!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="Name"
          {...register('Name')}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
        {errors.Name && <span className="text-red-500">{errors.Name.message}</span>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="Email"
          {...register('Email')}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
        {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="Phone"
          {...register('Phone')}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
        {errors.Phone && <span className="text-red-500">{errors.Phone.message}</span>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="Message"
          {...register('Message')}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
        {errors.Message && <span className="text-red-500">{errors.Message.message}</span>}
      </div>
      <Button
        text="Send Message"
        className="bg-[#0C2340] text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg"
        type="submit"
      />
    </form>
  );
};

export default Form;
