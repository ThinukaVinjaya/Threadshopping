import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import Button from '@mui/material/Button'
import React, { useState } from 'react';

    const DeliveryAddressForm = () => {

       const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            stressAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")
        }

        console.log("address",address)
    }

    const styles = {
        container: {
            maxWidth: '800px',
            margin: 'auto',
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif',
        },
        formRow: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
        },
        formGroup: {
            flex: '1 1 45%',
            display: 'flex',
            flexDirection: 'column',
        },
        fullWidth: {
            flex: '1 1 100%',
        },
        label: {
            marginBottom: '5px',
            fontSize: '14px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            marginTop: '20px',
            padding: '12px 20px',
            backgroundColor: '#7b2cbf',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
        },
    };


        return (
            <div>
                <Grid container spacing={4}>
                    <Grid xs={12} lg={5} className="border border-amber-50 rounded-e-md shadow-md h-[30.5rem] overflow-scroll">
                        <div className='p-5 py-7 border-b border-b-amber-50 cursor-pointer'>
                            <AddressCard />
                            <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                        </div>
                    </Grid>
                    
                    <Grid>
                    <div style={styles.container}>
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formRow} >
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                            </div>

                            <div style={styles.formRow}>
                                <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
                                    <label style={styles.label}>Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                            </div>

                            <div style={styles.formRow}>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>State/Province/Region *</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                            </div>

                            <div style={styles.formRow}>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Zip / Postal Code *</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                            </div>

                            <button type="submit" style={styles.button}>DELIVER HERE</button>
                        </form>
                    </div>
                    </Grid>

                   
                </Grid>
            </div>
        )
    }

    export default DeliveryAddressForm

