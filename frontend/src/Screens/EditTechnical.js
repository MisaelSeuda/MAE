import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';

import { api } from "../api";

const EditTechnical = () => {

  const initialFormState = {
    nameTechnical: '',
    service: '',
    category: '',
    cep: '',
    address: ''
  }

  const [technical, setTechnical] = useState(initialFormState);
  const [technicals, setTechnicals] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setTechnical({ ...technical, [name]: value })
  }

  const searchAddress = (cep) => {
    api.post(`/cep/${cep}`)
      .then(
        (response) => {
          setTechnical({ ...technical, ['address']: `${response.data.state}, ${response.data.city}, ${response.data.street}, ${response.data.neighborhood}` })
        }
      )
      .catch((err) => console.error(err))
  }

  const updateTechnicals = (tech) => {

    const upTechnical = tech;

    api.patch('/updateTech', upTechnical)
      .then((response) => {
        const arrObject = [...technical];
        const index = arrObject.findIndex((item) => item._id === response.data._id);
        if (index !== -1) {
          arrObject[index].nameTechnical = response.data.nameTechnical;
          arrObject[index].service = response.data.service;
          arrObject[index].category = response.data.category;
          arrObject[index].cep = response.data.cep;
          arrObject[index].address = response.data.address;
          setTechnicals(arrObject);
        }
      })
      .catch((err) => console.error(err))

    setTechnical(initialFormState);
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
    <div className="font-link">
      <HomeScreen/>
      <h3>Escolha um técnico</h3>

      {
        technicals.length > 0 ? (
          technicals.map(tech => (
            <div onClick={() => setTechnical(tech)}>
              <div className="edittable">
                <div className="table-nscc">
                    <div className='Enscc-start'>
                      <strong>Nome técnico</strong>
                      <div>
                        {tech.nameTechnical}
                      </div>
                    </div>

                    <div className='Enscc'>
                      <strong>Serviço</strong>
                      <div>
                        {tech.service}
                      </div>
                    </div>
            
                    <div className='Enscc'>
                      <strong>Categoria</strong>
                      <div>
                        {tech.category}
                      </div>
                    </div>
                    
                    <div className='Enscc-end'>
                      <strong>CEP</strong>
                      <div>
                        {tech.cep}
                      </div>
                    </div>
                    
                </div>

                <div class="table-a">
                  <div class="Ea">
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
        )}

      <form
        style={{
          padding: '5%',
        }}
        onSubmit={event => {
          event.preventDefault()
          if (!technical.nameTechnical || !technical.service || !technical.category || !technical.cep
            || !technical.address) return

        }}
      >
        <div className="table-date">
          <div className='center-table'>
              <label>Nome Técnico</label>
              <input type="text" name="nameTechnical" value={technical.nameTechnical} onChange={handleInputChange} />

              <label>Serviço</label>
              <input type="text" name="service" value={technical.service} onChange={handleInputChange} />

              <label>Categoria</label>
              <input type="text" name="category" value={technical.category} onChange={handleInputChange} />

              <label>CEP</label>
              <input type="text" name="cep" value={technical.cep} onChange={handleInputChange} />
              <button onClick={() => searchAddress(technical.cep)}>Procurar CEP</button>

              <label>Endereço</label>
              <input type="text" name="address" value={technical.address} onChange={handleInputChange} disabled />

              <button onClick= {() => updateTechnicals(technical)} >Atualizar técnico</button>
            </div>

            
        </div>


      </form>

      

    </div>
  )
}

export default EditTechnical;
