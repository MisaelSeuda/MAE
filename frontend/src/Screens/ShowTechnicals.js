import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../css/style.css";
import HomeScreen from './HomeScreen';

import { api } from "../api";

const ShowTechnicals = () => {

  const initialFormState = {
    nameTechnical: '',
    service: '',
    category: '',
    cep: '',
    address: ''
  }

  const [technicals, setTechnicals] = useState(initialFormState);

  const getData = async () => {

    api.get('/showTechnicals')
      .then((response) => {
        setTechnicals(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="font-show">
      <HomeScreen/>

      {
        technicals.length > 0 ? (
          technicals.map(tech => (
            <>
              <div className="showtable">
                <div className="table-nscc">
                    <div className='nscc-start'>
                      <strong>Nome técnico</strong>
                      <div>
                        {tech.nameTechnical}
                      </div>
                    </div>

                    <div className='nscc'>
                      <strong>Serviço</strong>
                      <div>
                        {tech.service}
                      </div>
                    </div>
            
                    <div className='nscc'>
                      <strong>Categoria</strong>
                      <div>
                        {tech.category}
                      </div>
                    </div>
                    
                    <div className='nscc-end'>
                      <strong>CEP</strong>
                      <div>
                        {tech.cep}
                      </div>
                    </div>
                    
                </div>

                <div class="table-a">
                  <div class="a">
                    <strong>Endereço</strong>
                  </div>
                  <div class="a-date">
                    {tech.address}
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <div>
            Nenhum técnico registrado
          </div>
        )}

    </div>
  )
}

export default ShowTechnicals;