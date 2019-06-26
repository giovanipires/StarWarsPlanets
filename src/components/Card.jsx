import React, { Component } from 'react';

class Card extends Component {

   render() {
      const planets = this.props.planets;
      // console.log(planets);
      
      let films = planets.films;
      // console.log(films);

      let numberOfFilms = 0;

         if(films!== undefined) {
         numberOfFilms = films.length;
         }
      
      
      

      return (
         <div className="card">
            <h2 className="card-header">{planets.name}</h2>
            <div className="card-body">
               <form>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label" htmlFor="population"><strong>Population:</strong></label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" value={planets.population} readOnly></input>
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label" htmlFor="climate"><strong>Climate:</strong></label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" value={planets.climate} readOnly></input>
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label" htmlFor="terrain"><strong>Terrain:</strong></label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" value={planets.terrain} readOnly></input>
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label" htmlFor="numberOfFilms"><strong>Featured in NFilms:</strong></label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" value={numberOfFilms} readOnly></input>
                     </div>
                  </div>
               </form>
            </div>
         </div>
               );
            }
         }

         export default Card;