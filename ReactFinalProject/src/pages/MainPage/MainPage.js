import React, { Component } from 'react';
import Slider from '../../components/slider/Slider';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

function MainPage () {
        return (
            <div className="main-page">
               <div  className='main-wrapper'>
               <div className="main-page__content">
                <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className='main-page_list'>
                        <Favorites/>
                        </div>


                       
                    
                    
                </div>
                <aside>
                
                        <div className="main-page__slider">
                           <Slider/>
                        </div>
                     
                </aside>

               </div>
                <div className="main-page__movies"><Movies /></div>
                
            </div>
        );
    
}
 
export default MainPage;