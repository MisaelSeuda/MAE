import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';

import { api } from "../api";

const DeleteTechnical = () => {

  const initialFormState = {
    nameTechnical: '',
    service: '',
    category: '',
    cep: '',
    address: ''
  }

  const [technicals, setTechnicals] = useState(initialFormState);

  const deleteTechnical = (id) => {

    api.delete(`/technicalDelete/${id}`)
      .then((res) => {
        let dataTechnicals = [...technicals];
        let index = dataTechnicals.findIndex((item) => item._id === id);
        if (index !== -1) {
          dataTechnicals.splice(index, 1);
          setTechnicals(dataTechnicals);
        }
      })
      .catch((err) => console.error(err))

  }

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
  }, [technicals])

  return (
    <div className="font-delete">
      <HomeScreen/>
      
      {
        technicals.length > 0 ? (
          technicals.map(tech => (
            <div onClick={() => deleteTechnical(tech._id)}>
              <div className="deletetable">
                <div className="table-nscc">
                    <div className='Dnscc-start'>
                      <strong>Nome técnico</strong>
                      <div>
                        {tech.nameTechnical}
                      </div>
                    </div>

                    <div className='Dnscc'>
                      <strong>Serviço</strong>
                      <div>
                        {tech.service}
                      </div>
                    </div>
            
                    <div className='Dnscc'>
                      <strong>Categoria</strong>
                      <div>
                        {tech.category}
                      </div>
                    </div>
                    
                    <div className='Dnscc-end'>
                      <strong>CEP</strong>
                      <div>
                        {tech.cep}
                      </div>
                    </div>
                    
                </div>

                <div class="table-a">
                  <div class="Da">
                    <strong>Endereço</strong>
                  </div>
                  <div class="a-date">
                    {tech.address}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            Nenhum técnico registrado
          </div>
        )
      }
    </div>
  )
}

export default DeleteTechnical