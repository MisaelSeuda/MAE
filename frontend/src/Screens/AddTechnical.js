import React, { useState } from 'react'
import HomeScreen from './HomeScreen';

import { api } from "../api";


const AddTechnical = () => {

  const initialFormState = {
    nameTechnical: '',
    service: '',
    category: '',
    cep: '',
    address: ''
  }

  const [technical, setTechnical] = useState(initialFormState);

  const AddTechnical = technical => {
    api.post('/technical', technical)
      .then(
        (response) => {
          setTechnical(initialFormState);
          if (technical != "") {
            alert('Os seus dados foram adicionados com sucesso');
          }
        })
      .catch((err) => console.error(err))
  }

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

  return (
    <div className="font-link">

      <HomeScreen />

      <form
        style={{
          padding: '5%',
        }}
        onSubmit={event => {
          event.preventDefault()
          if (!technical.nameTechnical || !technical.service || !technical.category || !technical.cep
            || !technical.address) return
          AddTechnical(technical);
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

            <button >Adicionar novo técnico</button>

          </div>
        </div>

      </form>
    </div>
  )
}

export default AddTechnical;
