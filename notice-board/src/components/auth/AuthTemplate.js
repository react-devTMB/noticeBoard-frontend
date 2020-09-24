/**
 * 회원가입, 로그인의 레이아웃을 담당
 */

import React from 'react';
import Title from '../common/Title'

const textMap = {
    login_title: 'Welcome to TMB ~!!!!',
    register_title: 'Sign up',
    find_pwd: 'Find Password',
    new_pwd: 'new Password'
};



const AuthTemplate = ({children , text}) => {
    const title = textMap[text];
    return (
        <div className="mc_subWrap01">
            <div className="mc_authWrap01">
                <div className="mc_header01">
                    <div className="mc_logo_area"></div>
                       <Title text={title}/>
                </div>
                <div className="mc_contentWrap01">
                    { children }
                </div>
            </div>
        </div>
    )
}


export default AuthTemplate;