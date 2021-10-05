import React, { useState } from 'react'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {Link} from "react-router-dom";
import {log,getImage} from '../../../../auth/AuthContext'
import {getRole} from '../../../../api/user'
import {check} from '../../../../auth/validateAuth'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const Login = () => {

    let history = useHistory();

    if(check() === false)
    {

        history.push("/dashboard");
    }


    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState('')


    const classes = useStyles()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {

            try{
                const v =   await log(userInfo.email, userInfo.password)
                console.log(v)
                localStorage.setItem("id",v.user.uid)
            } catch(e){
                console.error(e)
                setMessage(e.message)
                setLoading(false)
            }

            getRole(localStorage.getItem("id"))
                .then(response => {
                    localStorage.setItem("role",response.data.role)
                    localStorage.setItem("name",response.data.name)
                    localStorage.setItem("image",response.data.fileName)
                    console.log(getImage())
                    history.push('/dashboard')
                })
                .catch(e => {
                    console.error(e)
                    setMessage(e.message)
                    setLoading(false)
                });
        } catch (e) {
            console.error(e)
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-200"
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-3 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={userInfo.password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />


                                {message && (
                                    <p className="text-error">{message}</p>
                                )}

                                <div className="flex flex-wrap items-center mb-4">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                                <Link to="/passwordRest">
                                    <Button className="capitalize">
                                        Forgot Password?
                                    </Button>
                                </Link>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Login
