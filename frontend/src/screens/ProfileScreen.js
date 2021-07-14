import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success: successUpdate, error: errorUpdate, loading: loadingUpdate} = userUpdateProfile;

    const dispatch = useDispatch();
    useEffect(()=> {
        if(!user){
            dispatch({type: USER_UPDATE_PROFILE_RESET}); // we need to reset successUpdate when we open the profile screen second time
            dispatch(detailsUser(userInfo._id));
        }else{
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Şifreler eşleşmiyor');
        }else{
            dispatch(updateUserProfile({userId: user._id, name, email, password}));
        }
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Kullanıcı Profili</h1>
                </div>
                    {loading ? (
                    <LoadingBox></LoadingBox>
                    ) : error ? ( 
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) :
                    <>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && (<MessageBox variant="danger">{error}</MessageBox>)}
                    {successUpdate && <MessageBox variant="success">Kullanıcı Profili Güncellendi</MessageBox>}
                        <div>
                            <label htmlFor="name">Kullanıcı Adı</label>
                            <input id="name" type="text" placeholder="Kullanıcı Adı giriniz" value={name} onChange={(e)=> setName(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" placeholder="Email giriniz" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="password">Şifre</label>
                            <input id="password" type="text" placeholder="Şifre giriniz" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Şifreyi Onayla</label>
                            <input id="confirmPassword" type="text" placeholder="Şifreyi tekrardan giriniz" onChange={(e) => setconfirmPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <label></label>
                            <button className="block-green" type="submit">Güncelle</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}