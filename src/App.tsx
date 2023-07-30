import { MoonStar, SunMoon } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import './App.css';
import { domingo, nomes } from './integrantes';



function App() {
  const [selectedName, setSelectedName] = useState('');
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [day, setDay] = useState('domingo');
  
  const handleSelectChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedName(event.target.value);
  };
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode');
  };
  const toggleTable = (change: string) => {
    setDay(()=> change)
  }
  function showTable(){
  const dia = domingo
       return(<table>
          <thead>
            <tr >
              <th>Horário</th>
            {dia[0].map((evento, index) => (
                  <th key={"titulo"+index}>{evento.local}</th>
              ))
            } 
            </tr>
          </thead>
          <tbody>
            {
              dia.map((horario,index)=>(
                <tr>                
                <td  className='horario'>{7+index*2+':00'}</td>
                  {horario.map((evento)=>(
                  <td>
                  {(!selectedName || evento.pessoa1 === selectedName) && evento.pessoa1}
                  {(!selectedName || evento.pessoa1 === selectedName) && <br />}
                  {(!selectedName || evento.pessoa2 === selectedName) && evento.pessoa2}
                  {(!selectedName || evento.pessoa2 === selectedName) && <br />}
                  {(evento.pessoa3 && !selectedName || evento.pessoa3 === selectedName) && `${evento.pessoa3}`}
                  </td>
                  ))}
                 
                </tr>
              ))
            }
          
          </tbody>
        </table>);
  }
  return (
    <main> 
       <button className={isDarkMode ? 'theme dark-mode' : 'theme '} onClick={toggleDarkMode}>
        {isDarkMode ? <MoonStar size={30} />  : <SunMoon size={30} />}
      </button>
      <h1>Programação Transito EJC 2023</h1>

     
      <div className='features-area'>
        <div className='button-area'>
        <button className={day ==='sabado' ? 'dia selected' : 'dia'} onClick={()=>toggleTable('domingo')}>
          <h2>Tabela Domingo</h2>
        </button>
        
        </div>
        <select value={selectedName} onChange={handleSelectChange}>
          <option value={''}>Mostrar todas</option>
          {nomes.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>
      <div>
      
        {showTable() } 
      </div>
    </main>
  )
}

export default App
