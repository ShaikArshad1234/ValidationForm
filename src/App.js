import React, { useState } from 'react';
import './App.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    address: '',
    pinCode: '',
    cityCode: '', // Corrected from `citycode` to `cityCode`
    state: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.pinCode) {
      errors.pinCode = 'Pin code is required';
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      errors.pinCode = 'Pin code must be 6 digits';
    }
    if (!formData.cityCode.trim()) errors.cityCode = 'City code is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      console.log(formData);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        dob: '',
        address: '',
        pinCode: '',
        cityCode: '',
        state: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <span>{errors.fullName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        {errors.mobile && <span>{errors.mobile}</span>}
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <span>{errors.dob}</span>}
      </div>
      <div>
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
        {errors.pinCode && <span>{errors.pinCode}</span>}
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="cityCode" value={formData.cityCode} onChange={handleChange} />
        {errors.cityCode && <span>{errors.cityCode}</span>}
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        {errors.state && <span>{errors.state}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
