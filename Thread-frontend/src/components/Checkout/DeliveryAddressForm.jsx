import Grid from '@mui/material/Grid'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const DeliveryAddressForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border border-amber-50 rounded-e-md shadow-md h-[30.5rem] overflow-scroll">
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border border-amber-50 rounded-s-md shadow-md p-5">
                        <form>
                            <Grid container spacing={3}>         
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='family-name'
                                    />
                                </Grid>                                
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label="Address"
                                        fullWidth
                                        autoComplete='street-address'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                 <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="City"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                 <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label="Zip/Postal Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                    sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} 
                                    size='large' 
                                    variant='contained'
                                    type='submit'
                                    >
                                        Deliver Here
                                    </Button>                                
                                </Grid>


                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm

