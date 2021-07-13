import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen(){
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch update profile
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Kullanıcı Profili</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <>
                        <div>
                            <label htmlFor="name">Kullanıcı Adı</label>
                            <input id="name" type="text" placeholder="Kullanıcı Adı giriniz" value={user.name}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" placeholder="Email giriniz" value={user.email}></input>
                        </div>
                        <div>
                            <label htmlFor="password">Şifre</label>
                            <input id="password" type="text" placeholder="Şifre giriniz"></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Şifreyi Onayla</label>
                            <input id="confirmPassword" type="text" placeholder="Şifreyi tekrardan giriniz" ></input>
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